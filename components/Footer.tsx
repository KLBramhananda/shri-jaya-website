"use client";
import { CONTACT, FOOTER, t } from "@/lib/content";
import { useLang } from "@/lib/lang";

export default function Footer() {
  const { lang } = useLang();
  return (
    <footer className="relative overflow-hidden bg-ink px-5 pb-8 pt-20 text-cream sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
          <div className="flex items-center gap-5"><img src="/brand/monogram.png" alt="Shri Jaya" className="h-24 w-auto" /><p className="font-display text-3xl italic text-gold2">{t(FOOTER.tag, lang)}</p></div>
          <div className="space-y-1.5 text-cream/70"><p className="eyebrow mb-3">{t(FOOTER.contact, lang)}</p><p><a href={`tel:${CONTACT.phoneRaw}`} className="transition hover:text-gold2">{CONTACT.phone}</a></p><p><a href={`mailto:${CONTACT.email}`} className="break-all transition hover:text-gold2">{CONTACT.email}</a></p><p>{CONTACT.city}</p><p><a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" className="transition hover:text-gold2">WhatsApp</a></p></div>
        </div>
        <p className="stroke-text mt-16 select-none text-center font-display text-[clamp(3.2rem,15vw,13rem)] font-medium leading-none tracking-[0.12em]" aria-hidden>SHRI JAYA</p>
        <div className="gold-line mt-10" />
        <div className="mt-6 flex flex-col items-center justify-between gap-2 text-xs text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Shri Jaya · {CONTACT.owner}. {t(FOOTER.rights, lang)}</p>
          <p>{t(FOOTER.design, lang)} {CONTACT.designer}</p>
        </div>
      </div>
    </footer>
  );
}
