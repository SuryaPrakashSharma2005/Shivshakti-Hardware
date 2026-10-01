import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { business } from "@/data/business";
import { buildGeneralEnquiryMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/Button";

export function AboutPreview() {
  return (
    <section className="bg-concrete border-t border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="relative order-1">
          <div className="relative h-[26rem] sm:h-[30rem] rounded-sm border border-line overflow-hidden">
            <Image
              src="/images/proprietor.jpg"
              alt={`${business.proprietor}, proprietor of Shivshakti Hardware, at the store`}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-top"
            />
          </div>
          <div className="absolute bottom-0 left-0 bg-paper border-t border-r border-line px-5 py-3.5">
            <p className="font-semibold text-ink leading-tight">{business.proprietor}</p>
            <p className="text-xs text-steel mt-0.5">Proprietor, Shivshakti Hardware</p>
          </div>
        </div>

        <div className="order-2">
          <h2 className="font-display text-4xl sm:text-5xl leading-[0.95] text-ink">
            Meet the Proprietor
          </h2>
          <p className="mt-4 text-lg text-steel">
            Built around trust, quality and local service.
          </p>
          <p className="mt-5 text-base text-steel max-w-lg">
            {business.proprietor} personally runs Shivshakti Hardware, helping
            customers in and around {business.address.line1} and{" "}
            {business.address.district} find the right construction
            materials, hardware, plumbing supplies and paints for their work.
          </p>
          <p className="mt-3 text-base text-steel max-w-lg">
            Locally, the store is known as &ldquo;{business.localName}&rdquo;.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-5">
            <ButtonLink
              href={buildWhatsAppUrl(buildGeneralEnquiryMessage())}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-4 h-4" />
              Send Enquiry on WhatsApp
            </ButtonLink>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-rust hover:gap-2.5 transition-all"
            >
              Read More About Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
