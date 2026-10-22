"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Loader({ onDone }: { onDone: () => void }) {
  useEffect(() => { const t = setTimeout(onDone, 2100); return () => clearTimeout(t); }, [onDone]);
  return (
    <motion.div className="fixed inset-0 z-[10000] flex items-center justify-center" initial={{ opacity: 1 }} exit={{ opacity: 1 }}>
      <motion.div className="absolute inset-0 bg-ink" exit={{ y: "-100%" }} transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1] }} />
      <motion.div className="relative flex flex-col items-center" exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5 }}>
        <div className="relative h-40 w-[134px] overflow-hidden">
          <motion.img src="/brand/monogram.png" alt="Shri Jaya" className="h-full w-full object-contain" initial={{ clipPath: "inset(0 100% 0 0)" }} animate={{ clipPath: "inset(0 0% 0 0)" }} transition={{ duration: 1.3, ease: [0.65, 0, 0.35, 1] }} />
        </div>
        <motion.p className="mt-6 font-display text-2xl tracking-[0.5em] text-gold2" initial={{ opacity: 0, letterSpacing: "0.9em" }} animate={{ opacity: 1, letterSpacing: "0.5em" }} transition={{ delay: 0.9, duration: 1 }}>SHRI JAYA</motion.p>
        <motion.div className="mt-5 h-px bg-gold" initial={{ width: 0 }} animate={{ width: 160 }} transition={{ delay: 1.1, duration: 0.8 }} />
      </motion.div>
    </motion.div>
  );
}
