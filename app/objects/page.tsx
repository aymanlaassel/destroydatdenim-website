import Link from "next/link";
import { Nav, Footer } from "@/components/nav";
import { formatPrice, products } from "@/lib/products";

export const metadata = { title: "objects — ddd" };

export default function Objects() {
  return (
    <main className="min-h-screen flex flex-col">
      <Nav />
      <div className="flex-1 pt-28 pb-20 px-6 md:px-10">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-[11px] uppercase tracking-[0.32em] text-bone/55">objects</h2>
          <span className="text-[10px] uppercase tracking-[0.3em] text-bone/30">
            limited runs
          </span>
        </div>

        <ul className="divide-y divide-bone/10 border-y border-bone/10">
          {products.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/objects/${p.slug}`}
                className="grid grid-cols-12 items-baseline gap-4 py-6 group transition-colors duration-300 hover:bg-bone/[0.02] px-2 -mx-2"
              >
                <span className="col-span-2 text-[11px] uppercase tracking-[0.28em] text-bone/45">
                  {p.lot}
                </span>
                <span className="col-span-6 md:col-span-7 text-[15px] tracking-tight text-bone/90">
                  {p.name}
                </span>
                <span className="col-span-2 hidden md:block text-[11px] uppercase tracking-[0.28em] text-bone/40">
                  {p.material.split(",")[0]}
                </span>
                <span className="col-span-4 md:col-span-1 text-right text-[12px] tracking-wide text-bone/80">
                  {formatPrice(p.priceCents, p.currency)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </main>
  );
}
