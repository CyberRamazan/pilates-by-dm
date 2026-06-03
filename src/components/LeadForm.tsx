"use client";

import { useState } from "react";
import { SERVICE_OPTIONS } from "@/lib/constants";
import { Button } from "./ui/Button";
import { SectionHeading } from "./ui/SectionHeading";

const inputClass =
  "w-full border-0 border-b border-ink/20 bg-transparent px-0 py-4 font-sans text-[15px] text-ink outline-none transition-colors placeholder:text-stone/50 focus:border-ink";

const labelClass =
  "mb-1 block font-sans text-[10px] uppercase tracking-[0.22em] text-stone";

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="form"
      className="section-padding relative scroll-mt-28 border-t border-ink/10"
    >
      <div className="mx-auto max-w-page">
        <div className="mx-auto max-w-md border border-ink/10 bg-lavender-soft/60 px-8 py-12 md:px-12 md:py-14">
          <SectionHeading
            label="Заявка"
            title="Запись"
            description="Оставьте контакты — мы аккуратно подтвердим время и направление."
            align="center"
            className="mx-auto text-center"
          />

          {submitted ? (
            <div className="mt-14 border-t border-ink/10 pt-12 text-center" role="status">
              <p className="font-script text-4xl text-ink">Спасибо</p>
              <p className="mt-4 font-sans text-[14px] leading-relaxed text-stone">
                Администратор свяжется с вами для подтверждения записи.
              </p>
              <button
                type="button"
                className="mt-8 font-sans text-[13px] tracking-wide text-stone transition-colors hover:text-ink"
                onClick={() => setSubmitted(false)}
              >
                Новая заявка
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-14 space-y-10">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Имя
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Ф.И.О."
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Телефон
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="+7"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="service" className={labelClass}>
                  Направление
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className={`${inputClass} cursor-pointer appearance-none`}
                >
                  <option value="">Выберите направление</option>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="time" className={labelClass}>
                  Удобное время
                </label>
                <input
                  id="time"
                  name="time"
                  type="text"
                  required
                  placeholder="Дата / время"
                  className={inputClass}
                />
              </div>
              <Button type="submit" variant="primary" className="w-full">
                Оставить заявку
              </Button>
              <p className="text-center font-sans text-[11px] leading-relaxed text-stone/80">
                Контакты используются только для связи по заявке.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
