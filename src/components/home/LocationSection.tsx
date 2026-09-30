import Link from "next/link";
import { MapPin, Navigation } from "lucide-react";
import { business } from "@/data/business";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LocationSection() {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    business.mapsQuery
  )}`;

  return (
    <section className="bg-paper border-t border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-stretch">
        <div>
          <SectionHeading title="Find Us" description="Visit the store or get directions." />

          <div className="mt-6 space-y-1 text-base text-ink">
            <p className="font-semibold">{business.name}</p>
            <p>{business.address.line1}</p>
            <p>Post Office: {business.address.postOffice}</p>
            <p>
              District: {business.address.district}, {business.address.state}
            </p>
            <p>{business.address.country}</p>
          </div>

          <Link
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-ink text-paper px-6 py-3 text-sm font-medium rounded-sm hover:bg-ink-soft transition-colors"
          >
            <Navigation className="w-4 h-4" />
            Get Directions
          </Link>
        </div>

        <div className="relative min-h-64 rounded-sm border border-line bg-concrete-dark flex flex-col items-center justify-center gap-2 text-center px-6">
          <MapPin className="w-8 h-8 text-rust" strokeWidth={1.5} />
          <p className="text-sm text-steel max-w-xs">
            Map placeholder — this will be connected to the exact Google Maps
            location for {business.address.line1}, {business.address.district}.
          </p>
        </div>
      </div>
    </section>
  );
}
