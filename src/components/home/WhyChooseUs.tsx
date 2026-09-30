import { Layers, Tags, MapPinned, MessageCircleQuestion, ReceiptText, Handshake } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { business } from "@/data/business";

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

export function WhyChooseUs() {
  return (
    <section className="bg-paper border-t border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <SectionHeading title="Why Choose Shivshakti Hardware" align="left" />

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
    </section>
  );
}
