import Image from "next/image";
import Link from "next/link";
import { Nav, Footer } from "@/components/nav";
import { products } from "@/lib/products";

export const metadata = { title: "archive — ddd" };

export default function Archive() {
  return (
    <main className="min-h-screen flex flex-col">
      <Nav />
      <div className="flex-1 pt-28 pb-20 px-6 md:px-10">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-[11px] uppercase tracking-[0.32em] text-bone/55">archive</h2>
          <span className="text-[10px] uppercase tracking-[0.3em] text-bone/30">
            mmxxvi — current
          </span>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-16">
          {products.map((p) => (
            <li key={p.slug}>
              <Link href={`/objects/${p.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-denim/40">
                  <Image
                    src={p.images[0]}
                    alt={p.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-opacity duration-500 group-hover:opacity-80"
                  />
                </div>
                <div className="mt-3 flex items-baseline justify-between">
                  <span className="text-[11px] uppercase tracking-[0.28em] text-bone/65">
                    {p.lot}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.28em] text-bone/45">
                    {p.name}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </main>
  );
}
