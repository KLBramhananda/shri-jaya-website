// ============================================================
//  SHRI JAYA — ALL EDITABLE CONTENT LIVES HERE (English + Kannada)
//  Items marked TODO are placeholders. Replace before launch.
// ============================================================

export type Lang = "en" | "kn";

export const CONTACT = {
  owner: "Roopa S",
  designer: "Bramha",
  phone: "+91 89515 83124",
  phoneRaw: "+918951583124",
  whatsapp: "918951583124", // digits only, with country code
  email: "roopas51788@gmail.com",
  city: "Bengaluru, Karnataka",
  // Enquiries are delivered to this email by FormSubmit (free service).
  formEndpoint: "https://formsubmit.co/ajax/roopas51788@gmail.com",
  // OPTIONAL but recommended: free Web3Forms access key (public, safe to put here).
  // Get it at https://web3forms.com (enter roopas51788@gmail.com; key arrives by email), paste between the quotes.
  web3formsKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "ce54b161-65d7-41ff-9445-c313f1d99ea5",
};


// Only fact supplied by the owner. Everything else is qualitative on purpose.
export const YEARS_IN_BUSINESS = 20;

type T = { en: string; kn: string };
export const t = (x: T, l: Lang) => x[l];

export const NAV: { id: string; label: T; href?: string }[] = [
  { id: "ways", label: { en: "Ways to Work", kn: "ಕೆಲಸದ ವಿಧಾನ" } },
  { id: "process", label: { en: "Process", kn: "ಪ್ರಕ್ರಿಯೆ" } },
  { id: "studio", label: { en: "Our Garments", kn: "ನಮ್ಮ ಉಡುಪುಗಳು" } },
  { id: "about", label: { en: "About", kn: "ನಮ್ಮ ಬಗ್ಗೆ" } },
  { id: "order", label: { en: "Start an Order", kn: "ಆರ್ಡರ್" } },
  { id: "invest", href: "/invest", label: { en: "Invest", kn: "ಹೂಡಿಕೆ" } },
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
  ownerPhoto: "/my_photos/roopa.jpeg",
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
  sending: { en: "Sending…", kn: "ಕಳುಹಿಸುತ್ತಿದೆ…" },
  thanksTitle: { en: "Thank you!", kn: "ಧನ್ಯವಾದಗಳು!" },
  thanks: {
    en: "Your enquiry has been sent to Shri Jaya. We'll contact you soon.",
    kn: "ನಿಮ್ಮ ವಿಚಾರಣೆ ಶ್ರೀ ಜಯಕ್ಕೆ ತಲುಪಿದೆ. ನಾವು ಶೀಘ್ರದಲ್ಲೇ ಸಂಪರ್ಕಿಸುತ್ತೇವೆ.",
  },
  errorMsg: {
    en: "Sorry, we couldn't send that. Please use WhatsApp or call us directly.",
    kn: "ಕ್ಷಮಿಸಿ, ಕಳುಹಿಸಲು ಆಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ವಾಟ್ಸಾಪ್ ಅಥವಾ ಕರೆ ಮಾಡಿ.",
  },
  needMore: { en: "Please add your name and a phone number or email.", kn: "ದಯವಿಟ್ಟು ಹೆಸರು ಮತ್ತು ಫೋನ್ ಅಥವಾ ಇಮೇಲ್ ನೀಡಿ." },
  whatsapp: { en: "Chat on WhatsApp", kn: "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಮಾತನಾಡಿ" },
  waSend: { en: "Send on WhatsApp instead", kn: "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಕಳುಹಿಸಿ" },
  activation: { en: "Email service is being set up. Please use WhatsApp or call us for now.", kn: "ಇಮೇಲ್ ಸೇವೆ ಸಿದ್ಧಗೊಳ್ಳುತ್ತಿದೆ. ಸದ್ಯಕ್ಕೆ ವಾಟ್ಸಾಪ್ ಅಥವಾ ಕರೆ ಮಾಡಿ." },
  another: { en: "Send another enquiry", kn: "ಇನ್ನೊಂದು ವಿಚಾರಣೆ" },
  waMsg: { en: "Hello Shri Jaya, I would like to enquire about an order.", kn: "ನಮಸ್ಕಾರ ಶ್ರೀ ಜಯ, ನಾನು ಆರ್ಡರ್ ಬಗ್ಗೆ ವಿಚಾರಿಸಲು ಬಯಸುತ್ತೇನೆ." },
  callUs: { en: "Call", kn: "ಕರೆ" },
};

