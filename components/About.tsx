"use client";
import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { ABOUT, CONTACT, YEARS_IN_BUSINESS, t } from "@/lib/content";
import { useLang } from "@/lib/lang";
import { Reveal, SectionHead } from "./ui";

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => { if (inView) { const c = animate(0, to, { duration: 2.2, ease: "easeOut", onUpdate: (x) => setV(Math.round(x)) }); return () => c.stop(); } }, [inView, to]);
  return <span ref={ref}>{v}</span>;
}

export default function About() {
  const { lang } = useLang();
  return (
    <section id="about" className="relative overflow-hidden bg-ink py-24 text-cream sm:py-32">
      <div className="absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-gold/10 blur-[120px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHead light eyebrow={t(ABOUT.eyebrow, lang)} title={t(ABOUT.title, lang)} />
            <Reveal delay={0.15}><p className="mt-7 max-w-xl text-lg leading-relaxed text-cream/75">{t(ABOUT.body, lang)}</p></Reveal>
            <Reveal delay={0.25}>
              <div className="mt-10 flex items-center gap-5">
                <img src="/brand/monogram.png" alt="" className="h-20 w-auto" />
                <div>
                  <p className="font-display text-3xl text-gold2">{CONTACT.owner}</p>
                  <p className="eyebrow mt-1">{t(ABOUT.ownerTitle, lang)}</p>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="relative flex flex-col items-center justify-center rounded-[2rem] border border-gold/30 bg-gradient-to-br from-white/[0.06] to-transparent p-12 text-center">
              <div className="font-display text-[clamp(7rem,20vw,13rem)] font-medium leading-none"><span className="gold-text"><Counter to={YEARS_IN_BUSINESS} />+</span></div>
              <p className="eyebrow mt-2 !text-sm">{t(ABOUT.yearsLabel, lang)}</p>
              <div className="gold-line mt-8 w-40" />
            </div>
          </Reveal>
        </div>
        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT.values.map((v, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div data-hover className="group h-full rounded-2xl border border-gold/25 bg-white/[0.03] p-6 transition duration-500 hover:-translate-y-2 hover:border-gold/70 hover:bg-gold/[0.07]">
                <span className="font-display text-4xl italic text-gold/70 transition group-hover:text-gold2">0{i + 1}</span>
                <h3 className="mt-4 font-display text-2xl text-cream">{t(v.t, lang)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">{t(v.d, lang)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
