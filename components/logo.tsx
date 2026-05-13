import Image from "next/image";
import Link from "next/link";

type LogoProps = { size?: "sm" | "md" | "lg" };

const sizeMap = {
  sm: "w-[88px] md:w-[108px]",
  md: "w-[160px] md:w-[200px]",
  lg: "w-[260px] md:w-[360px]",
} as const;

export function Logo({ size = "sm" }: LogoProps) {
  return (
    <Link href="/" aria-label="destroy dat denim — home" className="inline-block">
      <Image
        src="/assets/denim-raw.png"
        alt="destroy dat denim"
        width={480}
        height={600}
        priority
        className={`${sizeMap[size]} h-auto select-none mix-blend-screen`}
      />
    </Link>
  );
}
