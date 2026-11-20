/**
 * Demo data for the Men's fashion theme demo shop (demo-mensfashion.jukto.bd).
 * Invented shop and products. Prices are sample prices; nothing here is a real order, review or customer.
 * Photos: Unsplash (free to use under the Unsplash License), downloaded and optimised by scripts/fetch-images.mjs.
 */
import type { DemoShop } from "../lib/types";

const SIZES = (price: number, was?: number) => ["M", "L", "XL", "XXL"].map((label) => ({ label, price, was }));
const SHOE = (price: number, was?: number) => ["40", "41", "42", "43"].map((label) => ({ label, price, was }));

// English demo: shows that a Jukto store can run its storefront in English.
const shop: DemoShop = {
  lang: "en",
  theme: "mensfashion",
  themeName: "Men's Fashion",
  name: "Neelambor",
  initial: "N",
  tagline: "Panjabis, shirts and everyday wear — well cut, easy to wear.",
  announcement: "Free delivery across Bangladesh on orders over ৳2,500 · Size exchange within 7 days",
  phone: "01700-000000",
  delivery: { inside: 70, outside: 130, freeOver: 2500 },
  nav: [
    { label: "Panjabi", href: "products/?category=panjabi" },
    { label: "Shirts", href: "products/?category=shirt" },
    { label: "Casual", href: "products/?category=casual" },
    { label: "Eid offer", href: "products/?sale=1" },
  ],
  highlights: [
    { mark: "৳", title: "Cash on delivery", sub: "Pay when it arrives" },
    { mark: "2", title: "Delivery in 2–4 days", sub: "All over Bangladesh" },
    { mark: "↺", title: "7-day size exchange", sub: "With the tag still on" },
    { mark: "✓", title: "bKash · Nagad", sub: "Pay online too" },
  ],
  slides: [
    { img: "hero-shirt", badge: "Just in", title: "Shirts for the office", text: "Band collars, stripes and solids — neat all day.", cta: "Shop shirts", href: "products/?category=shirt" },
    { img: "hero-kurta", badge: "Eid collection 2026", title: "Panjabis for Eid", text: "Soft cotton and linen — from morning prayers to the evening dawat.", cta: "Shop panjabis", href: "products/?category=panjabi" },
  ],
  tiles: [],
  collections: [
    { title: "Eid festive", img: "col-eid", href: "products/?category=panjabi", note: "Panjabi & sherwani" },
    { title: "Office", img: "col-office", href: "products/?category=shirt", note: "Shirts" },
    { title: "Casual", img: "col-casual", href: "products/?category=casual", note: "Tees & polos" },
  ],
  categories: [
    { id: "panjabi", name: "Panjabi", img: "cat-panjabi" },
    { id: "shirt", name: "Shirts", img: "cat-shirt" },
    { id: "casual", name: "Casual", img: "cat-casual" },
    { id: "shoes", name: "Shoes", img: "cat-shoes" },
    { id: "accessories", name: "Bags & wallets", img: "cat-acc" },
  ],
  campaign: { title: "Eid offer", endsInHours: 30 },
  home: ["categories", "newArrivals", "rows", "collections", "campaign", "highlights"],
  products: [
    { slug: "navy-cotton-panjabi", name: "Navy Cotton Panjabi", category: "panjabi", img: "p-kurta-navy", options: SIZES(2450, 2850), colors: ["#1E3A5F"], badge: "New", flash: true, text: "Soft cotton, machine washable. Sizes M to XXL." },
    { slug: "blue-embroidered-sherwani", name: "Blue Embroidered Sherwani", category: "panjabi", img: "p-sherwani", options: SIZES(8900), colors: ["#1D4ED8", "#D4D4D8"], badge: "Eid", text: "Fine embroidery for weddings and festivals." },
    { slug: "blue-band-collar-shirt", name: "Blue Band-Collar Shirt", category: "shirt", img: "p-shirt-oxford", options: SIZES(1650, 1850), colors: ["#3B82F6", "#F8FAFC"], flash: true, text: "Soft cotton, band collar, slim fit." },
    { slug: "navy-stripe-shirt", name: "Navy Stripe Shirt", category: "shirt", img: "p-shirt-linen", options: SIZES(1890), colors: ["#1E3A5F"], badge: "New", text: "Light cotton with a fine stripe, cool in the heat." },
    { slug: "grey-casual-shirt", name: "Grey Casual Shirt", category: "shirt", img: "p-shirt-check", options: SIZES(1450), colors: ["#6B7280", "#F3F4F6"], text: "Full sleeves, regular fit." },
    { slug: "formal-shirt-3-colours", name: "Formal Shirt — 3 Colours", category: "shirt", img: "p-shirt-white", options: SIZES(1550, 1750), colors: ["#1E293B", "#FFFFFF", "#581C2E"], flash: true, text: "Easy-iron fabric for every day at the office." },
    { slug: "black-crew-tee", name: "Black Crew-Neck Tee", category: "casual", img: "p-tee-black", options: SIZES(690), colors: ["#111827"], text: "180 GSM cotton that keeps its shape after washing." },
    { slug: "white-basic-tee", name: "White Basic Tee", category: "casual", img: "p-tee-white", options: SIZES(650), colors: ["#FFFFFF"], badge: "New", text: "An everyday cotton tee." },
    { slug: "printed-polo", name: "Sky Printed Polo", category: "casual", img: "p-polo", options: SIZES(1150, 1290), colors: ["#BAE6FD"], flash: true, text: "Piqué cotton with a small print." },
    { slug: "tan-cotton-jacket", name: "Tan Cotton Jacket", category: "casual", img: "p-jacket", options: SIZES(3450), colors: ["#C8A27A"], text: "A twill jacket for light winter days." },
    { slug: "brown-leather-shoes", name: "Brown Leather Shoes", category: "shoes", img: "p-shoes-black", options: SHOE(3950, 4500), colors: ["#7C4A21"], text: "For the office and for occasions." },
    { slug: "black-bifold-wallet", name: "Black Bifold Wallet", category: "accessories", img: "p-wallet", options: [{ label: "One size", price: 1250 }], colors: ["#111827"], text: "Soft leather, six card slots and a note pocket." },
    { slug: "leather-satchel", name: "Brown Leather Satchel", category: "accessories", img: "p-bag", options: [{ label: "One size", price: 4950, was: 5500 }], colors: ["#92400E"], text: "Leather bag with room for a laptop." },
  ],
  images: {
    "hero-kurta": { id: "photo-1759567066672-4b9f48000096", kind: "banner", alt: "Young man in a navy panjabi" },
    "hero-shirt": { id: "photo-1589310243389-96a5483213a8", kind: "banner", alt: "Man in a blue shirt" },
    "col-eid": { id: "photo-1534217466718-ef4950786e24", kind: "portrait", alt: "" },
    "col-office": { id: "photo-1601522089844-8ac5e2ae6773", kind: "portrait", alt: "" },
    "col-casual": { id: "photo-1622519407650-3df9883f76a5", kind: "portrait", alt: "" },
    "cat-panjabi": { id: "photo-1759567066672-4b9f48000096", kind: "portrait", alt: "" },
    "cat-shirt": { id: "photo-1767164520704-fc2a44498a11", kind: "portrait", alt: "" },
    "cat-casual": { id: "photo-1624181497355-72434fbdf734", kind: "portrait", alt: "" },
    "cat-shoes": { id: "photo-1648233318901-735f039f7c1d", kind: "portrait", alt: "" },
    "cat-acc": { id: "photo-1473188588951-666fce8e7c68", kind: "portrait", alt: "" },
    "p-kurta-navy": { id: "photo-1759567066672-4b9f48000096", kind: "portrait", alt: "Navy panjabi" },
    "p-sherwani": { id: "photo-1534217466718-ef4950786e24", kind: "portrait", alt: "Blue sherwani" },
    "p-shirt-oxford": { id: "photo-1601522089844-8ac5e2ae6773", kind: "portrait", alt: "Blue shirt" },
    "p-shirt-linen": { id: "photo-1767164520704-fc2a44498a11", kind: "portrait", alt: "Navy stripe shirt" },
    "p-shirt-check": { id: "photo-1584598788860-2695a3a6c874", kind: "portrait", alt: "Grey shirt" },
    "p-shirt-white": { id: "photo-1602810318383-e386cc2a3ccf", kind: "portrait", alt: "Formal shirts in three colours" },
    "p-tee-black": { id: "photo-1622519407650-3df9883f76a5", kind: "portrait", alt: "Black tee" },
    "p-tee-white": { id: "photo-1624181497355-72434fbdf734", kind: "portrait", alt: "White tee" },
    "p-polo": { id: "photo-1779907448384-bcd21af9bbbf", kind: "portrait", alt: "Sky printed polo" },
    "p-jacket": { id: "photo-1617114919297-3c8ddb01f599", kind: "portrait", alt: "Tan jacket" },
    "p-shoes-black": { id: "photo-1648233318901-735f039f7c1d", kind: "portrait", alt: "Brown leather shoes" },
    "p-wallet": { id: "photo-1579014134953-1580d7f123f3", kind: "portrait", alt: "Black leather wallet" },
    "p-bag": { id: "photo-1473188588951-666fce8e7c68", kind: "portrait", alt: "Brown leather bag" },
  },
};

export default shop;
