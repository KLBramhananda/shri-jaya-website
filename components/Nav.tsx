"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV, INVEST, t } from "@/lib/content";
import { useLang } from "@/lib/lang";

function go(id: string) {
  const el = document.getElementById(id); if (!el) return;
  const l = (window as any).__lenis;
  if (l) l.scrollTo(el, { offset: -10, duration: 1.6 }); else el.scrollIntoView({ behavior: "smooth" });
}

export default function Nav() {
  const { lang, setLang } = useLang();
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    let last = 0;
    const on = () => { const y = window.scrollY; setHidden(y > last && y > 120); setSolid(y > 60); last = y; };
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const LangBtn = () => (
    <div className="flex items-center rounded-full border border-gold/50 p-0.5 text-xs">
      {(["en", "kn"] as const).map((l) => (
        <button key={l} onClick={() => setLang(l)} aria-pressed={lang === l} className={`rounded-full px-3 py-1 transition ${lang === l ? "bg-gold text-ink" : "text-cream/80 hover:text-gold2"}`}>{l === "en" ? "EN" : "ಕನ್ನಡ"}</button>
      ))}
    </div>
  );
  return (
    <>
      <motion.header animate={{ y: hidden && !open ? -110 : 0 }} transition={{ duration: 0.4 }} className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${solid ? "bg-ink/80 backdrop-blur-md" : "bg-transparent"}`}>
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <button onClick={() => { setOpen(false); (window as any).__lenis?.scrollTo(0); }} className="flex items-center gap-3" aria-label="Shri Jaya home">
            <img src="/brand/monogram.png" alt="" className="h-10 w-auto" />
            <span className="font-display text-xl tracking-[0.35em] text-cream hidden sm:block">SHRI JAYA</span>
          </button>
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((n) => n.href ? (<a key={n.id} href={n.href} className="rounded-full border border-gold/50 px-4 py-1.5 text-sm tracking-wide text-gold2 transition hover:bg-gold hover:text-ink">{t(n.label, lang)}</a>) : (<button key={n.id} onClick={() => go(n.id)} className="text-sm tracking-wide text-cream/80 transition hover:text-gold2">{t(n.label, lang)}</button>))}
            <LangBtn />
          </nav>
          <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
            <a href="/invest" className="relative flex items-center gap-1.5 rounded-full border border-gold bg-gold/15 px-3 py-1.5 text-xs font-medium text-gold2 shadow-[0_0_18px_-4px_rgba(184,134,59,.6)] transition active:scale-95">
              <span className="relative flex h-1.5 w-1.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold2 opacity-75" /><span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold2" /></span>
              {t(INVEST.navLabel, lang)}
            </a>
            <LangBtn />
            <button onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open} className="flex h-10 w-9 sm:w-10 flex-col items-center justify-center gap-1.5">
              <span className={`h-px w-6 bg-cream transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
              <span className={`h-px w-6 bg-cream transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </motion.header>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ clipPath: "circle(0% at 90% 5%)" }} animate={{ clipPath: "circle(150% at 90% 5%)" }} exit={{ clipPath: "circle(0% at 90% 5%)" }} transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }} className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-7 bg-ink">
            {NAV.map((n, i) => (
              <motion.button key={n.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + i * 0.07 }} onClick={() => { setOpen(false); if (n.href) { window.location.href = n.href; } else setTimeout(() => go(n.id), 500); }} className={`font-display text-4xl hover:text-gold2 ${n.href ? "text-gold2" : "text-cream"}`}>{t(n.label, lang)}</motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
