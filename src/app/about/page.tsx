import type { Metadata } from "next";
import Image from "next/image";
import { Layers, Tags, MapPinned, MessageCircleQuestion, ReceiptText, Handshake } from "lucide-react";
import { business } from "@/data/business";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LocationSection } from "@/components/home/LocationSection";

export const metadata: Metadata = {
  title: "About Us",
  description: `About Shivshakti Hardware — building construction material and hardware store run by ${business.proprietor} in ${business.address.line1}, ${business.address.district}, Bihar.`,
  alternates: { canonical: "/about" },
};

const features = [
  {
    icon: Layers,
    title: "Wide Product Range",
    description: "Construction materials, hardware, plumbing supplies and paints under one roof.",
  },
  {
    icon: Tags,
    title: "Multiple Brands",
    description: "Choose products based on your requirements and budget.",
  },
  {
    icon: MapPinned,
    title: "Local & Convenient",
    description: `Serving customers around ${business.address.line1} and ${business.address.district}.`,
  },
  {
    icon: MessageCircleQuestion,
    title: "Easy Enquiry",
    description: "Quickly enquire about products and availability on WhatsApp.",
  },
  {
    icon: ReceiptText,
    title: "Digital Billing",
    description: "Receive a digital bill with your purchase.",
  },
  {
    icon: Handshake,
    title: "Local Trust",
    description: `Known locally as "${business.localName}".`,
  },
];

export default function AboutPage() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="font-display text-4xl sm:text-5xl leading-[0.95] text-ink">
            Built Around Trust,
            <br />
            Quality and Local Service.
          </h1>
          <p className="mt-5 text-base text-ink-soft leading-relaxed max-w-lg">
            Shivshakti Hardware provides construction materials, hardware,
            plumbing supplies, paints and various building-related materials
            for customers in and around {business.address.line1} and{" "}
            {business.address.district}, {business.address.state}.
          </p>
          <p className="mt-4 text-base text-ink-soft leading-relaxed max-w-lg">
            The store is run by <strong>{business.proprietor}</strong>, and is
            locally known as &ldquo;{business.localName}&rdquo;.
          </p>
        </div>
        <div className="relative h-64 sm:h-80 rounded-sm border border-line overflow-hidden">
          <Image
            src="/images/construction-materials.jpg"
            alt="Front loader stacking gravel at a construction aggregate yard"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="border-t border-line bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <SectionHeading title="Why Choose Shivshakti Hardware" />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <feature.icon className="w-6 h-6 text-rust shrink-0" strokeWidth={1.75} />
                <div>
                  <p className="font-semibold text-ink">{feature.title}</p>
                  <p className="mt-1 text-sm text-steel leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <LocationSection />
    </div>
  );
}
