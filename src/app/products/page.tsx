import type { Metadata } from "next";
import { ProductsHubPage } from "@/components/site/pages/products";

export const metadata: Metadata = {
  title: "Products | Orvanta Apparel",
  description:
    "What we manufacture: custom streetwear, sublimated sportswear and teamwear, and performance activewear. Every style cut and sewn to your tech pack, with MOQ from 10 pieces.",
  alternates: { canonical: "/products" },
};

export default function Page() {
  return <ProductsHubPage />;
}
