type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <header className={`max-w-editorial ${alignClass} ${className}`}>
      <p className="section-label">{label}</p>
      <h2 className="mt-5 font-display text-display-lg font-bold uppercase tracking-[0.12em] text-ink">
        {title}
      </h2>
      {description && (
        <p className="mt-5 font-sans text-[15px] leading-[1.75] text-stone md:text-base">
          {description}
        </p>
      )}
    </header>
  );
}
