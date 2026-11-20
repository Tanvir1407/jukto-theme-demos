# Jukto theme demo shops

> **বাংলায়:** প্রতিটা যুক্ত থিমের জন্য একটা করে নমুনা দোকান, যেমন `demo-organic.jukto.bd`। **২০ নভেম্বর ২০২৬ থেকে ডেমো মানে আসল থিমের হুবহু কপি:** লোকাল কম্পিউটারে যুক্ত চালিয়ে, `src/data/` থেকে নমুনা পণ্য দিয়ে একটা দোকান বানিয়ে, সেই দোকানের পাতাগুলো স্থির HTML হিসেবে সেভ করা হয় (snapshot)। প্রকাশিত ডেমো যুক্ত সার্ভার, ডাটাবেস বা API-র সাথে **একদম যুক্ত না**। Cloudflare Pages থেকে শুধু ফাইল হিসেবে চলে। কার্ট ব্রাউজারেই থাকে। অর্ডার, লগইন বা অন্য কিছু জমা দিতে গেলে কিছু পাঠানো হয় না, শুধু "এটি ডেমো দোকান" বার্তা দেখায়। থিম বদলালে স্ন্যাপশট আবার নিলেই ডেমো আসল থিমের সাথে মিলে যায়।

Spec: `jukto-code/docx/saas-migration/THEMES_V2_PLAN.md` §5 (E167–E168).

## Demos

| Demo | Jukto theme | Language | Address |
|---|---|---|---|
| `organic` | `grocery` (Organic, E166) | Bangla | demo-organic.jukto.bd |
| `fashion` | `fashion` (Fashion) | Bangla | demo-fashion.jukto.bd |
| `mensfashion` | `mensFashion` (Men's fashion) | English | demo-mensfashion.jukto.bd |
| `generic` | `general` (Generic) | English | demo-generic.jukto.bd |
| `jewelry` | `jewelry` (Jewellery, E146) | English | demo-jewelry.jukto.bd |
| `craft` | `craft` (কারুশিল্প, E144) | Bangla | demo-craft.jukto.bd |

## How a demo is made (snapshot of the real theme)

Needs a **local** Jukto (never production): `jukto-code` next to this folder, its `.env` pointing at a local database.

```
# 1. Jukto, production build, running on :3000
cd ../jukto-code && yarn build && yarn start          # (another terminal)

# 2. Fill the local database with the demo stores (deletes and recreates the demo-* stores only)
cd ../jukto-code && npx tsx ../jukto-theme-demos/scripts/seed-jukto.ts organic,fashion,mensfashion,generic,jewelry,craft
#    wait one minute (Jukto caches the host → store lookup for 60 s)

# 3. Save each store as static files → dist/<demo>/
cd ../jukto-theme-demos
node scripts/snapshot.mjs organic          # --jukto ../jukto-code --url http://127.0.0.1:3000 are the defaults

# 4. Theme page pictures → screenshots/<theme id>-{desktop,mobile,full}.jpg
npx playwright install chromium            # once
node scripts/screenshots.mjs organic grocery
```

Copy the pictures to `jukto-code/public/themes/` and bump `PREVIEW_VERSION` in `src/themes/registry.ts`.

What the snapshot does:
- Crawls the store (home, product list, every product, category pages, checkout, track, policy pages, login) with the store's Host header and saves each page as `index.html`. `/products?category=X` is saved as `/products/c/x/`.
- Copies Jukto's `.next/static`, the public files the pages use, the store's uploaded pictures, and the app icon.
- Adds `scripts/demo-shim.js` as the first script of every page: demo bar at the bottom (in the store's language), no request that writes anything ever leaves the browser (server actions, POST, beacons); a press on a button that would write shows the "this is a demo shop" dialog.

## Content

`src/data/<demo>.ts` — shop name, categories, products, banners, collections, promises, Unsplash photo ids. `npm run images -- <demo>` downloads the photos and writes WebP files to `public/img/<demo>/` with `CREDITS.md`; `seed-jukto.ts` uploads them into the local store.

Rules: invented shop names only (never a real brand's name, logo or photo — zoom in: watches and perfume bottles almost always carry a brand, so the Generic demo sells wallets); no fake reviews or customer quotes; the demo bar stays on every page; when a Jukto theme's look changes, the same E-step takes a new snapshot.

## Publish (Cloudflare Pages, once per demo)

1. Cloudflare → Workers & Pages → Create → Pages → **Upload assets** → upload the folder `dist/<demo>/` (no build step on Cloudflare: the snapshot is made on your machine).
2. Custom domains → `demo-<demo>.jukto.bd`. Cloudflare adds the DNS record itself; it wins over the `*` tunnel record, so every real shop still goes to the Jukto server.
3. To update: take a new snapshot and upload the folder again (or `npx wrangler pages deploy dist/<demo> --project-name demo-<demo>`).
4. Jukto signup does not accept shop names starting with `demo-` (reserved for these demos).

## Old hand-made demos

`src/pages`, `src/components`, `src/layouts`, `src/lib/{theme,shop,i18n,format}.ts` and `scripts/build-all.mjs` are the first, hand-made Astro demos (E167–E168 parts 1–3). They did not match the real themes closely enough and are no longer published; `npm run build:astro -- <demo>` still builds them into `dist-astro/`. Kept until the owner decides to remove them.
