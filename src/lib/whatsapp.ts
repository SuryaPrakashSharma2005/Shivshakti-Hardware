import { business } from "@/data/business";
import { EnquiryItem } from "@/types/product";

export function buildWhatsAppUrl(message: string, phone: string = business.contact.whatsapp) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}

export function buildGeneralEnquiryMessage() {
  return `Hello ${business.name}, I would like to enquire about your products. Please share more details.`;
}

export function buildProductEnquiryMessage(productName: string) {
  return `Hello ${business.name}, I would like to enquire about "${productName}". Please share availability and latest pricing.`;
}

export function buildCartEnquiryMessage(
  items: EnquiryItem[],
  customerName: string,
  phone: string,
  note: string
) {
  const lines = items.map(
    (item, index) => `${index + 1}. ${item.name} — ${item.quantity} unit${item.quantity > 1 ? "s" : ""}`
  );

  const parts = [
    `Hello ${business.name},`,
    "",
    "I would like to enquire about the following products:",
    "",
    ...lines,
    "",
    `Customer Name: ${customerName || "-"}`,
    `Phone: ${phone || "-"}`,
    `Message: ${note || "-"}`,
    "",
    "Please share availability and latest pricing.",
  ];

  return parts.join("\n");
}
