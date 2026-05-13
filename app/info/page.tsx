import Image from "next/image";
import { Nav, Footer } from "@/components/nav";

export const metadata = { title: "info — ddd" };

export default function Info() {
  return (
    <>
      <div className="denim-plate" aria-hidden />
      <Nav />
      <main className="pt-[58px]">
        <div className="px-4 md:px-6 pt-10 pb-10">
          <div className="max-w-2xl space-y-12 bg-p1/55 backdrop-blur-[2px] p-6 md:p-9 border border-bone/12">
            <div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-bone/55 mb-4">info</div>
              <p className="text-[18px] md:text-[22px] leading-[1.4] tracking-[0.01em] text-bone uppercase">
                an independent denim house.
                <br />
                casablanca · tokyo · madrid · new york.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-[11px] tracking-wide">
              <div>
                <div className="text-[10px] uppercase tracking-[0.32em] text-bone/40 mb-2">contact</div>
                <a href="mailto:contact@destroydatdenim.com" className="text-bone/85 hover:text-bone">contact@destroydatdenim.com</a>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.32em] text-bone/40 mb-2">instagram</div>
                <a href="https://instagram.com/destroydatdenim" className="text-bone/85 hover:text-bone">@destroydatdenim</a>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.32em] text-bone/40 mb-2">press</div>
                <a href="mailto:press@destroydatdenim.com" className="text-bone/85 hover:text-bone">press@destroydatdenim.com</a>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.32em] text-bone/40 mb-2">stockists</div>
                <span className="text-bone/85">by request.</span>
              </div>
            </div>

            <div className="pt-6 border-t border-bone/10">
              <div className="text-[10px] uppercase tracking-[0.32em] text-bone/40 mb-4">palette</div>
              <Image
                src="/assets/palette.png"
                alt="palette"
                width={2454}
                height={904}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
