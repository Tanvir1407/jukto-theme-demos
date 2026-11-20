// One Worker serves every demo shop. The host name picks the folder:
// demo-organic.jukto.bd -> dist/organic, demo-jewelry.jukto.bd -> dist/jewelry, ...
// Each demo was snapshotted with root paths (/_next, /uploads, /products/...),
// so the path is served from inside that demo's folder.
const DEMOS = ["organic", "fashion", "mensfashion", "generic", "jewelry", "craft"];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const sub = url.hostname.split(".")[0]; // "demo-organic"
    const demo = sub.startsWith("demo-") ? sub.slice(5) : "";
    if (!DEMOS.includes(demo)) {
      return new Response("Demo not found", { status: 404 });
    }
    const assetUrl = new URL(`/${demo}${url.pathname}${url.search}`, url.origin);
    let res = await env.ASSETS.fetch(new Request(assetUrl, request));
    // Asset redirects (trailing slash) point at /<demo>/...; strip the folder again.
    const loc = res.headers.get("location");
    if (loc) {
      const target = new URL(loc, assetUrl);
      if (target.pathname.startsWith(`/${demo}/`) || target.pathname === `/${demo}`) {
        target.pathname = target.pathname.slice(demo.length + 1) || "/";
        const h = new Headers(res.headers);
        h.set("location", target.pathname + target.search);
        return new Response(res.body, { status: res.status, headers: h });
      }
    }
    if (res.status === 404) {
      const page = await env.ASSETS.fetch(new Request(new URL(`/${demo}/404.html`, url.origin)));
      if (page.ok) return new Response(page.body, { status: 404, headers: page.headers });
    }
    return res;
  },
};
