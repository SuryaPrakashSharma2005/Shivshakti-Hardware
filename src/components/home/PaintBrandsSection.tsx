import { PaintBucket } from "lucide-react";
import { paintBrands } from "@/data/brands";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PaintBrandsSection() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <SectionHeading
          title="Paints From Trusted Brands"
          description="Choose from a wide range of paints and finishes for your home and construction needs."
          tone="light"
        />

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {paintBrands.map((brand) => (
            <div
              key={brand.slug}
              className="flex flex-col items-center justify-center gap-3 border border-paper/15 rounded-sm py-10 px-4 text-center"
            >
              <PaintBucket className="w-6 h-6 text-paper/40" strokeWidth={1.5} />
              <p className="text-xs text-paper/50">Brand slot available</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-paper/40">
          Actual paint brand names and logos will be added here once confirmed.
        </p>
      </div>
    </section>
  );
}
