import type { Metadata } from "next";
import { PrivacyPage } from "@/components/site/pages/faq";

export const metadata: Metadata = {
  title: "Privacy Policy | Orvanta Apparel",
  description:
    "How Orvanta Apparel collects, uses and protects the information you share when requesting quotes, sampling or production through our website.",
  alternates: { canonical: "/privacy-policy" },
};

export default function Page() {
  return <PrivacyPage />;
}
