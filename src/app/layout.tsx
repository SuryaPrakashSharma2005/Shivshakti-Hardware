import type { Metadata } from "next";
import { Bebas_Neue, IBM_Plex_Sans, IBM_Plex_Sans_Devanagari, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyWhatsAppButton } from "@/components/layout/StickyWhatsAppButton";
import { EnquiryCartProvider } from "@/components/cart/EnquiryCartContext";
import { EnquiryCartDrawer } from "@/components/cart/EnquiryCartDrawer";
import { LocalBusinessJsonLd } from "@/components/seo/StructuredData";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexSansDevanagari = IBM_Plex_Sans_Devanagari({
  variable: "--font-plex-sans-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shivshaktihardware.example"),
  title: {
    default: "Shivshakti Hardware — Building Materials, Hardware, Plumbing & Paints in Saran, Bihar",
    template: "%s | Shivshakti Hardware",
  },
  description:
    "Shivshakti Hardware, Bhakura Bhithi, Saran (Bihar) — locally known as सरपंच साहेब का दुकान (Sarpanch Saheb Ka Dukaan). Construction materials, hardware, plumbing supplies and paints, with easy WhatsApp enquiry and digital billing.",
  keywords: [
    "Shivshakti Hardware",
    "hardware shop in Saran",
    "building material shop in Saran",
    "construction material in Saran",
    "hardware shop Bhakura Bhithi",
    "cement shop Saran Bihar",
    "paint shop Saran",
    "plumbing material Saran",
  ],
  openGraph: {
    title: "Shivshakti Hardware — Building Materials, Hardware, Plumbing & Paints",
    description:
      "Construction materials, hardware, plumbing supplies and paints at Shivshakti Hardware, Bhakura Bhithi, Saran, Bihar.",
    siteName: "Shivshakti Hardware",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${plexSans.variable} ${plexSansDevanagari.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-concrete text-ink">
        <LocalBusinessJsonLd />
        <EnquiryCartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <StickyWhatsAppButton />
          <EnquiryCartDrawer />
        </EnquiryCartProvider>
      </body>
    </html>
  );
}
