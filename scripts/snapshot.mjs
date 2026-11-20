#!/usr/bin/env node
/**
 * Demo shop = a static snapshot of the REAL Jukto theme (owner, 20 Nov 2026: "demo and real theme
 * must match exactly"). The pages are rendered by a locally running Jukto (yarn build && yarn start)
 * from a store filled by scripts/seed-jukto.ts, saved as plain files, and published on Cloudflare
 * Pages. The published site never talks to Jukto: no API, no database. A small shim
 * (scripts/demo-shim.js) shows the demo bar and stops orders, logins and other writes.
 *
 *   node scripts/snapshot.mjs <demo> [--jukto ../jukto-code] [--url http://127.0.0.1:3000]
 *   → dist/<demo>/
 *
 * The store is found by host: demo-<demo>.localhost (works without /etc/hosts: the Host header is set).
 */
import { mkdir, writeFile, readFile, cp, rm, readdir, stat, copyFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import http from "node:http";

const args = process.argv.slice(2);
const demo = args[0];
if (!demo) throw new Error("usage: node scripts/snapshot.mjs <demo> [--jukto <dir>] [--url <url>]");
const opt = (k, d) => (args.includes(k) ? args[args.indexOf(k) + 1] : d);
const JUKTO = path.resolve(opt("--jukto", "../jukto-code"));
const BASE = opt("--url", "http://127.0.0.1:3000");
const HOST = `demo-${demo}.localhost:3000`;
const OUT = path.resolve("dist", demo);
const shop = (await import(path.resolve("src/data", `${demo}.ts`))).default;

const START = ["/", "/products", "/checkout", "/track", "/collections", "/about", "/contact", "/faq", "/privacy", "/terms", "/delivery-policy", "/auth/login", "/auth/register"];
const SKIP = /^\/(_next|uploads|api|admin|platform|brand-icon|app\.webmanifest|home\/|css\/|images\/|o\/|c\/|r\/|mo\/|lp\/)/;

/** GET with the store's Host header (fetch() would drop it). Returns a fetch-like response. */
function get(p) {
  const u = new URL(BASE + p);
  return new Promise((resolve, reject) => {
    const req = http.request({ host: u.hostname, port: u.port, path: u.pathname + u.search, headers: { Host: HOST } }, (res) => {
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => {
        const buf = Buffer.concat(chunks);
        resolve({ status: res.statusCode, ok: res.statusCode === 200, text: async () => buf.toString("utf8"), json: async () => JSON.parse(buf.toString("utf8")), arrayBuffer: async () => buf });
      });
    });
    req.on("error", reject);
    req.end();
  });
}

/** /products?category=Shoes → /products/c/shoes/ (the shim sends ?category= links there). */
export function fileFor(p) {
  const u = new URL(p, "http://x");
  let dir = u.pathname.replace(/\/$/, "");
  const cat = u.searchParams.get("category");
  if (u.pathname.replace(/\/$/, "") === "/products" && cat) dir = `/products/c/${encodeURIComponent(cat.toLowerCase()).replace(/%/g, "_")}`;
  return path.join(OUT, dir, "index.html");
}

await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });

// 1. Pages (breadth-first over internal links; query strings only for product categories).
const seen = new Set();
const queue = [...START];
const assets = new Set();
let pages = 0;
while (queue.length) {
  const p = queue.shift();
  if (seen.has(p)) continue;
  seen.add(p);
  const r = await get(p);
  if (r.status !== 200) {
    console.log(`  · ${r.status} ${p}`);
    continue;
  }
  const html = await r.text();
  const file = fileFor(p);
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, inject(html));
  pages++;
  for (const m of html.matchAll(/(?:href|src)="(\/[^"#]*)"/g)) {
    const link = m[1].replace(/&amp;/g, "&");
    const u = new URL(link, "http://x");
    if (/\.(png|jpe?g|webp|svg|ico|css|js|webmanifest|json|ttf|woff2?)$/.test(u.pathname) || u.pathname.startsWith("/brand-icon") || u.pathname === "/app.webmanifest") {
      if (!u.pathname.startsWith("/_next/") && !u.pathname.startsWith("/uploads/")) assets.add(u.pathname);
      continue;
    }
    if (SKIP.test(u.pathname)) continue;
    const isCat = u.pathname === "/products" && u.searchParams.get("category") && [...u.searchParams.keys()].length === 1;
    const clean = isCat ? `/products?category=${encodeURIComponent(u.searchParams.get("category"))}` : u.pathname;
    if (!seen.has(clean)) queue.push(clean);
  }
}
console.log(`✓ ${pages} pages`);

