import type { Metadata } from "next";
import { PaintBucket } from "lucide-react";
import { getProductsByCategory } from "@/data/products";
import { getCategoryBySlug } from "@/data/categories";
import { paintBrands } from "@/data/brands";
import { ProductCatalogue } from "@/components/products/ProductCatalogue";
import { MaterialSwatch } from "@/components/ui/MaterialSwatch";

export const metadata: Metadata = {
  title: "Paints",
  description:
    "Interior, exterior and wall paints from multiple brands at Shivshakti Hardware, Saran, Bihar.",
  alternates: { canonical: "/paints" },
};

export default function PaintsPage() {
  const category = getCategoryBySlug("paints");
  const paintProducts = getProductsByCategory("paints");

  return (
    <div>
      <div className="h-40 sm:h-56">
        {category && <MaterialSwatch stops={category.swatch} showLabels />}
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <h1 className="font-display text-4xl sm:text-5xl text-ink">Paints From Trusted Brands</h1>
        <p className="mt-2 text-steel max-w-xl">
          Choose from a wide range of paints and finishes for your home and
          construction needs. Multiple paint brands are available in-store.
        </p>

        <div className="mt-10">
          <p className="text-sm font-semibold text-ink mb-4">Paint Brands</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {paintBrands.map((brand) => (
              <div
                key={brand.slug}
                className="flex flex-col items-center justify-center gap-3 border border-line rounded-sm py-10 px-4 text-center bg-paper"
              >
                <PaintBucket className="w-6 h-6 text-steel/50" strokeWidth={1.5} />
                <p className="text-xs text-steel">Brand slot available</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-steel">
            Actual paint brand names and logos will be added here once confirmed.
          </p>
        </div>

        <div className="mt-14">
          <p className="text-sm font-semibold text-ink mb-4">Paint Products</p>
          <ProductCatalogue products={paintProducts} initialCategory="paints" />
        </div>
      </div>
    </div>
  );
}
