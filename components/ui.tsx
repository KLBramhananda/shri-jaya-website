"use client";
import { motion } from "framer-motion";
import { useRef, ReactNode, MouseEvent } from "react";

export function Reveal({ children, delay = 0, y = 36, className = "" }: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

export function Magnetic({ children, className = "", strength = 0.3 }: { children: ReactNode; className?: string; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * strength}px, ${(e.clientY - r.top - r.height / 2) * strength}px)`;
  };
  const leave = () => { if (ref.current) ref.current.style.transform = "translate(0,0)"; };
  return <div ref={ref} onMouseMove={move} onMouseLeave={leave} className={`inline-block transition-transform duration-200 ease-out ${className}`}>{children}</div>;
}

export function SectionHead({ eyebrow, title, light = false, center = false }: { eyebrow: string; title: string; light?: boolean; center?: boolean }) {
  return (
    <div className={center ? "text-center" : ""}>
      <Reveal><p className="eyebrow mb-5">{eyebrow}</p></Reveal>
      <Reveal delay={0.08}><h2 className={`font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] ${light ? "text-cream" : "text-brown"} ${center ? "mx-auto max-w-3xl" : "max-w-3xl"}`}>{title}</h2></Reveal>
    </div>
  );
}
