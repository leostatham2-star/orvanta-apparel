import type { Metadata } from "next";
import { ContactPage } from "@/components/site/pages/contact";

export const metadata: Metadata = {
  title: "Contact & Quote Request | Orvanta Apparel",
  description:
    "Send your designs or tech pack and get costing, fabric options and lead times within 24 hours. Reach us by form, email or WhatsApp for custom clothing manufacturing quotes.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return <ContactPage />;
}
