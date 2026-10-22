"use client";
import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { WAYS, t } from "@/lib/content";
import { useLang } from "@/lib/lang";
import { Reveal, SectionHead } from "./ui";

const Item = ({ it }: { it: { id: string; label: string; kind: "mat" | "work" } }) => (
  <motion.li layout layoutId={it.id} transition={{ type: "spring", stiffness: 260, damping: 28 }} className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm sm:text-base ${it.kind === "mat" ? "border-gold/40 bg-gold/10 text-brown" : "border-brown/15 bg-paper text-brown"}`}>
    <span className={`h-2 w-2 rounded-full ${it.kind === "mat" ? "bg-gold" : "bg-bronze"}`} />{it.label}
  </motion.li>
);


export default function TwoWays() {
  const { lang } = useLang();
  const [full, setFull] = useState(false);
  const mode = full ? WAYS.b : WAYS.a;
  const matItems = WAYS.materials.map((m, i) => ({ id: `m${i}`, label: t(m, lang), kind: "mat" as const }));
  const workItems = WAYS.work.map((m, i) => ({ id: `w${i}`, label: t(m, lang), kind: "work" as const }));
  const you = full ? [] : matItems;
  const we = full ? [...matItems, ...workItems] : workItems;

  return (
    <section id="ways" className="relative overflow-hidden bg-cream py-24 sm:py-32 grain">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead eyebrow={t(WAYS.eyebrow, lang)} title={t(WAYS.title, lang)} />
        <Reveal delay={0.1} className="mt-12">
          <div role="tablist" className="relative inline-flex w-full max-w-xl rounded-full border border-gold/50 bg-paper p-1.5 shadow-inner">
            <motion.span layout className="absolute inset-y-1.5 w-[calc(50%-6px)] rounded-full bg-gradient-to-r from-bronze to-gold" style={{ left: full ? "calc(50% + 3px)" : "6px" }} transition={{ type: "spring", stiffness: 300, damping: 30 }} />
            {[false, true].map((v) => (
              <button key={String(v)} role="tab" aria-selected={full === v} onClick={() => setFull(v)} className={`relative z-10 flex-1 rounded-full px-3 py-3.5 text-sm font-medium transition sm:px-6 sm:text-base ${full === v ? "text-ink" : "text-brown/70"}`}>{t(v ? WAYS.toggleB : WAYS.toggleA, lang)}</button>
            ))}
          </div>
        </Reveal>

        <div className="mt-6 min-h-[88px]">
          <AnimatePresence mode="wait">
            <motion.div key={String(full) + lang} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }}>
              <h3 className="font-display text-2xl font-medium text-bronze sm:text-3xl">{t(mode.name, lang)}</h3>
              <p className="mt-2 max-w-2xl text-brown/75">{t(mode.blurb, lang)}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <LayoutGroup>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-brown/15 bg-paper/60 p-5 sm:p-7">
              <p className="eyebrow mb-5">{t(WAYS.you, lang)}</p>
              <ul className="grid min-h-[120px] gap-3">{you.map((it) => <Item key={it.id} it={it} />)}
                {you.length === 0 && <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-6 text-center font-display text-2xl italic text-brown/50">{lang === "en" ? "Just your order & design" : "ನಿಮ್ಮ ಆರ್ಡರ್ ಮತ್ತು ವಿನ್ಯಾಸ ಮಾತ್ರ"}</motion.li>}
              </ul>
            </div>
            <div className="rounded-3xl border border-gold/50 bg-gradient-to-br from-ink to-[#2c1d0d] p-5 sm:p-7">
              <p className="eyebrow mb-5">{t(WAYS.we, lang)}</p>
              <ul className="grid gap-3 [&_li]:!border-gold/30 [&_li]:!bg-white/5 [&_li]:!text-cream">{we.map((it) => <Item key={it.id} it={it} />)}</ul>
            </div>
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
}
