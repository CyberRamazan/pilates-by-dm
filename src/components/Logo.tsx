"use client";

import Image from "next/image";
import { useState } from "react";

type LogoProps = {
  className?: string;
  variant?: "header" | "footer";
};

export function Logo({ className = "", variant = "header" }: LogoProps) {
  const [imgError, setImgError] = useState(false);
  const size =
    variant === "header"
      ? "h-11 w-11 md:h-12 md:w-12"
      : "h-10 w-10 md:h-11 md:w-11";

  return (
    <a
      href="#"
      className={`group inline-flex shrink-0 items-center ${className}`}
      aria-label="MIND BODY pilates center"
    >
      {!imgError ? (
        <Image
          src="/logo-mind-body.png"
          alt=""
          width={96}
          height={96}
          className={`${size} object-contain transition-opacity duration-500 group-hover:opacity-75`}
          onError={() => setImgError(true)}
          priority={variant === "header"}
        />
      ) : (
        <span className="font-display text-[10px] font-bold uppercase tracking-widest text-ink">
          MB
        </span>
      )}
    </a>
  );
}
