// ============================================================
//  SHRI JAYA — ALL EDITABLE CONTENT LIVES HERE (English + Kannada)
//  Items marked TODO are placeholders. Replace before launch.
// ============================================================

export type Lang = "en" | "kn";

export const CONTACT = {
  owner: "Roopa S",
  designer: "Bramha",
  phone: "+91 00000 00000", // TODO: real phone
  whatsapp: "910000000000", // TODO: WhatsApp number, digits only with country code
  email: "hello@your-domain.com", // TODO: real email
  city: "Your City, Karnataka", // TODO: city / full address
};

// Only fact supplied by the owner. Everything else is qualitative on purpose.
export const YEARS_IN_BUSINESS = 20;

type T = { en: string; kn: string };
export const t = (x: T, l: Lang) => x[l];

export const NAV: { id: string; label: T }[] = [
  { id: "ways", label: { en: "Ways to Work", kn: "ಕೆಲಸದ ವಿಧಾನ" } },
  { id: "process", label: { en: "Process", kn: "ಪ್ರಕ್ರಿಯೆ" } },
  { id: "studio", label: { en: "Our Garments", kn: "ನಮ್ಮ ಉಡುಪುಗಳು" } },
  { id: "about", label: { en: "About", kn: "ನಮ್ಮ ಬಗ್ಗೆ" } },
  { id: "order", label: { en: "Start an Order", kn: "ಆರ್ಡರ್" } },
];

export const HERO = {
  eyebrow: { en: "Garment manufacturing & stitching", kn: "ಉಡುಪು ತಯಾರಿಕೆ ಮತ್ತು ಹೊಲಿಗೆ" },
  line1: { en: "Quality in", kn: "ಪ್ರತಿ ದಾರದಲ್ಲೂ" },
  line2: { en: "Every Thread.", kn: "ಗುಣಮಟ್ಟ." },
  sub: {
    en: "Men's shirts and trousers, cut, stitched and finished for brands and business owners — with your material, or with ours.",
    kn: "ಬ್ರ್ಯಾಂಡ್‌ಗಳು ಮತ್ತು ವ್ಯಾಪಾರಿಗಳಿಗಾಗಿ ಪುರುಷರ ಶರ್ಟ್ ಮತ್ತು ಪ್ಯಾಂಟ್ — ನಿಮ್ಮ ಬಟ್ಟೆಯಲ್ಲಾದರೂ ಸರಿ, ನಮ್ಮ ಬಟ್ಟೆಯಲ್ಲಾದರೂ ಸರಿ.",
  },
  cta1: { en: "Start an Order", kn: "ಆರ್ಡರ್ ಆರಂಭಿಸಿ" },
  cta2: { en: "See How We Work", kn: "ನಾವು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತೇವೆ" },
  scroll: { en: "Scroll", kn: "ಕೆಳಗೆ" },
};

export const MARQUEE: T[] = [
  { en: "Cutting", kn: "ಕಟಿಂಗ್" },
  { en: "Stitching", kn: "ಹೊಲಿಗೆ" },
  { en: "Finishing", kn: "ಫಿನಿಶಿಂಗ್" },
  { en: "Quality Check", kn: "ಗುಣಮಟ್ಟ ಪರಿಶೀಲನೆ" },
  { en: "Packing", kn: "ಪ್ಯಾಕಿಂಗ್" },
  { en: "Delivery", kn: "ಡೆಲಿವರಿ" },
];

