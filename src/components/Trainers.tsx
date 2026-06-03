import { TRAINERS } from "@/lib/trainers";
import { TrainerCard } from "./TrainerCard";
import { SectionHeading } from "./ui/SectionHeading";

export function Trainers() {
  return (
    <section id="trainers" className="section-padding relative scroll-mt-28 border-t border-ink/10">
      <div className="mx-auto max-w-page">
        <SectionHeading
          label="Команда"
          title="Тренеры"
          description="Сертифицированные специалисты Polestar Pilates, йоги и осознанного движения."
          align="center"
          className="mx-auto text-center"
        />
        <div className="mt-16 grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {TRAINERS.map((trainer) => (
            <TrainerCard key={trainer.id} trainer={trainer} />
          ))}
        </div>
      </div>
    </section>
  );
}
