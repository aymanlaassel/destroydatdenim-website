import Image from "next/image";
import Link from "next/link";

type LogoProps = { size?: "xs" | "sm" | "md" };

const sizeMap = {
  xs: "w-[36px] md:w-[42px]",
  sm: "w-[56px] md:w-[64px]",
  md: "w-[96px] md:w-[112px]",
} as const;

export function Logo({ size = "xs" }: LogoProps) {
  return (
    <Link href="/" aria-label="destroy dat denim — home" className="inline-block">
      <Image
        src="/assets/logo.png"
        alt="destroy dat denim"
        width={953}
        height={1191}
        priority
        className={`${sizeMap[size]} h-auto select-none`}
      />
    </Link>
  );
}
