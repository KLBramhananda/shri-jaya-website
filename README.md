# Shri Jaya — Website

Next.js 15 · Tailwind · React Three Fiber · GSAP · Framer Motion. English + Kannada.

## Run
```
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Deploy to Vercel
Push this folder to GitHub → vercel.com → Add New Project → Import → Deploy. No env vars needed.

## Edit content
Everything (text in English and Kannada, phone, email, city) is in `lib/content.ts`.
Items marked `TODO` there are placeholders: phone, WhatsApp number, email, city.

## Notes
- The enquiry form is display-only (nothing is sent). Use the WhatsApp button + contact details until you decide how to receive enquiries.
- Only real business fact shown: 20+ years in business (`YEARS_IN_BUSINESS`).
- Fabric images in `public/fabrics/` and the shirt/trouser drawings are illustrative, not photos of real work. Replace with real photos later (same filenames, or edit `STUDIO.fabrics`).
- Kannada copy was written by Claude — please have a Kannada speaker review it.
- Logo files are in `public/brand/` (`shri-jaya-logo.png`, `monogram.png`, `logo-transparent.png`).
