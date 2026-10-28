"use client";
import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import { ABOUT, CONTACT, YEARS_IN_BUSINESS, t } from "@/lib/content";
import { useLang } from "@/lib/lang";
import { Reveal, SectionHead } from "./ui";
import Tilt from "./Tilt";

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => { if (inView) { const c = animate(0, to, { duration: 2.2, ease: "easeOut", onUpdate: (x) => setV(Math.round(x)) }); return () => c.stop(); } }, [inView, to]);
  return <span ref={ref}>{v}</span>;
}

const Z = (z: number, extra = "") => ({ transform: `translateZ(${z}px) ${extra}` });

/** Signature card: layered 3D depth, tilts with the pointer, gold light follows the cursor. No photo. */
function OwnerCard({ lang }: { lang: "en" | "kn" }) {
  return (
    <div className="relative mx-auto w-full max-w-[400px] md:max-w-none">
      <div className="group/card sway" style={{ transformStyle: "preserve-3d" }}>
        <Tilt max={12} perspective={1100} className="relative aspect-[4/5] w-full">
          {/* depth frame behind the card */}
          <div className="absolute inset-0 rounded-[2rem] border border-gold/40" style={Z(-40, "translate(18px,18px)")} aria-hidden />
          <div className="absolute inset-0 rounded-[2rem] border border-gold/20" style={Z(-70, "translate(34px,34px)")} aria-hidden />
          {/* card body (clipped layer) */}
          <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-gold/50 bg-gradient-to-br from-[#2e1f0f] via-[#1c1209] to-[#120b05] shadow-[0_40px_80px_-30px_rgba(0,0,0,.9)]">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 500" aria-hidden>
              <g className="spin-slow" style={{ transformOrigin: "200px 210px" }}>
                <ellipse cx="200" cy="210" rx="170" ry="170" fill="none" stroke="#B8863B" strokeOpacity=".35" strokeWidth="1" strokeDasharray="2 9" />
                <ellipse cx="200" cy="210" rx="135" ry="135" fill="none" stroke="#D9B26A" strokeOpacity=".25" strokeWidth="1" />
              </g>
              <g className="spin-rev" style={{ transformOrigin: "200px 210px" }}>
                <ellipse cx="200" cy="210" rx="105" ry="105" fill="none" stroke="#B8863B" strokeOpacity=".4" strokeWidth="1.2" strokeDasharray="14 10" />
                <circle cx="305" cy="210" r="4" fill="#D9B26A" />
                <circle cx="95" cy="210" r="2.5" fill="#B8863B" />
              </g>
              <path d="M-10 430 C 120 380, 260 470, 410 410" fill="none" stroke="#B8863B" strokeOpacity=".35" strokeWidth="1" />
              <path d="M-10 450 C 140 400, 250 490, 410 430" fill="none" stroke="#D9B26A" strokeOpacity=".18" strokeWidth="1" />
            </svg>
            <div className="absolute inset-0 grain" />
            {/* light that follows the cursor */}
            <div className="pointer-events-none absolute inset-0 mix-blend-screen" style={{ background: "radial-gradient(circle at var(--mx,50%) var(--my,30%), rgba(240,205,130,.30), transparent 48%)" }} />
          </div>
          {/* floating layers (real 3D depth) */}
          <div className="absolute left-6 right-6 top-6 flex items-center justify-between text-[10px] uppercase tracking-[.3em] text-gold2/80" style={Z(30)}>
            <span>Shri Jaya</span><span className="hidden sm:block">{CONTACT.city.split(",")[0]}</span>
          </div>
          <div className="absolute inset-x-0 top-[9%] flex justify-center" style={Z(90)}>
            <img src="/brand/monogram.png" alt="" className="floaty h-[34%] min-h-[110px] w-auto drop-shadow-[0_18px_30px_rgba(0,0,0,.7)] [filter:drop-shadow(0_0_24px_rgba(217,178,106,.35))]" style={{ height: "clamp(120px, 17vw, 190px)" }} />
          </div>
          <div className="absolute inset-x-6 bottom-7" style={Z(60)}>
            <div className="gold-line mb-5" />
            <p className="gold-text font-display text-4xl font-medium leading-tight sm:text-5xl">{CONTACT.owner}</p>
            <p className="eyebrow mt-3">{t(ABOUT.ownerTitle, lang)}</p>
            <p className="mt-4 font-display text-lg italic text-cream/70">{lang === "en" ? "Quality in Every Thread" : "ಪ್ರತಿ ದಾರದಲ್ಲೂ ಗುಣಮಟ್ಟ"}</p>
          </div>
          {/* years badge floating above the card */}
          <div className="absolute -right-2 top-[46%] rounded-2xl border border-gold/70 bg-ink/95 px-5 py-4 text-center shadow-[0_20px_50px_-10px_rgba(0,0,0,.9)] sm:-right-6" style={Z(130)}>
            <div className="font-display text-5xl font-medium leading-none sm:text-6xl"><span className="gold-text"><Counter to={YEARS_IN_BUSINESS} />+</span></div>
            <p className="mt-2 text-[10px] uppercase tracking-[.2em] text-gold2/90">{t(ABOUT.yearsLabel, lang)}</p>
          </div>
        </Tilt>
      </div>
      <div className="mx-auto mt-10 h-6 w-3/4 rounded-[100%] bg-black/60 blur-xl" aria-hidden />
    </div>
  );
}

export default function About() {
  const { lang } = useLang();
  return (
    <section id="about" className="relative overflow-hidden bg-ink py-24 text-cream sm:py-32">
      <div className="absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-gold/10 blur-[120px]" />
      <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-bronze/20 blur-[120px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-16 md:grid-cols-[.85fr_1.15fr] md:gap-14 lg:gap-24">
          <Reveal><div className="pr-3 pb-3 sm:pr-8"><OwnerCard lang={lang} /></div></Reveal>
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
              <Tilt max={9} perspective={800} className="h-full">
                <div className="relative h-full overflow-hidden rounded-2xl border border-gold/25 bg-white/[0.03] p-6 transition-colors duration-500 hover:border-gold/70 hover:bg-gold/[0.06]">
                  <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-0 transition-opacity duration-300 [.tilt:hover_&]:opacity-100" style={{ background: "radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(217,178,106,.18), transparent 55%)" }} />
                  <span className="relative block font-display text-4xl italic text-gold/70" style={Z(30)}>0{i + 1}</span>
                  <h3 className="relative mt-4 font-display text-2xl text-cream" style={Z(20)}>{t(v.t, lang)}</h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-cream/65" style={Z(10)}>{t(v.d, lang)}</p>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
