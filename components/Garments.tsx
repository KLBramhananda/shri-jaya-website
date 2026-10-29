"use client";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { STUDIO, t } from "@/lib/content";
import { useLang } from "@/lib/lang";
import { Reveal, SectionHead } from "./ui";

type Id = "formal" | "pleated" | "chino" | "jeans" | "cargo" | "jogger";
type Pocket = "slant" | "curve" | "jeans" | "seam";
type Shape = { wa: number; hi: number; ho: number; hn: number; cr: number; pocket: Pocket; loops?: boolean; pleats?: boolean; cuff?: boolean; crease?: boolean; cargo?: boolean; jeans?: boolean; jogger?: boolean };

const SHAPES: Record<Id, Shape> = {
  formal: { wa: 150, hi: 176, ho: 70, hn: 20, cr: 200, pocket: "slant", loops: true, crease: true },
  pleated: { wa: 156, hi: 204, ho: 94, hn: 26, cr: 206, pocket: "slant", loops: true, pleats: true, cuff: true, crease: true },
  chino: { wa: 150, hi: 176, ho: 62, hn: 18, cr: 198, pocket: "curve", loops: true },
  jeans: { wa: 150, hi: 176, ho: 66, hn: 20, cr: 198, pocket: "jeans", loops: true, jeans: true },
  cargo: { wa: 158, hi: 194, ho: 86, hn: 26, cr: 206, pocket: "slant", loops: true, cargo: true },
  jogger: { wa: 160, hi: 192, ho: 66, hn: 32, cr: 208, pocket: "seam", jogger: true },
};

const CX = 200, WY = 32, HY = 140, HEM = 478;

function geo(s: Shape) {
  const outer = (y: number) => (y <= HY ? s.wa / 2 + (s.hi / 2 - s.wa / 2) * ((y - WY) / (HY - WY)) : s.hi / 2 + (s.ho - s.hi / 2) * ((y - HY) / (HEM - HY)));
  const inner = (y: number) => (y <= s.cr ? 6 : 6 + (s.hn - 6) * ((y - s.cr) / (HEM - s.cr)));
  const R = (x: number) => CX + x, Lf = (x: number) => CX - x;
  const body =
    `M${Lf(s.wa / 2)} ${WY} L${R(s.wa / 2)} ${WY} Q${R(s.hi / 2 + 3)} 88 ${R(s.hi / 2)} ${HY} L${R(s.ho)} ${HEM} L${R(s.hn)} ${HEM} ` +
    `Q${R((s.hn + 6) / 2 + 5)} ${(HEM + s.cr) / 2} ${R(6)} ${s.cr} Q${CX} ${s.cr + 16} ${Lf(6)} ${s.cr} ` +
    `Q${Lf((s.hn + 6) / 2 + 5)} ${(HEM + s.cr) / 2} ${Lf(s.hn)} ${HEM} L${Lf(s.ho)} ${HEM} L${Lf(s.hi / 2)} ${HY} Q${Lf(s.hi / 2 + 3)} 88 ${Lf(s.wa / 2)} ${WY} Z`;
  return { outer, inner, body, R, Lf };
}

