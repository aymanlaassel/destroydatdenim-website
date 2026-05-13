import { Nav, Footer } from "@/components/nav";

export const metadata = { title: "info — ddd" };

export default function Info() {
  return (
    <main className="min-h-screen flex flex-col">
      <Nav />
      <div className="flex-1 pt-28 pb-20 px-6 md:px-10">
        <div className="max-w-2xl space-y-12">
          <div>
            <div className="text-[10px] uppercase tracking-[0.32em] text-bone/45 mb-4">info</div>
            <p className="font-serif text-[28px] md:text-[34px] leading-[1.15] tracking-[-0.01em] text-bone"
               style={{ fontFamily: "var(--font-serif)" }}>
              an independent denim house.
              <br />
              casablanca — tokyo — madrid — new york.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-6 text-[12px] tracking-wide">
            <div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-bone/40 mb-2">contact</div>
              <a href="mailto:contact@destroydatdenim.com" className="text-bone/85 hover:text-bone">
                contact@destroydatdenim.com
              </a>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-bone/40 mb-2">instagram</div>
              <a href="https://instagram.com/destroydatdenim" className="text-bone/85 hover:text-bone">
                @destroydatdenim
              </a>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-bone/40 mb-2">press</div>
              <a href="mailto:press@destroydatdenim.com" className="text-bone/85 hover:text-bone">
                press@destroydatdenim.com
              </a>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-bone/40 mb-2">stockists</div>
              <span className="text-bone/85">by request.</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
