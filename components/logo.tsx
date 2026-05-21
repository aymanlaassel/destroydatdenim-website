import Image from "next/image";

type LogoProps = { size?: "xs" | "sm" | "md" | "xl"; className?: string };

const sizeMap = {
  xs: "w-[30px] md:w-[34px]",
  sm: "w-[56px] md:w-[64px]",
  md: "w-[110px] md:w-[130px]",
  xl: "w-[180px] md:w-[260px]",
} as const;

// Pure mark — no link of its own, so callers can wrap it freely.
export function Logo({ size = "xs", className = "" }: LogoProps) {
  return (
    <Image
      src="/assets/logo.png"
      alt="destroy dat denim"
      width={953}
      height={1191}
      priority
      className={`${sizeMap[size]} ${className} h-auto select-none`}
    />
  );
}
