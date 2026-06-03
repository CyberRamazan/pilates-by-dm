import { SectionHeading } from "./ui/SectionHeading";
import { PetalDecor } from "./ui/PetalDecor";

const steps = [
  {
    title: "Выбираете направление",
    description:
      "Реформер, коврик, персональная сессия или йога — то, что откликается сейчас.",
  },
  {
    title: "Оставляете заявку",
    description:
      "Имя, телефон и удобное время — коротко и ясно, без длинной переписки.",
  },
  {
    title: "Администратор подтверждает",
    description:
      "Студия связывается с вами и фиксирует запись — аккуратно и в одном потоке.",
  },
];

export function BookingSteps() {
  return (
    <section
      id="booking"
      className="section-padding relative scroll-mt-28 overflow-hidden border-t border-ink/10 surface-light"
    >
      <PetalDecor variant="corner-tr" className="absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 opacity-60" />
      <div className="relative z-10 mx-auto max-w-page">
        <SectionHeading
          label="Как записаться"
          title="Три шага"
          description="Понятный путь с Instagram на сайт — меньше хаоса в сообщениях для команды студии."
        />
        <ol className="mt-20 grid gap-0 md:grid-cols-3">
          {steps.map((item, index) => (
            <li
              key={item.title}
              className={`px-0 py-10 md:px-8 md:py-0 ${
                index > 0 ? "border-t border-ink/10 md:border-l md:border-t-0" : ""
              } ${index === 0 ? "md:pl-0" : ""}`}
            >
              <span className="font-display text-4xl font-light text-lavender-deep/80">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 font-display text-sm font-semibold uppercase tracking-[0.12em] text-ink">
                {item.title}
              </h3>
              <p className="mt-4 font-sans text-[14px] leading-[1.8] text-stone">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
