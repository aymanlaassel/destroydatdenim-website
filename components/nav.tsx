import Link from "next/link";
import { Logo } from "./logo";

const navItems: { label: string; href: string }[] = [
  { label: "shop all", href: "/objects" },
  { label: "denim", href: "/objects" },
  { label: "jackets", href: "/objects" },
  { label: "shirts", href: "/objects" },
  { label: "archive", href: "/archive" },
  { label: "info", href: "/info" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-bone/15 bg-p1/55 backdrop-blur-[2px]">
      <div className="flex items-center justify-between px-4 md:px-6 h-[58px]">
        {/* logo — small */}
        <div className="w-[80px] md:w-[96px]">
          <Logo size="sm" />
        </div>

        {/* center nav */}
        <nav className="hidden md:flex items-center gap-6 text-[10px] uppercase tracking-[0.28em] text-bone/80">
          {navItems.map((it) => (
            <Link key={it.label} href={it.href} className="hover:text-bone transition-colors duration-200">
              {it.label}
            </Link>
          ))}
        </nav>

        {/* right utilities */}
        <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.28em] text-bone/80">
          <button aria-label="search" className="hover:text-bone">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>
            </svg>
          </button>
          <Link href="/info" className="hidden sm:inline hover:text-bone">account</Link>
          <Link href="/cart" aria-label="cart" className="hover:text-bone">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 6h16l-1.5 12a2 2 0 0 1-2 1.8H7.5a2 2 0 0 1-2-1.8L4 6Z"/>
              <path d="M8 6V4a4 4 0 0 1 8 0v2"/>
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="px-4 md:px-6 py-6 mt-16 border-t border-bone/10 flex items-end justify-between text-[9px] uppercase tracking-[0.3em] text-bone/45">
      <span>denim doesn&apos;t lie.</span>
      <span>© ddd — casablanca · tokyo · madrid · new york</span>
    </footer>
  );
}
