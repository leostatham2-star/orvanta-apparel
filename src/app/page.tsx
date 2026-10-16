import type { Metadata } from "next";
import { HomePage } from "@/components/site/pages/home";

export const metadata: Metadata = {
  title: "Orvanta Apparel | Custom Clothing Manufacturer & OEM / ODM Factory",
  description:
    "Orvanta Apparel is a custom clothing manufacturer producing streetwear, sportswear and activewear to your designs. Low MOQ from 10 pieces, full private label, in house cut & sew and worldwide shipping.",
  alternates: { canonical: "/" },
};

export default function Page() {
  return <HomePage />;
}
