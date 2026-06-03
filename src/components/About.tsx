import { BrandLockup } from "./ui/BrandLockup";
import { PetalDecor } from "./ui/PetalDecor";

const themes = [
  {
    title: "Осознанное движение",
    text: "Внимание к дыханию, качеству и ощущениям — не к скорости результата.",
  },
  {
    title: "Здоровье тела",
    text: "Безопасная нагрузка, восстановление и мягкое укрепление.",
  },
  {
    title: "Эстетика практики",
    text: "Пространство и подача занятий — как продолжение вашего Instagram-мира студии.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="section-padding relative scroll-mt-28 overflow-hidden border-t border-ink/10 surface-soft"
    >
      <PetalDecor variant="corner-br" className="absolute -bottom-24 -right-16 h-80 w-96 opacity-70" />
      <div className="relative z-10 mx-auto max-w-page">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="section-label">О студии</p>
            <BrandLockup className="mt-6" />
            <h2 className="mt-8 font-display text-display-lg font-bold uppercase tracking-[0.1em] text-ink">
              Место заботы
              <br />о теле
            </h2>
          </div>
          <div className="space-y-7 font-sans text-[15px] leading-[1.85] text-stone lg:pt-16">
            <p>
              MIND BODY — женская студия здорового движения в Актау. Pilates на
              реформере и коврике, персональные занятия и йога — в одной
              спокойной, продуманной среде с узнаваемой эстетикой бренда.
            </p>
            <p>
              Практика должна быть осмысленной, безопасной и приятной. Тренеры
              сопровождают вас бережно — от первого визита до устойчивой
              регулярности.
            </p>
          </div>
        </div>
        <div className="mt-20 grid gap-12 border-t border-ink/10 pt-20 md:grid-cols-3 md:gap-10">
          {themes.map((theme) => (
            <div key={theme.title}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink">
                {theme.title}
              </h3>
              <p className="mt-4 font-sans text-[14px] leading-[1.75] text-stone">{theme.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
