import type { Metadata } from "next";
import { ActivewearPage } from "@/components/site/pages/products";

export const metadata: Metadata = {
  title: "Activewear Manufacturing | Orvanta Apparel",
  description:
    "Leggings, sports bras, performance tops and training shorts in poly spandex knits. Flatlock seams, squat proof fabrics and full private label branding. MOQ from 30 pieces.",
  alternates: { canonical: "/products/activewear" },
};

export default function Page() {
  return <ActivewearPage />;
}
