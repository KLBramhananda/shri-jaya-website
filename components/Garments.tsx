"use client";
import { useRef, useState, MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { STUDIO, t } from "@/lib/content";
import { useLang } from "@/lib/lang";
import { Reveal, SectionHead } from "./ui";

function Shirt({ fab }: { fab: string }) {
  const body = "M140 60 L100 80 L40 130 L20 250 L62 262 L78 190 L78 400 Q200 420 322 400 L322 190 L338 262 L380 250 L360 130 L300 80 L260 60 Q200 100 140 60 Z";
  return (
    <svg viewBox="0 0 400 440" className="h-full w-full drop-shadow-[0_30px_40px_rgba(26,18,10,.35)]">
      <defs>
        <pattern id="fab" patternUnits="userSpaceOnUse" width="200" height="200"><image href={`/fabrics/${fab}.jpg`} width="200" height="200" preserveAspectRatio="none" /></pattern>
        <linearGradient id="sh" x1="0" x2="1"><stop offset="0" stopColor="#000" stopOpacity=".28" /><stop offset=".3" stopColor="#000" stopOpacity="0" /><stop offset=".7" stopColor="#fff" stopOpacity=".05" /><stop offset="1" stopColor="#000" stopOpacity=".3" /></linearGradient>
      </defs>
      <path d={body} fill="url(#fab)" stroke="#1A120A" strokeOpacity=".5" strokeWidth="1.5" strokeLinejoin="round" />
      <path d={body} fill="url(#sh)" />
      <path d="M78 190 Q150 200 200 190 Q250 200 322 190" fill="none" stroke="#000" strokeOpacity=".12" strokeWidth="14" />
      <path d="M200 112 L145 56 L128 100 L176 135 Z" fill="url(#fab)" stroke="#1A120A" strokeOpacity=".55" strokeWidth="1.5" />
      <path d="M200 112 L255 56 L272 100 L224 135 Z" fill="url(#fab)" stroke="#1A120A" strokeOpacity=".55" strokeWidth="1.5" />
      <path d="M200 112 L145 56 L128 100 L176 135 Z M200 112 L255 56 L272 100 L224 135 Z" fill="#000" opacity=".1" />
      <rect x="192" y="112" width="16" height="292" fill="#000" opacity=".1" />
      <path d="M200 135 V404" stroke="#EFE7DC" strokeOpacity=".5" strokeDasharray="4 4" />
      {[160, 215, 270, 325, 375].map((y) => <g key={y}><circle cx="200" cy={y} r="5.5" fill="#EFE7DC" stroke="#000" strokeOpacity=".4" /><circle cx="198.5" cy={y - 1.2} r=".9" fill="#000" opacity=".5" /><circle cx="201.5" cy={y - 1.2} r=".9" fill="#000" opacity=".5" /></g>)}
      <rect x="238" y="170" width="52" height="58" fill="#000" opacity=".06" stroke="#EFE7DC" strokeOpacity=".5" strokeDasharray="3 3" />
      <path d="M22 232 L64 243 M378 232 L336 243" stroke="#EFE7DC" strokeOpacity=".6" strokeDasharray="3 3" />
      <path d="M78 400 Q200 420 322 400" fill="none" stroke="#EFE7DC" strokeOpacity=".5" strokeDasharray="4 4" transform="translate(0 -6)" />
    </svg>
  );
}

function Pant({ fab }: { fab: string }) {
  const body = "M112 30 L288 30 L276 450 L222 450 L200 170 L178 450 L124 450 Z";
  return (
    <svg viewBox="0 0 400 480" className="h-full w-full drop-shadow-[0_30px_40px_rgba(26,18,10,.35)]">
      <defs>
        <pattern id="fab" patternUnits="userSpaceOnUse" width="200" height="200"><image href={`/fabrics/${fab}.jpg`} width="200" height="200" preserveAspectRatio="none" /></pattern>
        <linearGradient id="sh" x1="0" x2="1"><stop offset="0" stopColor="#000" stopOpacity=".3" /><stop offset=".35" stopColor="#000" stopOpacity="0" /><stop offset=".65" stopColor="#fff" stopOpacity=".05" /><stop offset="1" stopColor="#000" stopOpacity=".32" /></linearGradient>
      </defs>
      <path d={body} fill="url(#fab)" stroke="#1A120A" strokeOpacity=".5" strokeWidth="1.5" strokeLinejoin="round" />
      <path d={body} fill="url(#sh)" />
      <rect x="112" y="30" width="176" height="34" fill="#000" opacity=".12" />
      <path d="M112 64 H288" stroke="#EFE7DC" strokeOpacity=".5" strokeDasharray="4 4" />
      {[128, 172, 228, 272].map((x) => <rect key={x} x={x - 4} y="26" width="8" height="44" rx="2" fill="url(#fab)" stroke="#000" strokeOpacity=".4" />)}
      <circle cx="200" cy="47" r="6" fill="#EFE7DC" stroke="#000" strokeOpacity=".4" />
      <path d="M200 64 V132 Q200 168 188 170" fill="none" stroke="#EFE7DC" strokeOpacity=".6" strokeDasharray="4 4" />
      <path d="M114 70 Q158 80 164 130 M286 70 Q242 80 236 130" fill="none" stroke="#EFE7DC" strokeOpacity=".55" strokeDasharray="4 4" />
      <path d="M152 170 L150 450 M248 170 L250 450" stroke="#000" strokeOpacity=".16" strokeWidth="2" />
      <path d="M126 436 H176 M224 436 H274" stroke="#EFE7DC" strokeOpacity=".5" strokeDasharray="4 4" />
    </svg>
  );
}

export default function Garments() {
  const { lang } = useLang();
  const [g, setG] = useState<"shirt" | "pant">("shirt");
  const [fab, setFab] = useState(STUDIO.fabrics[0].id);
  const stage = useRef<HTMLDivElement>(null);
  const tilt = (e: MouseEvent) => {
    const el = stage.current; if (!el) return; const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 18}deg) rotateX(${-y * 14}deg)`;
  };
  const reset = () => { if (stage.current) stage.current.style.transform = "perspective(900px) rotateY(0) rotateX(0)"; };
  const cur = STUDIO.fabrics.find((f) => f.id === fab)!;

  return (
    <section id="studio" className="relative overflow-hidden bg-paper py-24 sm:py-32 grain">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead eyebrow={t(STUDIO.eyebrow, lang)} title={t(STUDIO.title, lang)} />
        <Reveal delay={0.1}><p className="mt-5 max-w-2xl text-brown/70">{t(STUDIO.sub, lang)}</p></Reveal>
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div onMouseMove={tilt} onMouseLeave={reset} data-hover className="relative flex aspect-square items-center justify-center rounded-[2rem] border border-gold/30 bg-[radial-gradient(circle_at_50%_40%,#fff8ec,#E8DCC8)] p-6 sm:p-10">
              <div ref={stage} className="h-full w-full transition-transform duration-200 ease-out" style={{ transformStyle: "preserve-3d" }}>
                <AnimatePresence mode="wait">
                  <motion.div key={g} initial={{ opacity: 0, scale: 0.92, rotateY: -25 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} exit={{ opacity: 0, scale: 0.92, rotateY: 25 }} transition={{ duration: 0.4 }} className="h-full w-full">
                    {g === "shirt" ? <Shirt fab={fab} /> : <Pant fab={fab} />}
                  </motion.div>
                </AnimatePresence>
              </div>
              <span className="absolute bottom-4 right-5 font-display text-lg italic text-bronze">{t(cur.n, lang)}</span>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex gap-3">
              {(["shirt", "pant"] as const).map((k) => (
                <button key={k} onClick={() => setG(k)} className={`rounded-full border px-6 py-3 text-sm font-medium transition ${g === k ? "border-transparent bg-gradient-to-r from-bronze to-gold text-ink" : "border-brown/25 text-brown hover:border-gold"}`}>{t(STUDIO[k], lang)}</button>
              ))}
            </div>
            <p className="eyebrow mb-4 mt-10">{t(STUDIO.fabricLabel, lang)} · <span className="!normal-case text-brown">{t(cur.n, lang)}</span></p>
            <div className="grid grid-cols-4 gap-4">
              {STUDIO.fabrics.map((f) => (
                <button key={f.id} onClick={() => setFab(f.id)} aria-label={t(f.n, lang)} aria-pressed={fab === f.id} className={`aspect-square overflow-hidden rounded-2xl border-2 transition ${fab === f.id ? "scale-105 border-gold shadow-lg" : "border-transparent hover:border-gold/50"}`}>
                  <img src={`/fabrics/${f.id}.jpg`} alt="" className="h-full w-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
            <ul className="mt-10 space-y-3 border-t border-brown/15 pt-6">
              {STUDIO.details[g].map((d, i) => (<li key={g + i} className="flex items-center gap-3 text-brown/85"><span className="text-gold">✦</span>{t(d, lang)}</li>))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
