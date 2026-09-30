import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturedProducts() {
  const featured = products.slice(0, 8);

  return (
    <section className="bg-concrete border-t border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading title="Popular Products" description="A quick look at what customers ask for most." />
          <Link
            href="/products"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-rust hover:gap-2.5 transition-all shrink-0"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <Link
          href="/products"
          className="sm:hidden mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-rust"
        >
          View All Products
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
