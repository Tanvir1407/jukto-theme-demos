export interface DemoOption {
  label: string;
  price: number;
  /** Old price, shown struck through. Only when there is a sale. */
  was?: number;
}

export interface DemoProduct {
  slug: string;
  name: string;
  category: string;
  img: string;
  options: DemoOption[];
  text: string;
  flash?: boolean;
  best?: boolean;
  /** Variant colours (Jukto shows them as small swatches on tall cards). */
  colors?: string[];
  /** First spec row shown on Luxe cards (Jukto: first `specifications` row, e.g. karat · weight). */
  spec?: string;
  /** Small label on the photo, e.g. "নতুন". */
  badge?: string;
}

export interface DemoImage {
  /** images.unsplash.com path id, e.g. "photo-1587049352851-8d4e89133924" */
  id: string;
  kind: "square" | "banner" | "portrait";
  alt: string;
}

export interface DemoShop {
  /** Storefront language, like a Jukto store's language setting. Default "bn". */
  lang?: "bn" | "en";
  theme: string;
  themeName: string;
  name: string;
  initial: string;
  tagline: string;
  announcement: string;
  phone: string;
  delivery: { inside: number; outside: number; freeOver?: number };
  highlights: { mark: string; title: string; sub: string }[];
  slides: { img: string; badge?: string; title: string; text: string; cta: string; href: string }[];
  tiles: { img: string; eyebrow: string; title: string; href: string }[];
  categories: { id: string; name: string; img: string }[];
  campaign?: { title: string; endsInHours: number };
  /** Home sections in order (as the Jukto theme's `home`). */
  home: ("highlights" | "categories" | "campaign" | "best" | "rows" | "collections" | "newArrivals" | "story" | "trending")[];
  collections?: { title: string; img: string; href: string; note?: string }[];
  story?: { img: string; eyebrow: string; title: string; text: string; cta: string; href: string };
  /** Short links in the centered header (Fashion). */
  nav?: { label: string; href: string }[];
  products: DemoProduct[];
  images: Record<string, DemoImage>;
}
