/**
 * Demo data for the কারুশিল্প / Craft theme demo shop (demo-craft.jukto.bd). Bangla demo.
 * Invented shop and products. Prices are sample prices; nothing here is a real order, review or customer.
 * Photos: Unsplash (free to use under the Unsplash License), downloaded and optimised by scripts/fetch-images.mjs.
 */
import type { DemoShop } from "../lib/types";

const ONE = (price: number, was?: number) => [{ label: "এক মাপ", price, was }];

const shop: DemoShop = {
  theme: "craft",
  themeName: "কারুশিল্প",
  name: "কারুকথা",
  initial: "কা",
  tagline: "মাটি, বেত, পাট আর সুতোর কাজ — কারিগরের হাত থেকে সরাসরি আপনার ঘরে।",
  announcement: "সারাদেশে ক্যাশ অন ডেলিভারি · ভাঙা পৌঁছালে বদলে দেওয়া হয়",
  phone: "০১৭০০-০০০০০০",
  delivery: { inside: 80, outside: 150 },
  nav: [
    { label: "মৃৎশিল্প", href: "products/?category=clay" },
    { label: "বেত ও বাঁশ", href: "products/?category=cane" },
    { label: "সূচিকর্ম", href: "products/?category=stitch" },
    { label: "উপহার", href: "products/?category=jute" },
  ],
  highlights: [
    { mark: "হা", title: "কারিগরের হাতে তৈরি", sub: "প্রতিটা জিনিস একটু আলাদা" },
    { mark: "৳", title: "ক্যাশ অন ডেলিভারি", sub: "হাতে পেয়ে টাকা" },
    { mark: "↺", title: "ভাঙা পৌঁছালে বদল", sub: "ছবি পাঠালেই হবে" },
    { mark: "✓", title: "যত্নে প্যাকিং", sub: "খড় আর কাগজে মোড়ানো" },
  ],
  slides: [
    { img: "hero-loom", badge: "নতুন সংগ্রহ", title: "হাতের কাজের জিনিস, ঘরের জন্য", text: "মাটির কলস, বেতের ঝুড়ি, পাটের ব্যাগ আর নকশি সূচিকর্ম — সারাদেশের কারিগরদের কাছ থেকে।", cta: "সংগ্রহ দেখুন", href: "products/" },
    { img: "hero-baskets", badge: "ঘর সাজানো", title: "দেয়ালে বেতের ঝুড়ি", text: "এক সেটেই খালি দেয়াল ভরে যায়।", cta: "বেতের কাজ দেখুন", href: "products/?category=cane" },
  ],
  tiles: [],
  story: { img: "story-weaver", eyebrow: "কারিগরের গল্প", title: "প্রতিটা জিনিসের পেছনে একজন মানুষ", text: "আমরা সরাসরি কারিগরদের কাছ থেকে কিনি, আর পণ্যের পাতায় লিখে দিই কোথায়, কার হাতে তৈরি। কোনো দুটো ঝুড়ি বা কলস হুবহু এক রকম হয় না — সেটাই হাতের কাজের সৌন্দর্য।", cta: "সব পণ্য দেখুন", href: "products/" },
  collections: [
    { title: "টেপা পুতুল", img: "col-dolls", href: "products/?category=clay", note: "মাটির খেলনা" },
    { title: "ঘর সাজানো", img: "col-decor", href: "products/?category=cane", note: "বেত ও বাঁশ" },
    { title: "উপহার", img: "col-gift", href: "products/?category=jute", note: "পাটের ব্যাগ" },
  ],
  categories: [
    { id: "clay", name: "মৃৎশিল্প", img: "cat-clay" },
    { id: "cane", name: "বেত ও বাঁশ", img: "cat-cane" },
    { id: "jute", name: "পাট", img: "cat-jute" },
    { id: "stitch", name: "সূচিকর্ম", img: "cat-stitch" },
    { id: "loom", name: "তাঁত", img: "cat-loom" },
  ],
  home: ["story", "collections", "newArrivals", "categories", "highlights"],
  products: [
    { slug: "tepa-putul-set", name: "টেপা পুতুল — ৬টির সেট", category: "clay", img: "p-dolls", options: ONE(950), badge: "হাতে তৈরি", text: "পোড়ামাটির হাতে টেপা পুতুল। প্রতিটা একটু আলাদা আকারের।" },
    { slug: "painted-clay-kolshi", name: "নকশা আঁকা মাটির কলস", category: "clay", img: "p-kolshi", options: ONE(1250, 1450), badge: "নতুন", text: "পোড়ামাটির কলসে হাতে আঁকা ফুল। ঘর সাজানোর জন্য, পানি রাখার জন্য নয়।" },
    { slug: "old-clay-jug", name: "হাতলওয়ালা মাটির জগ", category: "clay", img: "p-jug", options: ONE(690), text: "পুরনো ধাঁচের মাটির জগ, ফুলদানি হিসেবেও চলে।" },
    { slug: "terracotta-jar-trio", name: "পোড়ামাটির জার — ৩টি", category: "clay", img: "p-jars", options: ONE(2400), text: "তিন মাপের তিনটা জার, ঢাকনাসহ।" },
    { slug: "clay-pot-stack", name: "মাটির টব — ৪টির সেট", category: "clay", img: "p-pots", options: ONE(780), text: "গাছের জন্য চার মাপের পোড়ামাটির টব।" },
    { slug: "wall-basket-set", name: "দেয়ালে ঝোলানো বেতের ঝুড়ি — ৯টি", category: "cane", img: "p-wall-baskets", options: ONE(3200, 3600), badge: "নতুন", text: "নানা মাপের নয়টা ঝুড়ি, দেয়ালে ঝোলানোর হুকসহ।" },
    { slug: "cane-tray-pair", name: "বেতের ট্রে — জোড়া", category: "cane", img: "p-trays", options: ONE(1150), text: "হাতলওয়ালা দুটো লম্বা ট্রে, রুটি বা ফল রাখার জন্য।" },
    { slug: "cane-basket-handle", name: "হাতলওয়ালা বেতের ঝুড়ি", category: "cane", img: "p-basket", options: ONE(850), text: "ঘন বুননের গোল ঝুড়ি।" },
    { slug: "jute-bag-colour-handle", name: "পাটের ব্যাগ, রঙিন হাতল", category: "jute", img: "p-jute-bags", options: ONE(550), badge: "হাতে তৈরি", text: "শক্ত পাটের ব্যাগ, তিন রঙের হাতল থেকে বাছাই করুন।" },
    { slug: "rose-hoop-art", name: "গোলাপ ফুলের সূচিকর্ম, ফ্রেমসহ", category: "stitch", img: "p-hoop-rose", options: ONE(1450), badge: "নতুন", text: "কাঠের গোল ফ্রেমে হাতে সেলাই করা গোলাপের মালা।" },
    { slug: "wildflower-hoop-art", name: "বুনো ফুলের সূচিকর্ম, কালো কাপড়ে", category: "stitch", img: "p-hoop-wild", options: ONE(1650), text: "কালো কাপড়ের ওপর রঙিন সুতোয় বুনো ফুল।" },
    { slug: "stitched-flower-panel", name: "সূচিকর্মের ফুল, দেয়ালের জন্য", category: "stitch", img: "p-flower", options: ONE(2200), text: "হালকা রঙের সুতোয় একটা বড় ফুল, বাঁধানোর জন্য তৈরি।" },
    { slug: "handloom-green-fabric", name: "তাঁতের সবুজ কাপড় — ২ গজ", category: "loom", img: "p-loom-green", options: ONE(1800), text: "হস্তচালিত তাঁতে বোনা সুতি কাপড়।" },
  ],
  images: {
    "hero-loom": { id: "photo-1640292343595-889db1c8262e", kind: "banner", alt: "তাঁতে কাজ করছেন একজন কারিগর" },
    "hero-baskets": { id: "photo-1590751518505-1fc2d227ef9b", kind: "banner", alt: "দেয়ালে নানা মাপের বেতের ঝুড়ি" },
    "story-weaver": { id: "photo-1774504798091-f8349c656395", kind: "banner", alt: "ওড়না পরা এক তরুণী কাপড় বুনছেন" },
    "col-dolls": { id: "photo-1650425801207-6c50edf1aa1a", kind: "portrait", alt: "" },
    "col-decor": { id: "photo-1782216312755-42f2b13590c8", kind: "portrait", alt: "" },
    "col-gift": { id: "photo-1758487424832-a53ae6cdefdb", kind: "portrait", alt: "" },
    "cat-clay": { id: "photo-1771627278991-8922851b9435", kind: "portrait", alt: "" },
    "cat-cane": { id: "photo-1573095709988-1e208fc91c27", kind: "portrait", alt: "" },
    "cat-jute": { id: "photo-1758487424832-a53ae6cdefdb", kind: "portrait", alt: "" },
    "cat-stitch": { id: "photo-1622378158084-f2221260e688", kind: "portrait", alt: "" },
    "cat-loom": { id: "photo-1569909115134-a0426936c879", kind: "portrait", alt: "" },
    "p-dolls": { id: "photo-1650425801207-6c50edf1aa1a", kind: "portrait", alt: "পোড়ামাটির টেপা পুতুল" },
    "p-kolshi": { id: "photo-1757083821615-62de7719c864", kind: "portrait", alt: "ফুল আঁকা মাটির কলস" },
    "p-jug": { id: "photo-1656088239658-ca839d7e8841", kind: "portrait", alt: "হাতলওয়ালা মাটির জগ" },
    "p-jars": { id: "photo-1771627278991-8922851b9435", kind: "portrait", alt: "পোড়ামাটির জার" },
    "p-pots": { id: "photo-1468531390554-9f62f9767a87", kind: "portrait", alt: "একটার ওপর একটা মাটির টব" },
    "p-wall-baskets": { id: "photo-1590751518505-1fc2d227ef9b", kind: "portrait", alt: "দেয়ালে বেতের ঝুড়ি" },
    "p-trays": { id: "photo-1573095709988-1e208fc91c27", kind: "portrait", alt: "বেতের ট্রে" },
    "p-basket": { id: "photo-1578678809626-a3741782f0b8", kind: "portrait", alt: "হাতলওয়ালা বেতের ঝুড়ি" },
    "p-jute-bags": { id: "photo-1758487424832-a53ae6cdefdb", kind: "portrait", alt: "রঙিন হাতলের পাটের ব্যাগ" },
    "p-hoop-rose": { id: "photo-1622378158084-f2221260e688", kind: "portrait", alt: "গোলাপের সূচিকর্ম, কাঠের ফ্রেমে" },
    "p-hoop-wild": { id: "photo-1671535108620-d169ce916f09", kind: "portrait", alt: "কালো কাপড়ে বুনো ফুলের সূচিকর্ম" },
    "p-flower": { id: "photo-1720982018719-f2666caf447a", kind: "portrait", alt: "সূচিকর্মের বড় ফুল" },
    "p-loom-green": { id: "photo-1707978932202-751b08324daf", kind: "portrait", alt: "তাঁতে সবুজ কাপড়" },
  },
};

export default shop;