// ---------- Two ways to work ----------
export const WAYS = {
  eyebrow: { en: "Two ways to work with us", kn: "ನಮ್ಮೊಂದಿಗೆ ಕೆಲಸ ಮಾಡಲು ಎರಡು ದಾರಿಗಳು" },
  title: { en: "Choose how much you want us to handle.", kn: "ನಾವು ಎಷ್ಟು ನೋಡಿಕೊಳ್ಳಬೇಕು ಎಂದು ಆರಿಸಿ." },
  toggleA: { en: "You bring the material", kn: "ನೀವು ಸಾಮಗ್ರಿ ಕೊಡಿ" },
  toggleB: { en: "We handle everything", kn: "ಎಲ್ಲವನ್ನೂ ನಾವು ನೋಡಿಕೊಳ್ಳುತ್ತೇವೆ" },
  you: { en: "You provide", kn: "ನೀವು ನೀಡುವುದು" },
  we: { en: "We provide", kn: "ನಾವು ನೀಡುವುದು" },
  a: {
    name: { en: "Job Work · Stitching Only", kn: "ಜಾಬ್ ವರ್ಕ್ · ಹೊಲಿಗೆ ಮಾತ್ರ" },
    blurb: {
      en: "You supply every material. We cut, stitch, finish, check and hand back the complete garment.",
      kn: "ಎಲ್ಲಾ ಸಾಮಗ್ರಿಗಳನ್ನು ನೀವು ಕೊಡಿ. ಕಟಿಂಗ್, ಹೊಲಿಗೆ, ಫಿನಿಶಿಂಗ್, ತಪಾಸಣೆ ಮಾಡಿ ಸಂಪೂರ್ಣ ಉಡುಪನ್ನು ನಾವು ಹಿಂತಿರುಗಿಸುತ್ತೇವೆ.",
    },
  },
  b: {
    name: { en: "Full Service · End to End", kn: "ಪೂರ್ಣ ಸೇವೆ · ಆರಂಭದಿಂದ ಅಂತ್ಯದವರೆಗೆ" },
    blurb: {
      en: "You give us the order and the design. We source every material, then stitch, finish, check and deliver.",
      kn: "ಆರ್ಡರ್ ಮತ್ತು ವಿನ್ಯಾಸ ನೀಡಿ. ಎಲ್ಲಾ ಸಾಮಗ್ರಿಗಳನ್ನು ನಾವು ಹುಡುಕಿ ತಂದು, ಹೊಲಿದು, ಫಿನಿಶ್ ಮಾಡಿ, ತಪಾಸಣೆ ಮಾಡಿ ತಲುಪಿಸುತ್ತೇವೆ.",
    },
  },
  materials: [
    { en: "Fabric", kn: "ಬಟ್ಟೆ" },
    { en: "Lining & interlining", kn: "ಲೈನಿಂಗ್" },
    { en: "Thread", kn: "ದಾರ" },
    { en: "Buttons & zips", kn: "ಬಟನ್ ಮತ್ತು ಜಿಪ್" },
    { en: "Labels & tags", kn: "ಲೇಬಲ್ ಮತ್ತು ಟ್ಯಾಗ್" },
    { en: "Packaging", kn: "ಪ್ಯಾಕೇಜಿಂಗ್" },
  ] as T[],
  work: [
    { en: "Pattern & cutting", kn: "ಪ್ಯಾಟರ್ನ್ ಮತ್ತು ಕಟಿಂಗ್" },
    { en: "Stitching", kn: "ಹೊಲಿಗೆ" },
    { en: "Finishing & pressing", kn: "ಫಿನಿಶಿಂಗ್ ಮತ್ತು ಇಸ್ತ್ರಿ" },
    { en: "Quality check", kn: "ಗುಣಮಟ್ಟ ಪರಿಶೀಲನೆ" },
    { en: "Delivery", kn: "ಡೆಲಿವರಿ" },
  ] as T[],
};

