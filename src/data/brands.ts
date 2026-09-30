import { Brand } from "@/types/product";

/**
 * No real paint brand names have been supplied for this store, so we do not
 * invent any. These are clearly-labelled placeholder slots — swap `name`
 * and add a logo once the actual brands stocked at the shop are confirmed.
 */
export const paintBrands: Brand[] = [
  { slug: "brand-slot-1", name: "Paint Brand", kind: "paint", placeholder: true },
  { slug: "brand-slot-2", name: "Paint Brand", kind: "paint", placeholder: true },
  { slug: "brand-slot-3", name: "Paint Brand", kind: "paint", placeholder: true },
  { slug: "brand-slot-4", name: "Paint Brand", kind: "paint", placeholder: true },
];

export const generalBrands: Brand[] = [];
