// Demo cart: lives only in this browser (localStorage). Nothing is sent anywhere.
type Opt = { label: string; price: number; was?: number };
type P = { slug: string; name: string; img: string; options: Opt[] };
type Line = { slug: string; opt: number; qty: number };

const data = JSON.parse(document.getElementById("demo-data")?.textContent || "{}");
const BN = "০১২৩৪৫৬৭৮৯";
const bn = (n: number) => (data.lang === "en" ? n.toLocaleString("en-US") : n.toLocaleString("en-US").replace(/\d/g, (d) => BN[+d]));
const taka = (n: number) => `৳${bn(Math.round(n))}`;
const products: Record<string, P> = Object.fromEntries((data.products as P[] | undefined)?.map((p) => [p.slug, p]) ?? []);
const KEY = `jukto-demo-cart-${data.theme}`;
const delivery = data.delivery as { inside: number; outside: number; freeOver?: number };

function read(): Line[] {
  try {
    return (JSON.parse(localStorage.getItem(KEY) || "[]") as Line[]).filter((l) => products[l.slug]?.options[l.opt]);
  } catch {
    return [];
  }
}
function write(lines: Line[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(lines));
  } catch {
    /* private mode: the cart lasts until the page closes */
  }
  render();
}
const priceOf = (l: Line) => products[l.slug].options[l.opt].price;
const subtotal = (lines: Line[]) => lines.reduce((s, l) => s + priceOf(l) * l.qty, 0);

export function add(slug: string, opt = 0, qty = 1) {
  const lines = read();
  const found = lines.find((l) => l.slug === slug && l.opt === opt);
  if (found) found.qty += qty;
  else lines.push({ slug, opt, qty });
  write(lines);
}

function toast(text: string) {
  const el = document.getElementById("demo-toast");
  if (!el) return;
  el.textContent = text;
  el.dataset.show = "1";
  clearTimeout((el as any)._t);
  (el as any)._t = setTimeout(() => (el.dataset.show = ""), 1800);
}

function render() {
  const lines = read();
  const count = lines.reduce((s, l) => s + l.qty, 0);
  document.querySelectorAll<HTMLElement>("[data-cart-count]").forEach((el) => {
    el.textContent = bn(count);
    el.hidden = count === 0;
  });
  document.querySelectorAll<HTMLElement>("[data-cart-total]").forEach((el) => (el.textContent = taka(subtotal(lines))));

  const list = document.getElementById("cart-lines");
  if (list) {
    const empty = document.getElementById("cart-empty");
    const box = document.getElementById("cart-box");
    if (empty) empty.hidden = lines.length > 0;
    if (box) box.hidden = lines.length === 0;
    list.innerHTML = "";
    const tpl = document.getElementById("cart-line") as HTMLTemplateElement | null;
    lines.forEach((l, i) => {
      if (!tpl) return;
      const p = products[l.slug];
      const node = tpl.content.firstElementChild!.cloneNode(true) as HTMLElement;
      (node.querySelector("[data-img]") as HTMLImageElement).src = p.img;
      (node.querySelector("[data-img]") as HTMLImageElement).alt = p.name;
      node.querySelector("[data-name]")!.textContent = p.name;
      (node.querySelector("[data-name]") as HTMLAnchorElement).href = `/product/${p.slug}/`;
      node.querySelector("[data-opt]")!.textContent = p.options[l.opt].label;
      node.querySelector("[data-qty]")!.textContent = bn(l.qty);
      node.querySelector("[data-line-total]")!.textContent = taka(priceOf(l) * l.qty);
      node.querySelector("[data-minus]")!.addEventListener("click", () => {
        const all = read();
        all[i].qty -= 1;
        write(all.filter((x) => x.qty > 0));
      });
      node.querySelector("[data-plus]")!.addEventListener("click", () => {
        const all = read();
        all[i].qty += 1;
        write(all);
      });
      node.querySelector("[data-remove]")!.addEventListener("click", () => write(read().filter((_, j) => j !== i)));
      list.appendChild(node);
    });
  }

  const sum = document.getElementById("order-summary");
  if (sum) {
    const sub = subtotal(lines);
    const zone = (document.querySelector<HTMLInputElement>('input[name="zone"]:checked')?.value || "inside") as "inside" | "outside";
    const ship = lines.length === 0 ? 0 : delivery.freeOver && sub >= delivery.freeOver ? 0 : delivery[zone];
    sum.querySelector("[data-sub]")!.textContent = taka(sub);
    sum.querySelector("[data-ship]")!.textContent = ship === 0 && lines.length ? data.ui.free : taka(ship);
    sum.querySelector("[data-grand]")!.textContent = taka(sub + ship);
    const items = sum.querySelector("[data-items]");
    if (items)
      items.innerHTML = lines
        .map((l) => `<li class="flex justify-between gap-3"><span class="min-w-0 truncate">${products[l.slug].name} · ${products[l.slug].options[l.opt].label} × ${bn(l.qty)}</span><span class="shrink-0">${taka(priceOf(l) * l.qty)}</span></li>`)
        .join("");
  }
}

document.addEventListener("click", (e) => {
  const btn = (e.target as HTMLElement).closest<HTMLElement>("[data-add],[data-buy]");
  if (!btn) return;
  e.preventDefault();
  const slug = btn.dataset.add || btn.dataset.buy!;
  const form = btn.closest("[data-buy-box]");
  const opt = Number(form?.querySelector<HTMLInputElement>('input[name="opt"]:checked')?.value ?? btn.dataset.opt ?? 0);
  const qty = Number(form?.querySelector<HTMLElement>("[data-qty-value]")?.dataset.value ?? 1);
  add(slug, opt, qty);
  if (btn.dataset.buy) location.href = "/checkout/";
  else toast(data.ui.added);
});

document.addEventListener("change", (e) => {
  if ((e.target as HTMLInputElement).name === "zone") render();
});

// Demo checkout: no order is placed.
document.getElementById("checkout-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  (document.getElementById("demo-done") as HTMLDialogElement | null)?.showModal();
});

render();
