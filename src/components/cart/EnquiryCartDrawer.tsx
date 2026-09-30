"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Minus, Plus, Trash2, MessageCircle, ShoppingBag } from "lucide-react";
import { useEnquiryCart } from "@/components/cart/EnquiryCartContext";
import { buildCartEnquiryMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";

export function EnquiryCartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, clearCart } = useEnquiryCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  if (!isOpen) return null;

  const message = buildCartEnquiryMessage(items, name, phone, note);
  const whatsappUrl = buildWhatsAppUrl(message);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <button
        aria-label="Close enquiry list"
        onClick={closeCart}
        className="absolute inset-0 bg-ink/50"
      />
      <div className="relative w-full sm:max-w-md h-full bg-paper flex flex-col shadow-2xl animate-fade-up">
        <div className="flex items-center justify-between px-5 py-4 border-b border-line">
          <h2 className="font-display text-2xl text-ink">Your Enquiry</h2>
          <button onClick={closeCart} aria-label="Close" className="p-1 text-ink hover:text-rust">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <ShoppingBag className="w-10 h-10 text-steel/50 mb-3" />
              <p className="text-ink font-medium">No products added yet</p>
              <p className="text-sm text-steel mt-1 max-w-xs">
                Browse the catalogue and add products you&apos;d like to enquire about.
              </p>
              <Link
                href="/products"
                onClick={closeCart}
                className="mt-5 text-sm text-rust font-medium hover:text-rust-dark"
              >
                Explore Products
              </Link>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.productId} className="flex items-center gap-3 border border-line rounded-sm p-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-ink truncate">{item.name}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-line rounded-sm text-ink hover:border-rust hover:text-rust"
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-8 text-center font-mono text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-line rounded-sm text-ink hover:border-rust hover:text-rust"
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.productId)}
                    className="p-2 text-steel hover:text-rust"
                    aria-label={`Remove ${item.name}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}

          {items.length > 0 && (
            <div className="mt-6 space-y-3">
              <button onClick={clearCart} className="text-xs text-steel hover:text-rust underline">
                Clear all
              </button>

              <div>
                <label className="block text-xs font-medium text-steel mb-1" htmlFor="cart-name">
                  Your Name
                </label>
                <input
                  id="cart-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full border border-line rounded-sm px-3 py-2 text-sm bg-paper focus:outline-none focus-visible:outline-2"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-steel mb-1" htmlFor="cart-phone">
                  Phone Number
                </label>
                <input
                  id="cart-phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  type="tel"
                  className="w-full border border-line rounded-sm px-3 py-2 text-sm bg-paper focus:outline-none focus-visible:outline-2"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-steel mb-1" htmlFor="cart-note">
                  Message (optional)
                </label>
                <textarea
                  id="cart-note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Any additional details"
                  rows={3}
                  className="w-full border border-line rounded-sm px-3 py-2 text-sm bg-paper focus:outline-none focus-visible:outline-2"
                />
              </div>
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="px-5 py-4 border-t border-line">
            <Button
              variant="primary"
              size="lg"
              className="w-full"
              onClick={() => window.open(whatsappUrl, "_blank")}
            >
              <MessageCircle className="w-4 h-4" />
              Send Enquiry on WhatsApp
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