// ---------- Process ----------
export const PROCESS = {
  eyebrow: { en: "How we work", kn: "ನಾವು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತೇವೆ" },
  title: { en: "One thread, six careful steps.", kn: "ಒಂದು ದಾರ, ಆರು ಎಚ್ಚರದ ಹಂತಗಳು." },
  steps: [
    { t: { en: "Order & Brief", kn: "ಆರ್ಡರ್ ಮತ್ತು ವಿವರ" }, d: { en: "You share the design, sizes and quantity. We confirm every detail in writing.", kn: "ವಿನ್ಯಾಸ, ಅಳತೆ ಮತ್ತು ಪ್ರಮಾಣವನ್ನು ನೀವು ತಿಳಿಸಿ. ಪ್ರತಿ ವಿವರವನ್ನು ನಾವು ಲಿಖಿತವಾಗಿ ದೃಢೀಕರಿಸುತ್ತೇವೆ." } },
    { t: { en: "Material", kn: "ಸಾಮಗ್ರಿ" }, d: { en: "Supplied by you — or sourced by us, whichever way you choose.", kn: "ನೀವು ಕೊಡಬಹುದು — ಅಥವಾ ನಾವೇ ಹುಡುಕಿ ತರುತ್ತೇವೆ, ನಿಮ್ಮ ಆಯ್ಕೆ." } },
    { t: { en: "Pattern & Cutting", kn: "ಪ್ಯಾಟರ್ನ್ ಮತ್ತು ಕಟಿಂಗ್" }, d: { en: "Patterns made to your sizes, fabric cut with care to reduce waste.", kn: "ನಿಮ್ಮ ಅಳತೆಗೆ ಪ್ಯಾಟರ್ನ್, ವ್ಯರ್ಥ ಕಡಿಮೆ ಮಾಡಿ ಎಚ್ಚರಿಕೆಯಿಂದ ಕಟಿಂಗ್." } },
    { t: { en: "Stitching", kn: "ಹೊಲಿಗೆ" }, d: { en: "Skilled hands, steady seams, clean stitching on every piece.", kn: "ನುರಿತ ಕೈಗಳು, ಸ್ಥಿರ ಹೊಲಿಗೆ, ಪ್ರತಿ ಉಡುಪಿನಲ್ಲೂ ಸ್ವಚ್ಛ ಕೆಲಸ." } },
    { t: { en: "Finishing & Quality Check", kn: "ಫಿನಿಶಿಂಗ್ ಮತ್ತು ಗುಣಮಟ್ಟ ಪರಿಶೀಲನೆ" }, d: { en: "Pressing, thread trimming and a piece-by-piece inspection.", kn: "ಇಸ್ತ್ರಿ, ಹೆಚ್ಚುವರಿ ದಾರ ಕತ್ತರಿಸುವುದು, ಪ್ರತಿ ತುಣುಕಿನ ತಪಾಸಣೆ." } },
    { t: { en: "Packing & Delivery", kn: "ಪ್ಯಾಕಿಂಗ್ ಮತ್ತು ಡೆಲಿವರಿ" }, d: { en: "Neatly packed and handed over, ready for your customers.", kn: "ಅಚ್ಚುಕಟ್ಟಾಗಿ ಪ್ಯಾಕ್ ಮಾಡಿ, ನಿಮ್ಮ ಗ್ರಾಹಕರಿಗೆ ಸಿದ್ಧವಾಗಿ ಹಸ್ತಾಂತರ." } },
  ],
};

// ---------- Garment studio ----------
export const STUDIO = {
  eyebrow: { en: "What we make", kn: "ನಾವು ತಯಾರಿಸುವುದು" },
  title: { en: "Men's shirts & trousers, in your fabric.", kn: "ಪುರುಷರ ಶರ್ಟ್ ಮತ್ತು ಪ್ಯಾಂಟ್, ನಿಮ್ಮ ಬಟ್ಟೆಯಲ್ಲಿ." },
  sub: {
    en: "Pick a garment and tap a fabric to preview it. Illustrative fabrics — your real material is used in production.",
    kn: "ಉಡುಪನ್ನು ಆರಿಸಿ, ಬಟ್ಟೆಯನ್ನು ಟ್ಯಾಪ್ ಮಾಡಿ ನೋಡಿ. ಇವು ಮಾದರಿ ಬಟ್ಟೆಗಳು — ತಯಾರಿಕೆಯಲ್ಲಿ ನಿಜವಾದ ಬಟ್ಟೆ ಬಳಸಲಾಗುತ್ತದೆ.",
  },
  shirt: { en: "Men's Shirts", kn: "ಪುರುಷರ ಶರ್ಟ್‌ಗಳು" },
  pant: { en: "Men's Trousers", kn: "ಪುರುಷರ ಪ್ಯಾಂಟ್‌ಗಳು" },
  fabricLabel: { en: "Fabric", kn: "ಬಟ್ಟೆ" },
  details: {
    shirt: [
      { en: "Collar & cuff construction", kn: "ಕಾಲರ್ ಮತ್ತು ಕಫ್ ರಚನೆ" },
      { en: "Placket & button stitching", kn: "ಪ್ಲ್ಯಾಕೆಟ್ ಮತ್ತು ಬಟನ್ ಹೊಲಿಗೆ" },
      { en: "Pressing & fold-ready finish", kn: "ಇಸ್ತ್ರಿ ಮತ್ತು ಫೋಲ್ಡ್ ಫಿನಿಶ್" },
    ] as T[],
    pant: [
      { en: "Waistband & fly construction", kn: "ವೇಸ್ಟ್‌ಬ್ಯಾಂಡ್ ಮತ್ತು ಫ್ಲೈ ರಚನೆ" },
      { en: "Pocket & seam finishing", kn: "ಪಾಕೆಟ್ ಮತ್ತು ಸೀಮ್ ಫಿನಿಶಿಂಗ್" },
      { en: "Crease pressing & hemming", kn: "ಕ್ರೀಸ್ ಇಸ್ತ್ರಿ ಮತ್ತು ಹೆಮ್ಮಿಂಗ್" },
    ] as T[],
  },
  fabrics: [
    { id: "navy-twill", n: { en: "Navy Twill", kn: "ನೇವಿ ಟ್ವಿಲ್" } },
    { id: "charcoal-herringbone", n: { en: "Charcoal Herringbone", kn: "ಚಾರ್ಕೋಲ್ ಹೆರಿಂಗ್‌ಬೋನ್" } },
    { id: "white-oxford", n: { en: "White Oxford", kn: "ವೈಟ್ ಆಕ್ಸ್‌ಫರ್ಡ್" } },
    { id: "sky-pinstripe", n: { en: "Sky Pinstripe", kn: "ಸ್ಕೈ ಪಿನ್‌ಸ್ಟ್ರೈಪ್" } },
    { id: "khaki-chino", n: { en: "Khaki Chino", kn: "ಖಾಕಿ ಚಿನೋ" } },
    { id: "ecru-linen", n: { en: "Ecru Linen", kn: "ಎಕ್ರು ಲಿನನ್" } },
    { id: "blue-gingham", n: { en: "Blue Gingham", kn: "ಬ್ಲೂ ಗಿಂಗ್‌ಹ್ಯಾಮ್" } },
    { id: "olive-twill", n: { en: "Olive Twill", kn: "ಆಲಿವ್ ಟ್ವಿಲ್" } },
  ],
};

