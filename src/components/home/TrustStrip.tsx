import { Layers, Tags, MessageCircleQuestion, ReceiptText } from "lucide-react";

const items = [
  {
    icon: Layers,
    title: "Wide Product Range",
    description: "Construction materials, hardware, plumbing and paints.",
  },
  {
    icon: Tags,
    title: "Multiple Brands",
    description: "Products and paint brands for different requirements.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Easy Enquiry",
    description: "Quickly enquire about products through WhatsApp.",
  },
  {
    icon: ReceiptText,
    title: "Digital Billing",
    description: "Get a digital bill with your purchase.",
  },
];

export function TrustStrip() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-line">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col gap-2 py-6 px-4 sm:px-5">
              <item.icon className="w-5 h-5 text-rust" strokeWidth={1.75} />
              <p className="text-sm font-semibold text-ink">{item.title}</p>
              <p className="text-xs text-steel leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
