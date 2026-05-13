import Image from "next/image";
import Link from "next/link";
import { Nav, Footer } from "@/components/nav";
import { products } from "@/lib/products";

export const metadata = { title: "archive — ddd" };

// archive shows everything ever made, larger cells, no prices.
const grid = [...products, ...products, ...products];

export default function Archive() {
  return (
    <>
      <div className="denim-plate" aria-hidden />
      <Nav />
      <main className="pt-[58px]">
        <div className="px-4 md:px-6 pt-8 pb-4 flex items-end justify-between">
          <h2 className="text-[10px] uppercase tracking-[0.32em] text-bone/65">archive</h2>
          <span className="text-[9px] uppercase tracking-[0.3em] text-bone/35">mmxxvi — current</span>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-12 px-3 md:px-6 pb-10">
          {grid.map((p, i) => (
            <li key={`${p.slug}-${i}`}>
              <Link href={`/objects/${p.slug}`} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden bg-p9/95">
                  <Image
                    src={p.images[i % p.images.length]}
                    alt={p.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-opacity duration-500 group-hover:opacity-90"
                  />
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-bone/85">
                  {p.lot} — {p.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <Footer />
      </main>
    </>
  );
}
