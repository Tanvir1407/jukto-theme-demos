/**
 * Colours of each demo, copied by hand from the Jukto theme registry (no import from Jukto —
 * the demos are a separate project). When a Jukto theme's look changes, update it here too.
 */
type Palette = Record<number, string>;
const SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

const rgb = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
const hex = (c: number[]) => "#" + c.map((v) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, "0")).join("");
const mix = (a: string, b: string, t: number) => hex(rgb(a).map((v, i) => v + (rgb(b)[i] - v) * t));

/** Same rule as Jukto's paletteFrom: the colour becomes shade 800. */
export function paletteFrom(h: string): Palette {
  const light: Record<number, number> = { 50: 0.94, 100: 0.88, 200: 0.74, 300: 0.58, 400: 0.4, 500: 0.24, 600: 0.12, 700: 0.05 };
  const out: Palette = {};
  for (const s of SHADES) out[s] = s in light ? mix(h, "#ffffff", light[s]) : s === 800 ? h : mix(h, "#000000", s === 900 ? 0.2 : 0.45);
  return out;
}

export interface DemoBlocks {
  header: "searchFirst" | "centered" | "classic";
  top: "categoryRail" | "full" | "boxed" | "split";
  card: "grocery" | "tall" | "standard" | "luxe";
  categories: "photoTiles" | "tiles" | "circles" | "arch";
  sections: "panels" | "plain";
  footer: "dark" | "light";
  /** "sharp" = square corners on cards and buttons (Fashion), "round" = rounded (Organic). */
  radius: "sharp" | "round";
}

export interface DemoTheme {
  blocks: DemoBlocks;
  brand: Palette;
  ink: Palette;
  action: Palette;
  surface: string;
  heading: string;
  font: string;
  fontUrl: string;
  /** Serif for headings and the shop name (Jewellery, Craft). Without it headings use `font`. */
  displayFont?: string;
  /** "dark" = dark page (Jewellery): the ink scale runs from dark (ink-0) to light (ink-950). */
  scheme?: "light" | "dark";
  /** Soft paper grain on the page (Craft), CSS only. */
  paper?: boolean;
}

const WARM_INK: Palette = {
  0: "#FFFFFF", 50: "#FAFAF9", 100: "#F7F2F1", 200: "#EBE4E3", 300: "#DBD2D1", 400: "#B2A8A7",
  500: "#918685", 600: "#736968", 700: "#554E4D", 800: "#393433", 900: "#252020", 950: "#151211",
};
const GOLD: Palette = {
  50: "#FFFAEB", 100: "#FFF3D2", 200: "#FFE8A8", 300: "#FFDC74", 400: "#FFD335", 500: "#FFCC00",
  600: "#E4B400", 700: "#B58C00", 800: "#8F7000", 900: "#6C5505", 950: "#4A3A03",
};

const COOL_INK: Palette = {
  0: "#FFFFFF", 50: "#F8FAF9", 100: "#F1F5F3", 200: "#E2E8E5", 300: "#CBD5D0", 400: "#94A39B",
  500: "#64746C", 600: "#4B5A52", 700: "#36433C", 800: "#232D28", 900: "#151C18", 950: "#0B100D",
};

