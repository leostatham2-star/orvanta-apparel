"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Logo } from "./ui";
import { CONTACT } from "./data";

const STREETWEAR_LINKS = [
  { name: "Streetwear Hub", href: "/products/streetwear" },
  { name: "Hoodies", href: "/products/streetwear" },
  { name: "T-Shirts", href: "/products/streetwear" },
  { name: "Polo Shirts", href: "/products/streetwear" },
  { name: "Cargo Pants", href: "/products/streetwear" },
];

const SERVICES_LINKS = [
  { name: "OEM Manufacturing", href: "/services" },
  { name: "Private Label", href: "/services" },
  { name: "Cut & Sew", href: "/services" },
  { name: "Embroidery", href: "/services" },
  { name: "DTG Printing", href: "/services" },
];

const COMPANY_LINKS = [
  { name: "Our Work", href: "/our-work" },
  { name: "About Us", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-coal text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* brand col */}
          <div>
            <Logo variant="light" />
            <p className="mt-3 text-xs font-semibold tracking-[0.22em] uppercase text-cream/50">
              Worldwide OEM / ODM Apparel Factory
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
              Orvanta Apparel is a custom clothing manufacturer based in Faisalabad,
              Pakistan. We produce private label streetwear, sportswear and
              activewear strictly to your spec and ship it anywhere in the world.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Sportswear MOQ 10", "Streetwear MOQ 30", "Cut & Sew", "Worldwide Shipping"].map(
                (chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-cream/75"
                  >
                    {chip}
                  </span>
                )
              )}
            </div>
          </div>

          {/* links cols */}
          <div>
            <h3 className="font-display text-sm font-extrabold uppercase tracking-[0.18em] text-cream">
              Streetwear
            </h3>
            <ul className="mt-4 space-y-2.5">
              {STREETWEAR_LINKS.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="text-sm text-cream/65 hover:text-rust transition-colors"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-extrabold uppercase tracking-[0.18em] text-cream">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES_LINKS.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="text-sm text-cream/65 hover:text-rust transition-colors"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-7 font-display text-sm font-extrabold uppercase tracking-[0.18em] text-cream">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {COMPANY_LINKS.slice(0, 4).map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="text-sm text-cream/65 hover:text-rust transition-colors"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* quote col */}
          <div>
            <h3 className="font-display text-sm font-extrabold uppercase tracking-[0.18em] text-cream">
              Get a Quote
            </h3>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-rust" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-cream/75 hover:text-rust transition-colors break-all"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-rust" />
                <a
                  href={CONTACT.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/75 hover:text-rust transition-colors"
                >
                  {CONTACT.whatsapp}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-rust" />
                <span className="text-cream/75">
                  Faisalabad, Pakistan. Serving USA, UK and EU brands
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-rust" />
                <span className="text-cream/75">{CONTACT.hours}</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-md bg-rust px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-rust-deep"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-cream/55">
            © {new Date().getFullYear()} Orvanta Apparel. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5 text-xs">
            <Link
              href="/privacy-policy"
              className="text-cream/55 hover:text-rust transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-cream/25">·</span>
            <Link
              href="/contact"
              className="text-cream/55 hover:text-rust transition-colors"
            >
              Contact
            </Link>
            <span className="text-cream/25">·</span>
            {/* Studio credit: clickable, URL intentionally not displayed */}
            <a
              href="https://m-webcraftstudio.space-z.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/55 hover:text-rust transition-colors"
            >
              Designed By M-Webcraft Studio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
