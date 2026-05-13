import Link from "next/link";
import { Nav, Footer } from "@/components/nav";
import { ModelFigure } from "@/components/model-figure";
import { homeModels } from "@/lib/models";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* hero row of 5 models — full-bleed, on white */}
        <section className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0">
            {homeModels.map((m, i) => (
              <ModelFigure
                key={m.id}
                href={m.href}
                src={m.image}
                alt={m.alt}
                index={i}
              />
            ))}
          </div>

          {/* center "SHOP ALL" CTA overlay */}
          <Link
            href="/objects"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-ink/90 px-7 md:px-10 py-3 md:py-3.5 text-[11px] uppercase tracking-[0.18em] text-ink bg-paper/0 hover:bg-ink hover:text-paper transition-colors duration-300"
          >
            shop all
          </Link>
        </section>

        <Footer />
      </main>
    </>
  );
}
