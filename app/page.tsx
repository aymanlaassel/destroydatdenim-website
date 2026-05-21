import Image from "next/image";
import Link from "next/link";
import { Nav, Footer } from "@/components/nav";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* hero */}
        <section className="grid lg:grid-cols-[1.15fr_0.85fr] border-b border-line">
          <div className="flex flex-col justify-between px-6 md:px-12 pt-16 pb-12 lg:py-12 lg:min-h-[calc(100vh-4rem)]">
            <div className="text-[11px] uppercase tracking-[0.22em] text-muted">
              independent denim
            </div>

            <h1 className="my-14 lg:my-0 text-[clamp(3rem,8.6vw,8.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.035em]">
              destroy
              <br />
              dat
              <br />
              denim
            </h1>

            <div className="flex items-end justify-between gap-6">
              <span className="text-[11px] uppercase tracking-[0.16em] text-muted">
                casablanca · tokyo · madrid · new york
              </span>
              <Link
                href="/objects"
                className="shrink-0 text-[12px] uppercase tracking-[0.18em] border-b border-fg pb-1 hover:opacity-60 transition-opacity"
              >
                shop →
              </Link>
            </div>
          </div>

          <div className="relative min-h-[68vh] lg:min-h-[calc(100vh-4rem)] border-t lg:border-t-0 lg:border-l border-line">
            <Image
              src="/assets/shoot/hero.jpg"
              alt="destroy dat denim — spring shoot"
              fill
              priority
              sizes="(min-width:1024px) 44vw, 100vw"
              className="object-cover"
            />
          </div>
        </section>

        {/* the denim */}
        <section className="px-6 md:px-12 py-24 md:py-32">
          <div className="flex items-baseline justify-between mb-10">
            <h2 className="text-[11px] uppercase tracking-[0.22em] text-muted">
              the denim
            </h2>
            <Link
              href="/objects"
              className="text-[11px] uppercase tracking-[0.16em] text-muted hover:text-fg transition-colors"
            >
              all →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 md:gap-x-5 gap-y-16">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>

        {/* statement */}
        <section className="relative border-t border-line">
          <Image
            src="/assets/shoot/band.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-bg/55" />
          <div className="relative px-6 md:px-12 py-36 md:py-56">
            <h2 className="text-[clamp(2.75rem,8vw,7.5rem)] font-bold uppercase leading-[0.88] tracking-[-0.035em]">
              denim
              <br />
              doesn&apos;t lie
            </h2>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
