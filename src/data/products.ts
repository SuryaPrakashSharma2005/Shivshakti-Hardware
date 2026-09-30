import { Product } from "@/types/product";

/**
 * Sample / mock catalogue used to demonstrate the UI. No prices have been
 * supplied for any item, so every product uses priceType "enquiry" and the
 * UI shows "Get Latest Price" instead of a fabricated number. Replace or
 * extend this list once real product data is available.
 */
export const products: Product[] = [
  {
    id: "p-cement",
    name: "Cement",
    slug: "cement",
    category: "construction-materials",
    subcategory: "Cement",
    description:
      "Cement for foundation, plastering and general construction work. Available in standard bags — ask in-store for the brands currently in stock.",
    shortDescription: "For foundation, plastering and general construction.",
    swatch: [{ color: "#9a938a", label: "Cement" }],
    priceType: "enquiry",
    available: true,
    variants: [{ label: "50 kg bag" }],
    tags: ["cement", "construction", "foundation"],
  },
  {
    id: "p-gitti",
    name: "Gitti (Crushed Stone Aggregate)",
    slug: "gitti",
    category: "construction-materials",
    subcategory: "Gitti",
    description:
      "Crushed stone aggregate used in concrete mixing, road work and construction fill. Sold by load — enquire for current availability.",
    shortDescription: "Crushed stone aggregate for concrete and construction fill.",
    swatch: [{ color: "#4a4640", label: "Gitti" }],
    priceType: "enquiry",
    available: true,
    tags: ["gitti", "aggregate", "construction"],
  },
  {
    id: "p-baalu",
    name: "Baalu (Sand)",
    slug: "baalu",
    category: "construction-materials",
    subcategory: "Baalu",
    description:
      "Sand for masonry, plastering and concrete work. Sold by load — enquire for current availability and delivery.",
    shortDescription: "Sand for masonry, plastering and concrete work.",
    swatch: [{ color: "#c9a574", label: "Baalu" }],
    priceType: "enquiry",
    available: true,
    tags: ["baalu", "sand", "construction"],
  },
  {
    id: "p-chhar",
    name: "Chhar",
    slug: "chhar",
    category: "construction-materials",
    subcategory: "Chhar",
    description:
      "Chhar for construction and filling work as required at your site. Enquire in-store for details and current stock.",
    shortDescription: "Construction filling material.",
    swatch: [{ color: "#7d7266", label: "Chhar" }],
    priceType: "enquiry",
    available: true,
    tags: ["chhar", "construction"],
  },
  {
    id: "p-nut-bolts",
    name: "Nut & Bolts",
    slug: "nut-and-bolts",
    category: "hardware",
    subcategory: "Nut & Bolts",
    description:
      "A range of nuts and bolts in common sizes for construction, furniture and repair work. Ask in-store for the exact size you need.",
    shortDescription: "Nuts and bolts in common sizes for construction and repair.",
    swatch: [{ color: "#5b6b74", label: "Steel" }],
    priceType: "enquiry",
    available: true,
    tags: ["nut", "bolts", "hardware", "fasteners"],
  },
  {
    id: "p-hinges",
    name: "Door & Window Hinges",
    slug: "door-window-hinges",
    category: "hardware",
    subcategory: "Other Hardware",
    description: "Hinges and fittings for doors and windows, in various sizes.",
    shortDescription: "Hinges and fittings for doors and windows.",
    swatch: [{ color: "#3d3a35", label: "Fittings" }],
    priceType: "enquiry",
    available: true,
    tags: ["hardware", "hinges", "fittings"],
  },
  {
    id: "p-hand-tools",
    name: "Hand Tools",
    slug: "hand-tools",
    category: "hardware",
    subcategory: "Other Hardware",
    description: "Everyday hand tools for construction and household repair work.",
    shortDescription: "Everyday hand tools for construction and repair.",
    swatch: [{ color: "#8a8378", label: "Tools" }],
    priceType: "enquiry",
    available: true,
    tags: ["hardware", "tools"],
  },
  {
    id: "p-water-tank",
    name: "Water Tank",
    slug: "water-tank",
    category: "plumbing",
    subcategory: "Water Tanks",
    description:
      "Overhead water storage tanks for home and commercial use, available in different capacities. Enquire for available sizes.",
    shortDescription: "Overhead water storage tanks in different capacities.",
    swatch: [{ color: "#56707a", label: "Water Tank" }],
    priceType: "enquiry",
    available: true,
    variants: [{ label: "Small" }, { label: "Medium" }, { label: "Large" }],
    tags: ["water tank", "plumbing", "storage"],
  },
  {
    id: "p-pvc-pipes",
    name: "PVC Pipes",
    slug: "pvc-pipes",
    category: "plumbing",
    subcategory: "Other Plumbing Materials",
    description: "PVC pipes for water supply and drainage lines, in common sizes.",
    shortDescription: "PVC pipes for water supply and drainage.",
    swatch: [{ color: "#7f9199", label: "Pipes" }],
    priceType: "enquiry",
    available: true,
    tags: ["plumbing", "pipes", "pvc"],
  },
  {
    id: "p-pipe-fittings",
    name: "Pipe Fittings",
    slug: "pipe-fittings",
    category: "plumbing",
    subcategory: "Other Plumbing Materials",
    description: "Elbows, joints, taps and other pipe fittings for plumbing work.",
    shortDescription: "Elbows, joints, taps and other pipe fittings.",
    swatch: [{ color: "#3f5057", label: "Fittings" }],
    priceType: "enquiry",
    available: true,
    tags: ["plumbing", "fittings"],
  },
  {
    id: "p-interior-paint",
    name: "Interior Paint",
    slug: "interior-paint",
    category: "paints",
    subcategory: "Interior Paint",
    description:
      "Interior wall paint for a smooth, long-lasting finish inside your home. Multiple brands and shades available in-store.",
    shortDescription: "Interior wall paint for a smooth, long-lasting finish.",
    swatch: [{ color: "#b6491f", label: "Interior" }],
    priceType: "enquiry",
    available: true,
    tags: ["paint", "interior"],
  },
  {
    id: "p-exterior-paint",
    name: "Exterior Paint",
    slug: "exterior-paint",
    category: "paints",
    subcategory: "Exterior Paint",
    description:
      "Weather-resistant exterior paint for the outside walls of your home or building. Multiple brands available.",
    shortDescription: "Weather-resistant paint for exterior walls.",
    swatch: [{ color: "#dc9c2f", label: "Exterior" }],
    priceType: "enquiry",
    available: true,
    tags: ["paint", "exterior"],
  },
  {
    id: "p-wall-paint",
    name: "Wall Paint",
    slug: "wall-paint",
    category: "paints",
    subcategory: "Wall Paint",
    description: "General-purpose wall paint in a range of shades and finishes.",
    shortDescription: "General-purpose wall paint in a range of shades.",
    swatch: [{ color: "#4c6b72", label: "Wall Paint" }],
    priceType: "enquiry",
    available: true,
    tags: ["paint", "wall"],
  },
  {
    id: "p-primer-putty",
    name: "Primer & Wall Putty",
    slug: "primer-wall-putty",
    category: "paints",
    subcategory: "Other Painting Products",
    description: "Primer and wall putty for surface preparation before painting.",
    shortDescription: "Surface preparation products for painting.",
    swatch: [{ color: "#8f3714", label: "Primer" }],
    priceType: "enquiry",
    available: true,
    tags: ["paint", "primer", "putty"],
  },
  {
    id: "p-alabaster-white",
    name: "White Alabaster",
    slug: "white-alabaster",
    category: "alabaster",
    subcategory: "Alabaster",
    description: "White alabaster for finishing and decorative work.",
    shortDescription: "White alabaster for finishing work.",
    swatch: [{ color: "#ece7de", label: "White" }],
    priceType: "enquiry",
    available: true,
    tags: ["alabaster"],
  },
  {
    id: "p-alabaster-powder",
    name: "Alabaster Powder",
    slug: "alabaster-powder",
    category: "alabaster",
    subcategory: "Alabaster",
    description: "Alabaster powder for related finishing applications.",
    shortDescription: "Alabaster powder for finishing applications.",
    swatch: [{ color: "#d8cfc0", label: "Alabaster" }],
    priceType: "enquiry",
    available: true,
    tags: ["alabaster", "powder"],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string) {
  return products.filter((p) => p.category === category);
}

export function getRelatedProducts(product: Product, limit = 4) {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit);
}

export const allBrandsInUse = Array.from(
  new Set(products.map((p) => p.brand).filter(Boolean))
) as string[];
