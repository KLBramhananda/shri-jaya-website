"use client";
import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CONTACT, INVEST, t } from "@/lib/content";
import { LangProvider, useLang } from "@/lib/lang";
import { sendEnquiry } from "@/lib/send";
import SmoothScroll from "./SmoothScroll";
import Cursor from "./Cursor";
import { Magnetic, Reveal, SectionHead } from "./ui";

function scrollTo(id: string) { const el = document.getElementById(id); const l = (window as any).__lenis; if (el) (l ? l.scrollTo(el, { duration: 1.5 }) : el.scrollIntoView({ behavior: "smooth" })); }

function Bar() {
  const { lang, setLang } = useLang();
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="/" className="flex items-center gap-3" aria-label="Shri Jaya home"><img src="/brand/monogram.png" alt="" className="h-9 w-auto" /><span className="hidden font-display text-xl tracking-[0.35em] text-cream sm:block">SHRI JAYA</span></a>
        <div className="flex items-center gap-4">
          <a href="/" className="hidden text-sm text-cream/75 transition hover:text-gold2 sm:block">{t(INVEST.back, lang)}</a>
          <div className="flex items-center rounded-full border border-gold/50 p-0.5 text-xs">
            {(["en", "kn"] as const).map((l) => (<button key={l} onClick={() => setLang(l)} aria-pressed={lang === l} className={`rounded-full px-3 py-1 transition ${lang === l ? "bg-gold text-ink" : "text-cream/80 hover:text-gold2"}`}>{l === "en" ? "EN" : "ಕನ್ನಡ"}</button>))}
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const { lang } = useLang();
  const kn = lang === "kn";
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_35%,#3a2813_0%,#1A120A_65%)]" />
      <svg className="absolute inset-0 h-full w-full opacity-70" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <defs><linearGradient id="tg" x1="0" x2="1"><stop offset="0" stopColor="#7A4F1E" stopOpacity="0" /><stop offset=".5" stopColor="#D9B26A" /><stop offset="1" stopColor="#B8863B" stopOpacity="0" /></linearGradient></defs>
        {[0, 1, 2].map((i) => (
          <motion.path key={i} d={`M-50 ${520 + i * 60} C 250 ${200 + i * 40}, 450 ${760 - i * 30}, 700 ${420 + i * 30} S 1100 ${180 + i * 50}, 1280 ${340 + i * 40}`} fill="none" stroke="url(#tg)" strokeWidth={1.6 - i * 0.4} initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 3 + i, delay: 0.3 + i * 0.4, ease: "easeInOut" }} />
        ))}
      </svg>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-28 sm:px-8">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }} className="eyebrow mb-7 flex items-center gap-4"><span className="h-px w-10 bg-gold" />{t(INVEST.eyebrow, lang)}</motion.p>
        <h1 className={`font-display font-medium text-cream ${kn ? "text-[clamp(2rem,6vw,4.8rem)] leading-[1.35]" : "text-[clamp(2.6rem,7.5vw,6.6rem)] leading-[1.02]"}`}>
          <span className="block overflow-hidden pb-[0.22em] -mb-[0.1em]"><motion.span className="block" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}>{t(INVEST.title1, lang)}</motion.span></span>
          <span className="block overflow-hidden pb-[0.05em]"><motion.span className="gold-text block pb-[0.3em] italic" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1.1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}>{t(INVEST.title2, lang)}</motion.span></span>
        </h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 1 }} className="mt-7 max-w-2xl text-base leading-relaxed text-cream/75 sm:text-lg">{t(INVEST.sub, lang)}</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.15, duration: 1 }} className="mt-10 flex flex-wrap gap-4">
          <Magnetic><button onClick={() => scrollTo("talk")} className="rounded-full bg-gradient-to-r from-bronze via-gold to-gold2 px-8 py-4 text-sm font-medium text-ink shadow-[0_10px_40px_-10px_rgba(184,134,59,.7)]">{t(INVEST.cta1, lang)}</button></Magnetic>
          <Magnetic><button onClick={() => scrollTo("plan")} className="rounded-full border border-gold/60 px-8 py-4 text-sm text-cream transition hover:bg-gold/10">{t(INVEST.cta2, lang)}</button></Magnetic>
        </motion.div>
      </div>
    </section>
  );
}

