import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { getCategoryPhoto } from "@/data/photos";

export const metadata: Metadata = {
  title: "Categories",
  description:
    "Explore product categories at Shivshakti Hardware — construction materials, hardware, plumbing, paints and alabaster.",
  alternates: { canonical: "/categories" },
};

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="font-display text-4xl sm:text-5xl text-ink">Categories</h1>
      <p className="mt-2 text-steel max-w-xl">
        Browse every category available at Shivshakti Hardware.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/categories/${category.slug}`}
            className="group flex flex-col border border-line bg-paper rounded-sm overflow-hidden hover:border-ink/30 transition-colors"
          >
            <div className="relative h-40">
              <PhotoTile
                photo={getCategoryPhoto(category.slug)}
                swatchStops={category.swatch}
                swatchShowLabels
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>
            <div className="p-5">
              <h2 className="font-display text-2xl text-ink">{category.name}</h2>
              <p className="mt-1.5 text-sm text-steel">{category.shortDescription}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-rust group-hover:gap-2.5 transition-all">
                View Products
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
