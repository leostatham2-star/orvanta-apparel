import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Orvanta Apparel | Custom Clothing Manufacturer & OEM / ODM Factory",
  description:
    "Orvanta Apparel is a custom clothing manufacturer producing streetwear, sportswear and activewear to your designs. Low MOQ from 10 pieces, full private label, in house cut & sew and worldwide shipping.",
  keywords: [
    "custom clothing manufacturer",
    "OEM apparel factory",
    "ODM clothing",
    "private label clothing",
    "streetwear manufacturer",
    "sportswear manufacturer",
    "activewear manufacturer",
    "low MOQ clothing manufacturer",
  ],
  authors: [{ name: "Orvanta Apparel" }],
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%231C1712'/%3E%3Ccircle cx='32' cy='32' r='15' fill='none' stroke='%23C2451E' stroke-width='6' stroke-dasharray='9 7' stroke-linecap='round'/%3E%3C/svg%3E",
  },
  openGraph: {
    title: "Orvanta Apparel | Custom Clothing Manufacturer",
    description:
      "Custom streetwear, sportswear and activewear manufactured to your spec. MOQ from 10 pieces, full private label, worldwide shipping.",
    siteName: "Orvanta Apparel",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${archivo.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
