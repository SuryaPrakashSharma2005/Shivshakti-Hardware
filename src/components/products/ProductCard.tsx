import Link from "next/link";
import { Product } from "@/types/product";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { getProductPhoto } from "@/data/photos";
import { AddToEnquiryButton } from "@/components/cart/AddToEnquiryButton";
import { getCategoryBySlug } from "@/data/categories";

export function ProductCard({ product }: { product: Product }) {
  const category = getCategoryBySlug(product.category);

  return (
    <div className="group flex flex-col border border-line bg-paper rounded-sm overflow-hidden hover:border-ink/30 transition-colors">
      <Link href={`/products/${product.slug}`} className="block relative h-40 sm:h-44">
        <PhotoTile
          photo={getProductPhoto(product)}
          swatchStops={product.swatch}
          swatchShowLabels
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </Link>
      <div className="flex flex-col flex-1 p-4">
        <p className="text-xs text-steel">{category?.name}</p>
        <Link href={`/products/${product.slug}`}>
          <h3 className="mt-1 font-body font-semibold text-ink leading-snug group-hover:text-rust transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1.5 text-sm text-steel line-clamp-2">{product.shortDescription}</p>

        <div className="mt-3 flex items-center justify-between">
          <span className="font-mono text-sm text-ink">
            {product.priceType === "enquiry" ? "Get Latest Price" : product.price}
          </span>
          {product.brand && <span className="text-xs text-steel">{product.brand}</span>}
        </div>

        <div className="mt-4 flex items-center gap-2">
          <Link
            href={`/products/${product.slug}`}
            className="flex-1 text-center text-sm font-medium border border-line rounded-sm py-2 text-ink hover:border-ink transition-colors whitespace-nowrap"
          >
            View Details
          </Link>
          <AddToEnquiryButton product={product} size="sm" className="flex-1 whitespace-nowrap" />
        </div>
      </div>
    </div>
  );
}
