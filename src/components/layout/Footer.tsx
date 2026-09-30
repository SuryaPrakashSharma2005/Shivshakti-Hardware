import Link from "next/link";
import { Check } from "lucide-react";
import { business } from "@/data/business";
import { MaterialSwatch } from "@/components/ui/MaterialSwatch";

const swatch = [
  { color: "#9a938a", label: "Cement" },
  { color: "#4a4640", label: "Gitti" },
  { color: "#c9a574", label: "Baalu" },
  { color: "#b6491f", label: "Paint" },
  { color: "#56707a", label: "Plumbing" },
  { color: "#dc9c2f", label: "Hardware" },
];

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/categories", label: "Categories" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="h-2">
        <MaterialSwatch stops={swatch} />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <p className="font-display text-3xl leading-none">Shivshakti</p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-rust font-semibold">
              Hardware
            </p>
            <p className="mt-4 text-sm text-paper/70">{"Building Materials • Hardware • Plumbing • Paints"}</p>
            <p className="mt-4 text-sm text-paper/60">
              {business.address.line1}, Saran, Bihar
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-paper mb-4">Explore</p>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-paper/65 hover:text-paper transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-paper mb-4">Business Information</p>
            <ul className="space-y-2.5 text-sm text-paper/65">
              <li>Proprietor: {business.proprietor}</li>
              <li>{business.contact.phone}</li>
              <li>{business.contact.hours}</li>
              <li>Locally known as &ldquo;{business.localName}&rdquo;</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-paper mb-4">Digital Billing</p>
            <p className="inline-flex items-start gap-1.5 text-sm text-paper/65">
              <Check className="w-4 h-4 text-rust mt-0.5 shrink-0" strokeWidth={2.5} />
              Digital billing available with your purchase.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-paper/10 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-xs text-paper/50">
            © {new Date().getFullYear()} Shivshakti Hardware. All rights reserved.
          </p>
          <p className="text-xs text-paper/50">
            {business.address.line1}, Post Office {business.address.postOffice}, {business.address.district}, {business.address.state}
          </p>
        </div>
      </div>
    </footer>
  );
}
