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
      <Nav />
      <main>
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-3 md:gap-6 px-3 md:px-6 pt-3 pb-10">
          <div className="space-y-3">
            {product.images.map((src, i) => (
              <div key={`${src}-${i}`} className="relative aspect-[4/5] bg-page overflow-hidden">
                <Image
                  src={src}
                  alt={`${product.name} — ${i + 1}`}
                  fill
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="object-contain object-bottom"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          <aside className="md:sticky md:top-[84px] self-start space-y-8 p-5 md:p-7 border border-hair bg-paper">
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-muted mb-2">{product.lot}</div>
              <h1 className="text-[18px] md:text-[20px] uppercase tracking-[0.06em] text-ink">{product.name}</h1>
              <div className="mt-3 text-[12px] tracking-wide text-ink">{formatPrice(product.priceCents, product.currency)}</div>
            </div>

            <dl className="grid grid-cols-[88px_1fr] gap-y-3 text-[10px] uppercase tracking-[0.18em]">
              <dt className="text-muted">material</dt>
              <dd className="text-ink normal-case tracking-normal text-[11px]">{product.material}</dd>
              <dt className="text-muted">origin</dt>
              <dd className="text-ink normal-case tracking-normal text-[11px]">{product.origin}</dd>
              {product.note && (
                <>
                  <dt className="text-muted">note</dt>
                  <dd className="text-muted normal-case tracking-normal text-[11px]">{product.note}</dd>
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
