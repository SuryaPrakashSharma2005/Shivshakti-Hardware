import type { Metadata } from "next";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using the Shivshakti Hardware website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="font-display text-4xl text-ink">Terms &amp; Conditions</h1>
      <div className="mt-6 space-y-4 text-sm text-ink-soft leading-relaxed">
        <p>
          This website is a product catalogue for {business.name}, located at{" "}
          {business.address.line1}, {business.address.district}, {business.address.state}. It is
          intended to help customers discover products and send enquiries — it
          does not process online payments or orders.
        </p>
        <p>
          Product information, including pricing, is subject to change and
          should be confirmed with the store directly. Where a price is not
          listed, please use &ldquo;Get Latest Price&rdquo; to enquire about
          current pricing and availability.
        </p>
        <p>
          Enquiries sent through this website (via WhatsApp or the enquiry
          form) are not binding orders. All purchases are completed in person
          or as otherwise agreed directly with the store.
        </p>
        <p>
          Digital billing, where available, is provided at the time of an
          in-person purchase.
        </p>
      </div>
    </div>
  );
}
