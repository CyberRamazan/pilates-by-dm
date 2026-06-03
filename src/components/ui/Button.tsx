import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost" | "whatsapp";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-ink text-lavender-soft hover:bg-ink/90 border border-ink",
  secondary:
    "bg-transparent text-ink border border-ink/25 hover:border-ink/50 hover:bg-lavender-light/50",
  ghost:
    "bg-transparent text-ink border-0 hover:text-stone underline-offset-[6px] hover:underline px-0 py-2",
  whatsapp:
    "bg-transparent text-ink border border-ink/25 hover:border-ink/40 hover:bg-lavender-light/60",
};

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const isGhost = variant === "ghost";
  const base = isGhost
    ? "inline-flex items-center justify-center font-sans text-[13px] font-medium tracking-[0.06em] transition-all duration-500 ease-editorial"
    : "inline-flex items-center justify-center rounded-sm px-8 py-3.5 font-sans text-[13px] font-medium tracking-[0.08em] transition-all duration-500 ease-editorial";

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
