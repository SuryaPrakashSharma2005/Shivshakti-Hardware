import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { PaintBrandsSection } from "@/components/home/PaintBrandsSection";
import { AboutPreview } from "@/components/home/AboutPreview";
import { LocationSection } from "@/components/home/LocationSection";

export const metadata: Metadata = {
  title: "Shivshakti Hardware — Construction Materials, Hardware & Paints in Saran, Bihar",
  description:
    "Shivshakti Hardware in Bhakura Bhithi, Saran, Bihar — quality construction materials, hardware, plumbing supplies and paints, with easy WhatsApp enquiry and digital billing.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <CategoryGrid />
      <FeaturedProducts />
      <WhyChooseUs />
      <PaintBrandsSection />
      <AboutPreview />
      <LocationSection />
    </>
  );
}
