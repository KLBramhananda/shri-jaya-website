"use client";
import { useRef, ReactNode, PointerEvent } from "react";

/** Wrapper that tilts its content in 3D toward the pointer and exposes --mx/--my for a light sheen. */
export default function Tilt({ children, className = "", max = 10, perspective = 1000 }: { children: ReactNode; className?: string; max?: number; perspective?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: PointerEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", `${(0.5 - py) * max * 2}deg`);
    el.style.setProperty("--ry", `${(px - 0.5) * max * 2}deg`);
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };
  const leave = () => { const el = ref.current; if (!el) return; el.style.setProperty("--rx", "0deg"); el.style.setProperty("--ry", "0deg"); };
  return (
    <div className="group/card" style={{ perspective: perspective }} onPointerMove={move} onPointerLeave={leave} onPointerUp={leave} data-hover>
      <div ref={ref} className={`tilt ${className}`}>{children}</div>
    </div>
  );
}
