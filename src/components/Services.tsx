import { SectionHeading } from "./ui/SectionHeading";

const services = [
  {
    id: "reformer",
    title: "Pilates на реформерах",
    description:
      "Точная работа с опорой оборудования — для силы, вытяжения и выравнивания без перегруза.",
  },
  {
    id: "mat",
    title: "Pilates на коврике",
    description:
      "Классическая практика: контроль, дыхание и осознанное движение в спокойном темпе.",
  },
  {
    id: "personal",
    title: "Персональные занятия",
    description:
      "Сессии на большом оборудовании — полное внимание тренера и ваших личных целей.",
  },
  {
    id: "yoga",
    title: "Йога",
    description:
      "Мягкая практика для гибкости, дыхания и внутреннего равновесия.",
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding relative scroll-mt-28">
      <div className="mx-auto max-w-page">
        <SectionHeading
          label="Направления"
          title="Практики студии"
          description="Четыре формата — одна атмосфера: бережно, эстетично, профессионально."
        />
        <div className="mt-20">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="group grid gap-6 border-t border-ink/10 py-12 md:grid-cols-[4rem_1fr_auto] md:items-start md:gap-12 md:py-14"
            >
              <span className="font-display text-3xl font-light text-lavender-deep/70 md:text-4xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold uppercase tracking-[0.08em] text-ink md:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-prose font-sans text-[15px] leading-[1.75] text-stone">
                  {service.description}
                </p>
              </div>
              <a href="#form" className="editorial-link self-start md:mt-2">
                Запись
              </a>
            </article>
          ))}
          <div className="editorial-rule" />
        </div>
      </div>
    </section>
  );
}
