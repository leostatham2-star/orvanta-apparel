import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Orvanta Apparel",
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-coal text-cream">
      <div className="absolute inset-0 dot-grid opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-36 text-center">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-rust">
          Error 404
        </p>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
          This Stitch Came Loose
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-cream/75">
          The page you are looking for is not on the rack. It may have moved or
          the address may be off by a letter. Let us get you back to something
          useful.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-rust px-7 py-3.5 text-sm font-bold text-white transition-transform hover:translate-y-[-2px]"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md border-2 border-cream/50 px-7 py-3 text-sm font-bold text-cream transition-colors hover:bg-cream/10"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
