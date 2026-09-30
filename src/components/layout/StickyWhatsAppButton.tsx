"use client";

import { MessageCircle } from "lucide-react";
import { buildGeneralEnquiryMessage, buildWhatsAppUrl } from "@/lib/whatsapp";

export function StickyWhatsAppButton() {
  return (
    <a
      href={buildWhatsAppUrl(buildGeneralEnquiryMessage())}
      target="_blank"
      rel="noopener noreferrer"
      className="lg:hidden fixed bottom-4 right-4 z-30 inline-flex items-center gap-2 bg-rust text-paper px-4 py-3 rounded-full shadow-lg shadow-ink/20 text-sm font-medium"
      aria-label="Enquire on WhatsApp"
    >
      <MessageCircle className="w-[18px] h-[18px]" />
      Enquire on WhatsApp
    </a>
  );
}
