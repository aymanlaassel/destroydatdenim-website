import Image from "next/image";
import { notFound } from "next/navigation";
import { Nav, Footer } from "@/components/nav";
import { AcquireButton } from "@/components/acquire-button";
import { formatPrice, getProduct, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return { title: "objects — ddd" };
  return { title: `${p.name} — ddd` };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <main className="min-h-screen flex flex-col">
      <Nav />
      <div className="flex-1 pt-28 pb-20 px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* image stack */}
          <div className="space-y-2">
            {product.images.map((src, i) => (
              <div key={src} className="relative aspect-[4/5] bg-denim/40 overflow-hidden">
                <Image
                  src={src}
                  alt={`${product.name} — ${i + 1}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          {/* detail panel */}
          <aside className="md:sticky md:top-28 self-start space-y-10">
            <div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-bone/45 mb-3">
                {product.lot}
              </div>
              <h1 className="font-serif text-[36px] md:text-[44px] leading-[1] tracking-[-0.02em] text-bone"
                  style={{ fontFamily: "var(--font-serif)" }}>
                {product.name}
              </h1>
              <div className="mt-4 text-[12px] tracking-wide text-bone/65">
                {formatPrice(product.priceCents, product.currency)}
              </div>
            </div>

            <dl className="grid grid-cols-[110px_1fr] gap-y-3 text-[11px] uppercase tracking-[0.22em]">
              <dt className="text-bone/40">material</dt>
              <dd className="text-bone/80 normal-case tracking-normal text-[12px]">{product.material}</dd>
              <dt className="text-bone/40">origin</dt>
              <dd className="text-bone/80 normal-case tracking-normal text-[12px]">{product.origin}</dd>
              {product.note && (
                <>
                  <dt className="text-bone/40">note</dt>
                  <dd className="text-bone/65 normal-case tracking-normal text-[12px]">{product.note}</dd>
                </>
              )}
            </dl>

            <AcquireButton slug={product.slug} sizes={product.sizes} />
          </aside>
        </div>
      </div>
      <Footer />
    </main>
  );
}
