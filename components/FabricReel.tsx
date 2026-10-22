"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { STUDIO, t } from "@/lib/content";
import { useLang } from "@/lib/lang";

export default function FabricReel() {
  const { lang } = useLang();
  const wrap = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(0);
  useEffect(() => { const f = () => { if (wrap.current) setW(Math.max(0, wrap.current.scrollWidth - wrap.current.parentElement!.clientWidth)); }; f(); window.addEventListener("resize", f); return () => window.removeEventListener("resize", f); }, []);
  return (
    <section className="overflow-hidden bg-cream py-20">
      <div className="mx-auto mb-8 flex max-w-7xl items-end justify-between px-5 sm:px-8">
        <p className="eyebrow">{lang === "en" ? "Fabric palette · drag →" : "ಬಟ್ಟೆ ಪ್ಯಾಲೆಟ್ · ಎಳೆಯಿರಿ →"}</p>
        <p className="hidden text-xs text-brown/50 sm:block">{lang === "en" ? "Illustrative textures" : "ಮಾದರಿ ಟೆಕ್ಸ್ಚರ್‌ಗಳು"}</p>
      </div>
      <div className="px-5 sm:px-8">
        <motion.div ref={wrap} drag="x" dragConstraints={{ left: -w, right: 0 }} dragElastic={0.12} className="flex w-max cursor-grab gap-5 active:cursor-grabbing" data-hover>
          {STUDIO.fabrics.map((f, i) => (
            <div key={f.id} className="group relative h-[340px] w-[250px] shrink-0 overflow-hidden rounded-[1.6rem] border border-gold/30 sm:h-[420px] sm:w-[310px]" style={{ marginTop: i % 2 ? 28 : 0 }}>
              <img src={`/fabrics/${f.id}.jpg`} alt={t(f.n, lang)} draggable={false} className="h-full w-full object-cover transition duration-[1400ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 font-display text-2xl italic text-cream">{t(f.n, lang)}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
