import { Category } from "@/types/product";

export const categories: Category[] = [
  {
    slug: "construction-materials",
    name: "Construction Materials",
    shortDescription: "Cement, gitti, baalu and chhar for every stage of construction.",
    description:
      "Core building materials for foundation, structure and finishing work — cement, gitti (crushed stone aggregate), baalu (sand) and chhar, sourced for regular construction and repair needs in and around Bhakura Bhithi.",
    swatch: [
      { color: "#9a938a", label: "Cement" },
      { color: "#4a4640", label: "Gitti" },
      { color: "#c9a574", label: "Baalu" },
      { color: "#7d7266", label: "Chhar" },
    ],
    subcategories: ["Gitti", "Cement", "Baalu", "Chhar"],
  },
  {
    slug: "hardware",
    name: "Hardware",
    shortDescription: "Nut, bolts and everyday hardware essentials.",
    description:
      "General hardware for construction, repair and household use — nut & bolts and other everyday hardware items kept in stock for quick purchase.",
    swatch: [
      { color: "#5b6b74", label: "Steel" },
      { color: "#3d3a35", label: "Fittings" },
      { color: "#8a8378", label: "Fasteners" },
    ],
    subcategories: ["Nut & Bolts", "Other Hardware"],
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    shortDescription: "Water tanks and plumbing materials for home and site.",
    description:
      "Plumbing supplies for residential and construction use, including water storage tanks and other plumbing materials required on site.",
    swatch: [
      { color: "#56707a", label: "Water Tanks" },
      { color: "#7f9199", label: "Fittings" },
      { color: "#3f5057", label: "Pipes" },
    ],
    subcategories: ["Water Tanks", "Other Plumbing Materials"],
  },
  {
    slug: "paints",
    name: "Paints",
    shortDescription: "Interior, exterior and wall paints from multiple brands.",
    description:
      "A range of interior, exterior and wall paints and household painting products, with multiple paint brands available to suit different budgets and finishes.",
    swatch: [
      { color: "#b6491f", label: "Interior" },
      { color: "#dc9c2f", label: "Exterior" },
      { color: "#4c6b72", label: "Wall Paint" },
      { color: "#8f3714", label: "Finishes" },
    ],
    subcategories: ["Interior Paint", "Exterior Paint", "Wall Paint", "Other Painting Products"],
  },
  {
    slug: "alabaster",
    name: "Alabaster",
    shortDescription: "Different types of alabaster and related products.",
    description:
      "Various types of alabaster and related materials for finishing and decorative work, available at the store.",
    swatch: [
      { color: "#d8cfc0", label: "Alabaster" },
      { color: "#ece7de", label: "White" },
      { color: "#bdb2a0", label: "Related" },
    ],
    subcategories: ["Alabaster"],
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}
