"use client";
import { MARQUEE, t } from "@/lib/content";
import { useLang } from "@/lib/lang";

export default function Marquee() {
  const { lang } = useLang();
  const items = [...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE];
  return (
    <div className="overflow-hidden border-y border-gold/25 bg-ink py-6" aria-hidden>
      <div className="marquee-track">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center">
            {items.map((m, i) => (
              <span key={i} className="flex items-center font-display text-3xl italic text-gold2/90 sm:text-4xl">
                <span className="px-8">{t(m, lang)}</span><span className="text-gold">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
