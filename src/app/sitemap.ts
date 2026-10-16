import type { MetadataRoute } from "next";

/*
 * Update NEXT_PUBLIC_SITE_URL in Vercel project settings once your real
 * domain is connected. The fallback matches the default Vercel preview URL.
 */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://orvanta-apparel.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/products",
    "/products/streetwear",
    "/products/sportswear",
    "/products/activewear",
    "/services",
    "/our-work",
    "/about",
    "/contact",
    "/faq",
    "/privacy-policy",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));
}
