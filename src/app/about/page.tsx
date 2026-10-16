import type { Metadata } from "next";
import { AboutPage } from "@/components/site/pages/about";

export const metadata: Metadata = {
  title: "About Us | Orvanta Apparel",
  description:
    "Meet Orvanta Apparel, a family run manufacturer in Faisalabad, Pakistan. Our factory, our people, our quality standards and how we work with startups and established labels worldwide.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return <AboutPage />;
}
