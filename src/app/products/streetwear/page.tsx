import type { Metadata } from "next";
import { StreetwearPage } from "@/components/site/pages/products";

export const metadata: Metadata = {
  title: "Streetwear Manufacturing | Orvanta Apparel",
  description:
    "Heavyweight hoodies, boxy tees, joggers, cargos and jackets manufactured to your spec. Custom fabrics, washing, embroidery and screen print under one roof. MOQ from 30 pieces.",
  alternates: { canonical: "/products/streetwear" },
};

export default function Page() {
  return <StreetwearPage />;
}
