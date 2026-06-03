import type { Trainer } from "@/lib/trainers";
import { TrainerPortrait } from "./TrainerPortrait";

type TrainerCardProps = {
  trainer: Trainer;
};

function CredentialList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  if (!items.length) return null;

  return (
    <div>
      <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-stone">
        {title}
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="font-sans text-[13px] leading-[1.65] text-stone before:mr-2 before:text-ink/30 before:content-['·']"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TrainerCard({ trainer }: TrainerCardProps) {
  return (
    <article className="flex flex-col border border-ink/10 bg-lavender-soft/50">
      <TrainerPortrait src={trainer.image} alt={trainer.imageAlt} />

      <div className="flex flex-1 flex-col px-6 pb-7 pt-0 md:px-7 md:pb-8">
        {trainer.featured && (
          <span className="mb-4 inline-flex w-fit border border-ink/15 px-3 py-1 font-sans text-[10px] uppercase tracking-[0.18em] text-stone">
            Основатель студии
          </span>
        )}

        <h3 className="font-display text-lg font-semibold uppercase tracking-[0.08em] text-ink">
          {trainer.name}
        </h3>
        <p className="mt-2 font-sans text-[12px] leading-snug text-stone">{trainer.role}</p>

        {trainer.experience && (
          <p className="mt-5 font-sans text-[13px] font-medium text-ink/80">{trainer.experience}</p>
        )}

        {trainer.highlights.length > 0 && (
          <ul className="mt-4 space-y-2">
            {trainer.highlights.map((item) => (
              <li
                key={item}
                className="font-sans text-[13px] leading-[1.65] text-stone"
              >
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 space-y-6 border-t border-ink/10 pt-6">
          <CredentialList title="Образование" items={trainer.education ?? []} />
          <CredentialList title="Курсы" items={trainer.courses ?? []} />
        </div>

        {trainer.quote && (
          <p className="mt-6 font-script text-2xl leading-snug text-ink/90">
            «{trainer.quote}»
          </p>
        )}

        {trainer.instagram && (
          <a
            href={`https://instagram.com/${trainer.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 font-sans text-[13px] tracking-wide text-ink underline-offset-4 hover:underline"
          >
            @{trainer.instagram}
          </a>
        )}
      </div>
    </article>
  );
}