export const FOOTER = {
  tag: { en: "Quality in Every Thread", kn: "ಪ್ರತಿ ದಾರದಲ್ಲೂ ಗುಣಮಟ್ಟ" },
  contact: { en: "Contact", kn: "ಸಂಪರ್ಕ" },
  design: { en: "Website designed by", kn: "ವೆಬ್‌ಸೈಟ್ ವಿನ್ಯಾಸ" },
  rights: { en: "All rights reserved.", kn: "ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ." },
};

// ============================================================
//  INVESTOR / LENDER PAGE  (/invest)
//  No amounts, returns or interest rates are promised or shown.
// ============================================================
export const INVEST = {
  navLabel: { en: "Invest", kn: "ಹೂಡಿಕೆ" },
  back: { en: "← Back to website", kn: "← ವೆಬ್‌ಸೈಟ್‌ಗೆ ಹಿಂತಿರುಗಿ" },
  eyebrow: { en: "For lenders & financial partners", kn: "ಸಾಲದಾತರು ಮತ್ತು ಹಣಕಾಸು ಪಾಲುದಾರರಿಗಾಗಿ" },
  title1: { en: "From stitching for others,", kn: "ಇತರರಿಗಾಗಿ ಹೊಲಿಯುವುದರಿಂದ," },
  title2: { en: "to building our own brand.", kn: "ನಮ್ಮದೇ ಬ್ರ್ಯಾಂಡ್ ಕಟ್ಟುವವರೆಗೆ." },
  sub: {
    en: "For over 20 years, Shri Jaya has stitched garments for brands and business owners. Our next step is to make and export our own brand — and we are looking for loan partners to help us get there.",
    kn: "20ಕ್ಕೂ ಹೆಚ್ಚು ವರ್ಷಗಳಿಂದ ಶ್ರೀ ಜಯ ಬ್ರ್ಯಾಂಡ್‌ಗಳು ಮತ್ತು ವ್ಯಾಪಾರಿಗಳಿಗಾಗಿ ಉಡುಪುಗಳನ್ನು ಹೊಲಿದಿದೆ. ನಮ್ಮ ಮುಂದಿನ ಹೆಜ್ಜೆ ನಮ್ಮದೇ ಬ್ರ್ಯಾಂಡ್ ತಯಾರಿಸಿ ರಫ್ತು ಮಾಡುವುದು — ಇದಕ್ಕೆ ಸಾಲ ಸಹಭಾಗಿಗಳನ್ನು ನಾವು ಹುಡುಕುತ್ತಿದ್ದೇವೆ.",
  },
  cta1: { en: "Start a conversation", kn: "ಮಾತುಕತೆ ಆರಂಭಿಸಿ" },
  cta2: { en: "See the plan", kn: "ಯೋಜನೆ ನೋಡಿ" },
  roadmapEyebrow: { en: "Our roadmap", kn: "ನಮ್ಮ ಮಾರ್ಗಸೂಚಿ" },
  roadmapTitle: { en: "Three steps to a business of our own.", kn: "ನಮ್ಮದೇ ವ್ಯವಹಾರದತ್ತ ಮೂರು ಹೆಜ್ಜೆಗಳು." },
  stages: [
    { tag: { en: "Today", kn: "ಇಂದು" }, t: { en: "Services", kn: "ಸೇವೆಗಳು" }, d: { en: "Job work and full-service stitching for brands and business owners.", kn: "ಬ್ರ್ಯಾಂಡ್‌ಗಳು ಮತ್ತು ವ್ಯಾಪಾರಿಗಳಿಗೆ ಜಾಬ್ ವರ್ಕ್ ಮತ್ತು ಪೂರ್ಣ ಸೇವೆಯ ಹೊಲಿಗೆ." } },
    { tag: { en: "Next", kn: "ಮುಂದೆ" }, t: { en: "Our own brand", kn: "ನಮ್ಮದೇ ಬ್ರ್ಯಾಂಡ್" }, d: { en: "Design, make and sell our own garment label.", kn: "ನಮ್ಮದೇ ಉಡುಪು ಲೇಬಲ್‌ನ ವಿನ್ಯಾಸ, ತಯಾರಿ ಮತ್ತು ಮಾರಾಟ." } },
    { tag: { en: "Future", kn: "ಭವಿಷ್ಯ" }, t: { en: "Make & export", kn: "ತಯಾರಿ ಮತ್ತು ರಫ್ತು" }, d: { en: "Manufacture in-house and export — without depending on others' orders.", kn: "ಇತರರ ಆರ್ಡರ್‌ಗಳನ್ನು ಅವಲಂಬಿಸದೆ ಸ್ವಂತವಾಗಿ ತಯಾರಿಸಿ ರಫ್ತು ಮಾಡುವುದು." } },
  ],
  fundsEyebrow: { en: "Where the funds go", kn: "ಹಣ ಎಲ್ಲಿ ಬಳಕೆಯಾಗುತ್ತದೆ" },
  fundsTitle: { en: "Four areas that move us forward.", kn: "ನಮ್ಮನ್ನು ಮುನ್ನಡೆಸುವ ನಾಲ್ಕು ಕ್ಷೇತ್ರಗಳು." },
  funds: [
    { t: { en: "Machines & factory setup", kn: "ಯಂತ್ರಗಳು ಮತ್ತು ಕಾರ್ಖಾನೆ ಸಿದ್ಧತೆ" }, d: { en: "More production capacity and better equipment.", kn: "ಹೆಚ್ಚಿನ ಉತ್ಪಾದನಾ ಸಾಮರ್ಥ್ಯ ಮತ್ತು ಉತ್ತಮ ಉಪಕರಣಗಳು." } },
    { t: { en: "Own brand launch", kn: "ಸ್ವಂತ ಬ್ರ್ಯಾಂಡ್ ಆರಂಭ" }, d: { en: "Design, fabric stock, branding and marketing.", kn: "ವಿನ್ಯಾಸ, ಬಟ್ಟೆ ಸಂಗ್ರಹ, ಬ್ರ್ಯಾಂಡಿಂಗ್ ಮತ್ತು ಮಾರುಕಟ್ಟೆ." } },
    { t: { en: "Export setup", kn: "ರಫ್ತು ಸಿದ್ಧತೆ" }, d: { en: "Licences, compliance and finding buyers abroad.", kn: "ಪರವಾನಗಿ, ನಿಯಮ ಪಾಲನೆ ಮತ್ತು ವಿದೇಶಿ ಖರೀದಿದಾರರ ಹುಡುಕಾಟ." } },
    { t: { en: "Working capital & team", kn: "ದುಡಿಯುವ ಬಂಡವಾಳ ಮತ್ತು ತಂಡ" }, d: { en: "Raw material, salaries and day-to-day running.", kn: "ಕಚ್ಚಾ ವಸ್ತು, ಸಂಬಳ ಮತ್ತು ದೈನಂದಿನ ನಿರ್ವಹಣೆ." } },
  ],
  fundsNote: { en: "Exact amounts and terms are shared privately with serious lenders.", kn: "ನಿಖರ ಮೊತ್ತ ಮತ್ತು ನಿಯಮಗಳನ್ನು ಗಂಭೀರ ಸಾಲದಾತರೊಂದಿಗೆ ಖಾಸಗಿಯಾಗಿ ಹಂಚಿಕೊಳ್ಳಲಾಗುತ್ತದೆ." },
  whyEyebrow: { en: "Why Shri Jaya", kn: "ಏಕೆ ಶ್ರೀ ಜಯ" },
  whyTitle: { en: "A working business, a clear plan.", kn: "ನಡೆಯುತ್ತಿರುವ ವ್ಯವಹಾರ, ಸ್ಪಷ್ಟ ಯೋಜನೆ." },
  why: [
    { t: { en: "20+ years of experience", kn: "20+ ವರ್ಷಗಳ ಅನುಭವ" }, d: { en: "Two decades in garment stitching and manufacturing.", kn: "ಉಡುಪು ಹೊಲಿಗೆ ಮತ್ತು ತಯಾರಿಕೆಯಲ್ಲಿ ಎರಡು ದಶಕಗಳು." } },
    { t: { en: "A business already running", kn: "ಈಗಾಗಲೇ ನಡೆಯುತ್ತಿರುವ ವ್ಯವಹಾರ", }, d: { en: "We work with brands and business owners today.", kn: "ಇಂದು ನಾವು ಬ್ರ್ಯಾಂಡ್‌ಗಳು ಮತ್ತು ವ್ಯಾಪಾರಿಗಳೊಂದಿಗೆ ಕೆಲಸ ಮಾಡುತ್ತಿದ್ದೇವೆ." } },
    { t: { en: "A step-by-step plan", kn: "ಹಂತ ಹಂತದ ಯೋಜನೆ" }, d: { en: "Services first, then our brand, then export.", kn: "ಮೊದಲು ಸೇವೆ, ನಂತರ ನಮ್ಮ ಬ್ರ್ಯಾಂಡ್, ನಂತರ ರಫ್ತು." } },
    { t: { en: "Open communication", kn: "ಮುಕ್ತ ಸಂವಹನ" }, d: { en: "Clear numbers and terms, shared in plain words.", kn: "ಸ್ಪಷ್ಟ ಅಂಕಿ ಅಂಶ ಮತ್ತು ನಿಯಮಗಳು, ಸರಳ ಮಾತಿನಲ್ಲಿ." } },
  ],
  howEyebrow: { en: "How it works", kn: "ಹೇಗೆ ನಡೆಯುತ್ತದೆ" },
  how: [
    { t: { en: "Reach out", kn: "ಸಂಪರ್ಕಿಸಿ" }, d: { en: "Send us a short note below.", kn: "ಕೆಳಗೆ ಸಣ್ಣ ಸಂದೇಶ ಕಳುಹಿಸಿ." } },
    { t: { en: "Private conversation", kn: "ಖಾಸಗಿ ಮಾತುಕತೆ" }, d: { en: "We share our plan and figures directly with you.", kn: "ನಮ್ಮ ಯೋಜನೆ ಮತ್ತು ಅಂಕಿ ಅಂಶಗಳನ್ನು ನೇರವಾಗಿ ನಿಮ್ಮೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳುತ್ತೇವೆ." } },
    { t: { en: "Review & agree", kn: "ಪರಿಶೀಲಿಸಿ ಒಪ್ಪಿಕೊಳ್ಳಿ" }, d: { en: "Terms are agreed in writing after due diligence.", kn: "ಪರಿಶೀಲನೆಯ ನಂತರ ನಿಯಮಗಳನ್ನು ಲಿಖಿತವಾಗಿ ಒಪ್ಪಿಕೊಳ್ಳಲಾಗುತ್ತದೆ." } },
  ],
  formEyebrow: { en: "Let's talk", kn: "ಮಾತನಾಡೋಣ" },
  formTitle: { en: "Interested in partnering with us?", kn: "ನಮ್ಮೊಂದಿಗೆ ಪಾಲುದಾರರಾಗಲು ಆಸಕ್ತಿ ಇದೆಯೇ?" },
  fields: {
    name: { en: "Your name", kn: "ನಿಮ್ಮ ಹೆಸರು" },
    org: { en: "Organisation / bank (if any)", kn: "ಸಂಸ್ಥೆ / ಬ್ಯಾಂಕ್ (ಇದ್ದರೆ)" },
    interest: { en: "I am interested in", kn: "ನನ್ನ ಆಸಕ್ತಿ" },
    ticket: { en: "Approx. amount you can offer (optional)", kn: "ನೀವು ನೀಡಬಹುದಾದ ಅಂದಾಜು ಮೊತ್ತ (ಐಚ್ಛಿಕ)" },
    msg: { en: "A few words about you", kn: "ನಿಮ್ಮ ಬಗ್ಗೆ ಕೆಲವು ಮಾತುಗಳು" },
  },
  interestLoan: { en: "Lending / loan funding", kn: "ಸಾಲ ನೀಡಿಕೆ / ಸಾಲ ಹಣಕಾಸು" },
  interestOther: { en: "Another way to support", kn: "ಬೆಂಬಲಿಸಲು ಬೇರೆ ದಾರಿ" },
  submit: { en: "Send to Shri Jaya", kn: "ಶ್ರೀ ಜಯಕ್ಕೆ ಕಳುಹಿಸಿ" },
  thanks: { en: "Thank you. Roopa S will get in touch with you personally.", kn: "ಧನ್ಯವಾದಗಳು. ರೂಪಾ ಎಸ್ ಅವರು ನಿಮ್ಮನ್ನು ವೈಯಕ್ತಿಕವಾಗಿ ಸಂಪರ್ಕಿಸುತ್ತಾರೆ." },
  disclaimer: {
    en: "This page is an invitation to talk, not an offer to the public. No returns are promised. All terms are subject to due diligence and a written agreement.",
    kn: "ಈ ಪುಟ ಮಾತುಕತೆಗೆ ಆಹ್ವಾನ ಮಾತ್ರ; ಸಾರ್ವಜನಿಕರಿಗೆ ನೀಡುವ ಪ್ರಸ್ತಾಪವಲ್ಲ. ಯಾವುದೇ ಲಾಭದ ಭರವಸೆ ಇಲ್ಲ. ಎಲ್ಲಾ ನಿಯಮಗಳು ಪರಿಶೀಲನೆ ಮತ್ತು ಲಿಖಿತ ಒಪ್ಪಂದಕ್ಕೆ ಒಳಪಟ್ಟಿವೆ.",
  },
  waMsg: { en: "Hello Roopa, I am interested in partnering with Shri Jaya.", kn: "ನಮಸ್ಕಾರ ರೂಪಾ, ಶ್ರೀ ಜಯದೊಂದಿಗೆ ಪಾಲುದಾರರಾಗಲು ನನಗೆ ಆಸಕ್ತಿ ಇದೆ." },
};