function Roadmap() {
  const { lang } = useLang();
  return (
    <section id="plan" className="relative overflow-hidden bg-cream py-24 sm:py-32 grain">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead eyebrow={t(INVEST.roadmapEyebrow, lang)} title={t(INVEST.roadmapTitle, lang)} />
        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          <motion.div className="absolute left-0 right-0 top-[22px] hidden h-px origin-left bg-gradient-to-r from-gold via-gold2 to-gold/20 md:block" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.8, ease: "easeInOut" }} />
          {INVEST.stages.map((s, i) => (
            <Reveal key={i} delay={i * 0.18}>
              <div className="relative">
                <span className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 border-gold font-display text-lg ${i === 0 ? "bg-gold text-ink" : "bg-cream text-bronze"}`}>{i + 1}</span>
                <p className="eyebrow mt-5">{t(s.tag, lang)}</p>
                <h3 className="mt-2 font-display text-3xl font-medium text-brown sm:text-4xl">{t(s.t, lang)}</h3>
                <p className="mt-3 max-w-sm text-brown/70">{t(s.d, lang)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Funds() {
  const { lang } = useLang();
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-cream sm:py-32">
      <div className="absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-gold/10 blur-[120px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead light eyebrow={t(INVEST.fundsEyebrow, lang)} title={t(INVEST.fundsTitle, lang)} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INVEST.funds.map((f, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div data-hover className="group relative h-full overflow-hidden rounded-2xl border border-gold/25 bg-white/[0.03] p-7 transition duration-500 hover:-translate-y-2 hover:border-gold/70 hover:bg-gold/[0.07]">
                <span className="font-display text-6xl italic text-gold/30 transition group-hover:text-gold/70">0{i + 1}</span>
                <h3 className="mt-6 font-display text-2xl text-cream">{t(f.t, lang)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">{t(f.d, lang)}</p>
                <motion.span className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-gold to-transparent" initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.1, duration: 1 }} />
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}><p className="mt-10 border-l-2 border-gold pl-4 text-cream/75">{t(INVEST.fundsNote, lang)}</p></Reveal>
      </div>
    </section>
  );
}

function Why() {
  const { lang } = useLang();
  return (
    <section className="relative overflow-hidden bg-paper py-24 sm:py-32 grain">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead eyebrow={t(INVEST.whyEyebrow, lang)} title={t(INVEST.whyTitle, lang)} />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {INVEST.why.map((w, i) => (
            <Reveal key={i} delay={(i % 2) * 0.1}>
              <div className="flex gap-5 rounded-2xl border border-brown/10 bg-cream/60 p-6 transition hover:border-gold/60">
                <span className="font-display text-4xl italic text-gold">0{i + 1}</span>
                <div><h3 className="font-display text-2xl text-brown">{t(w.t, lang)}</h3><p className="mt-2 text-brown/70">{t(w.d, lang)}</p></div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-20">
          <Reveal><p className="eyebrow mb-8">{t(INVEST.howEyebrow, lang)}</p></Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {INVEST.how.map((h, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <div className="border-t border-gold/50 pt-5"><span className="font-display text-sm tracking-[0.3em] text-gold">STEP {i + 1}</span><h3 className="mt-2 font-display text-2xl text-brown">{t(h.t, lang)}</h3><p className="mt-2 text-brown/70">{t(h.d, lang)}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Talk() {
  const { lang } = useLang();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [note, setNote] = useState(false);
  const [err, setErr] = useState<Record<string, boolean>>({});
  const f = INVEST.fields;
  const base = "w-full rounded-xl border bg-paper/70 px-4 py-3.5 text-base text-brown outline-none transition placeholder:text-brown/35 focus:border-gold focus:bg-white focus:shadow-[0_0_0_4px_rgba(184,134,59,.15)]";
  const cls = (k: string) => `${base} ${err[k] ? "border-red-700/60 bg-red-50/60" : "border-brown/20"}`;
  const L = ({ c }: { c: string }) => <span className="mb-2 block text-xs font-medium uppercase tracking-[.15em] text-bronze [html[lang=kn]_&]:text-sm [html[lang=kn]_&]:normal-case [html[lang=kn]_&]:tracking-normal">{c}</span>;
  const read = (form: HTMLFormElement) => { const o: Record<string, string> = {}; new FormData(form).forEach((v, k) => { o[k] = String(v).trim(); }); return o; };
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const v = read(e.currentTarget);
    if (v._honey) return;
    const bad: Record<string, boolean> = {};
    const phoneOk = v.phone && v.phone.replace(/\D/g, "").length >= 8;
    const emailOk = v.email && /^\S+@\S+\.\S+$/.test(v.email);
    if (!v.name) bad.name = true;
    if (!phoneOk && !emailOk) { bad.phone = true; bad.email = true; }
    if (v.phone && !phoneOk) bad.phone = true;
    if (v.email && !emailOk) bad.email = true;
    setErr(bad); if (Object.keys(bad).length) return;
    setStatus("sending"); setNote(false);
    const interest = v.interest === "other" ? "Another way to support" : "Lending / loan funding";
    const text = ["INVESTOR / LENDER ENQUIRY", `Name: ${v.name}`, v.org && `Organisation: ${v.org}`, v.phone && `Phone: ${v.phone}`, v.email && `Email: ${v.email}`, `Interested in: ${interest}`, v.ticket && `Approx. amount: ${v.ticket}`, v.msg && `Message: ${v.msg}`].filter(Boolean).join("\n");
    const r = await sendEnquiry({ subject: `Investor/lender enquiry from ${v.name} — Shri Jaya`, name: v.name, email: v.email, phone: v.phone, text, fields: { Name: v.name, Organisation: v.org || "-", Phone: v.phone || "-", "Interested in": interest, "Approx. amount": v.ticket || "-", Message: v.msg || "-" } });
    if (r.ok) setStatus("sent"); else { setNote(r.activation); setStatus("error"); }
  };
  const wa = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(t(INVEST.waMsg, lang))}`;
  return (
    <section id="talk" className="relative overflow-hidden bg-cream py-24 sm:py-32 grain">
      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <SectionHead eyebrow={t(INVEST.formEyebrow, lang)} title={t(INVEST.formTitle, lang)} />
          <Reveal delay={0.1}>
            <ul className="mt-10 space-y-4 border-t border-brown/15 pt-8 text-brown/85">
              <li><a href={`tel:${CONTACT.phoneRaw}`} className="group flex items-center gap-4"><span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 text-bronze transition group-hover:bg-gold group-hover:text-ink">☎</span><span className="text-lg">{CONTACT.phone}</span></a></li>
              <li><a href={`mailto:${CONTACT.email}`} className="group flex items-center gap-4"><span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 text-bronze transition group-hover:bg-gold group-hover:text-ink">✉</span><span className="break-all text-lg">{CONTACT.email}</span></a></li>
            </ul>
            <Magnetic className="mt-8"><a href={wa} target="_blank" rel="noreferrer" className="inline-block rounded-full bg-[#1f7a4d] px-7 py-3.5 text-sm font-medium text-white shadow-[0_12px_30px_-12px_rgba(31,122,77,.8)] transition hover:bg-[#25905a]">WhatsApp</a></Magnetic>
            <p className="mt-10 text-xs leading-relaxed text-brown/55">{t(INVEST.disclaimer, lang)}</p>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <div className="rounded-[2rem] border border-gold/30 bg-paper p-5 shadow-[0_40px_80px_-40px_rgba(64,46,26,.35)] sm:p-9">
            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div key="ok" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex min-h-[380px] flex-col items-center justify-center text-center">
                  <motion.svg width="84" height="84" viewBox="0 0 84 84"><motion.circle cx="42" cy="42" r="38" fill="none" stroke="#B8863B" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }} /><motion.path d="M24 44 L37 57 L61 29" fill="none" stroke="#B8863B" strokeWidth="3" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.6, duration: 0.6 }} /></motion.svg>
                  <p className="mt-6 max-w-sm font-display text-2xl text-brown">{t(INVEST.thanks, lang)}</p>
                </motion.div>
              ) : (
                <motion.form key="f" onSubmit={submit} noValidate className="grid gap-5 sm:grid-cols-2">
                  <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
                  <label><L c={`${t(f.name, lang)} *`} /><input name="name" className={cls("name")} autoComplete="name" /></label>
                  <label><L c={t(f.org, lang)} /><input name="org" className={cls("org")} autoComplete="organization" /></label>
                  <label><L c={lang === "en" ? "Phone / WhatsApp" : "ಫೋನ್ / ವಾಟ್ಸಾಪ್"} /><input name="phone" type="tel" inputMode="tel" className={cls("phone")} autoComplete="tel" /></label>
                  <label><L c={lang === "en" ? "Email" : "ಇಮೇಲ್"} /><input name="email" type="email" inputMode="email" className={cls("email")} autoComplete="email" /></label>
                  <label><L c={t(f.interest, lang)} /><select name="interest" className={cls("interest")} defaultValue="loan"><option value="loan">{t(INVEST.interestLoan, lang)}</option><option value="other">{t(INVEST.interestOther, lang)}</option></select></label>
                  <label><L c={t(f.ticket, lang)} /><input name="ticket" className={cls("ticket")} /></label>
                  <label className="sm:col-span-2"><L c={t(f.msg, lang)} /><textarea name="msg" rows={4} className={cls("msg")} /></label>
                  <div className="sm:col-span-2">
                    <Magnetic><button type="submit" disabled={status === "sending"} className="rounded-full bg-gradient-to-r from-bronze via-gold to-gold2 px-9 py-4 text-sm font-medium text-ink shadow-[0_10px_40px_-12px_rgba(184,134,59,.8)] disabled:opacity-60">{status === "sending" ? (lang === "en" ? "Sending…" : "ಕಳುಹಿಸುತ್ತಿದೆ…") : t(INVEST.submit, lang)}</button></Magnetic>
                    <div aria-live="polite">
                      {(err.name || err.phone || err.email) && <p className="mt-3 text-sm text-red-800">{lang === "en" ? "Please add your name and a phone number or email." : "ದಯವಿಟ್ಟು ಹೆಸರು ಮತ್ತು ಫೋನ್ ಅಥವಾ ಇಮೇಲ್ ನೀಡಿ."}</p>}
                      {status === "error" && <p className="mt-3 text-sm text-red-800">{note ? (lang === "en" ? "Email service is being set up. Please use WhatsApp or call us for now." : "ಇಮೇಲ್ ಸೇವೆ ಸಿದ್ಧಗೊಳ್ಳುತ್ತಿದೆ. ಸದ್ಯಕ್ಕೆ ವಾಟ್ಸಾಪ್ ಅಥವಾ ಕರೆ ಮಾಡಿ.") : (lang === "en" ? "Sorry, we couldn't send that. Please use WhatsApp or call us directly." : "ಕ್ಷಮಿಸಿ, ಕಳುಹಿಸಲು ಆಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ವಾಟ್ಸಾಪ್ ಅಥವಾ ಕರೆ ಮಾಡಿ.")}</p>}
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

export default function InvestPage() {
  return (
    <LangProvider>
      <SmoothScroll />
      <Cursor />
      <Bar />
      <main><Hero /><Roadmap /><Funds /><Why /><Talk /></main>
      <footer className="bg-ink px-5 py-8 text-center text-xs text-cream/50">
        <a href="/" className="text-gold2/80 hover:text-gold2">Shri Jaya</a> · © {new Date().getFullYear()} · {CONTACT.owner}
      </footer>
    </LangProvider>
  );
}
