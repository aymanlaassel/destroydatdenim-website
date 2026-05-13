import Link from "next/link";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  tone?: "bone" | "white";
};

const sizeMap = {
  sm: "w-[88px] md:w-[108px]",
  md: "w-[160px] md:w-[200px]",
  lg: "w-[260px] md:w-[360px]",
} as const;

// Use the logo PNG as a luminance mask — bright graffiti stays, dark denim drops to transparent.
// We then fill the cutout with bone/white so the mark is painted in pigment onto the denim plate.
export function Logo({ size = "sm", tone = "bone" }: LogoProps) {
  const color = tone === "white" ? "#ece9df" : "var(--color-bone)";
  return (
    <Link href="/" aria-label="destroy dat denim — home" className="inline-block">
      <span
        aria-hidden
        className={`${sizeMap[size]} block`}
        style={{
          aspectRatio: "994 / 1240",
          backgroundColor: color,
          WebkitMaskImage: "url(/assets/denim-raw.png)",
          maskImage: "url(/assets/denim-raw.png)",
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          maskMode: "luminance",
          WebkitMaskComposite: "source-over",
          // Safari fallback for luminance masking
          ...({ WebkitMaskSourceType: "luminance" } as React.CSSProperties),
        }}
      />
    </Link>
  );
}
