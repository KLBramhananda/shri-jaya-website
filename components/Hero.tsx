"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HERO, t } from "@/lib/content";
import { useLang } from "@/lib/lang";
import { Magnetic } from "./ui";

const ClothScene = dynamic(() => import("./ClothScene"), { ssr: false });

function go(id: string) { const el = document.getElementById(id); const l = (window as any).__lenis; if (el) l ? l.scrollTo(el, { duration: 1.6 }) : el.scrollIntoView({ behavior: "smooth" }); }

export default function Hero({ ready }: { ready: boolean }) {
  const { lang } = useLang();
  const [gl, setGl] = useState(true);
  const [visible, setVisible] = useState(true);
  const sec = useRef<HTMLElement>(null);
  useEffect(() => { const el = sec.current; if (!el) return; const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0 }); io.observe(el); return () => io.disconnect(); }, []);
  useEffect(() => { try { const c = document.createElement("canvas"); setGl(!!(c.getContext("webgl2") || c.getContext("webgl"))); } catch { setGl(false); } }, []);
  const rise = (d: number) => ({ initial: { y: "110%" }, animate: ready ? { y: 0 } : {}, transition: { duration: 1.1, delay: d, ease: [0.22, 1, 0.36, 1] as any } });
  return (
    <section id="top" ref={sec} className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,#3a2813_0%,#1A120A_62%)]" />
      {gl && <ClothScene active={visible} />}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/60 to-ink/15 max-sm:from-ink/75 max-sm:via-ink/65" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-28 sm:px-8">
        <motion.p initial={{ opacity: 0 }} animate={ready ? { opacity: 1 } : {}} transition={{ delay: 0.3, duration: 1 }} className="eyebrow mb-7 flex items-center gap-4"><span className="h-px w-10 bg-gold" />{t(HERO.eyebrow, lang)}</motion.p>
        <h1 className={`font-display font-medium text-cream ${lang === "kn" ? "text-[clamp(2.3rem,7.2vw,6rem)] leading-[1.3]" : "text-[clamp(3rem,10.5vw,8.6rem)] leading-[0.95]"}`}>
          <span className="block overflow-hidden pb-[0.22em]"><motion.span className="block" {...rise(0.35)}>{t(HERO.line1, lang)}</motion.span></span>
          <span className="block overflow-hidden pb-[0.28em]"><motion.span className="gold-text block italic" {...rise(0.5)}>{t(HERO.line2, lang)}</motion.span></span>
        </h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ delay: 1, duration: 1 }} className="mt-7 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">{t(HERO.sub, lang)}</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ delay: 1.25, duration: 1 }} className="mt-10 flex flex-wrap gap-4">
          <Magnetic><button onClick={() => go("order")} className="rounded-full bg-gradient-to-r from-bronze via-gold to-gold2 px-8 py-4 text-sm font-medium tracking-wide text-ink shadow-[0_10px_40px_-10px_rgba(184,134,59,.7)]">{t(HERO.cta1, lang)}</button></Magnetic>
          <Magnetic><button onClick={() => go("ways")} className="rounded-full border border-gold/60 px-8 py-4 text-sm tracking-wide text-cream transition hover:bg-gold/10">{t(HERO.cta2, lang)}</button></Magnetic>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={ready ? { opacity: 1 } : {}} transition={{ delay: 1.8 }} className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex">
        <span className="eyebrow !text-[10px]">{t(HERO.scroll, lang)}</span>
        <span className="relative h-12 w-px overflow-hidden bg-gold/30"><motion.span className="absolute inset-x-0 top-0 h-5 bg-gold" animate={{ y: [-20, 50] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }} /></span>
      </motion.div>
    </section>
  );
}
