import Image from "next/image";
import { Nav, Footer } from "@/components/nav";

export const metadata = { title: "info — ddd" };

export default function Info() {
  return (
    <>
      <Nav />
      <main>
        <div className="px-5 md:px-8 pt-10 pb-10">
          <div className="max-w-2xl space-y-12">
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-muted mb-4">info</div>
              <p className="text-[18px] md:text-[22px] leading-[1.4] tracking-[0.02em] text-ink uppercase">
                an independent denim house.
                <br />
                casablanca · tokyo · madrid · new york.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-[11px] tracking-wide">
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-muted mb-2">contact</div>
                <a href="mailto:contact@destroydatdenim.com" className="text-ink hover:opacity-60">contact@destroydatdenim.com</a>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-muted mb-2">instagram</div>
                <a href="https://instagram.com/destroydatdenim" className="text-ink hover:opacity-60">@destroydatdenim</a>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-muted mb-2">press</div>
                <a href="mailto:press@destroydatdenim.com" className="text-ink hover:opacity-60">press@destroydatdenim.com</a>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-muted mb-2">stockists</div>
                <span className="text-ink">by request.</span>
              </div>
            </div>

            <div className="pt-6 border-t border-hair">
              <div className="text-[10px] uppercase tracking-[0.22em] text-muted mb-4">palette</div>
              <Image
                src="/assets/palette.png"
                alt="palette"
                width={2454}
                height={904}
                className="w-full h-auto bg-ink"
              />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
