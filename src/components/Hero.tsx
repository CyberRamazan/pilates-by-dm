import { Button } from "./ui/Button";
import { BrandLockup } from "./ui/BrandLockup";
import { PetalDecor } from "./ui/PetalDecor";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section className="section-padding relative overflow-hidden pb-16 pt-10 md:pb-24 md:pt-14 lg:pt-16">
      <PetalDecor variant="hero" className="absolute -right-32 top-0 h-[min(90vw,520px)] w-[min(90vw,640px)] md:-right-16" />
      <div className="relative z-10 mx-auto max-w-page">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div className="max-w-prose">
            <BrandLockup size="hero" className="mb-10" />
            <p className="section-label">Актау · женская студия</p>
            <h1 className="mt-6 font-display text-display-xl font-bold uppercase tracking-[0.08em] text-ink">
              Здоровое
              <br />
              движение
            </h1>
            <p className="mt-8 font-sans text-[15px] leading-[1.8] text-stone md:text-base">
              MIND BODY — Pilates на реформере и коврике, персональные занятия и йога
              в спокойной, эстетичной атмосфере.
            </p>
            <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
              <Button href="#form" variant="primary">
                Пробное занятие
              </Button>
              <Button href="#services" variant="ghost">
                Направления
              </Button>
            </div>
          </div>
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
