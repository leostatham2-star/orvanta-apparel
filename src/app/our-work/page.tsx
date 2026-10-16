import type { Metadata } from "next";
import { OurWorkPage } from "@/components/site/pages/work";

export const metadata: Metadata = {
  title: "Our Work | Orvanta Apparel",
  description:
    "Real production runs from the Orvanta floor: 400gsm hoodie programs, sublimated football kits, seamless leggings lines and more, delivered to brands across the USA, UK and EU.",
  alternates: { canonical: "/our-work" },
};

export default function Page() {
  return <OurWorkPage />;
}
