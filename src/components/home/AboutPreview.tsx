import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { business } from "@/data/business";

export function AboutPreview() {
  return (
    <section className="bg-concrete border-t border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="font-display text-4xl sm:text-5xl leading-[0.95] text-ink">
            Built Around Trust,
            <br />
            Quality and Local Service.
          </h2>
          <p className="mt-5 text-base text-steel max-w-lg">
            Shivshakti Hardware provides construction materials, hardware,
            plumbing supplies, paints and various building-related materials
            for customers in and around {business.address.line1} and{" "}
            {business.address.district}.
          </p>
          <p className="mt-3 text-base text-steel max-w-lg">
            Proprietor: {business.proprietor}. Locally known as &ldquo;{business.localName}&rdquo;.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-rust hover:gap-2.5 transition-all"
          >
            Read More About Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="relative h-64 sm:h-80 rounded-sm border border-line overflow-hidden">
          <Image
            src="/images/hardware.jpg"
            alt="Assorted steel nuts and bolts"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
