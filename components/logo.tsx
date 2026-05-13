import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  variant?: "tag" | "pair" | "design";
};

const sizeMap = {
  sm: { w: 96, cls: "w-[88px] md:w-[96px]" },
  md: { w: 180, cls: "w-[160px] md:w-[180px]" },
  lg: { w: 360, cls: "w-[260px] md:w-[360px]" },
} as const;

const srcMap = {
  tag: "/assets/logo-tag.png",
  pair: "/assets/logo-pair.png",
  design: "/assets/logo-design.png",
} as const;

export function Logo({ size = "md", variant = "tag" }: LogoProps) {
  const s = sizeMap[size];
  return (
    <Link href="/" aria-label="destroy dat denim — home" className="inline-block">
      <Image
        src={srcMap[variant]}
        alt="destroy dat denim"
        width={s.w * 4}
        height={s.w * 5}
        priority
        className={`${s.cls} h-auto select-none`}
      />
    </Link>
  );
}
