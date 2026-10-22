"use client";
import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ORDER, CONTACT, t } from "@/lib/content";
import { useLang } from "@/lib/lang";
import { Reveal, SectionHead, Magnetic } from "./ui";

export default function Order() {
  const { lang } = useLang();
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState<Record<string, boolean>>({});
  const f = ORDER.fields;
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const bad: Record<string, boolean> = {};
    if (!String(d.get("name") || "").trim()) bad.name = true;
    if (!String(d.get("phone") || "").trim() && !String(d.get("email") || "").trim()) { bad.phone = true; bad.email = true; }
    setErr(bad);
    // Display-only: nothing is sent anywhere.
    if (Object.keys(bad).length === 0) setSent(true);
  };
  const base = "w-full rounded-xl border bg-paper/70 px-4 py-3.5 text-brown outline-none transition placeholder:text-brown/35 focus:border-gold focus:bg-white focus:shadow-[0_0_0_4px_rgba(184,134,59,.15)]";
  const cls = (k: string) => `${base} ${err[k] ? "border-red-700/60" : "border-brown/20"}`;
  const wa = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(t(ORDER.waMsg, lang))}`;
  const Lbl = ({ c, children }: { c?: string; children: React.ReactNode }) => <label className={`block ${c || ""}`}><span className="mb-2 block text-xs font-medium uppercase tracking-[.15em] text-bronze">{lang === "kn" ? <span className="normal-case tracking-normal text-sm">{children}</span> : children}</span></label>;
  return (
    <section id="order" className="relative overflow-hidden bg-cream py-24 sm:py-32 grain">
      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <SectionHead eyebrow={t(ORDER.eyebrow, lang)} title={t(ORDER.title, lang)} />
          <Reveal delay={0.1}><p className="mt-6 text-lg text-brown/70">{t(ORDER.sub, lang)}</p></Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 space-y-3 border-t border-brown/15 pt-8 text-brown/80">
              <p>☎ {CONTACT.phone}</p><p>✉ {CONTACT.email}</p><p>⌖ {CONTACT.city}</p>
            </div>
            <Magnetic className="mt-8"><a href={wa} target="_blank" rel="noreferrer" className="inline-block rounded-full border border-gold bg-transparent px-7 py-3.5 text-sm font-medium text-bronze transition hover:bg-gold hover:text-ink">{t(ORDER.whatsapp, lang)}</a></Magnetic>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <form onSubmit={submit} noValidate className="relative rounded-[2rem] border border-gold/30 bg-paper p-6 shadow-[0_40px_80px_-40px_rgba(64,46,26,.35)] sm:p-9">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div key="ok" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <motion.svg width="84" height="84" viewBox="0 0 84 84"><motion.circle cx="42" cy="42" r="38" fill="none" stroke="#B8863B" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }} /><motion.path d="M24 44 L37 57 L61 29" fill="none" stroke="#B8863B" strokeWidth="3" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.6, duration: 0.6 }} /></motion.svg>
                  <p className="mt-6 max-w-sm font-display text-2xl text-brown">{t(ORDER.thanks, lang)}</p>
                  <button type="button" onClick={() => setSent(false)} className="mt-6 text-sm text-bronze underline">{lang === "en" ? "Edit enquiry" : "ತಿದ್ದಿ"}</button>
                </motion.div>
              ) : (
                <motion.div key="form" exit={{ opacity: 0 }} className="grid gap-5 sm:grid-cols-2">
                  <div><Lbl>{t(f.name, lang)} *</Lbl><input name="name" className={cls("name")} autoComplete="name" /></div>
                  <div><Lbl>{t(f.business, lang)}</Lbl><input name="business" className={cls("business")} /></div>
                  <div><Lbl>{t(f.phone, lang)}</Lbl><input name="phone" inputMode="tel" className={cls("phone")} autoComplete="tel" /></div>
                  <div><Lbl>{t(f.email, lang)}</Lbl><input name="email" type="email" className={cls("email")} autoComplete="email" /></div>
                  <div className="sm:col-span-2"><Lbl>{t(f.model, lang)}</Lbl>
                    <select name="model" className={cls("model")} defaultValue="a"><option value="a">{t(ORDER.modelA, lang)}</option><option value="b">{t(ORDER.modelB, lang)}</option></select></div>
                  <div><Lbl>{t(f.garment, lang)}</Lbl>
                    <select name="garment" className={cls("garment")}><option>{t(ORDER.shirt, lang)}</option><option>{t(ORDER.pant, lang)}</option><option>{t(ORDER.both, lang)}</option></select></div>
                  <div><Lbl>{t(f.qty, lang)}</Lbl><input name="qty" inputMode="numeric" className={cls("qty")} /></div>
                  <div className="sm:col-span-2"><Lbl>{t(f.msg, lang)}</Lbl><textarea name="msg" rows={4} className={cls("msg")} /></div>
                  <div className="sm:col-span-2"><Magnetic><button type="submit" className="rounded-full bg-gradient-to-r from-bronze via-gold to-gold2 px-9 py-4 text-sm font-medium text-ink shadow-[0_10px_40px_-12px_rgba(184,134,59,.8)]">{t(ORDER.submit, lang)}</button></Magnetic>
                    {(err.name || err.phone) && <p className="mt-3 text-sm text-red-800">{lang === "en" ? "Please add your name and a phone or email." : "ದಯವಿಟ್ಟು ಹೆಸರು ಮತ್ತು ಫೋನ್ ಅಥವಾ ಇಮೇಲ್ ನೀಡಿ."}</p>}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
