import type { Metadata } from "next";
import { SportswearPage } from "@/components/site/pages/products";

export const metadata: Metadata = {
  title: "Sportswear & Teamwear Manufacturing | Orvanta Apparel",
  description:
    "Fully sublimated kits, cut and sew uniforms and fanwear for clubs, schools and leagues. Custom names, numbers and sponsor placement with low team MOQs.",
  alternates: { canonical: "/products/sportswear" },
};

export default function Page() {
  return <SportswearPage />;
}
