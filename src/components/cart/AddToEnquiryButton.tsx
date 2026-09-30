"use client";

import { useState } from "react";
import { Check, ShoppingBag } from "lucide-react";
import { useEnquiryCart } from "@/components/cart/EnquiryCartContext";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/Button";

export function AddToEnquiryButton({
  product,
  quantity = 1,
  variant = "ghost",
  size = "md",
  className = "",
}: {
  product: Product;
  quantity?: number;
  variant?: "primary" | "secondary" | "ghost" | "outline-light";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const { addItem } = useEnquiryCart();
  const [added, setAdded] = useState(false);

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={() => {
        addItem(product, quantity);
        setAdded(true);
        setTimeout(() => setAdded(false), 1600);
      }}
    >
      {added ? (
        <>
          <Check className="w-4 h-4" />
          Added
        </>
      ) : (
        <>
          <ShoppingBag className="w-4 h-4" />
          Add to Enquiry
        </>
      )}
    </Button>
  );
}
