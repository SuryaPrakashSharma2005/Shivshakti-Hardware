import { CategorySlug, Product } from "@/types/product";

export interface Photo {
  src: string;
  alt: string;
}

/**
 * Real stock photography standing in for in-store product photos, sourced
 * from Wikimedia Commons (see public/images/CREDITS.md for licensing).
 * Paints has no clean, unbranded match yet, so its cards intentionally keep
 * the material-swatch treatment instead of a mismatched photo.
 */
const categoryPhotos: Partial<Record<CategorySlug, Photo>> = {
  "construction-materials": {
    src: "/images/construction-materials.jpg",
    alt: "Front loader stacking gravel at a construction aggregate yard",
  },
  hardware: {
    src: "/images/hardware.jpg",
    alt: "Assorted steel nuts and bolts",
  },
  plumbing: {
    src: "/images/plumbing.jpg",
    alt: "Stacked black plastic pipes",
  },
  alabaster: {
    src: "/images/alabaster.jpg",
    alt: "Carved white alabaster stone showing its translucent quality",
  },
};

const productPhotos: Record<string, Photo> = {
  cement: { src: "/images/cement.jpg", alt: "Stacked bags of cement" },
  gitti: { src: "/images/gitti.jpg", alt: "Close-up of crushed stone aggregate" },
  baalu: { src: "/images/baalu.jpg", alt: "Close-up of fine construction sand" },
  chhar: {
    src: "/images/construction-materials.jpg",
    alt: "Construction aggregate at a materials yard",
  },
  "nut-and-bolts": { src: "/images/hardware.jpg", alt: "Assorted steel nuts and bolts" },
  "door-window-hinges": { src: "/images/hardware.jpg", alt: "Assorted hardware fittings" },
  "hand-tools": { src: "/images/hardware.jpg", alt: "Assorted hardware fittings" },
  "water-tank": { src: "/images/water-tank.jpg", alt: "Blue plastic water storage tanks" },
  "pvc-pipes": { src: "/images/plumbing.jpg", alt: "Stacked black plastic pipes" },
  "pipe-fittings": { src: "/images/plumbing.jpg", alt: "Stacked black plastic pipes" },
  "white-alabaster": {
    src: "/images/alabaster.jpg",
    alt: "Carved white alabaster stone showing its translucent quality",
  },
  "alabaster-powder": {
    src: "/images/alabaster.jpg",
    alt: "Carved white alabaster stone showing its translucent quality",
  },
};

export function getCategoryPhoto(slug: CategorySlug): Photo | undefined {
  return categoryPhotos[slug];
}

export function getProductPhoto(product: Product): Photo | undefined {
  return productPhotos[product.slug] ?? categoryPhotos[product.category];
}