// 2. Next.js build output, public files the pages use, dynamic icons/manifest.
await cp(path.join(JUKTO, ".next/static"), path.join(OUT, "_next/static"), { recursive: true });
for (const a of assets) {
  const local = path.join(JUKTO, "public", a);
  const dest = path.join(OUT, a);
  await mkdir(path.dirname(dest), { recursive: true });
  if (existsSync(local)) await copyFile(local, dest);
  else {
    const r = await get(a);
    if (r.ok) await writeFile(dest, Buffer.from(await r.arrayBuffer()));
  }
}
for (const extra of ["css/swiper"]) if (existsSync(path.join(JUKTO, "public", extra))) await cp(path.join(JUKTO, "public", extra), path.join(OUT, extra), { recursive: true });

// next/image URLs (/_next/image?url=…) cannot be served by a static host; the only one the
// storefront builds in the browser is the app icon of the install banner, so that file answers them.
{
  const icon = await get("/brand-icon/192.png");
  if (icon.ok) await writeFile(path.join(OUT, "_next/image"), Buffer.from(await icon.arrayBuffer()));
}

// 3. Fonts referenced by absolute file paths (only when the build ran offline with a font mock).
for (const f of await walk(path.join(OUT, "_next/static/css"))) {
  let css = await readFile(f, "utf8");
  const local = [...css.matchAll(/url\((\/(?!_next)[^)]+\.(?:ttf|woff2?))\)/g)].map((m) => m[1]);
  if (!local.length) continue;
  await mkdir(path.join(OUT, "_fonts"), { recursive: true });
  for (const src of new Set(local)) {
    await copyFile(src, path.join(OUT, "_fonts", path.basename(src)));
    css = css.split(src).join(`/_fonts/${path.basename(src)}`);
  }
  await writeFile(f, css);
}

// 4. Uploaded pictures of this store (+ the ".blur" copies the image component asks for).
const storeId = await storeIdFor(`demo-${demo}`);
const up = path.join(JUKTO, "uploads", storeId);
if (existsSync(up)) {
  await cp(up, path.join(OUT, "uploads"), { recursive: true });
  for (const f of await walk(path.join(OUT, "uploads"))) {
    if (f.endsWith(".webp") && !f.endsWith(".blur.webp")) await copyFile(f, f.replace(/\.webp$/, ".blur.webp"));
  }
}

// 5. The shim and Cloudflare Pages settings.
const shim = (await readFile(path.resolve("scripts/demo-shim.js"), "utf8"))
  .replace("__DEMO_CONFIG__", JSON.stringify({ lang: shop.lang === "en" ? "en" : "bn", theme: shop.themeName, signup: "https://jukto.bd/" }));
await writeFile(path.join(OUT, "demo-shim.js"), shim);
await writeFile(path.join(OUT, "_headers"), "/_next/static/*\n  Cache-Control: public, max-age=31536000, immutable\n/uploads/*\n  Cache-Control: public, max-age=86400\n");
await writeFile(path.join(OUT, "404.html"), await readFile(path.join(OUT, "index.html")));
console.log(`✓ dist/${demo}`);

function inject(html) {
  // The shim must run before Next.js starts (it wraps fetch), so it goes first in <head>.
  return html.replace("<head>", '<head><script src="/demo-shim.js"></script>');
}

async function walk(dir) {
  if (!existsSync(dir)) return [];
  const out = [];
  for (const e of await readdir(dir)) {
    const f = path.join(dir, e);
    if ((await stat(f)).isDirectory()) out.push(...(await walk(f)));
    else out.push(f);
  }
  return out;
}

async function storeIdFor(slug) {
  const r = await get("/api/internal/store-lookup?host=" + encodeURIComponent(HOST));
  if (r.ok) {
    const j = await r.json().catch(() => null);
    if (j?.id || j?.storeId) return j.id || j.storeId;
  }
  // Fallback: the uploads folder that holds demo/ pictures of this slug (seed-jukto.ts writes uploads/<id>/demo/.marker).
  for (const id of await readdir(path.join(JUKTO, "uploads"))) {
    const marker = path.join(JUKTO, "uploads", id, "demo", ".slug");
    if (existsSync(marker) && (await readFile(marker, "utf8")).trim() === slug) return id;
  }
  throw new Error(`store ${slug} not found — run scripts/seed-jukto.ts first`);
}
