import { Button } from "./ui/Button";
import { BrandLockup } from "./ui/BrandLockup";
import { PetalDecor } from "./ui/PetalDecor";

export function FinalCta() {
  return (
    <section className="section-padding-tight relative overflow-hidden">
      <PetalDecor variant="corner-tr" className="absolute -right-16 top-0 h-72 w-72 opacity-70" />
      <div className="relative z-10 mx-auto max-w-page">
        <div className="mx-auto max-w-2xl border border-ink/10 bg-lavender-light/50 px-8 py-16 text-center md:px-16 md:py-20">
          <BrandLockup className="mx-auto mb-8" />
          <h2 className="font-display text-display-lg font-bold uppercase tracking-[0.1em] text-ink">
            Пробное занятие
          </h2>
          <p className="mx-auto mt-6 max-w-md font-sans text-[15px] leading-[1.8] text-stone">
            Познакомьтесь со студией, тренером и ритмом практики — без спешки и без
            обязательств.
          </p>
          <div className="mt-10">
            <Button href="#form" variant="primary">
              Записаться
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
