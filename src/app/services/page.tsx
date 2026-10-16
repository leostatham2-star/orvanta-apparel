import type { Metadata } from "next";
import { ServicesPage } from "@/components/site/pages/services";

export const metadata: Metadata = {
  title: "Services | Orvanta Apparel",
  description:
    "Twelve in house services covering the full production journey: private label, cut and sew, screen printing, embroidery, DTG, dye sublimation, pattern making, sampling and more.",
  alternates: { canonical: "/services" },
};

export default function Page() {
  return <ServicesPage />;
}
