import organic from "../data/organic";
import fashion from "../data/fashion";
import mensfashion from "../data/mensfashion";
import generic from "../data/generic";
import jewelry from "../data/jewelry";
import craft from "../data/craft";
import type { DemoShop } from "./types";
import { THEMES } from "./theme";

const SHOPS: Record<string, DemoShop> = { organic, fashion, mensfashion, generic, jewelry, craft };

export const THEME_ID: string = import.meta.env.DEMO_THEME || "organic";
export const shop: DemoShop = SHOPS[THEME_ID];
export const theme = THEMES[THEME_ID];
if (!shop || !theme) throw new Error(`Unknown demo theme "${THEME_ID}"`);

export const categoryName = (id: string) => shop.categories.find((c) => c.id === id)?.name ?? id;
export const productsIn = (id: string) => shop.products.filter((p) => p.category === id);
/** Largest file the image script made for this key (banners 1600, everything else 800). */
export const bigSize = (key: string): 800 | 1600 => (shop.images[key]?.kind === "banner" ? 1600 : 800);
/** Where the "open a shop like this" links go. */
export const JUKTO_URL = "https://jukto.bd/";

/** "products/?x" → "/products/?x" (data hrefs are written without the leading slash). */
export const href = (h: string) => (h.startsWith("/") || h.startsWith("http") ? h : `/${h}`);
