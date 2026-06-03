type PetalDecorProps = {
  className?: string;
  variant?: "full" | "corner-tr" | "corner-br" | "hero";
};

export function PetalDecor({ className = "", variant = "full" }: PetalDecorProps) {
  if (variant === "corner-tr") {
    return (
      <svg
        className={`pointer-events-none text-lavender-petal/55 ${className}`}
        viewBox="0 0 400 400"
        fill="currentColor"
        aria-hidden
      >
        <path d="M280 40 C360 80 400 180 360 280 C320 360 220 400 140 360 C80 320 40 220 80 140 C120 60 200 0 280 40 Z" />
        <path
          d="M320 120 C380 160 400 240 360 300 C300 360 220 380 180 320"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.4"
        />
      </svg>
    );
  }

  if (variant === "corner-br") {
    return (
      <svg
        className={`pointer-events-none text-lavender-deep/40 ${className}`}
        viewBox="0 0 500 420"
        fill="currentColor"
        aria-hidden
      >
        <path d="M120 420 C40 360 0 260 60 160 C120 60 240 0 360 40 C460 80 500 200 460 300 C420 380 320 420 220 420 C180 420 140 420 120 420 Z" />
        <ellipse cx="320" cy="280" rx="140" ry="100" opacity="0.35" />
      </svg>
    );
  }

  if (variant === "hero") {
    return (
      <svg
        className={`pointer-events-none text-lavender-petal/50 ${className}`}
        viewBox="0 0 800 600"
        fill="currentColor"
        aria-hidden
      >
        <path d="M520 80 C640 40 760 120 780 260 C800 400 680 520 540 560 C400 600 260 520 200 380 C140 240 200 100 340 60 C420 40 480 60 520 80 Z" />
        <path d="M600 200 C700 180 760 280 720 380 C660 480 540 500 460 420 C380 340 420 220 520 180 C560 160 580 180 600 200 Z" opacity="0.6" />
        <path d="M80 480 C20 420 0 320 40 240 C80 160 180 120 260 160 C340 200 360 300 300 380 C240 460 140 520 80 480 Z" opacity="0.45" />
      </svg>
    );
  }

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <svg
        className="absolute -right-24 -top-16 h-[420px] w-[420px] text-lavender-petal/50 md:-right-8 md:h-[520px] md:w-[520px]"
        viewBox="0 0 400 400"
        fill="currentColor"
      >
        <path d="M280 40 C360 80 400 180 360 280 C320 360 220 400 140 360 C80 320 40 220 80 140 C120 60 200 0 280 40 Z" />
      </svg>
      <svg
        className="absolute -bottom-20 -left-16 h-[380px] w-[480px] text-lavender-deep/35 md:h-[460px]"
        viewBox="0 0 500 420"
        fill="currentColor"
      >
        <path d="M80 420 C0 360 0 240 80 140 C160 40 300 0 400 80 C500 160 520 300 440 380 C360 460 200 480 80 420 Z" />
      </svg>
      <svg
        className="absolute right-[15%] top-[35%] h-48 w-48 text-lavender-petal/30"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <ellipse cx="100" cy="100" rx="90" ry="70" />
      </svg>
    </div>
  );
}
