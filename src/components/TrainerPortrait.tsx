import Image from "next/image";

type TrainerPortraitProps = {
  src: string;
  alt: string;
  size?: "md" | "lg";
};

const sizes = {
  md: "h-36 w-36 md:h-40 md:w-40",
  lg: "h-40 w-40 md:h-44 md:w-44",
};

export function TrainerPortrait({ src, alt, size = "lg" }: TrainerPortraitProps) {
  return (
    <div className="flex justify-center py-8 md:py-10">
      <div
        className={`relative ${sizes[size]} shrink-0 overflow-hidden rounded-full border border-ink/10 bg-lavender shadow-[0_0_0_1px_rgba(26,25,24,0.04)]`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="scale-[1.58] object-cover object-center"
          sizes="176px"
        />
      </div>
    </div>
  );
}
