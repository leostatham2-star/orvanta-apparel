import type { Metadata } from "next";
import { FaqPage } from "@/components/site/pages/faq";

export const metadata: Metadata = {
  title: "FAQ | Orvanta Apparel",
  description:
    "Answers on MOQs, sampling, lead times, fabrics, decoration methods, private label options, shipping and payment terms for custom clothing manufacturing at Orvanta Apparel.",
  alternates: { canonical: "/faq" },
};

export default function Page() {
  return <FaqPage />;
}
