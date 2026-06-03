import { SectionHeading } from "./ui/SectionHeading";
import { PetalDecor } from "./ui/PetalDecor";

const benefits = [
  {
    title: "Индивидуальный подход",
    description:
      "Практика подстраивается под ваше тело — без давления и без шаблонных схем.",
  },
  {
    title: "Комфортная атмосфера",
    description:
      "Тихое, светлое пространство в фирменной эстетике студии — спокойно и изящно.",
  },
  {
    title: "Опытные тренеры",
    description:
      "Внимательное сопровождение, безопасная нагрузка и уважение к вашему ритму.",
  },
  {
    title: "Запись без лишних сообщений",
    description:
      "Короткая заявка на сайте — администратор бережно подтверждает время.",
  },
];

export function Benefits() {
  return (
    <section className="section-padding-tight relative overflow-hidden border-t border-ink/10 surface-light">
      <PetalDecor variant="corner-tr" className="absolute -right-20 -top-10 h-56 w-56 opacity-80 md:h-72 md:w-72" />
      <div className="relative z-10 mx-auto max-w-page">
        <SectionHeading
          label="Философия"
          title="Забота о теле"
          description="Студия для женщин, которые выбирают здоровое движение — не интенсивный фитнес."
          className="max-w-editorial"
        />
        <ul className="mt-16 divide-y divide-ink/10 md:mt-20">
          {benefits.map((item) => (
            <li
              key={item.title}
              className="grid gap-4 py-9 first:pt-0 last:pb-0 md:grid-cols-[minmax(0,14rem)_1fr] md:gap-16 md:py-11"
            >
              <h3 className="font-display text-lg font-semibold uppercase tracking-[0.1em] text-ink md:text-xl">
                {item.title}
              </h3>
              <p className="font-sans text-[15px] leading-[1.75] text-stone md:pt-0.5">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
