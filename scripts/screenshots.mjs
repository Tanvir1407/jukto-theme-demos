// Theme preview pictures for the Jukto theme page, taken from a built demo:
//   <theme>-desktop.jpg (1200×900), <theme>-mobile.jpg (390×844), <theme>-full.jpg (whole home page at 1440).
// Usage: node scripts/snapshot.mjs organic && node scripts/screenshots.mjs organic grocery
//   arg 1 = demo theme (dist folder), arg 2 = the Jukto theme id used in the file names.
// Copy the files from screenshots/ to jukto-code/public/themes/ by hand.
// Needs a browser: `npx playwright install chromium`, or set CHROME_PATH.
import { createServer } from "node:http";
import { readFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const demo = process.argv[2] || "organic";
const id = process.argv[3] || demo;
const root = new URL(`../dist/${demo}/`, import.meta.url).pathname;
const out = new URL("../screenshots/", import.meta.url).pathname;
await mkdir(out, { recursive: true });

const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".webp": "image/webp", ".svg": "image/svg+xml", ".png": "image/png", ".ttf": "font/ttf", ".woff2": "font/woff2", ".json": "application/json" };
const server = createServer(async (req, res) => {
  let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
  if (p.endsWith("/")) p += "index.html";
  try {
    const body = await readFile(path.join(root, p));
    res.writeHead(200, { "content-type": TYPES[path.extname(p)] || "application/octet-stream" }).end(body);
  } catch {
    res.writeHead(404).end();
  }
}).listen(0);
const url = `http://localhost:${server.address().port}/`;

const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || undefined, args: ["--no-sandbox"] });

async function shot(viewport, mobile, file, full = false) {
  const ctx = await browser.newContext({ viewport, deviceScaleFactor: 1, isMobile: mobile, hasTouch: mobile });
  const page = await ctx.newPage();
  // The store's cookie notice is not part of the theme picture.
  await page.addInitScript(() => { try { localStorage.setItem("cookie_consent", "accepted"); localStorage.setItem("pwa_banner_dismissed_at", String(Date.now())); } catch {} });
  await page.goto(url, { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);
  // Load every lazy picture, freeze the slider, hide the toast.
  await page.addStyleTag({ content: "*{scroll-behavior:auto!important} #demo-toast,[data-demo-bar],[data-sf-cookie],nextjs-portal{display:none!important}" });
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); }
    window.scrollTo(0, 0);
    document.querySelectorAll("img").forEach((i) => (i.loading = "eager"));
  });
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(400);
  // Stop the hero slider on its first slide so the picture never catches it mid-move.
  await page.evaluate(() => document.querySelectorAll(".swiper").forEach((el) => { const sw = el.swiper; if (sw) { sw.autoplay?.stop(); sw.slideToLoop ? sw.slideToLoop(0, 0) : sw.slideTo(0, 0); } }));
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(out, file), type: "jpeg", quality: 80, fullPage: full });
  await ctx.close();
  console.log(`  ✓ ${file}`);
}

await shot({ width: 1200, height: 900 }, false, `${id}-desktop.jpg`);
await shot({ width: 390, height: 844 }, true, `${id}-mobile.jpg`);
await shot({ width: 1440, height: 900 }, false, `${id}-full.jpg`, true);
await browser.close();
server.close();
