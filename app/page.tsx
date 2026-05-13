import Image from "next/image";
import Link from "next/link";
import { Nav, Footer } from "@/components/nav";
import { products, formatPrice } from "@/lib/products";

// repeat the catalogue so the grid feels populated (like a stocked PLP).
// remove this once real catalogue grows.
const grid = [...products, ...products, ...products, ...products];

export default function Home() {
  return (
    <>
      <div className="denim-plate" aria-hidden />
      <Nav />
      <main className="pt-[58px]">
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-10 px-3 md:px-6 pt-6 pb-10">
          {grid.map((p, i) => (
            <li key={`${p.slug}-${i}`}>
              <Link href={`/objects/${p.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-p9/95">
                  <Image
                    src={p.images[i % p.images.length]}
                    alt={p.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-opacity duration-500 group-hover:opacity-90"
                  />
                </div>
                <div className="mt-2 flex items-baseline justify-between gap-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-bone/90 truncate">
                    {p.name}
                  </span>
                  <span className="text-[10px] tracking-wide text-bone/55 shrink-0">
                    {formatPrice(p.priceCents, p.currency)}
                  </span>
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
