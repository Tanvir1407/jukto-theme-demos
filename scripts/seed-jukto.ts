/**
 * Fills a LOCAL Jukto database with one store per demo shop (slug demo-<demo>) from src/data/<demo>.ts,
 * so scripts/snapshot.mjs can save the real theme as the demo. Never run against production:
 * it deletes and recreates the demo-* stores.
 *
 *   cd ../jukto-code && npx tsx ../jukto-theme-demos/scripts/seed-jukto.ts organic,fashion
 *
 * Run from the jukto-code folder: its .env, tsconfig paths and node_modules are used.
 */
import { copyFileSync, mkdirSync, existsSync, writeFileSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const J = process.cwd();
const DEMOS = resolve(dirname(fileURLToPath(import.meta.url)), "..");
let prisma: any, runWithStore: any, startStoreSubscription: any;
const THEME: Record<string, string> = { organic: "grocery", fashion: "fashion", mensfashion: "mensFashion", generic: "general", jewelry: "jewelry", craft: "craft" };
const BIZ: Record<string, string> = { organic: "FOOD", fashion: "FASHION", mensfashion: "FASHION", generic: "GENERAL", jewelry: "JEWELRY", craft: "GENERAL" };
const ICONS = ["truck", "shield", "return", "card"];
const toEn = (s: string) => s.replace(/[০-৯]/g, (d) => String("০১২৩৪৫৬৭৮৯".indexOf(d)));

async function seed(demo: string) {
  if (process.env.NODE_ENV === "production") throw new Error("seed-jukto refuses to run in production");
  const shop = (await import(`${DEMOS}/src/data/${demo}.ts`)).default;
  const slug = `demo-${demo}`;
  const old = await prisma.store.findUnique({ where: { slug } });
  if (old) await prisma.store.delete({ where: { id: old.id } }).catch(() => {});
  const lang = shop.lang === "en" ? "en" : "bn";
  const store = await prisma.store.create({ data: { slug, name: shop.name, status: "ACTIVE", businessType: BIZ[demo], language: lang, isLive: true } });
  await startStoreSubscription(store.id);
  const up = join(J, "uploads", store.id, "demo");
  mkdirSync(up, { recursive: true });
  writeFileSync(join(up, ".slug"), slug); // lets snapshot.mjs find this store's pictures
  const file = (key: string) => {
    const kind = shop.images[key]?.kind;
    const size = kind === "banner" ? 1600 : 800;
    const src = join(DEMOS, "public/img", demo, `${key}-${size}.webp`);
    if (!existsSync(src)) throw new Error(`missing ${src}`);
    copyFileSync(src, join(up, `${key}.webp`));
    return `/uploads/demo/${key}.webp`;
  };
  await runWithStore(store.id, async () => {
    const wh = await prisma.warehouse.create({ data: { code: "MAIN", name: "Main", address: "", isActive: true } });
    await prisma.storeProfile.create({ data: { storeId: store.id, name: shop.name, businessType: BIZ[demo], language: lang, digits: lang, phone: toEn(shop.phone) } });
    await prisma.deliverySetting.create({ data: { storeId: store.id, insideDhaka: shop.delivery.inside, outsideDhaka: shop.delivery.outside } });
    await prisma.storeTheme.create({ data: { storeId: store.id, themeId: THEME[demo], settings: {} } });
    if (shop.announcement) await prisma.announcementBar.create({ data: { storeId: store.id, text: shop.announcement, active: true } });
    await prisma.footerConfig.create({
      data: {
        storeId: store.id, aboutText: shop.tagline, contactPhone: toEn(shop.phone),
        trustBadges: (shop.highlights || []).map((h: any, i: number) => ({ id: `b${i}`, icon: ICONS[i % 4], title: h.title, description: h.sub })),
        showTrustBadges: (shop.highlights || []).length > 0,
      },
    });
    const cats: Record<string, string> = {};
    for (const [i, c] of shop.categories.entries()) {
      const row = await prisma.category.create({ data: { name: c.name, image: file(c.img), sortOrder: i + 1 } });
      cats[c.id] = row.id;
    }
    for (const [i, s] of shop.slides.entries()) {
      await prisma.heroSlide.create({ data: { image: file(s.img), link: "/" + s.href.replace(/^\//, "").replace(/category=([a-z-]+)/, (_m: string, id: string) => `category=${encodeURIComponent(shop.categories.find((c: any) => c.id === id)?.name ?? id)}`), label: s.badge ?? null, title: s.title, subtitle: s.text, buttonText: s.cta, linkMode: "BUTTON", sortOrder: i } });
    }
    let campaign: any = null;
    if (shop.campaign) {
      campaign = await prisma.discount.create({ data: { name: shop.campaign.title, discountType: "PERCENTAGE", value: 10, active: true, startsAt: new Date(Date.now() - 3600e3), endsAt: new Date(Date.now() + shop.campaign.endsInHours * 3600e3), showCountdown: true, showBanner: false } });
    }
    const prodIds: Record<string, string> = {};
    for (const [i, p] of shop.products.entries()) {
      const o = p.options[0];
      let discountId: string | null = null;
      if (p.flash && campaign) discountId = campaign.id;
      else if (o.was && o.was > o.price) {
        const d = await prisma.discount.create({ data: { name: `${p.slug} sale`, discountType: "FLAT", value: o.was - o.price, active: true } });
        discountId = d.id;
      }
      const prod = await prisma.product.create({
        data: {
          name: p.name, slug: p.slug, description: p.text, categoryId: cats[p.category], isPublished: true, isFeatured: !!p.best, featuredOrder: i,
          trackStock: false, discountId, customBadgeText: p.badge ?? null,
          specifications: p.spec ? [{ name: lang === "en" ? "Gold" : "সোনা", value: p.spec }] : [],
          createdAt: new Date(Date.now() - (shop.products.length - i) * 60000),
          mediaAssets: { create: [{ url: file(p.img), sortOrder: 0, altText: p.name }] },
        },
      });
      prodIds[p.slug] = prod.id;
      for (const [j, opt] of p.options.entries()) {
        const base = opt.was && opt.was > opt.price && !(p.flash && campaign) ? opt.was : opt.price;
        await prisma.productVariant.create({
          data: { productId: prod.id, size: opt.label, color: "Default", sku: `${p.slug}-${j}`.slice(0, 60), order: j, optionValues: {},
            pricingMatrix: { create: { basePrice: base } },
            stocks: { create: { warehouseId: wh.id, physicalQuantity: 50, availableQuantity: 50, reservedQuantity: 0, version: 0 } } },
        });
      }
    }
    const cols = [...(shop.collections || [])];
    if (shop.story) cols.unshift({ title: shop.story.title, img: shop.story.img, href: shop.story.href, note: shop.story.text, story: true });
    for (const [i, c] of cols.entries()) {
      const catId = (c.href.match(/category=([a-z-]+)/) || [])[1];
      const ps = shop.products.filter((p: any) => !catId || p.category === catId).slice(0, 8);
      await prisma.collection.create({
        data: { name: c.title, slug: `col-${i}`, description: c.story ? c.note : c.note ?? null, image: file(c.img), showOnHome: true, isPublished: true, sortOrder: i,
          products: { create: ps.map((p: any, k: number) => ({ productId: prodIds[p.slug], sortOrder: k })) } },
      });
    }
  });
  console.log(`✓ ${slug} (${THEME[demo]}) → http://${slug}.localhost:3000`);
}

(async () => {
  await import(join(J, "node_modules/dotenv/config.js"));
  prisma = (await import(join(J, "src/lib/prisma"))).default;
  ({ runWithStore } = await import(join(J, "src/lib/tenant/context")));
  ({ startStoreSubscription } = await import(join(J, "src/lib/platform/plans")));
  const list = (process.argv[2] || "organic").split(",");
  for (const d of list) await seed(d);
  await prisma.$disconnect();
})();
