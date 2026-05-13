"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {
  href: string;
  src: string;
  alt: string;
  index: number;
};

// Falls back to a quiet placeholder if the model image isn't on disk yet.
export function ModelFigure({ href, src, alt, index }: Props) {
  const [missing, setMissing] = useState(false);

  return (
    <Link href={href} aria-label={alt} className="group block">
      <div className="relative w-full aspect-[2/3] overflow-hidden">
        {missing ? (
          <div className="absolute inset-0 flex items-end justify-center pb-8 text-[10px] uppercase tracking-[0.3em] text-muted">
            look {String(index + 1).padStart(2, "0")}
          </div>
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
            className="object-contain object-bottom transition-opacity duration-500 group-hover:opacity-90"
            onError={() => setMissing(true)}
          />
        )}
      </div>
    </Link>
  );
}
