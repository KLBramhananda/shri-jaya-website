"use client";
import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ORDER, CONTACT, t } from "@/lib/content";
import { sendEnquiry } from "@/lib/send";
import { useLang } from "@/lib/lang";
import { Reveal, SectionHead, Magnetic } from "./ui";

type Status = "idle" | "sending" | "sent" | "error";
type Vals = Record<string, string>;

function Lbl({ children }: { children: React.ReactNode }) {
  return <span className="mb-2 block text-xs font-medium uppercase tracking-[.15em] text-bronze [html[lang=kn]_&]:text-sm [html[lang=kn]_&]:normal-case [html[lang=kn]_&]:tracking-normal">{children}</span>;
}

export default function Order() {
  const { lang } = useLang();
  const [status, setStatus] = useState<Status>("idle");
  const [err, setErr] = useState<Record<string, boolean>>({});
  const [formKey, setFormKey] = useState(0);
  const [note, setNote] = useState("");
  const f = ORDER.fields;

  const read = (form: HTMLFormElement): Vals => {
    const d = new FormData(form); const o: Vals = {};
    d.forEach((v, k) => { o[k] = String(v).trim(); });
    return o;
  };
  const validate = (v: Vals) => {
    const bad: Record<string, boolean> = {};
    if (!v.name) bad.name = true;
    const phoneOk = v.phone && v.phone.replace(/\D/g, "").length >= 8;
    const emailOk = v.email && /^\S+@\S+\.\S+$/.test(v.email);
    if (!phoneOk && !emailOk) { bad.phone = true; bad.email = true; }
    if (v.phone && !phoneOk) bad.phone = true;
    if (v.email && !emailOk) bad.email = true;
    setErr(bad);
    return Object.keys(bad).length === 0;
  };
  const summary = (v: Vals) =>
    [`Shri Jaya enquiry`, `Name: ${v.name}`, v.business && `Business: ${v.business}`, v.phone && `Phone: ${v.phone}`, v.email && `Email: ${v.email}`,
      `Way of working: ${v.model === "b" ? "Full service" : "Job work"}`, `Garment: ${v.garment}`, v.qty && `Quantity: ${v.qty}`, v.msg && `Message: ${v.msg}`].filter(Boolean).join("\n");

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const v = read(e.currentTarget);
    if (v._honey) return; // bot trap
    if (!validate(v)) return;
    setStatus("sending"); setNote("");
    const r = await sendEnquiry({
      subject: `New enquiry from ${v.name} — Shri Jaya website`, name: v.name, email: v.email, phone: v.phone, text: summary(v),
      fields: { Name: v.name, Business: v.business || "-", Phone: v.phone || "-", "Way of working": v.model === "b" ? "Full service (we source material)" : "Job work (customer supplies material)", Garment: v.garment, Quantity: v.qty || "-", Message: v.msg || "-" },
    });
    if (r.ok) setStatus("sent"); else { if (r.activation) setNote("activation"); setStatus("error"); }
  };

  const openWhatsApp = (form: HTMLFormElement | null) => {
    const v = form ? read(form) : {};
    const text = v.name ? summary(v) : t(ORDER.waMsg, lang);
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };

  const base = "w-full rounded-xl border bg-paper/70 px-4 py-3.5 text-base text-brown outline-none transition placeholder:text-brown/35 focus:border-gold focus:bg-white focus:shadow-[0_0_0_4px_rgba(184,134,59,.15)]";
  const cls = (k: string) => `${base} ${err[k] ? "border-red-700/60 bg-red-50/60" : "border-brown/20"}`;
  const wa = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(t(ORDER.waMsg, lang))}`;

  return (
    <section id="order" className="relative overflow-hidden bg-cream py-24 sm:py-32 grain">
      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <SectionHead eyebrow={t(ORDER.eyebrow, lang)} title={t(ORDER.title, lang)} />
          <Reveal delay={0.1}><p className="mt-6 text-lg text-brown/70">{t(ORDER.sub, lang)}</p></Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-10 space-y-4 border-t border-brown/15 pt-8 text-brown/85">
              <li><a href={`tel:${CONTACT.phoneRaw}`} className="group flex items-center gap-4"><span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 text-bronze transition group-hover:bg-gold group-hover:text-ink">☎</span><span className="text-lg group-hover:text-bronze">{CONTACT.phone}</span></a></li>
              <li><a href={`mailto:${CONTACT.email}`} className="group flex items-center gap-4"><span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 text-bronze transition group-hover:bg-gold group-hover:text-ink">✉</span><span className="break-all text-lg group-hover:text-bronze">{CONTACT.email}</span></a></li>
              <li className="flex items-center gap-4"><span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 text-bronze">⌖</span><span className="text-lg">{CONTACT.city}</span></li>
            </ul>
            <Magnetic className="mt-8"><a href={wa} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#1f7a4d] px-7 py-3.5 text-sm font-medium text-white shadow-[0_12px_30px_-12px_rgba(31,122,77,.8)] transition hover:bg-[#25905a]"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M20.5 3.5A11.8 11.8 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.5 4.1 1.6 5.9L0 24l6.4-1.7a11.9 11.9 0 0 0 5.6 1.4c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.200-3.400-8.300zM12 21.700c-1.800 0-3.500-.5-5-1.400l-.4-.2-3.800 1 1-3.700-.2-.4a9.700 9.700 0 0 1-1.500-5.200c0-5.400 4.400-9.800 9.900-9.800 2.600 0 5.100 1 6.900 2.900a9.700 9.700 0 0 1 2.900 6.900c0 5.400-4.400 9.900-9.800 9.900zm5.400-7.400c-.3-.1-1.800-.9-2-1-.3-.1-.5-.1-.7.100-.2.300-.8 1-.9 1.200-.2.200-.3.200-.6.100-1.800-.9-2.900-1.600-4.100-3.600-.3-.5.300-.5.900-1.600.1-.2.100-.4 0-.5-.1-.1-.7-1.600-.9-2.200-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.100-.8.400-.3.300-1 1-1 2.500s1.100 2.900 1.200 3.100c.1.200 2.100 3.300 5.200 4.600 1.900.8 2.700.9 3.600.8.600-.1 1.800-.7 2-1.400.3-.7.3-1.300.2-1.400-.1-.1-.3-.2-.6-.3z"/></svg>{t(ORDER.whatsapp, lang)}</a></Magnetic>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <div className="relative rounded-[2rem] border border-gold/30 bg-paper p-5 shadow-[0_40px_80px_-40px_rgba(64,46,26,.35)] sm:p-9">
            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div key="ok" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <motion.svg width="84" height="84" viewBox="0 0 84 84"><motion.circle cx="42" cy="42" r="38" fill="none" stroke="#B8863B" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }} /><motion.path d="M24 44 L37 57 L61 29" fill="none" stroke="#B8863B" strokeWidth="3" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.6, duration: 0.6 }} /></motion.svg>
                  <p className="mt-6 font-display text-3xl text-brown">{t(ORDER.thanksTitle, lang)}</p>
                  <p className="mt-2 max-w-sm text-brown/70">{t(ORDER.thanks, lang)}</p>
                  <button type="button" onClick={() => { setStatus("idle"); setErr({}); setFormKey((k) => k + 1); }} className="mt-6 text-sm text-bronze underline underline-offset-4">{t(ORDER.another, lang)}</button>
                </motion.div>
              ) : (
                <motion.form key={"form" + formKey} onSubmit={submit} noValidate exit={{ opacity: 0 }} className="grid gap-5 sm:grid-cols-2">
                  <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
                  <label><Lbl>{t(f.name, lang)} *</Lbl><input name="name" className={cls("name")} autoComplete="name" /></label>
                  <label><Lbl>{t(f.business, lang)}</Lbl><input name="business" className={cls("business")} autoComplete="organization" /></label>
                  <label><Lbl>{t(f.phone, lang)}</Lbl><input name="phone" type="tel" inputMode="tel" className={cls("phone")} autoComplete="tel" /></label>
                  <label><Lbl>{t(f.email, lang)}</Lbl><input name="email" type="email" inputMode="email" className={cls("email")} autoComplete="email" /></label>
                  <label className="sm:col-span-2"><Lbl>{t(f.model, lang)}</Lbl>
                    <select name="model" className={cls("model")} defaultValue="a"><option value="a">{t(ORDER.modelA, lang)}</option><option value="b">{t(ORDER.modelB, lang)}</option></select></label>
                  <label><Lbl>{t(f.garment, lang)}</Lbl>
                    <select name="garment" className={cls("garment")}><option>{t(ORDER.shirt, lang)}</option><option>{t(ORDER.pant, lang)}</option><option>{t(ORDER.both, lang)}</option></select></label>
                  <label><Lbl>{t(f.qty, lang)}</Lbl><input name="qty" inputMode="numeric" className={cls("qty")} /></label>
                  <label className="sm:col-span-2"><Lbl>{t(f.msg, lang)}</Lbl><textarea name="msg" rows={4} className={cls("msg")} /></label>
                  <div className="sm:col-span-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <Magnetic><button type="submit" disabled={status === "sending"} className="rounded-full bg-gradient-to-r from-bronze via-gold to-gold2 px-9 py-4 text-sm font-medium text-ink shadow-[0_10px_40px_-12px_rgba(184,134,59,.8)] disabled:opacity-60">{status === "sending" ? t(ORDER.sending, lang) : t(ORDER.submit, lang)}</button></Magnetic>
                      <button type="button" onClick={(e) => { const form = (e.currentTarget.closest("form") as HTMLFormElement); const v = read(form); if (!v.name) { setErr({ name: true }); return; } openWhatsApp(form); }} className="rounded-full border border-brown/25 px-6 py-4 text-sm text-brown transition hover:border-gold hover:text-bronze">{t(ORDER.waSend, lang)}</button>
                    </div>
                    <div aria-live="polite">
                      {(err.name || err.phone || err.email) && <p className="mt-3 text-sm text-red-800">{t(ORDER.needMore, lang)}</p>}
                      {status === "error" && <p className="mt-3 text-sm text-red-800">{note === "activation" ? t(ORDER.activation, lang) : t(ORDER.errorMsg, lang)}</p>}
                    </div>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
