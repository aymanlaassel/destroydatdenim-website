import Link from "next/link";
import { Nav, Footer } from "@/components/nav";

export const metadata = { title: "received — ddd" };

export default function Success() {
  return (
    <main className="min-h-screen flex flex-col">
      <Nav />
      <div className="flex-1 pt-40 pb-20 px-6 md:px-10">
        <div className="max-w-xl space-y-6">
          <div className="text-[10px] uppercase tracking-[0.32em] text-bone/45">received</div>
          <p className="font-serif text-[30px] leading-[1.15] tracking-[-0.01em] text-bone"
             style={{ fontFamily: "var(--font-serif)" }}>
            thank you. a confirmation has been sent.
          </p>
          <Link href="/" className="inline-block text-[11px] uppercase tracking-[0.32em] text-bone/65 border-b border-bone/30 hover:border-bone hover:text-bone pb-[3px] transition-colors duration-300">
            return
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
