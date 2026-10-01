import Link from "next/link";
import { Navigation } from "lucide-react";
import { business } from "@/data/business";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LocationSection() {
  const { lat, lng } = business.mapsCoordinates;
  const embedUrl = `https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`;

  return (
    <section className="bg-paper border-t border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-stretch">
        <div>
          <SectionHeading title="Find Us" description="Visit the store or get directions." />

          <div className="mt-6 space-y-1 text-base text-ink">
            <p className="font-semibold">{business.name}</p>
            <p>{business.address.line1}</p>
            <p>{business.address.road}</p>
            <p>Post Office: {business.address.postOffice}</p>
            <p>
              {business.address.district}, {business.address.state} {business.address.pincode}
            </p>
            <p>{business.address.country}</p>
          </div>

          <Link
            href={business.mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-ink text-paper px-6 py-3 text-sm font-medium rounded-sm hover:bg-ink-soft transition-colors"
          >
            <Navigation className="w-4 h-4" />
            Get Directions
          </Link>
        </div>

        <div className="relative min-h-64 h-80 lg:h-auto rounded-sm border border-line overflow-hidden">
          <iframe
            src={embedUrl}
            title={`Map showing the location of ${business.name}`}
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
