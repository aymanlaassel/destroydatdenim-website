import { Nav, Footer } from "@/components/nav";
import { Logo } from "@/components/logo";

export const metadata = { title: "info — destroy dat denim" };

export default function Info() {
  return (
    <>
      <Nav />
      <main>
        <section className="px-6 md:px-12 pt-20 md:pt-28 pb-28">
          <Logo size="md" />
          <h1 className="mt-14 md:mt-20 text-[clamp(2.25rem,6.4vw,5.25rem)] font-bold uppercase leading-[0.95] tracking-[-0.04em]">
            moroccan blood
            <br />
            japanese discipline
            <br />
            madrid streets
          </h1>
          <div className="mt-16 flex flex-col gap-2">
            <span className="text-[11px] uppercase tracking-[0.18em] text-muted">
              independent denim — casablanca
            </span>
            <a
              href="mailto:contact@destroydatdenim.com"
              className="text-[13px] text-muted hover:text-fg transition-colors w-fit"
            >
              contact@destroydatdenim.com
            </a>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
