import Link from "next/link";

type LogoProps = { size?: "xs" | "sm" | "md" };

const sizeMap = {
  xs: "w-[28px] md:w-[32px]",
  sm: "w-[44px] md:w-[52px]",
  md: "w-[88px] md:w-[108px]",
} as const;

// luminance-mask the ddd graffiti and fill it ink-black so it lives on the white page.
export function Logo({ size = "xs" }: LogoProps) {
  return (
    <Link href="/" aria-label="destroy dat denim — home" className="inline-block">
      <span
        aria-hidden
        className={`${sizeMap[size]} block`}
        style={{
          aspectRatio: "994 / 1240",
          backgroundColor: "var(--color-topbar-ink)",
          WebkitMaskImage: "url(/assets/denim-raw.png)",
          maskImage: "url(/assets/denim-raw.png)",
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          maskMode: "luminance",
          ...({ WebkitMaskSourceType: "luminance" } as React.CSSProperties),
        }}
      />
    </Link>
  );
}
