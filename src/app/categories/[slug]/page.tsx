import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { getCategoryPhoto } from "@/data/photos";
import { ProductCatalogue } from "@/components/products/ProductCatalogue";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/categories/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  return {
    title: category.name,
    description: category.description,
    alternates: { canonical: `/categories/${category.slug}` },
  };
}

export default async function CategoryDetailPage({ params }: PageProps<"/categories/[slug]">) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const categoryProducts = getProductsByCategory(category.slug);

  return (
    <div>
      <div className="relative h-40 sm:h-56">
        <PhotoTile
          photo={getCategoryPhoto(category.slug)}
          swatchStops={category.swatch}
          swatchShowLabels
          sizes="100vw"
          priority
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <h1 className="font-display text-4xl sm:text-5xl text-ink">{category.name}</h1>
        <p className="mt-2 text-steel max-w-xl">{category.description}</p>

        <div className="mt-8">
          <ProductCatalogue products={categoryProducts} initialCategory={category.slug} />
        </div>
      </div>
    </div>
  );
}
