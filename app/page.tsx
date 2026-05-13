import Link from "next/link";
import { Logo } from "@/components/logo";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* fullscreen denim plate */}
      <div
        className="absolute inset-0 -z-10 bg-[url('/assets/hero.svg')] bg-cover bg-center"
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-ink/40" aria-hidden />

      {/* top: logo only — no header chrome on the entry */}
      <div className="px-6 md:px-10 pt-6 md:pt-8">
        <Logo size="sm" />
      </div>

      {/* center: deliberately quiet */}
      <section className="flex min-h-[78vh] items-end px-6 md:px-10 pb-12">
        <div className="max-w-2xl">
          <h1
            className="font-serif text-bone leading-[0.92] tracking-[-0.03em] text-[18vw] md:text-[12vw] lg:text-[180px]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            ddd
          </h1>
          <p className="mt-6 text-[11px] uppercase tracking-[0.32em] text-bone/55">
            denim doesn&apos;t lie.
          </p>
        </div>
      </section>

      {/* bottom: minimal nav, sits like signage on a storefront */}
      <nav className="px-6 md:px-10 pb-8 flex items-end justify-between text-[11px] uppercase tracking-[0.28em] text-bone/55">
        <div className="flex gap-7">
          <Link href="/archive" className="hover:text-bone transition-colors duration-300">archive</Link>
          <Link href="/objects" className="hover:text-bone transition-colors duration-300">objects</Link>
          <Link href="/info" className="hover:text-bone transition-colors duration-300">info</Link>
        </div>
        <span className="hidden md:block text-bone/35">est. — independent</span>
      </nav>
    </main>
  );
}
