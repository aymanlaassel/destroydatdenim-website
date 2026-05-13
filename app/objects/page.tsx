import Image from "next/image";
import Link from "next/link";
import { Nav, Footer } from "@/components/nav";
import { formatPrice, products } from "@/lib/products";

export const metadata = { title: "objects — ddd" };

const grid = [...products, ...products, ...products, ...products];

export default function Objects() {
  return (
    <>
      <Nav />
      <main>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-10 px-3 md:px-6 pt-6 pb-10">
          {grid.map((p, i) => (
            <li key={`${p.slug}-${i}`}>
              <Link href={`/objects/${p.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-page">
                  <Image
                    src={p.images[i % p.images.length]}
                    alt={p.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    className="object-contain object-bottom transition-opacity duration-500 group-hover:opacity-90"
                  />
                </div>
                <div className="mt-2 flex items-baseline justify-between gap-2">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-ink truncate">{p.name}</span>
                  <span className="text-[10px] tracking-wide text-muted shrink-0">{formatPrice(p.priceCents, p.currency)}</span>
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
