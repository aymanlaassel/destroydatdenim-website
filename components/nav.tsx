import Link from "next/link";
import { Logo } from "./logo";

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-5 md:px-10 md:py-6">
      <Logo size="sm" />
      <nav className="flex items-center gap-7 text-[11px] uppercase tracking-[0.28em] text-bone/65">
        <Link href="/archive" className="hover:text-bone transition-colors duration-300">archive</Link>
        <Link href="/objects" className="hover:text-bone transition-colors duration-300">objects</Link>
        <Link href="/info" className="hover:text-bone transition-colors duration-300">info</Link>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="px-6 md:px-10 py-8 flex items-end justify-between text-[10px] uppercase tracking-[0.3em] text-bone/45">
      <span>denim doesn&apos;t lie.</span>
      <span>© ddd — casablanca · tokyo · madrid · new york</span>
    </footer>
  );
}