function Pant({ id, fab, side }: { id: Id; fab: string; side: "front" | "back" }) {
  const uid = useId().replace(/:/g, "");
  const s = SHAPES[id];
  const { outer, inner, body, R, Lf } = geo(s);
  const stitch = s.jeans ? "#E0A93B" : "#EFE7DC";
  const sOp = s.jeans ? 0.9 : 0.55;
  const dash = s.jeans ? "5 3" : "4 3";
  const front = side === "front";
  const hemTop = s.cuff ? HEM - 32 : s.jogger ? HEM - 38 : HEM - 14;
  const sg = [-1, 1] as const;

  return (
    <svg viewBox="70 16 260 480" className="h-full w-full" aria-hidden>
      <defs>
        <pattern id={`f${uid}`} patternUnits="userSpaceOnUse" width="230" height="230"><image href={`/fabrics/${fab}.jpg`} width="230" height="230" preserveAspectRatio="none" /></pattern>
        <clipPath id={`c${uid}`}><path d={body} /></clipPath>
        <linearGradient id={`h${uid}`} x1="0" x2="1">
          <stop offset="0" stopColor="#000" stopOpacity=".5" /><stop offset=".08" stopColor="#000" stopOpacity=".12" /><stop offset=".26" stopColor="#fff" stopOpacity=".12" /><stop offset=".44" stopColor="#000" stopOpacity=".22" />
          <stop offset=".5" stopColor="#000" stopOpacity=".42" /><stop offset=".56" stopColor="#000" stopOpacity=".22" /><stop offset=".74" stopColor="#fff" stopOpacity=".12" /><stop offset=".92" stopColor="#000" stopOpacity=".12" /><stop offset="1" stopColor="#000" stopOpacity=".5" />
        </linearGradient>
        <linearGradient id={`v${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#000" stopOpacity=".28" /><stop offset=".12" stopColor="#000" stopOpacity="0" /><stop offset=".85" stopColor="#000" stopOpacity="0" /><stop offset="1" stopColor="#000" stopOpacity=".35" />
        </linearGradient>
        <radialGradient id={`w${uid}`}><stop offset="0" stopColor="#fff" stopOpacity=".3" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></radialGradient>
        <radialGradient id={`m${uid}`} cx=".35" cy=".3"><stop offset="0" stopColor="#FFF1C2" /><stop offset=".55" stopColor="#D9A441" /><stop offset="1" stopColor="#7A4F1E" /></radialGradient>
        <filter id={`b${uid}`}><feGaussianBlur stdDeviation="1.6" /></filter>
      </defs>

      <g clipPath={`url(#c${uid})`}>
        <path d={body} fill={`url(#f${uid})`} />
        {s.jeans && (
          <g>
            {[[-46, 250, 38, 90], [46, 250, 38, 90], [-48, 380, 30, 50], [48, 380, 30, 50]].map(([x, y, rx, ry], i) => (
              <ellipse key={i} cx={CX + x} cy={y} rx={rx} ry={ry} fill={`url(#w${uid})`} />
            ))}
            <path d={`M${R(12)} ${s.cr + 6} l30 -22 M${R(12)} ${s.cr + 18} l38 -12 M${Lf(12)} ${s.cr + 6} l-30 -22 M${Lf(12)} ${s.cr + 18} l-38 -12`} stroke="#fff" strokeOpacity=".22" strokeWidth="2.5" filter={`url(#b${uid})`} />
          </g>
        )}
        <path d={body} fill={`url(#h${uid})`} />
        <path d={body} fill={`url(#v${uid})`} />

        {/* knee / crotch wrinkles */}
        <g stroke="#000" strokeOpacity=".16" strokeWidth="3" fill="none" strokeLinecap="round" filter={`url(#b${uid})`}>
          <path d={`M${R(8)} ${s.cr - 10} q22 10 40 -8 M${R(10)} ${s.cr + 6} q26 12 50 -6 M${Lf(8)} ${s.cr - 10} q-22 10 -40 -8 M${Lf(10)} ${s.cr + 6} q-26 12 -50 -6`} />
          {front && <path d={`M${R(32)} 332 q14 6 28 0 M${Lf(32)} 332 q-14 6 -28 0 M${R(34)} 346 q14 5 26 0 M${Lf(34)} 346 q-14 5 -26 0`} />}
          {!front && <path d={`M${R(30)} 336 q14 -8 28 0 M${Lf(30)} 336 q-14 -8 -28 0`} />}
        </g>

        {s.crease && front && sg.map((k) => (
          <g key={k}>
            <path d={`M${CX + k * (outer(80) + inner(80)) / 2} 80 L${CX + k * (outer(HEM) + inner(HEM)) / 2} ${HEM}`} stroke="#fff" strokeOpacity=".22" strokeWidth="1.6" />
            <path d={`M${CX + k * ((outer(80) + inner(80)) / 2 + 2)} 80 L${CX + k * ((outer(HEM) + inner(HEM)) / 2 + 2)} ${HEM}`} stroke="#000" strokeOpacity=".2" strokeWidth="1.6" />
          </g>
        ))}

        {/* waistband */}
        {s.jogger ? (
          <g>
            <rect x={CX - s.wa / 2} y={WY} width={s.wa} height="40" fill="#000" fillOpacity=".18" />
            {[40, 50, 60].map((y) => <path key={y} d={`M${Lf(s.wa / 2)} ${y - 8} H${R(s.wa / 2)}`} stroke="#000" strokeOpacity=".22" />)}
            <path d={`M${Lf(s.wa / 2)} 72 H${R(s.wa / 2)}`} stroke={stitch} strokeOpacity={sOp} strokeDasharray={dash} />
          </g>
        ) : (
          <g>
            <rect x={CX - s.wa / 2} y={WY} width={s.wa} height="30" fill="#000" fillOpacity=".12" />
            <path d={`M${Lf(s.wa / 2)} ${WY + 5} H${R(s.wa / 2)} M${Lf(s.wa / 2)} 62 H${R(s.wa / 2)}`} stroke={stitch} strokeOpacity={sOp} strokeDasharray={dash} />
          </g>
        )}

        {/* hem / cuffs */}
        {sg.map((k) => {
          const y1 = hemTop, y2 = HEM;
          const pts = `${CX + k * outer(y1)},${y1} ${CX + k * outer(y2)},${y2} ${CX + k * inner(y2)},${y2} ${CX + k * inner(y1)},${y1}`;
          return (
            <g key={k}>
              {(s.cuff || s.jogger) && <polygon points={pts} fill="#000" fillOpacity={s.jogger ? 0.28 : 0.14} />}
              {s.jogger && Array.from({ length: 7 }).map((_, i) => { const y = y1 + 3 + i * 5.2; return <path key={i} d={`M${CX + k * outer(y)} ${y} L${CX + k * inner(y)} ${y}`} stroke="#000" strokeOpacity=".3" />; })}
              <path d={`M${CX + k * (outer(y1) - 1)} ${y1} L${CX + k * (inner(y1) + 1)} ${y1}`} stroke={stitch} strokeOpacity={sOp} strokeDasharray={dash} strokeWidth={s.jeans ? 1.6 : 1.2} />
              {s.jeans && <path d={`M${CX + k * (outer(y1 - 5) - 1)} ${y1 - 5} L${CX + k * (inner(y1 - 5) + 1)} ${y1 - 5}`} stroke={stitch} strokeOpacity=".5" strokeDasharray={dash} />}
            </g>
          );
        })}

        {front ? (
          <g>
            {/* fly + centre */}
            <path d={`M${CX} 62 V${s.cr - 62} Q${CX} ${s.cr - 34} ${Lf(14)} ${s.cr - 28}`} fill="none" stroke={stitch} strokeOpacity={sOp} strokeDasharray={dash} strokeWidth={s.jeans ? 1.6 : 1.2} />
            <path d={`M${CX + 3} 64 V${s.cr - 60}`} stroke="#000" strokeOpacity=".22" strokeWidth="2" />
            {/* pockets */}
            {sg.map((k) => {
              const e = s.wa / 2, h = s.hi / 2;
              const common = { fill: "none", stroke: stitch, strokeOpacity: sOp, strokeDasharray: dash } as const;
              return (
                <g key={k}>
                  {s.pocket === "slant" && (<><path d={`M${CX + k * (e - 2)} 64 Q${CX + k * (e - 34)} 98 ${CX + k * (h - 2)} 158`} stroke="#000" strokeOpacity=".3" strokeWidth="3" fill="none" /><path d={`M${CX + k * (e - 5)} 64 Q${CX + k * (e - 38)} 98 ${CX + k * (h - 6)} 158`} {...common} /></>)}
                  {s.pocket === "curve" && (<><path d={`M${CX + k * (e - 4)} 64 C${CX + k * (e - 36)} 74 ${CX + k * (e - 44)} 116 ${CX + k * (h - 4)} 150`} stroke="#000" strokeOpacity=".3" strokeWidth="3" fill="none" /><path d={`M${CX + k * (e - 7)} 66 C${CX + k * (e - 39)} 78 ${CX + k * (e - 46)} 118 ${CX + k * (h - 8)} 152`} {...common} /></>)}
                  {s.pocket === "jeans" && (<>
                    <path d={`M${CX + k * (e - 48)} 64 C${CX + k * (e - 50)} 110 ${CX + k * (e - 26)} 142 ${CX + k * (h - 1)} 144`} stroke="#000" strokeOpacity=".32" strokeWidth="3" fill="none" />
                    <path d={`M${CX + k * (e - 45)} 64 C${CX + k * (e - 47)} 108 ${CX + k * (e - 24)} 139 ${CX + k * (h - 5)} 141`} {...common} />
                    {k === 1 && <path d={`M${CX + k * (e - 38)} 76 h28 v20 h-28 Z`} {...common} strokeOpacity=".7" />}
                    <circle cx={CX + k * (h - 5)} cy="142" r="3.6" fill={`url(#m${uid})`} stroke="#000" strokeOpacity=".4" strokeWidth=".6" />
                    <circle cx={CX + k * (e - 46)} cy="68" r="3.2" fill={`url(#m${uid})`} stroke="#000" strokeOpacity=".4" strokeWidth=".6" />
                  </>)}
                  {s.pocket === "seam" && (<><path d={`M${CX + k * (h - 8)} 82 L${CX + k * (h - 5)} 150`} stroke="#000" strokeOpacity=".28" strokeWidth="3" /><path d={`M${CX + k * (h - 12)} 84 L${CX + k * (h - 9)} 148`} {...common} /></>)}
                  {s.pleats && [18, 42].map((px) => (
                    <g key={px}><path d={`M${CX + k * px} 64 Q${CX + k * (px + 5)} 112 ${CX + k * (px - 6)} 170`} stroke="#000" strokeOpacity=".3" strokeWidth="2.4" fill="none" /><path d={`M${CX + k * (px + 2)} 64 Q${CX + k * (px + 7)} 112 ${CX + k * (px - 4)} 170`} stroke="#fff" strokeOpacity=".16" strokeWidth="1.6" fill="none" /></g>
                  ))}
                  {s.cargo && (() => {
                    const y0 = 276, ox = outer(y0 + 30), x1 = ox - 52, x2 = ox - 4;
                    return (<g>
                      <rect x={k === 1 ? CX + x1 : CX - x2} y={y0} width={x2 - x1} height="64" fill="#000" fillOpacity=".08" stroke="#000" strokeOpacity=".32" strokeWidth="1.2" />
                      <rect x={k === 1 ? CX + x1 + 3 : CX - x2 + 3} y={y0 + 3} width={x2 - x1 - 6} height="58" {...common} />
                      <path d={`M${k === 1 ? CX + x1 - 1 : CX - x2 - 1} ${y0 - 4} h${x2 - x1 + 2} v26 l${-(x2 - x1 + 2) / 2} 8 l${-(x2 - x1 + 2) / 2} -8 Z`} fill="#000" fillOpacity=".13" stroke="#000" strokeOpacity=".4" strokeWidth="1.2" strokeLinejoin="round" />
                      <circle cx={CX + k * (x1 + x2) / 2} cy={y0 + 18} r="4.4" fill="#EFE7DC" stroke="#000" strokeOpacity=".5" />
                    </g>);
                  })()}
                </g>
              );
            })}
            {/* fly button */}
            {!s.jogger && <circle cx={CX} cy="47" r="6.4" fill={s.jeans ? `url(#m${uid})` : "#EFE7DC"} stroke="#000" strokeOpacity=".45" strokeWidth=".8" />}
            {s.jogger && (
              <g>
                {[-1, 1].map((k) => (<g key={k}><path d={`M${CX + k * 7} 48 Q${CX + k * 14} 100 ${CX + k * 9} 134`} stroke="#EFE7DC" strokeOpacity=".85" strokeWidth="3.4" fill="none" strokeLinecap="round" /><rect x={CX + k * 9 - 3} y="130" width="6" height="14" rx="2.5" fill="#B8863B" /></g>))}
                <circle cx={CX} cy="47" r="5" fill="#000" fillOpacity=".35" />
              </g>
            )}
          </g>
        ) : (
          <g>
            <path d={`M${CX} 62 V${s.cr - 4}`} stroke="#000" strokeOpacity=".25" strokeWidth="2.4" />
            <path d={`M${CX + 2.5} 62 V${s.cr - 4}`} stroke={stitch} strokeOpacity={sOp} strokeDasharray={dash} />
            {s.jeans && <path d={`M${Lf(s.wa / 2)} 62 L${CX} 100 L${R(s.wa / 2)} 62`} fill="none" stroke={stitch} strokeOpacity=".9" strokeDasharray={dash} strokeWidth="1.6" />}
            {s.jeans && <path d={`M${Lf(s.wa / 2)} 66 L${CX} 104 L${R(s.wa / 2)} 66`} fill="none" stroke="#000" strokeOpacity=".28" strokeWidth="3" />}
            {sg.map((k) => {
              if (s.jeans)
                return (<g key={k}>
                  <path d={`M${CX + k * 8} 112 h${k * 56} v40 l${-k * 28} 16 l${-k * 28} -16 Z`} fill="#000" fillOpacity=".09" stroke="#000" strokeOpacity=".4" strokeWidth="1.3" strokeLinejoin="round" />
                  <path d={`M${CX + k * 13} 117 h${k * 46} v32 l${-k * 23} 12 l${-k * 23} -12 Z`} fill="none" stroke={stitch} strokeOpacity=".9" strokeDasharray={dash} strokeLinejoin="round" />
                  <path d={`M${CX + k * 18} 122 q${k * 18} 22 ${k * 36} 0`} fill="none" stroke={stitch} strokeOpacity=".75" strokeWidth="1.2" />
                </g>);
              if (s.jogger) return k === 1 ? <g key={k}><rect x={CX + 12} y="104" width="52" height="58" fill="#000" fillOpacity=".08" stroke="#000" strokeOpacity=".35" strokeWidth="1.2" /><rect x={CX + 15} y="107" width="46" height="52" fill="none" stroke={stitch} strokeOpacity={sOp} strokeDasharray={dash} /></g> : null;
              return (<g key={k}>
                <path d={`M${CX + k * 14} 110 h${k * 46}`} stroke="#000" strokeOpacity=".5" strokeWidth="6" strokeLinecap="round" />
                <path d={`M${CX + k * 14} 110 h${k * 46}`} stroke={stitch} strokeOpacity=".3" strokeWidth="1" strokeDasharray="3 3" transform="translate(0 -4)" />
                {s.crease && id !== "pleated" && <circle cx={CX + k * 37} cy="124" r="3.6" fill="#EFE7DC" stroke="#000" strokeOpacity=".45" />}
                <path d={`M${CX + k * 28} 64 L${CX + k * 30} 98`} stroke="#000" strokeOpacity=".28" strokeWidth="2" />
              </g>);
            })}
          </g>
        )}
      </g>

      {/* belt loops (outside clip so they stand proud) */}
      {s.loops && (front ? [-64, -38, 38, 64] : [-64, -38, 0, 38, 64]).map((x) => (
        <g key={x}><rect x={CX + x - 4} y="28" width="8" height="42" rx="2.5" fill={`url(#f${uid})`} /><rect x={CX + x - 4} y="28" width="8" height="42" rx="2.5" fill="#000" fillOpacity=".28" stroke="#000" strokeOpacity=".5" strokeWidth=".8" /><path d={`M${CX + x} 31 V67`} stroke={stitch} strokeOpacity=".5" strokeDasharray="2 2" /></g>
      ))}
      <path d={body} fill="none" stroke="#0c0804" strokeOpacity=".7" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function Edge({ id, fab }: { id: Id; fab: string }) {
  const uid = useId().replace(/:/g, "");
  const { body } = geo(SHAPES[id]);
  return (
    <svg viewBox="70 16 260 480" className="h-full w-full" aria-hidden>
      <defs><pattern id={`e${uid}`} patternUnits="userSpaceOnUse" width="230" height="230"><image href={`/fabrics/${fab}.jpg`} width="230" height="230" preserveAspectRatio="none" /></pattern></defs>
      <path d={body} fill={`url(#e${uid})`} /><path d={body} fill="#000" fillOpacity=".5" />
    </svg>
  );
}

export default function Garments() {
  const { lang } = useLang();
  const [sid, setSid] = useState<Id>("jeans");
  const style = STUDIO.styles.find((s) => s.id === sid)!;
  const [fab, setFab] = useState(style.fabrics[0]);
  const [pin, setPin] = useState<number | null>(0);
  const [side, setSide] = useState<"front" | "back">("front");
  const rig = useRef<HTMLDivElement>(null);
  const shadow = useRef<HTMLDivElement>(null);
  const wrap = useRef<HTMLDivElement>(null);
  const st = useRef({ a: 0, target: 0, drag: false, lx: 0, vx: 0, hx: 0, hy: 0, cx: 0, cy: 0, side: "front" as "front" | "back", vis: true });

  useEffect(() => {
    const el = wrap.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { st.current.vis = e.isIntersecting; }, { threshold: 0.05 });
    io.observe(el);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const loop = (ts: number) => {
      const s = st.current;
      if (s.vis && rig.current) {
        if (!s.drag) s.a += (s.target - s.a) * 0.1;
        s.cx += (s.hx - s.cx) * 0.08; s.cy += (s.hy - s.cy) * 0.08;
        const sway = s.drag || reduce ? 0 : Math.sin(ts / 1500) * 3.5;
        const ang = s.a + sway + s.cx * 10;
        rig.current.style.transform = `rotateX(${-s.cy * 7}deg) rotateY(${ang}deg)`;
        if (shadow.current) shadow.current.style.transform = `translateX(-50%) scaleX(${0.55 + 0.45 * Math.abs(Math.cos((ang * Math.PI) / 180))})`;
        const now = Math.cos((s.a * Math.PI) / 180) >= 0 ? "front" : "back";
        if (now !== s.side) { s.side = now; setSide(now); }
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); io.disconnect(); };
  }, []);

  const pick = (id: Id) => {
    if (id === sid) return;
    const first = STUDIO.styles.find((x) => x.id === id)!;
    setSid(id); setFab(first.fabrics[0]); setPin(0);
    const s = st.current; s.target = Math.round(s.target / 360) * 360; s.a = s.target - 110;
  };
  const down = (e: React.PointerEvent) => { const s = st.current; s.drag = true; s.lx = e.clientX; s.vx = 0; (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId); };
  const move = (e: React.PointerEvent) => {
    const s = st.current, r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    s.hx = (e.clientX - r.left) / r.width - 0.5; s.hy = (e.clientY - r.top) / r.height - 0.5;
    if (!s.drag) return;
    const dx = e.clientX - s.lx; s.lx = e.clientX; s.a += dx * 0.6; s.vx = dx; s.target = s.a;
  };
  const up = () => { const s = st.current; s.drag = false; s.target = Math.round((s.a + s.vx * 6) / 180) * 180; };
  const leave = () => { st.current.hx = 0; st.current.hy = 0; };
  const flip = () => { const s = st.current; s.target = Math.round(s.a / 180) * 180 + 180; };
  const enquire = () => {
    document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
    const sel = document.querySelector<HTMLSelectElement>('select[name="garment"]');
    if (sel) sel.value = t(style.n, lang);
  };
  const hot = style.hot;
  const activeFab = STUDIO.fabrics.find((f) => f.id === fab)!;

  return (
    <section id="studio" className="relative overflow-hidden bg-paper py-24 sm:py-32 grain">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead eyebrow={t(STUDIO.eyebrow, lang)} title={t(STUDIO.title, lang)} />
        <Reveal delay={0.1}><p className="mt-5 max-w-2xl text-brown/70">{t(STUDIO.sub, lang)}</p></Reveal>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.05fr_1fr]">
          <Reveal>
            <div ref={wrap} className="relative overflow-hidden rounded-[2rem] border border-gold/40 bg-[radial-gradient(ellipse_at_50%_30%,#4a3520_0%,#241810_55%,#120c06_100%)] shadow-[0_40px_80px_-30px_rgba(26,18,10,.7)]">
              <img src="/brand/monogram.png" alt="" className="pointer-events-none absolute left-1/2 top-1/2 w-2/3 -translate-x-1/2 -translate-y-1/2 opacity-[.05]" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,236,190,.22),transparent_70%)]" />
              <div className="absolute left-5 top-5 z-20 flex gap-2">
                {(["front", "back"] as const).map((k) => (
                  <button key={k} onClick={() => { if (side !== k) flip(); }} className={`rounded-full px-4 py-1.5 text-xs tracking-wide transition ${side === k ? "bg-gradient-to-r from-bronze to-gold text-ink" : "border border-gold/40 text-cream/80 hover:border-gold"}`}>{t(STUDIO[k], lang)}</button>
                ))}
              </div>
              <span className="absolute right-5 top-6 z-20 hidden text-[11px] uppercase tracking-[0.2em] text-gold2/80 sm:block">↔ {t(STUDIO.drag, lang)}</span>

              <div onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up} onPointerLeave={leave} data-hover
                className="relative mx-auto w-full max-w-[520px] cursor-grab select-none pb-32 pt-16 active:cursor-grabbing" style={{ touchAction: "pan-y", perspective: 1300 }}>
                <div ref={shadow} className="pointer-events-none absolute bottom-[7.4rem] left-1/2 h-5 w-[44%] rounded-[50%] bg-black/70 blur-xl" />
                <div className="relative mx-auto aspect-[260/480] w-[62%] sm:w-[54%]">
                  <div ref={rig} className="absolute inset-0" style={{ transformStyle: "preserve-3d", willChange: "transform" }}>
                    {[-6, -3, 3, 6].map((z) => (<div key={z} className="absolute inset-0" style={{ transform: `translateZ(${z}px)` }}><Edge id={sid} fab={fab} /></div>))}
                    <div className="absolute inset-0" style={{ transform: "translateZ(8px)", backfaceVisibility: "hidden" }}><Pant id={sid} fab={fab} side="front" /></div>
                    <div className="absolute inset-0" style={{ transform: "rotateY(180deg) translateZ(8px)", backfaceVisibility: "hidden" }}><Pant id={sid} fab={fab} side="back" /></div>
                  </div>
                  {side === "front" && hot.map((h, i) => (
                    <button key={sid + i} onPointerDown={(e) => e.stopPropagation()} onClick={() => setPin(i)} aria-label={t(h.t, lang)}
                      className="absolute z-10 -translate-x-1/2 -translate-y-1/2" style={{ left: `${((h.x / 100) * 400 - 70) / 2.6}%`, top: `${((h.y / 100) * 520 - 16) / 4.8}%` }}>
                      <span className={`block h-4 w-4 rounded-full border-2 border-ink/70 ${pin === i ? "bg-gold2" : "bg-gold"} shadow-[0_0_0_0_rgba(217,178,106,.7)] animate-[pulse-pin_2s_infinite]`} />
                    </button>
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                {side === "front" && pin !== null && hot[pin] && (
                  <motion.div key={sid + pin} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.25 }}
                    className="absolute inset-x-4 bottom-4 z-20 rounded-2xl border border-gold/40 bg-ink/80 px-5 py-3 backdrop-blur-md">
                    <p className="font-display text-xl leading-snug text-gold2">{t(hot[pin].t, lang)}</p>
                    <p className="text-sm leading-snug text-cream/80">{t(hot[pin].d, lang)}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="eyebrow mb-4">{t(STUDIO.styleLabel, lang)}</p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {STUDIO.styles.map((x) => (
                <button key={x.id} onClick={() => pick(x.id as Id)} aria-pressed={sid === x.id}
                  className={`rounded-2xl border px-4 py-3.5 text-left text-sm font-medium leading-snug transition ${sid === x.id ? "border-transparent bg-gradient-to-br from-bronze to-gold text-ink shadow-lg" : "border-brown/20 text-brown hover:border-gold"}`}>{t(x.n, lang)}</button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.p key={sid} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="mt-6 text-lg leading-relaxed text-brown/85">{t(style.d, lang)}</motion.p>
            </AnimatePresence>

            <p className="eyebrow mb-4 mt-8">{t(STUDIO.fabricLabel, lang)} · <span className="!normal-case text-brown">{t(activeFab.n, lang)}</span></p>
            <div className="grid grid-cols-4 gap-3">
              {style.fabrics.map((fid) => {
                const f = STUDIO.fabrics.find((x) => x.id === fid)!;
                return (
                  <button key={fid} onClick={() => setFab(fid)} aria-label={t(f.n, lang)} aria-pressed={fab === fid}
                    className={`aspect-square overflow-hidden rounded-2xl border-2 transition ${fab === fid ? "scale-105 border-gold shadow-lg" : "border-transparent hover:border-gold/50"}`}>
                    <img src={`/fabrics/${fid}.jpg`} alt="" className="h-full w-full object-cover" loading="lazy" />
                  </button>
                );
              })}
            </div>

            <ul className="mt-8 space-y-1 border-t border-brown/15 pt-5">
              {hot.map((h, i) => (
                <li key={sid + i}>
                  <button onClick={() => { setPin(i); if (side !== "front") flip(); }} className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left transition ${pin === i ? "bg-gold/15 text-brown" : "text-brown/75 hover:bg-gold/10"}`}>
                    <span className="text-gold">✦</span>{t(h.t, lang)}
                  </button>
                </li>
              ))}
            </ul>

            <button onClick={enquire} className="mt-8 rounded-full bg-gradient-to-r from-bronze via-gold to-gold2 px-8 py-4 text-sm font-medium tracking-wide text-ink shadow-[0_10px_40px_-10px_rgba(184,134,59,.7)] transition active:scale-[.98]">
              {t(STUDIO.enquire, lang)} →
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