// ---------- About / Why ----------
export const ABOUT = {
  eyebrow: { en: "About Shri Jaya", kn: "ಶ್ರೀ ಜಯ ಬಗ್ಗೆ" },
  title: { en: "Two decades of stitching, done with care.", kn: "ಎರಡು ದಶಕಗಳ ಹೊಲಿಗೆ, ಕಾಳಜಿಯಿಂದ." },
  body: {
    en: "Shri Jaya is a garment manufacturing and stitching business working with brands and business owners. We take your order from brief to finished garment — stitching only, or end to end.",
    kn: "ಶ್ರೀ ಜಯ ಬ್ರ್ಯಾಂಡ್‌ಗಳು ಮತ್ತು ವ್ಯಾಪಾರಿಗಳೊಂದಿಗೆ ಕೆಲಸ ಮಾಡುವ ಉಡುಪು ತಯಾರಿಕೆ ಮತ್ತು ಹೊಲಿಗೆ ಸಂಸ್ಥೆ. ನಿಮ್ಮ ಆರ್ಡರ್ ಅನ್ನು ವಿವರದಿಂದ ಸಿದ್ಧ ಉಡುಪಿನವರೆಗೆ ನಾವು ನೋಡಿಕೊಳ್ಳುತ್ತೇವೆ — ಹೊಲಿಗೆ ಮಾತ್ರ ಅಥವಾ ಪೂರ್ಣ ಸೇವೆ.",
  },
  yearsLabel: { en: "years in business", kn: "ವರ್ಷಗಳ ವ್ಯವಹಾರ" },
  ownerTitle: { en: "Founder & Owner", kn: "ಸಂಸ್ಥಾಪಕರು ಮತ್ತು ಮಾಲೀಕರು" },
  values: [
    { t: { en: "Checked at every stage", kn: "ಪ್ರತಿ ಹಂತದಲ್ಲೂ ಪರಿಶೀಲನೆ" }, d: { en: "From cutting to packing, quality is inspected — not left to the end.", kn: "ಕಟಿಂಗ್‌ನಿಂದ ಪ್ಯಾಕಿಂಗ್‌ವರೆಗೆ ಗುಣಮಟ್ಟ ಪರಿಶೀಲನೆ — ಕೊನೆಗೆ ಬಿಡುವುದಿಲ್ಲ." } },
    { t: { en: "Flexible ways to work", kn: "ಹೊಂದಿಕೊಳ್ಳುವ ವಿಧಾನ" }, d: { en: "Bring your own material or let us source it. You decide.", kn: "ನಿಮ್ಮ ಸಾಮಗ್ರಿ ತನ್ನಿ ಅಥವಾ ನಾವು ಹುಡುಕುತ್ತೇವೆ. ನಿರ್ಧಾರ ನಿಮ್ಮದು." } },
    { t: { en: "Clear communication", kn: "ಸ್ಪಷ್ಟ ಸಂವಹನ" }, d: { en: "Details, timelines and costs agreed upfront, in plain words.", kn: "ವಿವರ, ಸಮಯ ಮತ್ತು ವೆಚ್ಚವನ್ನು ಮೊದಲೇ ಸರಳ ಮಾತಿನಲ್ಲಿ ಒಪ್ಪಿಕೊಳ್ಳುತ್ತೇವೆ." } },
    { t: { en: "Made for businesses", kn: "ವ್ಯಾಪಾರಕ್ಕಾಗಿ ತಯಾರಿ" }, d: { en: "Consistent sizing and finish so your brand looks the same every time.", kn: "ಸ್ಥಿರ ಅಳತೆ ಮತ್ತು ಫಿನಿಶ್ — ನಿಮ್ಮ ಬ್ರ್ಯಾಂಡ್ ಪ್ರತಿ ಬಾರಿ ಒಂದೇ ರೀತಿ ಕಾಣುತ್ತದೆ." } },
  ],
};

