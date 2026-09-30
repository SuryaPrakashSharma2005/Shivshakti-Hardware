import { business } from "@/data/business";
import { Product } from "@/types/product";

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HardwareStore",
    name: business.name,
    alternateName: business.localName,
    description:
      "Building construction material and hardware store offering cement, gitti, baalu, chhar, hardware, plumbing supplies and paints.",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.line1,
      addressLocality: business.address.district,
      addressRegion: business.address.state,
      addressCountry: business.address.country,
    },
    founder: {
      "@type": "Person",
      name: business.proprietor,
    },
    telephone: business.contact.phone,
    email: business.contact.email,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ProductJsonLd({ product }: { product: Product }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: product.subcategory,
    ...(product.brand ? { brand: { "@type": "Brand", name: product.brand } } : {}),
    offers: {
      "@type": "Offer",
      availability: product.available
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      priceCurrency: "INR",
      ...(product.priceType === "fixed" && product.price
        ? { price: product.price }
        : {}),
      seller: {
        "@type": "HardwareStore",
        name: "Shivshakti Hardware",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
