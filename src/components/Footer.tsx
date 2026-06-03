import { ADDRESS, HOURS, INSTAGRAM_URL, PHONE, PHONE_HREF } from "@/lib/constants";
import { BrandLockup } from "./ui/BrandLockup";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-ink/10 bg-lavender-deep/20">
      <div className="mx-auto max-w-page px-6 py-16 md:px-10 md:py-20">
        <div className="flex flex-col gap-14 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-6">
            <Logo variant="footer" />
            <div>
              <BrandLockup />
              <p className="mt-4 max-w-xs font-sans text-[14px] leading-[1.75] text-stone">
                Женская студия здорового движения
              </p>
            </div>
          </div>
          <div className="grid gap-12 sm:grid-cols-2 md:gap-20">
            <div>
              <p className="section-label">Контакты</p>
              <ul className="mt-5 space-y-3 font-sans text-[14px] text-ink">
                <li>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-stone"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a href={PHONE_HREF} className="transition-colors hover:text-stone">
                    {PHONE}
                  </a>
                </li>
                <li className="text-stone">{ADDRESS}</li>
              </ul>
            </div>
            <div>
              <p className="section-label">Время работы</p>
              <p className="mt-5 font-sans text-[14px] text-ink">{HOURS}</p>
            </div>
          </div>
        </div>
        <p className="mt-16 font-sans text-[11px] tracking-wide text-stone/80">
          © {new Date().getFullYear()} MIND BODY pilates center
        </p>
      </div>
    </footer>
  );
}
