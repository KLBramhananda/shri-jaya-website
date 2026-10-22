import type { Metadata, Viewport } from "next";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/500-italic.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/noto-sans-kannada/400.css";
import "@fontsource/noto-sans-kannada/500.css";
import "@fontsource/noto-serif-kannada/500.css";
import "@fontsource/noto-serif-kannada/600.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Shri Jaya — Quality in Every Thread",
  description: "Shri Jaya: men's shirt and trouser manufacturing and stitching for brands and business owners. Job work or full service.",
  openGraph: { title: "Shri Jaya — Quality in Every Thread", description: "Men's shirts and trousers, cut, stitched and finished with care.", images: ["/brand/shri-jaya-logo.png"] },
};
export const viewport: Viewport = { themeColor: "#1A120A", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "LocalBusiness", name: "Shri Jaya", description: "Men's shirt and trouser manufacturing and stitching for brands and business owners.", telephone: "+918951583124", email: "roopas51788@gmail.com", address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressRegion: "Karnataka", addressCountry: "IN" }, founder: { "@type": "Person", name: "Roopa S" } }) }} />
      </body>
    </html>
  );
}
