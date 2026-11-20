/**
 * Demo UI language. Each demo shop picks its language in its data file (`lang`, default "bn"),
 * the way a Jukto store has one storefront language. The Bangla text is the key; English is
 * looked up here. A missing English text fails the build, so nothing ships half-translated.
 * Shop content (product names, banners) is written in the shop's language in src/data/.
 */
import { shop } from "./shop";

export type Lang = "bn" | "en";
export const LANG: Lang = shop.lang ?? "bn";

const EN: Record<string, string> = {
  // header, nav, footer
  "হোম": "Home",
  "ক্যাটাগরি": "Categories",
  "ব্যাগ": "Bag",
  "ট্র্যাক": "Track",
  "কার্ট": "Cart",
  "অ্যাপ মেনু": "App menu",
  "প্রধান মেনু": "Main menu",
  "সব পণ্য": "All products",
  "সব ক্যাটাগরি": "All categories",
  "অফার": "Offers",
  "খুঁজুন": "Search",
  "পণ্য খুঁজুন": "Search products",
  "মধু, ঘি, তেল, খেজুর খুঁজুন…": "Search honey, ghee, oil, dates…",
  "জুতা, ব্যাগ, ওয়ালেট খুঁজুন…": "Search shoes, bags, wallets…",
  "অর্ডার ট্র্যাক": "Track order",
  "ডেলিভারি চার্জ": "Delivery charge",
  "ঢাকায় {a} · বাইরে {b}": "Dhaka {a} · Outside {b}",
  "কেনাকাটা": "Shop",
  "সাহায্য": "Help",
  "আমার কার্ট": "My cart",
  "ডেলিভারি: ঢাকায় ১ দিন, বাইরে ২–৩ দিন": "Delivery: 1 day in Dhaka, 2–3 days outside",
  "পেমেন্ট": "Payment",
  "ক্যাশ অন ডেলিভারি · bKash · Nagad": "Cash on delivery · bKash · Nagad",
  "হটলাইন:": "Hotline:",
  "ডেমো দোকান · পণ্য, দাম আর দোকানের নাম নমুনা · ছবি: Unsplash": "Demo shop · products, prices and shop name are samples · Photos: Unsplash",
  "যুক্ত দিয়ে তৈরি": "Made with Jukto",
  // demo bar, page title
  "এটি যুক্ত-এর": "This is a demo shop of Jukto's",
  "থিমের ডেমো দোকান — এখানে কোনো অর্ডার হয় না।": "theme — no real orders are placed here.",
  "এই থিমে দোকান খুলুন →": "Open a shop with this theme →",
  "{theme} থিমের ডেমো": "{theme} theme demo",
  "যুক্ত-এর {theme} থিমের ডেমো দোকান। এখানে অর্ডার হয় না।": "Demo shop for Jukto's {theme} theme. No real orders are placed here.",
  // home
  "স্লাইড {n}": "Slide {n}",
  "কেন আমাদের থেকে কিনবেন": "Why shop with us",
  "ক্যাটাগরি অনুযায়ী কিনুন": "Shop by category",
  "ক্যাটাগরি বাছুন": "Choose a category",
  "{n}টি পণ্য": "{n} products",
  "জনপ্রিয় পণ্য": "Trending now",
  "সব": "All",
  "শেষ হবে —": "Ends in —",
  "সবচেয়ে বেশি বিক্রি": "Best sellers",
  "সবচেয়ে প্রিয়": "Most loved",
  "নতুন এসেছে": "New arrivals",
  "কালেকশন": "Collections",
  "সব দেখুন": "View all",
  "সব দেখুন →": "View all →",
  // cards
  "অপশন বাছুন": "Choose options",
  "{name} কার্টে যোগ করুন": "Add {name} to cart",
  "{price} থেকে": "From {price}",
  "{amount} সাশ্রয়": "Save {amount}",
  "কার্টে নিন": "Add to cart",
  "এখনই কিনুন": "Buy now",
  "দ্রুত দেখুন": "Quick view",
  "বিস্তারিত দেখুন": "View details",
  "ব্যাগে নিন": "Add to bag",
  "ক্যাটাগরি অনুযায়ী দেখুন": "Shop by piece",
  "{n}টি ডিজাইন": "{n} designs",
  "কালেকশন দেখুন": "Explore the collection",
  "{n}% ছাড়": "{n}% off",
  "{n}টি রং": "{n} colours",
  // product list
  "অবস্থান": "Breadcrumb",
  "সাজান": "Sort",
  "পছন্দের ক্রমে": "Featured",
  "দাম: কম থেকে বেশি": "Price: low to high",
  "দাম: বেশি থেকে কম": "Price: high to low",
  "এই খোঁজে কোনো পণ্য পাওয়া যায়নি।": "No products match this search.",
  // product page
  "সাইজ বাছুন": "Choose a size",
  "পরিমাণ বাছুন": "Choose a pack",
  "সংখ্যা": "Quantity",
  "কমান": "Decrease",
  "বাড়ান": "Increase",
  "ঢাকায় ডেলিভারি {a}, বাইরে {b}": "Delivery {a} in Dhaka, {b} outside",
  "{n}+ অর্ডারে ফ্রি": "free over {n}",
  "💵 ক্যাশ অন ডেলিভারি — হাতে পেয়ে টাকা দিন": "💵 Cash on delivery — pay when it arrives",
  "↩️ খাঁটি না হলে ডেলিভারির সময়েই ফেরত": "↩️ Not happy? Return it to the rider at delivery",
  "বিবরণ": "Details",
  "আরও দেখুন": "You may also like",
  // cart, checkout
  "কার্টে এখনো কিছু নেই।": "Your cart is empty.",
  "কেনাকাটা শুরু করুন": "Start shopping",
  "মোট (ডেলিভারি ছাড়া)": "Subtotal (before delivery)",
  "অর্ডার করতে এগিয়ে যান": "Go to checkout",
  "সরান": "Remove",
  "চেকআউট": "Checkout",
  "অর্ডার নিশ্চিত করুন": "Confirm your order",
  "আপনার নাম": "Your name",
  "মোবাইল নম্বর": "Mobile number",
  "পুরো ঠিকানা": "Full address",
  "ডেলিভারি এলাকা": "Delivery area",
  "ঢাকার ভিতরে": "Inside Dhaka",
  "ঢাকার বাইরে": "Outside Dhaka",
  "পেমেন্ট: ক্যাশ অন ডেলিভারি (আসল দোকানে bKash / Nagad ও চালু করা যায়)": "Payment: cash on delivery (a real shop can also turn on bKash / Nagad)",
  "অর্ডারের হিসাব": "Order summary",
  "পণ্যের দাম": "Items",
  "ডেলিভারি": "Delivery",
  "মোট": "Total",
  "অর্ডার করুন": "Place order",
  "এটি ডেমো দোকান": "This is a demo shop",
  "আসল দোকানে এখানে অর্ডার হয়ে যেত, আর কাস্টমার SMS পেতেন। এই ডেমোতে কোনো অর্ডার বা তথ্য কোথাও পাঠানো হয়নি।":
    "In a real shop the order would be placed now and the customer would get an SMS. In this demo nothing was sent anywhere.",
  "এই থিমে আপনার দোকান খুলুন": "Open your shop with this theme",
  "ডেমোতে ফিরে যান": "Back to the demo",
  // track, 404
  "অর্ডার ট্র্যাক করুন": "Track your order",
  "অর্ডার নম্বর বা মোবাইল": "Order number or mobile",
  "অর্ডার নম্বর বা মোবাইল নম্বর": "Order number or mobile number",
  "দেখুন": "Check",
  "নমুনা অর্ডার · ডেমো দোকানে আসল অর্ডার নেই": "Sample order · the demo shop has no real orders",
  "অর্ডার পাওয়া গেছে": "Order received",
  "কনফার্ম হয়েছে": "Confirmed",
  "প্যাক হচ্ছে": "Being packed",
  "ডেলিভারিতে দেওয়া হবে": "Handed to the courier",
  "আজ সকাল ১০:১২": "Today 10:12 am",
  "আজ সকাল ১০:৩০": "Today 10:30 am",
  "আজ দুপুর ১২:০৫": "Today 12:05 pm",
  "পাতা পাওয়া যায়নি": "Page not found",
  "এই পাতাটি পাওয়া যায়নি": "This page could not be found",
  "হোমে ফিরুন": "Back to home",
  // digits used as placeholders before the cart script runs
  "০": "0",
  "১": "1",
  "৳০": "৳0",
};

/** t("{n}টি পণ্য", { n: bn(3) }) → "৩টি পণ্য" or "3 products". */
export function t(bnText: string, vars: Record<string, string | number> = {}): string {
  let s = bnText;
  if (LANG === "en") {
    const en = EN[bnText];
    if (en === undefined) throw new Error(`Missing English text for "${bnText}" (src/lib/i18n.ts)`);
    s = en;
  }
  return s.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m));
}

/** Texts the browser scripts need (cart, product list, countdown), already in the shop's language. */
export const CLIENT_UI = {
  free: LANG === "en" ? "Free" : "ফ্রি",
  added: LANG === "en" ? "Added to cart" : "কার্টে যোগ হয়েছে",
  endsIn: LANG === "en" ? "Ends in {time}" : "শেষ হবে {time}",
  searchFor: LANG === "en" ? 'Results for "{q}"' : '"{q}" খোঁজার ফল',
  onSale: LANG === "en" ? "On sale" : "ছাড়ের পণ্য",
  allProducts: LANG === "en" ? "All products" : "সব পণ্য",
  count: LANG === "en" ? "{n} products" : "{n}টি পণ্য",
};
