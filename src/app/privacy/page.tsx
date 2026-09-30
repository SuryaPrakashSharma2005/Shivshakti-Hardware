import type { Metadata } from "next";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the Shivshakti Hardware website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="font-display text-4xl text-ink">Privacy Policy</h1>
      <div className="mt-6 space-y-4 text-sm text-ink-soft leading-relaxed">
        <p>
          This website is used to showcase products from {business.name} and
          to help customers send product enquiries. We only collect the
          information you choose to share with us through the enquiry form or
          WhatsApp, such as your name, phone number and message.
        </p>
        <p>
          Any details you submit through the enquiry list or contact form are
          used only to respond to your enquiry and are not sold or shared
          with third parties.
        </p>
        <p>
          This website does not use customer accounts, online payments or
          delivery tracking, and does not knowingly collect sensitive
          personal information.
        </p>
        <p>
          For any questions about this policy, please contact {business.name}
          {" "}using the details on our Contact page.
        </p>
      </div>
    </div>
  );
}
