import Link from "next/link";
import { Logo } from "./logo";

const navItems: { label: string; href: string }[] = [
  { label: "shop all", href: "/objects" },
  { label: "spring26", href: "/objects" },
  { label: "jackets", href: "/objects" },
  { label: "denim", href: "/objects" },
  { label: "leather", href: "/objects" },
  { label: "japanese line", href: "/objects" },
  { label: "shoes", href: "/objects" },
  { label: "belts", href: "/objects" },
  { label: "women", href: "/objects" },
  { label: "basic line", href: "/objects" },
  { label: "italian denim line", href: "/objects" },
  { label: "t-shirts", href: "/objects" },
  { label: "sweatshirts", href: "/objects" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-topbar text-topbar-ink border-b border-black/20">
      <div className="flex items-center justify-between px-5 md:px-7 h-[68px]">
        {/* logo — tiny */}
        <div className="shrink-0">
          <Logo size="xs" />
        </div>

        {/* center nav — horizontal scroll on small screens */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-[11px] uppercase tracking-[0.06em] text-topbar-ink whitespace-nowrap overflow-x-auto">
          {navItems.map((it) => (
            <Link key={it.label} href={it.href} className="hover:opacity-60 transition-opacity">
              {it.label}
            </Link>
          ))}
        </nav>

        {/* mobile: condensed center menu */}
        <nav className="flex lg:hidden items-center gap-5 text-[11px] uppercase tracking-[0.06em] text-topbar-ink">
          <Link href="/objects" className="hover:opacity-60">shop</Link>
          <Link href="/archive" className="hover:opacity-60">archive</Link>
          <Link href="/info" className="hover:opacity-60">info</Link>
        </nav>

        {/* right utilities */}
        <div className="flex items-center gap-4 text-topbar-ink">
          <button aria-label="search" className="hover:opacity-60">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>
            </svg>
          </button>
          <Link href="/info" aria-label="account" className="hover:opacity-60">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 5-6 8-6s6.5 2 8 6"/>
            </svg>
          </Link>
          <Link href="/cart" aria-label="cart" className="hover:opacity-60">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
    <footer className="px-5 md:px-7 py-6 mt-20 border-t border-hair flex items-end justify-between text-[10px] uppercase tracking-[0.2em] text-muted">
      <span>denim doesn&apos;t lie.</span>
      <span>© ddd — casablanca · tokyo · madrid · new york</span>
    </footer>
  );
}
