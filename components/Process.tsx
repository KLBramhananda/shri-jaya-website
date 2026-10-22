"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROCESS, t } from "@/lib/content";
import { useLang } from "@/lib/lang";

const D = "M200 10 C 380 60 380 140 200 170 C 20 200 20 280 200 310 C 380 340 380 420 200 450 C 20 480 20 560 200 590";

export default function Process() {
  const { lang } = useLang();
  const root = useRef<HTMLElement>(null);
  const path = useRef<SVGPathElement>(null);
  const done = useRef<SVGPathElement>(null);
  const needle = useRef<SVGGElement>(null);
  const [active, setActive] = useState(0);
  const [nodes, setNodes] = useState<{ x: number; y: number }[]>([]);
  const N = PROCESS.steps.length;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const p = path.current!, d = done.current!;
    const len = p.getTotalLength();
    d.style.strokeDasharray = `${len}`; d.style.strokeDashoffset = `${len}`;
    setNodes(Array.from({ length: N }, (_, i) => { const pt = p.getPointAtLength((len * (i + 0.5)) / N); return { x: pt.x, y: pt.y }; }));
    const place = (pr: number) => {
      const l = len * pr, a = p.getPointAtLength(Math.max(0, l - 1)), b = p.getPointAtLength(Math.min(len, l + 1));
      const ang = (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI;
      needle.current?.setAttribute("transform", `translate(${b.x} ${b.y}) rotate(${ang})`);
      d.style.strokeDashoffset = `${len * (1 - pr)}`;
      setActive(Math.min(N - 1, Math.floor(pr * N)));
    };
    place(0);
    const mm = gsap.matchMedia();
    const st = ScrollTrigger.create({ trigger: root.current, start: "top top", end: () => `+=${window.innerHeight * 3.2}`, pin: true, scrub: 0.6, onUpdate: (s) => place(s.progress) });
    return () => { st.kill(); mm.revert(); };
  }, [N]);

  const s = PROCESS.steps[active];
  return (
    <section id="process" ref={root} className="relative flex min-h-screen items-center overflow-hidden bg-ink py-20 text-cream">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,#2e1f0f_0%,#1A120A_65%)]" />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-6 px-5 sm:px-8 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <p className="eyebrow mb-4">{t(PROCESS.eyebrow, lang)}</p>
          <h2 className="font-display text-3xl font-medium leading-tight sm:text-5xl">{t(PROCESS.title, lang)}</h2>
          <div className="relative mt-8 min-h-[210px] sm:mt-10">
            <AnimatePresence mode="wait">
              <motion.div key={active + lang} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }} transition={{ duration: 0.45 }}>
                <span className="gold-text font-display text-7xl font-medium sm:text-8xl">0{active + 1}</span>
                <h3 className="mt-2 font-display text-3xl text-gold2 sm:text-4xl">{t(s.t, lang)}</h3>
                <p className="mt-3 max-w-md text-cream/75 sm:text-lg">{t(s.d, lang)}</p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-6 flex gap-2" aria-hidden>{PROCESS.steps.map((_, i) => <span key={i} className={`h-1 rounded-full transition-all duration-500 ${i <= active ? "w-10 bg-gold" : "w-5 bg-cream/20"}`} />)}</div>
        </div>
        <div className="order-1 mx-auto h-[34vh] w-full max-w-[420px] lg:order-2 lg:h-[78vh]">
          <svg viewBox="0 0 400 600" className="h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden>
            <path ref={path} d={D} fill="none" stroke="#B8863B" strokeOpacity=".28" strokeWidth="2" strokeDasharray="3 9" strokeLinecap="round" />
            <path ref={done} d={D} fill="none" stroke="url(#g)" strokeWidth="3.5" strokeLinecap="round" />
            <defs><linearGradient id="g" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#7A4F1E" /><stop offset=".5" stopColor="#D9B26A" /><stop offset="1" stopColor="#B8863B" /></linearGradient></defs>
            {nodes.map((n, i) => (
              <g key={i}>
                <circle cx={n.x} cy={n.y} r={i <= active ? 11 : 7} fill={i <= active ? "#B8863B" : "#1A120A"} stroke="#D9B26A" strokeOpacity={i <= active ? 1 : 0.4} style={{ transition: "all .4s" }} />
                <text x={n.x} y={n.y + 4} textAnchor="middle" fontSize="11" fontWeight="600" fill={i <= active ? "#1A120A" : "#D9B26A"} opacity={i <= active ? 1 : 0.6}>{i + 1}</text>
              </g>
            ))}
            <g ref={needle}>
              <g filter="drop-shadow(0 2px 6px rgba(0,0,0,.6))">
                <path d="M-34 0 L18 -2.4 Q26 0 18 2.4 Z" fill="#E8D7B0" />
                <ellipse cx="-24" cy="0" rx="5" ry="1.6" fill="#1A120A" />
                <circle cx="22" cy="0" r="1.8" fill="#fff" opacity=".8" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