export const THEMES: Record<string, DemoTheme> = {
  organic: {
    blocks: { header: "searchFirst", top: "categoryRail", card: "grocery", categories: "photoTiles", sections: "panels", footer: "dark", radius: "round" },
    brand: paletteFrom("#166534"),
    ink: COOL_INK,
    action: paletteFrom("#B45309"),
    surface: "#F2F7F2",
    heading: "#0F2418",
    font: "'Hind Siliguri', system-ui, sans-serif",
    fontUrl: "https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap",
  },
  // Jukto "fashion" (Women's fashion, E138, D15 black & charcoal): centered header, full hero, tall cards, sharp.
  fashion: {
    blocks: { header: "centered", top: "full", card: "tall", categories: "tiles", sections: "plain", footer: "light", radius: "sharp" },
    brand: {
      50: "#F9FAFB", 100: "#F3F4F6", 200: "#E5E7EB", 300: "#D1D5DB", 400: "#9CA3AF", 500: "#6B7280",
      600: "#4B5563", 700: "#374151", 800: "#000000", 900: "#18181B", 950: "#09090B",
    },
    ink: WARM_INK,
    action: GOLD,
    surface: "#FAFAFA",
    heading: "#18181B",
    font: "'Hind Siliguri', system-ui, sans-serif",
    fontUrl: "https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap",
  },
  // Jukto "mensFashion" (E139, navy & stone): same blocks as Fashion, own colours.
  mensfashion: {
    blocks: { header: "centered", top: "full", card: "tall", categories: "tiles", sections: "plain", footer: "light", radius: "sharp" },
    brand: paletteFrom("#1E3A5F"),
    ink: WARM_INK,
    action: paletteFrom("#B45309"),
    surface: "#F7F7F5",
    heading: "#0F1B2D",
    // English demo (Jukto's mensFashion and general themes use Inter).
    font: "'Inter', system-ui, sans-serif",
    fontUrl: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
  },
  // Jukto "general" (Generic): classic header, boxed hero, standard 4:5 card, circle categories, soft corners.
  generic: {
    blocks: { header: "classic", top: "boxed", card: "standard", categories: "circles", sections: "plain", footer: "light", radius: "round" },
    brand: {
      50: "#F5F5F5", 100: "#E5E5E5", 200: "#D4D4D4", 300: "#A3A3A3", 400: "#737373", 500: "#525252",
      600: "#404040", 700: "#262626", 800: "#000000", 900: "#1A1A1A", 950: "#0A0A0A",
    },
    ink: WARM_INK,
    action: GOLD,
    surface: "#FAFAFA",
    heading: "#141414",
    // English demo (Jukto's mensFashion and general themes use Inter).
    font: "'Inter', system-ui, sans-serif",
    fontUrl: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
  },
  // Jukto "jewelry" (E146, owner's canvas board "জুয়েলারি" 5 Nov 2026): dark page, champagne gold,
  // serif headings, split hero, arch categories, luxe cards. English demo.
  jewelry: {
    blocks: { header: "centered", top: "split", card: "luxe", categories: "arch", sections: "plain", footer: "light", radius: "sharp" },
    brand: {
      50: "#1F1B13", 100: "#2A2418", 200: "#4A3F28", 300: "#7A6740", 400: "#A68D58", 500: "#B89B60",
      600: "#C2A265", 700: "#C8A96A", 800: "#C8A96A", 900: "#D6BC85", 950: "#E8D7B0",
    },
    // Dark scheme: ink-0 is the darkest (cards), ink-950 the lightest.
    ink: {
      0: "#16140F", 50: "#1A1814", 100: "#211E19", 200: "#2E2A23", 300: "#3D382F", 400: "#6B6357",
      500: "#8C8477", 600: "#A39B8E", 700: "#C2BAAD", 800: "#DDD6CA", 900: "#EDE7DC", 950: "#F7F2E9",
    },
    // Ruby for sale badges (light text on it); 800 is a light gold for small accent text on the dark page.
    action: {
      50: "#2A1A1C", 100: "#3A2226", 200: "#5C2C35", 300: "#7A2E3D", 400: "#8E2A3A", 500: "#9F1D35",
      600: "#86182D", 700: "#D9BE84", 800: "#E3C98E", 900: "#EDD8A8", 950: "#F5E8C8",
    },
    surface: "#0F0E0C",
    heading: "#F2EDE4",
    font: "'Inter', system-ui, sans-serif",
    displayFont: "'Marcellus', Georgia, serif",
    fontUrl: "https://fonts.googleapis.com/css2?family=Marcellus&family=Inter:wght@400;500;600&display=swap",
    scheme: "dark",
  },
  // Jukto "craft" / কারুশিল্প (E144, THEMES_V2_PLAN §4): kraft-paper page, terracotta + indigo,
  // serif headings (Noto Serif Bengali), full hero, tall cards, dark footer. Bangla demo.
  craft: {
    blocks: { header: "centered", top: "full", card: "tall", categories: "tiles", sections: "plain", footer: "dark", radius: "sharp" },
    brand: paletteFrom("#9A3F1E"),
    ink: WARM_INK,
    action: paletteFrom("#2E3A6B"),
    surface: "#F4ECDD",
    heading: "#2B1D14",
    font: "'Hind Siliguri', system-ui, sans-serif",
    displayFont: "'Noto Serif Bengali', Georgia, serif",
    fontUrl: "https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Noto+Serif+Bengali:wght@500;600&display=swap",
    paper: true,
  },
};

export function themeCss(t: DemoTheme): string {
  const v: string[] = [];
  for (const [k, c] of Object.entries(t.brand)) v.push(`--brand-${k}:${c}`);
  for (const [k, c] of Object.entries(t.ink)) v.push(`--ink-${k}:${c}`);
  for (const [k, c] of Object.entries(t.action)) v.push(`--action-${k}:${c}`);
  v.push(`--surface:${t.surface}`, `--heading:${t.heading}`, `--font:${t.font}`, `--font-display:${t.displayFont ?? t.font}`);
  return `:root{${v.join(";")}}`;
}
