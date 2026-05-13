import Link from "next/link";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  variant?: "mark" | "wordmark";
};

const sizeMap = {
  sm: "text-[22px]",
  md: "text-[34px]",
  lg: "text-[64px]",
} as const;

// Placeholder type-set ddd. Swap with your hand-drawn SVG when ready.
export function Logo({ size = "md", variant = "mark" }: LogoProps) {
  return (
    <Link href="/" aria-label="destroy dat denim — home" className="inline-flex items-baseline gap-3">
      <span
        className={`${sizeMap[size]} leading-none tracking-[-0.04em] font-serif text-bone select-none`}
        style={{ fontFamily: "var(--font-serif)" }}
      >
        ddd
      </span>
      {variant === "wordmark" && (
        <span className="text-[10px] uppercase tracking-[0.32em] text-bone/55 mb-[2px]">
          destroy dat denim
        </span>
      )}
    </Link>
  );
}
