"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ease-editorial ${
        scrolled
          ? "border-b border-ink/10 bg-lavender/90 backdrop-blur-md"
          : "bg-lavender/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-page items-center justify-between gap-6 px-6 py-5 md:px-10 md:py-6">
        <Logo />

        <nav
          className="hidden items-center gap-10 lg:flex"
          aria-label="Основная навигация"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-[13px] tracking-wide text-stone transition-colors duration-300 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#form"
          className="hidden border-b border-transparent font-sans text-[13px] tracking-[0.1em] text-ink transition-colors hover:border-ink/40 lg:inline-block"
        >
          Запись
        </a>

        <button
          type="button"
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] lg:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`h-px w-5 bg-ink transition-transform duration-300 ${menuOpen ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-5 bg-ink transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-px w-5 bg-ink transition-transform duration-300 ${menuOpen ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-ink/10 bg-lavender transition-all duration-500 ease-editorial lg:hidden ${
          menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0 border-t-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-8" aria-label="Мобильная навигация">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="border-b border-ink/10 py-4 font-display text-xl font-semibold uppercase tracking-wide text-ink first:pt-0"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#form"
            className="mt-8 font-sans text-[13px] tracking-[0.12em] text-stone"
            onClick={() => setMenuOpen(false)}
          >
            Оставить заявку →
          </a>
        </nav>
      </div>
    </header>
  );
}
