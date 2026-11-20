import { LANG } from "./i18n";

const BN = "০১২৩৪৫৬৭৮৯";

/** 1250 → "১,২৫০" in a Bangla demo, "1,250" in an English one (Bangla digits, Indian grouping is not used by Jukto either). */
export function bn(n: number | string): string {
  const s = typeof n === "number" ? n.toLocaleString("en-US") : n;
  return LANG === "en" ? s : s.replace(/\d/g, (d) => BN[Number(d)]);
}

export const taka = (n: number) => `৳${bn(Math.round(n))}`;

export function img(theme: string, key: string, size: 400 | 800 | 1600 = 400): string {
  return `/img/${theme}/${key}-${size}.webp`;
}

export function offPercent(price: number, was?: number): number {
  return was && was > price ? Math.round(((was - price) / was) * 100) : 0;
}
