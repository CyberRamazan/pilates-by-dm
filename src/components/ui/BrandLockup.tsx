import { FOUNDER_SCRIPT } from "@/lib/constants";

type BrandLockupProps = {
  size?: "hero" | "section";
  className?: string;
};

export function BrandLockup({ size = "section", className = "" }: BrandLockupProps) {
  const isHero = size === "hero";

  return (
    <div className={className}>
      <p
        className={`font-display font-bold uppercase tracking-[0.18em] text-ink ${
          isHero ? "text-[clamp(1.5rem,4vw,2.25rem)]" : "text-lg md:text-xl"
        }`}
      >
        Pilates Center
      </p>
      <p
        className={`font-script text-ink/90 ${
          isHero ? "mt-1 text-[clamp(1.75rem,5vw,2.75rem)]" : "mt-0.5 text-2xl md:text-3xl"
        }`}
      >
        {FOUNDER_SCRIPT}
      </p>
    </div>
  );
}
