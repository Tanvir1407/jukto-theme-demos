/**
 * Demo data for the Generic theme demo shop (demo-generic.jukto.bd).
 * Invented shop and products. Prices are sample prices; nothing here is a real order, review or customer.
 * Photos: Unsplash (free to use under the Unsplash License), downloaded and optimised by scripts/fetch-images.mjs.
 */
import type { DemoShop } from "../lib/types";

const SHOE = (price: number, was?: number) => ["40", "41", "42", "43"].map((label) => ({ label, price, was }));
const ONE = (price: number, was?: number) => [{ label: "One size", price, was }];

// English demo: shows that a Jukto store can run its storefront in English.
const shop: DemoShop = {
  lang: "en",
  theme: "generic",
  themeName: "Generic",
  name: "Dokanghor",
  initial: "D",
  tagline: "Shoes, bags, wallets and perfume — all in one place.",
  announcement: "Cash on delivery · Delivery all over Bangladesh",
  phone: "01700-000000",
  delivery: { inside: 70, outside: 130 },
  highlights: [],
  slides: [
    { img: "hero-bags", badge: "This week's offer", title: "Up to 15% off leather bags", text: "Handbags, slings and satchels.", cta: "Shop bags", href: "products/?category=bag" },
    { img: "hero-wallet", badge: "New collection", title: "Handmade leather wallets", text: "Cards, notes and coins — all in order.", cta: "Shop wallets", href: "products/?category=wallet" },
  ],
  tiles: [],
  categories: [
    { id: "shoes", name: "Shoes", img: "cat-shoes" },
    { id: "wallet", name: "Wallets", img: "cat-wallet" },
    { id: "bag", name: "Bags", img: "cat-bag" },
    { id: "perfume", name: "Perfume", img: "cat-perfume" },
  ],
  home: ["trending", "categories", "newArrivals", "rows"],
  products: [
    { slug: "brown-leather-shoes", name: "Brown Leather Shoes", category: "shoes", img: "p-plimsoll", options: SHOE(3650, 4200), best: true, badge: "Hot", text: "Real leather with a rubber sole — for the office and occasions." },
    { slug: "white-orange-runner", name: "White & Orange Runners", category: "shoes", img: "p-runner", options: SHOE(3250), text: "Light shoes for running and the gym." },
    { slug: "black-bifold-wallet", name: "Black Bifold Wallet", category: "wallet", img: "p-wallet-black", options: ONE(1250, 1450), best: true, badge: "Hot", text: "Soft leather, six card slots and a note pocket." },
    { slug: "brown-classic-wallet", name: "Brown Classic Wallet", category: "wallet", img: "p-wallet-brown", options: ONE(1350), badge: "New", text: "Vintage-look leather that gets better with age." },
    { slug: "two-tone-long-wallet", name: "Two-Tone Long Wallet", category: "wallet", img: "p-wallet-long", options: ONE(1650, 1900), text: "Black and brown leather with room for many cards." },
    { slug: "brown-handbag", name: "Brown Leather Tote", category: "bag", img: "p-bag-brown", options: ONE(3950, 4650), best: true, text: "Leather tote with three inside pockets." },
    { slug: "leather-sling", name: "Leather Sling Bag", category: "bag", img: "p-bag-sling", options: ONE(1850), badge: "New", text: "A small sling for your phone and wallet." },
    { slug: "grey-satchel", name: "Grey Satchel", category: "bag", img: "p-bag-grey", options: ONE(3450), text: "Gold buckles, carry it on the shoulder or by hand." },
    { slug: "red-backpack", name: "Maroon Leather Backpack", category: "bag", img: "p-bag-red", options: ONE(4250, 4900), text: "A small backpack for days out." },
    { slug: "classic-glass-perfume", name: "Classic Glass Perfume", category: "perfume", img: "p-perfume-black", options: [{ label: "100 ml", price: 2850 }, { label: "50 ml", price: 1650 }], best: true, text: "A warm, woody scent that lasts." },
    { slug: "citrus-perfume", name: "Citrus Perfume Set", category: "perfume", img: "p-perfume-set", options: [{ label: "Set", price: 2250, was: 2600 }], badge: "New", text: "Perfume with two small jars of cream." },
  ],
  images: {
    "hero-bags": { id: "photo-1760624294582-5341f33f9fa4", kind: "banner", alt: "Leather bags in three colours" },
    "hero-wallet": { id: "photo-1637486069202-b1163268c240", kind: "banner", alt: "Leather wallet on a wooden table" },
    "cat-shoes": { id: "photo-1560769629-975ec94e6a86", kind: "square", alt: "" },
    "cat-wallet": { id: "photo-1627123424574-724758594e93", kind: "square", alt: "" },
    "cat-bag": { id: "photo-1598532163257-ae3c6b2524b6", kind: "square", alt: "" },
    "cat-perfume": { id: "photo-1622618991746-fe6004db3a47", kind: "square", alt: "" },
    "p-plimsoll": { id: "photo-1648233318901-735f039f7c1d", kind: "portrait", alt: "Brown leather shoes" },
    "p-runner": { id: "photo-1560769629-975ec94e6a86", kind: "portrait", alt: "White and orange running shoes" },
    "p-wallet-black": { id: "photo-1579014134953-1580d7f123f3", kind: "portrait", alt: "Black leather wallet" },
    "p-wallet-brown": { id: "photo-1627123424574-724758594e93", kind: "portrait", alt: "Brown leather wallet" },
    "p-wallet-long": { id: "photo-1637486069202-b1163268c240", kind: "portrait", alt: "Two-tone leather wallet" },
    "p-bag-brown": { id: "photo-1624687943971-e86af76d57de", kind: "portrait", alt: "Brown leather tote" },
    "p-bag-sling": { id: "photo-1600857062241-98e5dba7f214", kind: "portrait", alt: "Leather sling bag" },
    "p-bag-grey": { id: "photo-1605733513597-a8f8341084e6", kind: "portrait", alt: "Grey satchel" },
    "p-bag-red": { id: "photo-1622560480654-d96214fdc887", kind: "portrait", alt: "Maroon backpack" },
    "p-perfume-black": { id: "photo-1760920250029-36af9369a0bb", kind: "portrait", alt: "Glass perfume bottle with a black cap" },
    "p-perfume-set": { id: "photo-1622618991746-fe6004db3a47", kind: "portrait", alt: "Perfume bottle and cream jars" },
  },
};

export default shop;
