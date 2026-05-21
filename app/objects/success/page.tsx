import Link from "next/link";
import { Nav, Footer } from "@/components/nav";

export const metadata = { title: "thank you — destroy dat denim" };

export default function Success() {
  return (
    <>
      <Nav />
      <main className="px-6 md:px-12 min-h-[68vh] flex items-center">
        <div>
          <h1 className="text-[clamp(2.25rem,5.5vw,4rem)] font-bold uppercase tracking-[-0.035em]">
            thank you
          </h1>
          <p className="mt-5 text-[13px] text-muted">
            your order is confirmed.
          </p>
          <Link
            href="/"
            className="inline-block mt-10 text-[11px] uppercase tracking-[0.16em] text-muted hover:text-fg transition-colors"
          >
            return
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
