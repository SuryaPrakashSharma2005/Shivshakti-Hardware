import { ReactNode } from "react";
import { Check } from "lucide-react";

export function PriceBadge({ children }: { children: ReactNode }) {
  return <span className="font-mono text-sm text-ink">{children}</span>;
}

export function DigitalBillNote({ className = "" }: { className?: string }) {
  return (
    <p className={`inline-flex items-center gap-1.5 text-xs text-steel ${className}`}>
      <Check className="w-3.5 h-3.5 text-rust" strokeWidth={2.5} />
      Digital bill provided with your purchase
    </p>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 text-xs font-body border border-line text-steel rounded-sm">
      {children}
    </span>
  );
}
