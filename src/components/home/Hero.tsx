import Link from "next/link";
import Image from "next/image";
import { MapPin, MessageCircle } from "lucide-react";
import { business } from "@/data/business";
import { buildGeneralEnquiryMessage, buildWhatsAppUrl } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="border-b border-line bg-concrete overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
          <div className="animate-fade-up">
            <p className="inline-flex items-center gap-1.5 text-sm text-steel">
              <MapPin className="w-4 h-4 text-rust" />
              {business.address.line1}, {business.address.district}, {business.address.state}
            </p>

            <h1 className="mt-4 font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl text-ink">
              Everything You Need
              <br />
              to Build Better.
            </h1>

            <p className="mt-5 text-lg text-steel max-w-md">
              Quality construction materials, hardware, plumbing supplies and
              paints — all available at Shivshakti Hardware.
            </p>

            <p className="mt-3 text-sm text-steel/80">
              Locally known as &ldquo;{business.localName}&rdquo;
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/products"
                className="inline-flex items-center justify-center bg-rust text-paper px-7 py-3.5 text-base font-medium rounded-sm hover:bg-rust-dark transition-colors"
              >
                Explore Products
              </Link>
              <Link
                href={buildWhatsAppUrl(buildGeneralEnquiryMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-ink/20 text-ink px-7 py-3.5 text-base font-medium rounded-sm hover:border-ink transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Send Enquiry on WhatsApp
              </Link>
            </div>
          </div>

          <div className="relative h-72 sm:h-96 lg:h-[28rem] rounded-sm border border-line overflow-hidden">
            <Image
              src="/images/Hero.jpeg"
              alt="Shivshakti Hardware storefront"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
