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
    <>
      <div className="denim-plate" aria-hidden />
      <Nav />
      <main className="pt-[58px]">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-3 md:gap-6 px-3 md:px-6 pt-3 pb-10">
          {/* image stack */}
          <div className="space-y-3">
            {product.images.map((src, i) => (
              <div key={`${src}-${i}`} className="relative aspect-[4/5] bg-p9/95 overflow-hidden">
                <Image
                  src={src}
                  alt={`${product.name} — ${i + 1}`}
                  fill
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          {/* detail panel */}
          <aside className="md:sticky md:top-[74px] self-start space-y-8 bg-p1/55 backdrop-blur-[2px] p-5 md:p-7 border border-bone/12">
            <div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-bone/55 mb-2">
                {product.lot}
              </div>
              <h1 className="text-[20px] md:text-[22px] uppercase tracking-[0.08em] text-bone">
                {product.name}
              </h1>
              <div className="mt-3 text-[12px] tracking-wide text-bone/70">
                {formatPrice(product.priceCents, product.currency)}
              </div>
            </div>

            <dl className="grid grid-cols-[96px_1fr] gap-y-3 text-[10px] uppercase tracking-[0.22em]">
              <dt className="text-bone/45">material</dt>
              <dd className="text-bone/85 normal-case tracking-normal text-[11px]">{product.material}</dd>
              <dt className="text-bone/45">origin</dt>
              <dd className="text-bone/85 normal-case tracking-normal text-[11px]">{product.origin}</dd>
              {product.note && (
                <>
                  <dt className="text-bone/45">note</dt>
                  <dd className="text-bone/65 normal-case tracking-normal text-[11px]">{product.note}</dd>
                </>
              )}
            </dl>

            <AcquireButton slug={product.slug} sizes={product.sizes} />
          </aside>
        </div>
        <Footer />
      </main>
    </>
  );
}
