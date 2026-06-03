type LineArtProps = {
  className?: string;
  variant?: "hero" | "accent";
};

export function LineArt({ className = "", variant = "accent" }: LineArtProps) {
  if (variant === "hero") {
    return (
      <svg
        className={`text-ink/[0.12] ${className}`}
        viewBox="0 0 480 600"
        fill="none"
        aria-hidden
      >
        <path
          d="M240 60 C290 110 310 200 250 260 C190 320 150 400 180 480 C210 540 240 560 240 580"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M100 240 Q240 180 380 240 Q420 360 360 440"
          stroke="currentColor"
          strokeWidth="0.75"
          strokeLinecap="round"
        />
        <ellipse cx="240" cy="320" rx="140" ry="160" stroke="currentColor" strokeWidth="0.5" />
        <path
          d="M60 460 Q240 400 420 460"
          stroke="currentColor"
          strokeWidth="0.6"
          strokeLinecap="round"
        />
        <path
          d="M360 120 Q400 200 380 280"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg className={`text-ink/10 ${className}`} viewBox="0 0 120 24" fill="none" aria-hidden>
      <path d="M0 12 H48 M72 12 H120" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="60" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}
