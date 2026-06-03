"use client";

import { useEffect, useState } from "react";

export function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 border-t border-ink/10 bg-lavender/95 px-6 py-4 backdrop-blur-sm transition-transform duration-500 ease-editorial md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <a
        href="#form"
        className="flex w-full items-center justify-center border border-ink bg-ink py-3.5 font-sans text-[12px] font-medium tracking-[0.1em] text-lavender-soft"
      >
        Пробное занятие
      </a>
    </div>
  );
}
