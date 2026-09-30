import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { getCategoryPhoto } from "@/data/photos";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CategoryGrid() {
  return (
    <section className="bg-concrete">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <SectionHeading
          title="Shop by Category"
          description="From foundation to finishing — everything sorted by what you actually need."
        />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="group flex flex-col border border-line bg-paper rounded-sm overflow-hidden hover:border-ink/30 transition-colors"
            >
              <div className="relative h-36">
                <PhotoTile
                  photo={getCategoryPhoto(category.slug)}
                  swatchStops={category.swatch}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-2xl text-ink">{category.name}</h3>
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
    </section>
  );
}
