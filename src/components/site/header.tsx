"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { Logo } from "./ui";
import { CONTACT, IMG } from "./data";

const PRODUCT_LINKS = [
  {
    name: "Streetwear",
    href: "/products/streetwear",
    desc: "Hoodies, tees, joggers, cargos, jackets",
    img: IMG.streetCard,
  },
  {
    name: "Sportswear",
    href: "/products/sportswear",
    desc: "Sublimated kits for every sport",
    img: IMG.sportCard,
  },
  {
    name: "Activewear",
    href: "/products/activewear",
    desc: "Leggings, bras, performance tops",
    img: IMG.activeCard,
  },
];

const SERVICE_LINKS = [
  { name: "Private Label", href: "/services" },
  { name: "Cut & Sew", href: "/services" },
  { name: "Screen Printing", href: "/services" },
  { name: "Embroidery", href: "/services" },
  { name: "DTG Printing", href: "/services" },
  { name: "Dye Sublimation", href: "/services" },
];

export function Header() {
  const route = usePathname() || "/";
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close menus when the route changes (adjust during render, no effect needed) */
  const [prevRoute, setPrevRoute] = useState(route);
  if (route !== prevRoute) {
    setPrevRoute(route);
    setMobileOpen(false);
    setOpenMenu(null);
  }

  const isActive = (prefix: string) => route.startsWith(prefix);

  return (
    <header className="sticky top-0 z-50">
      {/* top strip */}
      <div className="hidden md:block bg-coal text-cream/80 text-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="font-semibold tracking-wide">CUSTOM OEM / ODM FACTORY</span>
            <span className="hidden lg:inline font-semibold tracking-wide">MOQ FROM 10 PIECES</span>
            <span className="hidden lg:inline font-semibold tracking-wide">WORLDWIDE SHIPPING</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-1.5 hover:text-rust transition-colors"
            >
              <Mail className="h-3.5 w-3.5" /> {CONTACT.email}
            </a>
            <a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-rust transition-colors"
            >
              <Phone className="h-3.5 w-3.5" /> {CONTACT.whatsapp}
            </a>
          </div>
        </div>
      </div>

      {/* main bar */}
      <div
        className={`bg-cream/95 backdrop-blur border-b transition-shadow ${
          scrolled ? "shadow-[0_6px_24px_rgba(28,23,18,0.08)] border-border" : "border-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-[68px] flex items-center justify-between gap-4">
          <Link href="/" aria-label="Orvanta Apparel home">
            <Logo />
          </Link>

          {/* desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
            <NavLink href="/" active={route === "/"}>
              Home
            </NavLink>

            {/* products dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("products")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                className={`nav-btn inline-flex items-center gap-1 rounded-md px-3.5 py-2 text-sm font-bold transition-colors ${
                  isActive("/products") ? "text-rust" : "text-foreground hover:text-rust"
                }`}
                aria-expanded={openMenu === "products"}
              >
                Products <ChevronDown className="h-4 w-4 transition-transform" style={{ transform: openMenu === "products" ? "rotate(180deg)" : undefined }} />
              </button>
              {openMenu === "products" && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3 w-[560px]">
                  <div className="rounded-xl border border-border bg-card shadow-xl p-3 grid grid-cols-[1fr_200px] gap-3">
                    <div>
                      {PRODUCT_LINKS.map((p) => (
                        <Link
                          key={p.name}
                          href={p.href}
                          className="block rounded-lg px-4 py-3 hover:bg-secondary transition-colors"
                        >
                          <span className="flex items-center gap-1.5 text-sm font-bold">
                            {p.name} <ArrowRight className="h-3.5 w-3.5 text-rust" />
                          </span>
                          <span className="mt-0.5 block text-xs text-muted-foreground">{p.desc}</span>
                        </Link>
                      ))}
                      <Link
                        href="/products"
                        className="block rounded-lg px-4 py-2.5 text-xs font-bold tracking-wide uppercase text-rust hover:bg-secondary transition-colors"
                      >
                        View all products
                      </Link>
                    </div>
                    <div className="rounded-lg overflow-hidden relative">
                      <img src={IMG.streetCard} alt="Streetwear hoodie produced by Orvanta" className="h-full w-full object-cover" />
                      <span className="absolute bottom-2 left-2 rounded bg-coal/80 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-cream">
                        Made to your spec
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("services")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                className={`inline-flex items-center gap-1 rounded-md px-3.5 py-2 text-sm font-bold transition-colors ${
                  isActive("/services") ? "text-rust" : "text-foreground hover:text-rust"
                }`}
                aria-expanded={openMenu === "services"}
              >
                Services <ChevronDown className="h-4 w-4 transition-transform" style={{ transform: openMenu === "services" ? "rotate(180deg)" : undefined }} />
              </button>
              {openMenu === "services" && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3 w-[280px]">
                  <div className="rounded-xl border border-border bg-card shadow-xl p-2">
                    {SERVICE_LINKS.map((s) => (
                      <Link
                        key={s.name}
                        href={s.href}
                        className="block rounded-lg px-4 py-2.5 text-sm font-semibold hover:bg-secondary hover:text-rust transition-colors"
                      >
                        {s.name}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="block rounded-lg px-4 py-2.5 text-xs font-bold tracking-wide uppercase text-rust hover:bg-secondary transition-colors"
                    >
                      All 12 services
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <NavLink href="/our-work" active={isActive("/our-work")}>
              Our Work
            </NavLink>
            <NavLink href="/about" active={isActive("/about")}>
              About Us
            </NavLink>
            <NavLink href="/faq" active={isActive("/faq")}>
              FAQ
            </NavLink>
            <NavLink href="/contact" active={isActive("/contact")}>
              Contact
            </NavLink>
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-rust px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-rust-deep hover:translate-y-[-1px]"
            >
              Get a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* mobile toggle */}
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-secondary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-cream max-h-[calc(100vh-68px)] overflow-y-auto nice-scroll">
            <nav className="px-4 py-4 space-y-1" aria-label="Mobile">
              <MobileLink href="/" route={route}>
                Home
              </MobileLink>

              <MobileAccordion
                label="Products"
                open={mobileSection === "products"}
                onToggle={() => setMobileSection(mobileSection === "products" ? null : "products")}
              >
                <MobileLink href="/products" route={route} sub>
                  All Products
                </MobileLink>
                {PRODUCT_LINKS.map((p) => (
                  <MobileLink key={p.name} href={p.href} route={route} sub>
                    {p.name}
                  </MobileLink>
                ))}
              </MobileAccordion>

              <MobileAccordion
                label="Services"
                open={mobileSection === "services"}
                onToggle={() => setMobileSection(mobileSection === "services" ? null : "services")}
              >
                <MobileLink href="/services" route={route} sub>
                  All Services
                </MobileLink>
                {SERVICE_LINKS.map((s) => (
                  <MobileLink key={s.name} href={s.href} route={route} sub>
                    {s.name}
                  </MobileLink>
                ))}
              </MobileAccordion>

              <MobileLink href="/our-work" route={route}>
                Our Work
              </MobileLink>
              <MobileLink href="/about" route={route}>
                About Us
              </MobileLink>
              <MobileLink href="/faq" route={route}>
                FAQ
              </MobileLink>
              <MobileLink href="/contact" route={route}>
                Contact
              </MobileLink>

              <div className="pt-3 pb-2 space-y-3">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 rounded-md bg-rust px-5 py-3 text-sm font-bold text-white"
                >
                  Get a Quote <ArrowRight className="h-4 w-4" />
                </Link>
                <div className="rounded-lg bg-secondary p-4 space-y-2 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-rust" /> Faisalabad, Pakistan
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-rust" /> {CONTACT.hours}
                  </p>
                  <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:text-rust">
                    <Mail className="h-4 w-4 text-rust" /> {CONTACT.email}
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`rounded-md px-3.5 py-2 text-sm font-bold transition-colors ${
        active ? "text-rust" : "text-foreground hover:text-rust"
      }`}
    >
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  route,
  sub,
  children,
}: {
  href: string;
  route: string;
  sub?: boolean;
  children: React.ReactNode;
}) {
  const active = route === href.replace("#", "");
  return (
    <Link
      href={href}
      className={`block rounded-md px-4 py-2.5 text-sm font-bold transition-colors ${
        active ? "text-rust bg-secondary" : "text-foreground"
      } ${sub ? "ml-3 text-[13px] font-semibold" : ""}`}
    >
      {children}
    </Link>
  );
}

function MobileAccordion({
  label,
  open,
  onToggle,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between rounded-md px-4 py-2.5 text-sm font-bold text-foreground"
        aria-expanded={open}
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="space-y-0.5 pb-1">{children}</div>}
    </div>
  );
}
