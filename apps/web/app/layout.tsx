import type { Metadata } from "next";
import Script from "next/script";
import { Footer, Header } from "./components";
import { siteUrl } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "eInnovator — Efficient AI infrastructure", template: "%s — eInnovator" },
  description: "eInnovator builds efficient AI infrastructure. PRA is an open-source context and inference optimization layer for long-context agents and open models.",
  keywords: ["AI inference optimization", "LLM context optimization", "long-context agents", "KV cache optimization", "OpenAI-compatible gateway", "PRA"],
  icons: { icon: [{ url: "/einnovator-logo.webp", type: "image/webp" }] },
  alternates: { canonical: "/" },
  openGraph: { title: "Run long-context AI with less active context.", description: "PRA is open-source context and inference optimization infrastructure from eInnovator.", type: "website", url: "/", siteName: "eInnovator", images: [{ url: "/og.png", width: 1536, height: 1024, alt: "PRA by eInnovator — run long-context AI with less active context" }] },
  twitter: { card: "summary_large_image", title: "Run long-context AI with less active context.", description: "Open-source context and inference optimization infrastructure.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const analyticsScript = process.env.NEXT_PUBLIC_ANALYTICS_SCRIPT_URL;
  const organization = { "@context": "https://schema.org", "@type": "Organization", name: "eInnovator", url: siteUrl, logo: new URL("/einnovator-logo.webp", siteUrl).toString(), description: "A technology company building efficient AI infrastructure and turning systems research into practical open-source and commercial products." };
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
        {analyticsScript ? <Script src={analyticsScript} strategy="afterInteractive" data-site="einnovator" /> : null}
      </body>
    </html>
  );
}
