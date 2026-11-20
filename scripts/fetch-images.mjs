// Downloads the demo photos from Unsplash (free to use under the Unsplash License) and writes
// optimised WebP files to public/img/<theme>/<key>-<width>.webp. Run: npm run images -- organic
// Re-running skips files that already exist. Photo ids live in src/data/<theme>.ts (images).
import { mkdir, readFile, writeFile, access } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const theme = process.argv[2] || "organic";
const src = await readFile(new URL(`../src/data/${theme}.ts`, import.meta.url), "utf8");

// Read the images block without executing TypeScript: "key": { id: "...", kind: "..."
const images = [...src.matchAll(/"([a-z0-9-]+)":\s*\{\s*id:\s*"([^"]+)",\s*kind:\s*"(square|banner|portrait)"/g)].map(
  ([, key, id, kind]) => ({ key, id, kind }),
);
if (images.length === 0) throw new Error(`No images found in src/data/${theme}.ts`);

const SIZES = { square: [400, 800], banner: [800, 1600], portrait: [400, 800] };
const outDir = new URL(`../public/img/${theme}/`, import.meta.url);
await mkdir(outDir, { recursive: true });

const exists = (p) => access(p).then(() => true, () => false);
const credits = [];
let done = 0;

for (const { key, id, kind } of images) {
  const widths = SIZES[kind];
  const targets = widths.map((w) => path.join(outDir.pathname, `${key}-${w}.webp`));
  credits.push(`- ${key}: https://unsplash.com/photos/${id.replace(/^photo-/, "")} (images.unsplash.com/${id})`);
  if ((await Promise.all(targets.map(exists))).every(Boolean)) continue;

  const max = widths[widths.length - 1];
  // square 1:1, banner 16:9, portrait 2:3 (Fashion's tall cards). Faces/people: crop=faces keeps them in frame.
  const ratio = { square: 1, banner: 0.5625, portrait: 1.5 }[kind];
  const url = `https://images.unsplash.com/${id}?w=${max}&h=${Math.round(max * ratio)}&fit=crop&crop=faces,entropy&q=85&fm=jpg`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${key}: ${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  for (let i = 0; i < widths.length; i++) {
    await sharp(buf).resize({ width: widths[i] }).webp({ quality: 74, effort: 5 }).toFile(targets[i]);
  }
  done++;
  console.log(`  ✓ ${key}`);
}

await writeFile(
  path.join(outDir.pathname, "CREDITS.md"),
  `# Photo credits — ${theme} demo\n\nAll photos from Unsplash, free to use under the Unsplash License (https://unsplash.com/license).\n\n${credits.join("\n")}\n`,
);
console.log(`${theme}: ${done} downloaded, ${images.length - done} already there.`);
