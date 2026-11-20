/**
 * Demo data for the Jewellery theme demo shop (demo-jewelry.jukto.bd). English demo.
 * Invented shop and products. Prices, karats and weights are samples; nothing here is a real
 * order, review or customer. Follows the owner's canvas board "জুয়েলারি" (5 Nov 2026).
 * Photos: Unsplash (free to use under the Unsplash License), downloaded and optimised by scripts/fetch-images.mjs.
 */
import type { DemoShop } from "../lib/types";

const ONE = (price: number, was?: number) => [{ label: "One size", price, was }];
const RING = (price: number) => ["Size 12", "Size 14", "Size 16", "Size 18"].map((label) => ({ label, price }));
const BANGLE = (price: number, was?: number) => ["2.4", "2.6", "2.8"].map((label) => ({ label, price, was }));

const shop: DemoShop = {
  lang: "en",
  theme: "jewelry",
  themeName: "Jewellery",
  name: "SWARNOKOTHA",
  initial: "S",
  tagline: "Gold jewellery made in Dhaka — every piece with its hallmark certificate.",
  announcement: "Hallmark certified jewellery · Insured delivery across Bangladesh",
  phone: "01700-000000",
  delivery: { inside: 150, outside: 250 },
  nav: [
    { label: "Necklaces", href: "products/?category=necklace" },
    { label: "Earrings", href: "products/?category=earrings" },
    { label: "Bangles", href: "products/?category=bangles" },
    { label: "Rings", href: "products/?category=rings" },
    { label: "Bridal", href: "products/?category=necklace" },
  ],
  highlights: [
    { mark: "22K", title: "Hallmark certified", sub: "With every piece" },
    { mark: "∞", title: "Lifetime polishing", sub: "Free at our showroom" },
    { mark: "৳", title: "Old gold exchange", sub: "At the day's rate" },
    { mark: "✓", title: "Insured delivery", sub: "Across Bangladesh" },
  ],
  slides: [
    { img: "hero-set", badge: "The Bridal Edit 2026", title: "Jewellery that stays for generations", text: "Necklaces, earrings and bangles handcrafted in 22K gold — each piece comes with its hallmark certificate.", cta: "Explore the collection", href: "products/" },
  ],
  tiles: [],
  story: { img: "story-bride", eyebrow: "Made to order", title: "Your complete bridal set, your way", text: "From the necklace to the tikli — choose the designs and we craft them to your size and weight.", cta: "See bridal sets", href: "products/?category=necklace" },
  categories: [
    { id: "necklace", name: "Necklaces", img: "cat-necklace" },
    { id: "earrings", name: "Earrings", img: "cat-earrings" },
    { id: "bangles", name: "Bangles", img: "cat-bangles" },
    { id: "rings", name: "Rings", img: "cat-rings" },
  ],
  home: ["categories", "best", "story", "newArrivals", "highlights"],
  products: [
    { slug: "temple-necklace-ruby", name: "Temple Necklace with Ruby Drops", category: "necklace", img: "p-temple", spec: "22K · 28.6 g", options: ONE(348000), best: true, text: "A wide temple-style necklace with ruby drops and matching studs." },
    { slug: "bridal-necklace-set", name: "Bridal Necklace & Earring Set", category: "necklace", img: "p-bridal-set", spec: "22K · 41.2 g", options: ONE(512000), best: true, badge: "Bridal", text: "A full bridal necklace with drop earrings, made to order in four weeks." },
    { slug: "kundan-layered-necklace", name: "Kundan Layered Necklace with Tikka", category: "necklace", img: "p-kundan", spec: "21K · 34.0 g", options: ONE(386000), badge: "New", text: "Three layers of kundan work with a maroon drop and a matching maang tikka." },
    { slug: "circle-pendant-chain", name: "Fine Chain with Circle Pendant", category: "necklace", img: "p-circle", spec: "21K · 6.4 g", options: ONE(62000), text: "A double chain with a light open circle — for every day." },
    { slug: "teardrop-pendant", name: "Teardrop Pendant Necklace", category: "necklace", img: "p-teardrop", spec: "18K · 5.1 g", options: ONE(48500), badge: "New", text: "A hollow teardrop on a fine snake chain." },
    { slug: "peacock-statement-earrings", name: "Peacock Statement Earrings", category: "earrings", img: "p-peacock", spec: "18K · stone work", options: ONE(86000), best: true, text: "Peacock tops with stone work and three strands of pink beads." },
    { slug: "shell-drop-earrings", name: "Shell Drop Earrings", category: "earrings", img: "p-shell", spec: "21K · 4.8 g", options: ONE(41000), badge: "New", text: "Small shell-shaped drops with a high polish." },
    { slug: "twisted-gold-hoops", name: "Twisted Gold Hoops", category: "earrings", img: "p-hoops", spec: "21K · 6.2 g", options: ONE(54000), text: "Chunky twisted hoops that sit close to the ear." },
    { slug: "round-stone-studs", name: "Round Stone Studs", category: "earrings", img: "p-studs", spec: "18K · 2.9 g", options: ONE(32500), text: "Round studs set with small white stones." },
    { slug: "classic-bangle-set", name: "Classic Gold Bangles, Set of 6", category: "bangles", img: "p-bangle-set", spec: "22K · 48.0 g", options: BANGLE(590000, 615000), best: true, text: "Six engraved bangles. Choose your size (2.4 to 2.8)." },
    { slug: "twisted-bangle-pair", name: "Twisted Bangle Pair", category: "bangles", img: "p-bangle-twist", spec: "21K · 18.4 g", options: BANGLE(214000), text: "Two twisted bangles with a fine stone line." },
    { slug: "butterfly-cuff", name: "Butterfly Open Cuff", category: "bangles", img: "p-cuff", spec: "18K · 9.6 g", options: ONE(98000), badge: "New", text: "An open cuff with three hand-finished butterflies." },
    { slug: "stone-row-bangle", name: "Stone Row Bangle", category: "bangles", img: "p-bangle-stone", spec: "18K · 14.2 g", options: BANGLE(152000), text: "A broad bangle with rows of white stones." },
    { slug: "stacking-rings-trio", name: "Stacking Rings, Set of 3", category: "rings", img: "p-ring-trio", spec: "18K · 5.7 g", options: RING(58000), best: true, text: "Three thin rings — heart, bow and stone — to wear together or apart." },
    { slug: "gemstone-cocktail-rings", name: "Coloured Stone Ring", category: "rings", img: "p-ring-gems", spec: "18K · 4.3 g", options: RING(46500), text: "An open-set ring with a coloured stone. Several stones to choose from at the showroom." },
  ],
  images: {
    "hero-set": { id: "photo-1722410180670-b6d5a2e704fa", kind: "portrait", alt: "Gold necklace and long earrings on a green display bust" },
    "story-bride": { id: "photo-1610047614301-13c63f00c032", kind: "portrait", alt: "Bride in red and gold wearing a gold necklace set" },
    "cat-necklace": { id: "photo-1722410180687-b05b50922362", kind: "portrait", alt: "" },
    "cat-earrings": { id: "photo-1692165295689-68fc4155e2b1", kind: "portrait", alt: "" },
    "cat-bangles": { id: "photo-1758995116383-f51775896add", kind: "portrait", alt: "" },
    "cat-rings": { id: "photo-1631982690223-8aa4be0a2497", kind: "portrait", alt: "" },
    "p-temple": { id: "photo-1601121141461-9d6647bca1ed", kind: "square", alt: "Temple-style gold necklace with ruby drops" },
    "p-bridal-set": { id: "photo-1758995115857-2de1eb6283d0", kind: "square", alt: "Bridal gold necklace and earring set" },
    "p-kundan": { id: "photo-1692338710091-cb054e6fbc12", kind: "square", alt: "Kundan layered necklace with maang tikka" },
    "p-circle": { id: "photo-1773929345739-94db8a4ccd0c", kind: "square", alt: "Gold chain with a circle pendant" },
    "p-teardrop": { id: "photo-1705326452390-3ecf6070595f", kind: "square", alt: "Teardrop pendant on a display bust" },
    "p-peacock": { id: "photo-1692165295689-68fc4155e2b1", kind: "square", alt: "Peacock statement earrings on a stand" },
    "p-shell": { id: "photo-1778182553300-7593326ca29d", kind: "square", alt: "Gold shell drop earrings" },
    "p-hoops": { id: "photo-1617038220319-276d3cfab638", kind: "square", alt: "Twisted gold hoop earrings" },
    "p-studs": { id: "photo-1787520309842-6a8e4b7cdd7f", kind: "square", alt: "Round stone stud earrings" },
    "p-bangle-set": { id: "photo-1758995116383-f51775896add", kind: "square", alt: "Stack of engraved gold bangles" },
    "p-bangle-twist": { id: "photo-1691644165146-c322673de84f", kind: "square", alt: "Two twisted gold bangles" },
    "p-cuff": { id: "photo-1691991054594-c64b364a9fab", kind: "square", alt: "Gold cuff with butterflies" },
    "p-bangle-stone": { id: "photo-1691039859258-adda2e204a11", kind: "square", alt: "Gold bangle with rows of stones" },
    "p-ring-trio": { id: "photo-1631982690223-8aa4be0a2497", kind: "square", alt: "Three thin gold rings in a box" },
    "p-ring-gems": { id: "photo-1608042314453-ae338d80c427", kind: "square", alt: "Gold rings with coloured stones" },
  },
};

export default shop;
