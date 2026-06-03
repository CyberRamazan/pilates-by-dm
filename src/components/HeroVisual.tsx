import Image from "next/image";
import { PetalDecor } from "./ui/PetalDecor";

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:mr-0 lg:ml-auto">
      <PetalDecor variant="corner-br" className="absolute -bottom-8 -left-12 h-64 w-72 md:h-80 md:w-96" />
      <div className="relative flex aspect-square items-center justify-center border border-ink/10 bg-lavender-light/40 p-10 md:p-14">
        <Image
          src="/logo-mind-body.png"
          alt="MIND BODY pilates center"
          width={280}
          height={280}
          className="relative z-10 h-auto w-full max-w-[220px] object-contain md:max-w-[260px]"
          priority
        />
      </div>
      <p className="mt-6 text-center font-sans text-[12px] tracking-[0.2em] text-stone lg:text-left">
        MIND BODY pilates center
      </p>
    </div>
  );
}
