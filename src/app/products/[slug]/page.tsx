import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, MessageCircle } from "lucide-react";
import { getProductBySlug, getRelatedProducts, products } from "@/data/products";
import { getCategoryBySlug } from "@/data/categories";
import { getProductPhoto } from "@/data/photos";
import { ProductGallery } from "@/components/products/ProductGallery";
import { ProductCard } from "@/components/products/ProductCard";
import { AddToEnquiryButton } from "@/components/cart/AddToEnquiryButton";
import { DigitalBillNote, Tag } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { buildProductEnquiryMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { ProductJsonLd } from "@/components/seo/StructuredData";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.shortDescription,
    alternates: { canonical: `/products/${product.slug}` },
  };
}

export default async function ProductDetailPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategoryBySlug(product.category);
  const related = getRelatedProducts(product);
  const whatsappUrl = buildWhatsAppUrl(buildProductEnquiryMessage(product.name));

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <ProductJsonLd product={product} />

      <nav className="flex items-center gap-1.5 text-sm text-steel">
        <Link href="/products" className="hover:text-rust">
          Products
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        {category && (
          <>
            <Link href={`/categories/${category.slug}`} className="hover:text-rust">
              {category.name}
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
          </>
        )}
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="mt-6 grid lg:grid-cols-2 gap-10 lg:gap-16">
        <ProductGallery stops={product.swatch} name={product.name} photo={getProductPhoto(product)} />

        <div>
          <p className="text-sm text-steel">
            {category?.name}
            {product.subcategory ? ` / ${product.subcategory}` : ""}
          </p>
          <h1 className="mt-1.5 font-display text-4xl sm:text-5xl text-ink leading-[0.95]">
            {product.name}
          </h1>
          {product.brand && <p className="mt-2 text-sm text-steel">Brand: {product.brand}</p>}

          <p className="mt-5 text-base text-ink-soft leading-relaxed max-w-lg">
            {product.description}
          </p>

          {product.variants && product.variants.length > 0 && (
            <div className="mt-6">
              <p className="text-sm font-medium text-ink mb-2">Available Variants</p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <Tag key={v.label}>{v.label}</Tag>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 flex items-center gap-3">
            <span className="font-mono text-lg text-ink">
              {product.priceType === "enquiry" ? "Get Latest Price" : product.price}
            </span>
            <span
              className={`text-xs px-2 py-1 rounded-sm ${
                product.available ? "bg-rust/10 text-rust" : "bg-steel/10 text-steel"
              }`}
            >
              {product.available ? "In Stock" : "Currently Unavailable"}
            </span>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <ButtonLink href={whatsappUrl} target="_blank" rel="noopener noreferrer" size="lg">
              <MessageCircle className="w-4 h-4" />
              Enquire About This Product
            </ButtonLink>
            <AddToEnquiryButton product={product} variant="ghost" />
          </div>

          <DigitalBillNote className="mt-4" />

          {product.tags.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          )}
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-16 sm:mt-24">
          <h2 className="font-display text-3xl text-ink">Related Products</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