// ---------- Order ----------
export const ORDER = {
  eyebrow: { en: "Start an order", kn: "ಆರ್ಡರ್ ಆರಂಭಿಸಿ" },
  title: { en: "Tell us what you need.", kn: "ನಿಮಗೆ ಏನು ಬೇಕು ಹೇಳಿ." },
  sub: { en: "Share a few details and we'll get back to you.", kn: "ಕೆಲವು ವಿವರ ತಿಳಿಸಿ, ನಾವು ಸಂಪರ್ಕಿಸುತ್ತೇವೆ." },
  fields: {
    name: { en: "Your name", kn: "ನಿಮ್ಮ ಹೆಸರು" },
    business: { en: "Business / brand", kn: "ವ್ಯಾಪಾರ / ಬ್ರ್ಯಾಂಡ್" },
    phone: { en: "Phone / WhatsApp", kn: "ಫೋನ್ / ವಾಟ್ಸಾಪ್" },
    email: { en: "Email", kn: "ಇಮೇಲ್" },
    model: { en: "How would you like to work?", kn: "ಹೇಗೆ ಕೆಲಸ ಮಾಡಲು ಬಯಸುತ್ತೀರಿ?" },
    garment: { en: "Garment", kn: "ಉಡುಪು" },
    qty: { en: "Approx. quantity", kn: "ಅಂದಾಜು ಪ್ರಮಾಣ" },
    msg: { en: "Anything else we should know?", kn: "ಇನ್ನೇನಾದರೂ ತಿಳಿಸಬೇಕೇ?" },
  },
  modelA: { en: "Job work (I supply material)", kn: "ಜಾಬ್ ವರ್ಕ್ (ನಾನು ಸಾಮಗ್ರಿ ಕೊಡುತ್ತೇನೆ)" },
  modelB: { en: "Full service (you source material)", kn: "ಪೂರ್ಣ ಸೇವೆ (ನೀವು ಸಾಮಗ್ರಿ ಹುಡುಕಿ)" },
  shirt: { en: "Men's shirts", kn: "ಪುರುಷರ ಶರ್ಟ್" },
  pant: { en: "Men's trousers", kn: "ಪುರುಷರ ಪ್ಯಾಂಟ್" },
  both: { en: "Both", kn: "ಎರಡೂ" },
  submit: { en: "Send Enquiry", kn: "ವಿಚಾರಣೆ ಕಳುಹಿಸಿ" },
  // Form is display-only for now (owner's choice). No data leaves the browser.
  thanks: {
    en: "Thank you! The online form is not live yet — please reach us directly using the details below.",
    kn: "ಧನ್ಯವಾದಗಳು! ಆನ್‌ಲೈನ್ ಫಾರ್ಮ್ ಇನ್ನೂ ಸಕ್ರಿಯವಾಗಿಲ್ಲ — ಕೆಳಗಿನ ವಿವರಗಳ ಮೂಲಕ ನೇರವಾಗಿ ಸಂಪರ್ಕಿಸಿ.",
  },
  whatsapp: { en: "Chat on WhatsApp", kn: "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಮಾತನಾಡಿ" },
  waMsg: { en: "Hello Shri Jaya, I would like to enquire about an order.", kn: "ನಮಸ್ಕಾರ ಶ್ರೀ ಜಯ, ನಾನು ಆರ್ಡರ್ ಬಗ್ಗೆ ವಿಚಾರಿಸಲು ಬಯಸುತ್ತೇನೆ." },
};

export const FOOTER = {
  tag: { en: "Quality in Every Thread", kn: "ಪ್ರತಿ ದಾರದಲ್ಲೂ ಗುಣಮಟ್ಟ" },
  contact: { en: "Contact", kn: "ಸಂಪರ್ಕ" },
  design: { en: "Website designed by", kn: "ವೆಬ್‌ಸೈಟ್ ವಿನ್ಯಾಸ" },
  rights: { en: "All rights reserved.", kn: "ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ." },
};
