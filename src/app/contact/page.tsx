import type { Metadata } from "next";
import { Phone, MessageCircle, Clock, Mail, Check } from "lucide-react";
import { business } from "@/data/business";
import { buildGeneralEnquiryMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/Button";
import { LocationSection } from "@/components/home/LocationSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact Shivshakti Hardware in ${business.address.line1}, ${business.address.district}, Bihar. Enquire about products on WhatsApp or visit the store.`,
  alternates: { canonical: "/contact" },
};

const contactItems = [
  { icon: Phone, label: "Phone", value: business.contact.phone },
  { icon: MessageCircle, label: "WhatsApp", value: business.contact.whatsapp },
  { icon: Clock, label: "Business Hours", value: business.contact.hours },
  { icon: Mail, label: "Email", value: business.contact.email },
];

export default function ContactPage() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="font-display text-4xl sm:text-5xl text-ink">Contact Us</h1>
        <p className="mt-2 text-steel max-w-xl">
          Reach out to {business.name} for product availability, pricing and
          general enquiries.
        </p>

        <div className="mt-10 grid lg:grid-cols-2 gap-10">
          <div>
            <p className="font-semibold text-ink">{business.name}</p>
            <p className="text-sm text-steel mt-1">Proprietor: {business.proprietor}</p>
            <p className="text-sm text-steel mt-1">
              {business.address.line1}, {business.address.road}, {business.address.district},{" "}
              {business.address.state} {business.address.pincode}
            </p>

            <div className="mt-6 space-y-4">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <item.icon className="w-[18px] h-[18px] text-rust mt-0.5 shrink-0" strokeWidth={1.75} />
                  <div>
                    <p className="text-xs text-steel">{item.label}</p>
                    <p className="text-sm text-ink font-mono">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-steel">
              Email and business hours shown above are placeholders — update
              with the store&apos;s actual details.
            </p>

            <p className="mt-8 inline-flex items-center gap-1.5 text-sm text-steel">
              <Check className="w-4 h-4 text-rust" strokeWidth={2.5} />
              Digital billing available with your purchase
            </p>

            <div className="mt-6">
              <ButtonLink
                href={buildWhatsAppUrl(buildGeneralEnquiryMessage())}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
              >
                <MessageCircle className="w-4 h-4" />
                Send Enquiry on WhatsApp
              </ButtonLink>
            </div>
          </div>

          <div className="border border-line rounded-sm p-6 bg-paper h-fit">
            <p className="font-semibold text-ink mb-1">Prefer to browse first?</p>
            <p className="text-sm text-steel">
              Explore the catalogue, add what you need to your enquiry list,
              and send everything to us on WhatsApp in one message.
            </p>
            <ButtonLink href="/products" variant="ghost" className="mt-4">
              Explore Products
            </ButtonLink>
          </div>
        </div>
      </div>

      <LocationSection />
    </div>
  );
}
