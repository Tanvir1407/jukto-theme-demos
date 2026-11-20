/*
 * Demo shim (jukto-theme-demos). Loaded first on every page of a demo snapshot.
 * - A demo bar at the bottom: this is a demo shop of a Jukto theme; nothing is ordered.
 * - Writes never leave the browser: a server action or POST (checkout, login, review…) shows a
 *   "this is a demo" dialog instead. Reads of the live API simply fail, as on any static site.
 * - /products?category=X → the saved page for that category (/products/c/x/).
 */
(function () {
  var C = {"lang":"en","theme":"Men's Fashion","signup":"https://jukto.bd/"};
  var T = C.lang === "en"
    ? { bar: "Demo shop of Jukto's " + C.theme + " theme — nothing here is a real order.", cta: "Open a shop with this theme →", title: "This is a demo shop", body: "In a real shop this would go through now (order, login or message). In this demo nothing was sent anywhere.", open: "Open your shop with this theme", back: "Back to the demo" }
    : { bar: "যুক্ত-এর " + C.theme + " থিমের ডেমো দোকান — এখানে কোনো অর্ডার হয় না।", cta: "এই থিমে দোকান খুলুন →", title: "এটি ডেমো দোকান", body: "আসল দোকানে এখানে কাজটা হয়ে যেত (অর্ডার, লগইন বা মেসেজ)। এই ডেমোতে কিছুই কোথাও পাঠানো হয়নি।", open: "এই থিমে আপনার দোকান খুলুন", back: "ডেমোতে ফিরে যান" };

  // Category pages are saved as /products/c/<name>/.
  try {
    var u = new URL(location.href);
    var cat = u.searchParams.get("category");
    if (/^\/products\/?$/.test(u.pathname) && cat) {
      location.replace("/products/c/" + encodeURIComponent(cat.toLowerCase()).replace(/%/g, "_") + "/");
      return;
    }
  } catch (e) {}

  function dialog() {
    if (document.getElementById("demo-dialog")) return;
    var d = document.createElement("div");
    d.id = "demo-dialog";
    d.setAttribute("role", "dialog");
    d.setAttribute("aria-modal", "true");
    d.style.cssText = "position:fixed;inset:0;z-index:2147483646;background:rgba(0,0,0,.55);display:flex;align-items:center;justify-content:center;padding:16px;font-family:inherit";
    d.innerHTML =
      '<div style="max-width:420px;width:100%;background:#fff;color:#151211;border-radius:12px;padding:24px;box-shadow:0 20px 50px rgba(0,0,0,.3);text-align:center">' +
      '<p style="margin:0 0 8px;font-size:20px;font-weight:600">' + T.title + "</p>" +
      '<p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#554E4D">' + T.body + "</p>" +
      '<a href="' + C.signup + '" style="display:flex;align-items:center;justify-content:center;height:46px;border-radius:8px;background:#151211;color:#fff;font-weight:600;text-decoration:none;margin-bottom:8px">' + T.open + "</a>" +
      '<button type="button" style="width:100%;height:44px;border:0;background:transparent;color:#554E4D;font:inherit;cursor:pointer">' + T.back + "</button></div>";
    d.querySelector("button").onclick = function () { d.remove(); };
    document.body.appendChild(d);
  }

  var lastUser = 0;
  // A press on a button (or a form submit) — typing in a field does not count.
  window.addEventListener("click", function (e) {
    if (e.target && e.target.closest && e.target.closest("button,[type=submit],[role=button]")) lastUser = Date.now();
  }, true);
  window.addEventListener("submit", function () { lastUser = Date.now(); }, true);
  // sendBeacon (analytics) never leaves the browser either.
  if (navigator.sendBeacon) navigator.sendBeacon = function () { return true; };
  var realFetch = window.fetch.bind(window);
  window.fetch = function (input, init) {
    var method = ((init && init.method) || (input && input.method) || "GET").toUpperCase();
    var headers = (init && init.headers) || {};
    var isAction = headers["Next-Action"] || headers["next-action"] || (headers.get && headers.get("Next-Action"));
    if (method !== "GET" || isAction) {
      // Only a write the visitor just asked for (a click or key press) shows the dialog; background
      // writes (saving a half-filled checkout, counters) are dropped quietly.
      if (Date.now() - lastUser < 2500) dialog();
      return new Promise(function () {}); // nothing is sent; the page waits
    }
    return realFetch(input, init);
  };
  document.addEventListener("submit", function (e) {
    var f = e.target;
    if (f && f.method && f.method.toLowerCase() === "post") { e.preventDefault(); dialog(); }
  }, true);

  function bar() {
    if (document.querySelector("[data-demo-bar]")) return;
    var b = document.createElement("div");
    b.setAttribute("data-demo-bar", "");
    var st = document.createElement("style");
    // Above the store's mobile tab bar on phones.
    st.textContent = "[data-demo-bar]{position:fixed;left:50%;transform:translateX(-50%);bottom:12px;z-index:2147483645;width:max-content;max-width:calc(100% - 24px);display:flex;gap:4px 12px;align-items:center;flex-wrap:wrap;justify-content:center;background:#151211;color:#fff;border-radius:16px;padding:8px 16px;font-size:13px;line-height:1.4;box-shadow:0 8px 24px rgba(0,0,0,.25);text-align:center}@media (max-width:767px){[data-demo-bar]{bottom:calc(76px + env(safe-area-inset-bottom));font-size:12px}}";
    document.head.appendChild(st);
    b.innerHTML = "<span>" + T.bar + '</span><a href="' + C.signup + '" style="color:#FFD335;font-weight:600;text-decoration:none;white-space:nowrap">' + T.cta + "</a>";
    document.body.appendChild(b);
  }
  // After React has hydrated the page, so the extra element never upsets hydration.
  window.addEventListener("load", function () { setTimeout(bar, 600); });
})();
