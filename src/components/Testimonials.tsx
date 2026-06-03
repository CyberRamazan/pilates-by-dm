import { SectionHeading } from "./ui/SectionHeading";

const testimonials = [
  {
    quote:
      "После занятий чувствую лёгкость и собранность. Атмосфера очень тихая — хочется возвращаться.",
    author: "Айгерим",
    detail: "Pilates на реформере",
  },
  {
    quote:
      "Тренеры не торопят и объясняют каждое движение. С осанкой стало спокойнее в повседневной жизни.",
    author: "Сауле",
    detail: "Pilates на коврике",
  },
  {
    quote:
      "Студия выглядит так же изящно, как в Instagram. Запись через сайт — без десятков сообщений.",
    author: "Жанар",
    detail: "Пробное занятие",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding relative border-t border-ink/10 surface-soft">
      <div className="mx-auto max-w-page">
        <SectionHeading
          label="Отзывы"
          title="Гости студии"
          align="center"
          className="mx-auto text-center"
        />
        <div className="mt-20 grid gap-16 md:grid-cols-3 md:gap-10">
          {testimonials.map((t) => (
            <blockquote key={t.author}>
              <p className="font-sans text-[15px] leading-[1.75] text-ink/85">
                «{t.quote}»
              </p>
              <footer className="mt-8 border-t border-ink/10 pt-6">
                <cite className="not-italic">
                  <span className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-ink">
                    {t.author}
                  </span>
                  <span className="mt-1 block font-sans text-[11px] tracking-wide text-stone">
                    {t.detail}
                  </span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
