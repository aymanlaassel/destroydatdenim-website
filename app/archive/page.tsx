import { Nav, Footer } from "@/components/nav";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";

export const metadata = { title: "archive — destroy dat denim" };

export default function Archive() {
  return (
    <>
      <Nav />
      <main>
        <section className="px-6 md:px-12 pt-16 md:pt-20">
          <h1 className="text-[clamp(2.75rem,7vw,6rem)] font-bold uppercase leading-[0.88] tracking-[-0.04em]">
            archive
          </h1>
          <p className="mt-5 text-[12px] uppercase tracking-[0.16em] text-muted">
            past lots — held on record
          </p>
        </section>
        <section className="px-6 md:px-12 pt-12 md:pt-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 md:gap-x-5 gap-y-16">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
