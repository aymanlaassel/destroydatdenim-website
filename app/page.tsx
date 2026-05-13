import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* full-bleed raw denim plate */}
      <Image
        src="/assets/denim-raw.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover -z-20"
      />
      <div className="absolute inset-0 -z-10 bg-ink/35" aria-hidden />

      {/* top-left: tiny ddd patch */}
      <div className="px-6 md:px-10 pt-6 md:pt-8">
        <Link href="/" aria-label="destroy dat denim — home" className="inline-block">
          <Image
            src="/assets/logo-tag.png"
            alt="destroy dat denim"
            width={120}
            height={150}
            priority
            className="w-[88px] md:w-[104px] h-auto"
          />
        </Link>
      </div>

      {/* center-stage: big ddd, lifted from the dark/light pair plate */}
      <section className="flex min-h-[72vh] items-center justify-center px-6 md:px-10">
        <Image
          src="/assets/logo-design.png"
          alt="destroy dat design"
          width={1600}
          height={1500}
          priority
          className="w-[78vw] md:w-[58vw] max-w-[760px] h-auto opacity-95"
        />
      </section>

      {/* bottom: minimal nav, like signage */}
      <nav className="absolute inset-x-0 bottom-0 px-6 md:px-10 pb-8 flex items-end justify-between text-[11px] uppercase tracking-[0.28em] text-bone/75">
        <div className="flex gap-7">
          <Link href="/archive" className="hover:text-bone transition-colors duration-300">archive</Link>
          <Link href="/objects" className="hover:text-bone transition-colors duration-300">objects</Link>
          <Link href="/info" className="hover:text-bone transition-colors duration-300">info</Link>
        </div>
        <span className="hidden md:block text-bone/50">denim doesn&apos;t lie.</span>
      </nav>
    </main>
  );
}
