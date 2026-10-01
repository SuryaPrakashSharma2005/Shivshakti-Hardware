"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, MessageCircle, ShoppingBag } from "lucide-react";
import { business } from "@/data/business";
import { useEnquiryCart } from "@/components/cart/EnquiryCartContext";
import { buildGeneralEnquiryMessage, buildWhatsAppUrl } from "@/lib/whatsapp";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/categories", label: "Categories" },
  { href: "/paints", label: "Paints" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { totalItems, openCart } = useEnquiryCart();

  return (
    <header className="sticky top-0 z-40 bg-concrete/95 backdrop-blur border-b border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-baseline gap-2 shrink-0">
            <span className="font-display text-2xl sm:text-3xl text-ink leading-none">
              Shivshakti
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-rust font-body font-semibold">
              Hardware
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] text-ink-soft hover:text-rust transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={openCart}
              className="relative p-2 text-ink hover:text-rust transition-colors"
              aria-label="Open enquiry list"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-[18px] h-[18px] text-[10px] leading-none flex items-center justify-center bg-rust text-paper rounded-full font-mono">
                  {totalItems}
                </span>
              )}
            </button>
            <Link
              href={buildWhatsAppUrl(buildGeneralEnquiryMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-rust text-paper px-5 py-2.5 text-sm font-medium rounded-sm hover:bg-rust-dark transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Enquire Now
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={openCart}
              className="relative p-2 text-ink"
              aria-label="Open enquiry list"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-[18px] h-[18px] text-[10px] leading-none flex items-center justify-center bg-rust text-paper rounded-full font-mono">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="p-2 text-ink"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-concrete">
          <nav className="flex flex-col px-4 sm:px-6 py-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[15px] text-ink-soft border-b border-line/70 last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={buildWhatsAppUrl(buildGeneralEnquiryMessage())}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 mb-4 inline-flex items-center justify-center gap-2 bg-rust text-paper px-5 py-3 text-sm font-medium rounded-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Enquire Now
            </Link>
          </nav>
        </div>
      )}

      <p className="hidden sm:block text-center text-[11px] text-steel bg-concrete-dark py-1">
        Bhakura Bhithi, Saran, Bihar — locally known as{" "}
        <span className="text-rust font-semibold">&ldquo;{business.localName}&rdquo;</span>
      </p>
    </header>
  );
}
