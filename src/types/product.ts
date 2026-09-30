export type PriceType = "fixed" | "starting_from" | "enquiry";

export type CategorySlug =
  | "construction-materials"
  | "hardware"
  | "plumbing"
  | "paints"
  | "alabaster";

export interface SwatchStop {
  color: string;
  label: string;
}

export interface Category {
  slug: CategorySlug;
  name: string;
  shortDescription: string;
  description: string;
  swatch: SwatchStop[];
  subcategories: string[];
}

export interface Brand {
  slug: string;
  name: string;
  kind: "paint" | "general";
  placeholder: true;
}

export interface ProductVariant {
  label: string;
  note?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: CategorySlug;
  subcategory: string;
  brand?: string;
  description: string;
  shortDescription: string;
  swatch: SwatchStop[];
  price?: number;
  priceUnit?: string;
  priceType: PriceType;
  available: boolean;
  variants?: ProductVariant[];
  tags: string[];
}

export interface EnquiryItem {
  productId: string;
  name: string;
  slug: string;
  quantity: number;
  unit?: string;
}
