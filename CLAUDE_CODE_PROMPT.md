# SHRI JAYA — Website Build Brief (paste this into a new Claude Code session)

> Open Claude Code **inside the project folder** (`ej_roopa_cloth_app`). Put `shri-jaya-logo.png` in `/public/brand/` first. Then paste everything below the line.

---

## ROLE
You are a senior creative developer + brand designer. Build a **single-page, award-level, 3D, interactive, fully responsive** marketing website for **SHRI JAYA** — tagline **"Quality in Every Thread."** Deploy target: **Vercel**.

## ABOUT THE BUSINESS (content source of truth)
Shri Jaya is a garment manufacturing / stitching business that works with business owners and brands. Two ways of working:

1. **Job Work (Stitching Only)** — The client supplies all materials (fabric, trims, buttons, zips, labels). We cut, stitch, finish, quality-check and deliver the complete garment.
2. **Full Service (End-to-End)** — The client gives only the order/design. We source every required material (fabric, lining, thread, buttons, zips, packaging), then stitch, finish, quality-check and deliver the finished garment.

**Purpose of the site:** a brand showcase / reference for clients, customers and anyone curious — who we are, what we do, how we do it, and how to start an order. It must make the brand look premium, trustworthy and memorable. Not an e-commerce store.

## BRAND SYSTEM (from the logo at `/public/brand/shri-jaya-logo.png`)
- Logo: serif "SJ" monogram with a swooping gold swirl and a lotus-leaf sprout; wordmark "SHRI JAYA" in widely tracked serif caps.
- Palette: Cream `#EFE7DC` (background), Deep Brown `#402E1A` (text), Rich Bronze `#7A4F1E`, Gold `#B8863B`, Light Gold `#D9B26A`, Ink `#1A120A` (dark sections).
- Type: display serif (Cormorant Garamond or Playfair Display) for headings; Inter or Jost for body; small caps with wide tracking for labels (mirrors the logo).
- Gold gradient text/lines (bronze → gold → light gold) for accents. Subtle paper/linen grain overlay on cream sections.
- Voice: warm, confident, crafted, minimal. Short sentences.

## TECH STACK
- **Next.js (App Router) + TypeScript + Tailwind CSS**
- **three + @react-three/fiber + @react-three/drei** for 3D
- **GSAP + ScrollTrigger** for scroll storytelling, **Lenis** for smooth scroll, **Framer Motion** for UI micro-interactions
- No backend required. Enquiry form → `/api/enquiry` route that forwards to email (Resend or Formspree; read key from env, never hardcode) **plus** a "Chat on WhatsApp" button with prefilled message.
- Deploy: Vercel, zero config. Add `.env.example`.

## PAGE STRUCTURE (one page, anchored sections)
1. **Intro loader (1.5s max)** — gold thread draws the SJ monogram stroke-by-stroke, then the screen parts like a curtain into the hero.
2. **Hero (the "wow")** — Full-screen WebGL scene: a luxurious **silk/cloth sheet** (subdivided plane with custom vertex shader for flowing folds + fresnel/sheen in gold-cream) that **ripples toward the cursor** and drifts with scroll. Floating gold thread particles. Big headline: *"Quality in Every Thread."* Sub: one line about stitching & manufacturing for brands. Two CTAs: **Start an Order** · **See How We Work**. Logo top-left, minimal nav top-right.
3. **Marquee strip** — slow-scrolling gold text: *Cutting · Stitching · Finishing · Quality Check · Delivery*.
4. **Two Ways to Work (interactive centerpiece)** — A large toggle/slider: **"You bring the material"** ↔ **"We handle everything"**. Switching morphs a 3D/animated diagram showing what the client provides vs what Shri Jaya provides (checklist items animate in: fabric, lining, thread, buttons, zips, labels, packaging → stitching → QC → delivery). Show who-does-what clearly with icons and gold/brown colour coding.
5. **The Process (pinned scroll story)** — Pinned section; as user scrolls, a 3D needle + gold thread stitches a path while steps appear: *1 Order & Brief → 2 Material (client-supplied or sourced by us) → 3 Pattern & Cutting → 4 Stitching → 5 Finishing & Quality Check → 6 Packing & Delivery*. Progress line fills in gold.
6. **What We Make** — Interactive 3D tilt cards (hover parallax) for garment categories (placeholders: Shirts, Kurtas, Uniforms, Ethnic wear, Custom orders — easy to edit in one `content.ts`). Click opens a smooth modal with details + "Enquire about this".
7. **Why Shri Jaya** — 4 animated counters/value cards (Quality control at every stage · On-time delivery · Flexible: job-work or full service · Transparent pricing). Use placeholder numbers clearly marked `TODO`.
8. **Craft Gallery** — Horizontal drag-scroll gallery with placeholder fabric/texture images (use gradients/noise if no photos yet; structure ready for real images in `/public/gallery`).
9. **Start an Order** — Elegant form (name, business, phone, email, "Which model? (Job Work / Full Service)", garment type, quantity, message) with animated validation + success state, and WhatsApp button.
10. **Footer** — Large outlined "SHRI JAYA" wordmark, tagline, contact placeholders (phone, email, address, WhatsApp), social icons, © year.

