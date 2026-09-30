import type { Metadata } from "next";
import { products } from "@/data/products";
import { ProductCatalogue } from "@/components/products/ProductCatalogue";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse the full product catalogue at Shivshakti Hardware — construction materials, hardware, plumbing supplies and paints. Search, filter and enquire on WhatsApp.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="font-display text-4xl sm:text-5xl text-ink">Product Catalogue</h1>
      <p className="mt-2 text-steel max-w-xl">
        Search and filter construction materials, hardware, plumbing supplies
        and paints. Add anything you need to your enquiry list and send it to
        us on WhatsApp.
      </p>

      <div className="mt-8">
        <ProductCatalogue products={products} />
      </div>
    </div>
  );
}
