"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Product } from "@/types/product";
import { categories } from "@/data/categories";
import { ProductCard } from "@/components/products/ProductCard";
import { EmptyState } from "@/components/ui/EmptyState";

type SortOption = "relevance" | "name-asc" | "name-desc";

export function ProductCatalogue({
  products,
  initialCategory,
}: {
  products: Product[];
  initialCategory?: string;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>(initialCategory ?? "all");
  const [subcategory, setSubcategory] = useState<string>("all");
  const [brand, setBrand] = useState<string>("all");
  const [sort, setSort] = useState<SortOption>("relevance");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const brands = useMemo(
    () => Array.from(new Set(products.map((p) => p.brand).filter(Boolean))) as string[],
    [products]
  );

  const subcategories = useMemo(() => {
    if (category === "all") return [];
    return categories.find((c) => c.slug === category)?.subcategories ?? [];
  }, [category]);

  const filtered = useMemo(() => {
    let result = products;

    if (category !== "all") result = result.filter((p) => p.category === category);
    if (subcategory !== "all") result = result.filter((p) => p.subcategory === subcategory);
    if (brand !== "all") result = result.filter((p) => p.brand === brand);

    if (query.trim()) {
      const q = query.trim().toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (sort === "name-asc") result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "name-desc") result = [...result].sort((a, b) => b.name.localeCompare(a.name));

    return result;
  }, [products, category, subcategory, brand, query, sort]);

  const resetFilters = () => {
    setQuery("");
    setCategory("all");
    setSubcategory("all");
    setBrand("all");
    setSort("relevance");
  };

  const hasActiveFilters = query || category !== "all" || subcategory !== "all" || brand !== "all";

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-steel" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products — cement, paint, water tank..."
            className="w-full border border-line rounded-sm pl-10 pr-4 py-3 text-sm bg-paper focus:outline-none focus-visible:outline-2"
            aria-label="Search products"
          />
        </div>
        <button
          onClick={() => setFiltersOpen((v) => !v)}
          className="sm:hidden inline-flex items-center justify-center gap-2 border border-line rounded-sm px-4 py-3 text-sm text-ink"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
        </button>
      </div>

      <div className={`${filtersOpen ? "grid" : "hidden"} sm:grid mt-4 grid-cols-2 sm:grid-cols-4 gap-3`}>
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setSubcategory("all");
          }}
          className="border border-line rounded-sm px-3 py-2.5 text-sm bg-paper text-ink"
          aria-label="Filter by category"
        >
          <option value="all">All Categories</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.name}
            </option>
          ))}
        </select>

        <select
          value={subcategory}
          onChange={(e) => setSubcategory(e.target.value)}
          disabled={subcategories.length === 0}
          className="border border-line rounded-sm px-3 py-2.5 text-sm bg-paper text-ink disabled:opacity-50"
          aria-label="Filter by subcategory"
        >
          <option value="all">All Subcategories</option>
          {subcategories.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          disabled={brands.length === 0}
          className="border border-line rounded-sm px-3 py-2.5 text-sm bg-paper text-ink disabled:opacity-50"
          aria-label="Filter by brand"
        >
          <option value="all">All Brands</option>
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortOption)}
          className="border border-line rounded-sm px-3 py-2.5 text-sm bg-paper text-ink"
          aria-label="Sort products"
        >
          <option value="relevance">Sort: Relevance</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-steel">
          {filtered.length} product{filtered.length !== 1 ? "s" : ""} found
        </p>
        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="inline-flex items-center gap-1 text-sm text-rust hover:text-rust-dark"
          >
            <X className="w-3.5 h-3.5" />
            Clear filters
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          title="No products match your search"
          description="Try a different keyword, or clear filters to see the full catalogue."
          actionLabel="Clear filters"
          onAction={resetFilters}
        />
      ) : (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