## INTERACTION & POLISH REQUIREMENTS
- Custom gold cursor (ring that magnifies on interactive elements) — desktop only.
- Magnetic buttons, smooth section reveals (mask/clip-path text reveals), parallax, scroll-linked 3D camera moves.
- Smooth page-load → hero choreography; no layout shift.
- Sticky nav that hides on scroll-down, shows on scroll-up, with a full-screen overlay menu on mobile.
- Subtle sound is NOT needed. No autoplay audio.

## PERFORMANCE / RESPONSIVE / ACCESSIBILITY (non-negotiable)
- Mobile-first. Test 360px → 1920px. On low-power/mobile devices: reduce plane subdivisions, cap DPR at 1.5, lower particle count; offer a static gradient fallback if WebGL is unavailable.
- Lazy-load the 3D canvas; Lighthouse Performance ≥ 85 mobile target; images via `next/image`; fonts via `next/font`.
- Respect `prefers-reduced-motion` (disable heavy animation, keep content readable).
- Semantic HTML, alt text, visible focus states, AA colour contrast (check brown-on-cream and gold-on-dark).
- SEO: metadata, Open Graph image (use the logo), favicon from the SJ monogram, `sitemap`/`robots`.

## FILE / CODE ORGANISATION
```
/app            layout.tsx, page.tsx, api/enquiry/route.ts
/components     canvas/ (ClothScene, Threads, Needle), sections/ (Hero, TwoWays, Process, Products, Why, Gallery, Order, Footer), ui/
/lib            content.ts (ALL copy, products, contact — single editable file), utils
/public/brand   shri-jaya-logo.png
```
All business text, contact details and product names live in `lib/content.ts` so the owner can edit without touching components.

## WORKING AGREEMENT
1. First, **show a short plan** (sections, 3D approach, libs) and wait for my "go" — then build.
2. Build in this order: scaffold + brand tokens → hero 3D → Two Ways → Process → rest → form → polish → perf pass.
3. Run `npm run build` and fix all errors; run the dev server and verify at mobile + desktop widths with screenshots before saying done.
4. Finish with: README (run, edit content, env vars, deploy to Vercel), and a list of every `TODO` placeholder I must replace (phone, email, address, photos, numbers).
5. Do not invent client names, certifications, or statistics — use clearly marked placeholders.

---

# YOUR STEP-BY-STEP PLAN (for you, Bramha)

**Step 1 — Brand assets (5 min):** Save `shri-jaya-logo.png` into your project folder. (Optional: later get a transparent-background version for the website nav.)

**Step 2 — Fill your real details (10 min):** Before or right after starting, gather: phone/WhatsApp number, email, address/city, 5–8 garment types you make, and any real photos of your work. Everything else can be placeholders.

**Step 3 — New Claude Code session (pointed at your folder):** Open the folder in Claude Code, paste this whole brief. Approve the plan it shows, then let it build.

**Step 4 — Review loop:** Run `npm run dev`, open on your phone too (same Wi-Fi). Give feedback by section: "make hero cloth slower", "change Process step 3 wording".

**Step 5 — Deploy to Vercel:** Push to GitHub → vercel.com → Import project → Deploy. Add the env variable for the form (Resend/Formspree key) in Vercel settings. Add your custom domain later (e.g. shrijaya.in).

**Step 6 — Launch checklist:** Replace every TODO · test form + WhatsApp link · test on iPhone + Android · check Lighthouse · share the link.

**Why this stays "quick but impressive":** one page, one hero effect that carries the wow (cloth shader), one interactive centerpiece (Two Ways toggle), and one storytelling moment (stitching process). Everything else is clean and fast.
