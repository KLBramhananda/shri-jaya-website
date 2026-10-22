"use client";
import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
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
  const wrapRef = useRef<HTMLDivElement>(null);
  const photoIn = useInView(wrapRef, { once: true, margin: "0px 0px -10% 0px" });
  return (
    <section id="about" className="relative overflow-hidden bg-ink py-24 text-cream sm:py-32">
      <div className="absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-gold/10 blur-[120px]" />
      <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-bronze/20 blur-[120px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-16 md:grid-cols-[.85fr_1.15fr] md:gap-12 lg:gap-20">
          {/* Owner photo */}
          <div ref={wrapRef} className="relative mx-auto w-full max-w-[420px] pb-8 md:max-w-none md:pb-0">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border border-gold/50 sm:translate-x-5 sm:translate-y-5" aria-hidden />
            <motion.div initial={{ clipPath: "inset(100% 0 0 0)" }} animate={photoIn ? { clipPath: "inset(0% 0 0 0)" } : {}} transition={{ duration: 1.3, ease: [0.76, 0, 0.24, 1] }} className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-gold/40 bg-bronze/20">
              <img src={ABOUT.ownerPhoto} alt={`${CONTACT.owner}, ${t(ABOUT.ownerTitle, lang)}`} className="h-full w-full object-cover object-[50%_25%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-display text-3xl text-gold2 sm:text-4xl">{CONTACT.owner}</p>
                <p className="eyebrow mt-2">{t(ABOUT.ownerTitle, lang)}</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.9, duration: 0.8 }} className="absolute -bottom-2 right-0 rounded-2xl border border-gold/60 bg-ink/95 px-5 py-4 text-center shadow-[0_20px_50px_-15px_rgba(0,0,0,.8)] backdrop-blur sm:-right-5 md:-right-6">
              <div className="font-display text-5xl font-medium leading-none sm:text-6xl"><span className="gold-text"><Counter to={YEARS_IN_BUSINESS} />+</span></div>
              <p className="mt-2 text-[10px] uppercase tracking-[.22em] text-gold2/90 sm:text-[11px]">{t(ABOUT.yearsLabel, lang)}</p>
            </motion.div>
          </div>
          {/* Text */}
          <div>
            <SectionHead light eyebrow={t(ABOUT.eyebrow, lang)} title={t(ABOUT.title, lang)} />
            <Reveal delay={0.15}><p className="mt-7 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">{t(ABOUT.body, lang)}</p></Reveal>
            <Reveal delay={0.25}>
              <div className="mt-9 flex flex-wrap gap-3 text-sm">
                <a href={`tel:${CONTACT.phoneRaw}`} className="rounded-full border border-gold/40 px-5 py-2.5 text-cream/85 transition hover:border-gold hover:text-gold2">☎ {CONTACT.phone}</a>
                <a href={`mailto:${CONTACT.email}`} className="rounded-full border border-gold/40 px-5 py-2.5 text-cream/85 transition hover:border-gold hover:text-gold2">✉ {CONTACT.email}</a>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="mt-24 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
