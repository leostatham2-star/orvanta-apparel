"use client";

import Link from "next/link";
import { PageHero, Reveal, SectionHeading, CTABand } from "../ui";
import { GALLERY, IMG } from "../data";

const WORK_STATS = [
  { value: "1,200+", label: "Styles sampled since 2016" },
  { value: "40+", label: "Countries shipped to" },
  { value: "180+", label: "Brands produced for" },
  { value: "96%", label: "Clients who reorder" },
];

export function OurWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Proof, Not Promises"
        title="Our Work"
        intro="A sample of what has come off our floor recently. Client names stay private under NDA, the garments speak for themselves."
        img={IMG.teeStack}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY.map((g, i) => (
              <Reveal key={g.title} delay={(i % 3) * 0.06}>
                <figure className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-xl">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={g.img}
                      alt={g.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute bottom-3 left-3 rounded bg-coal/85 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-cream">
                      {g.tag}
                    </span>
                  </div>
                  <figcaption className="p-5">
                    <h3 className="font-display text-base font-extrabold">{g.title}</h3>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* stats band */}
      <section className="py-14 bg-rust">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
            {WORK_STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div>
                  <dd className="font-display text-4xl font-extrabold text-white">{s.value}</dd>
                  <dt className="mt-1 block text-sm font-semibold text-white/85">
                    {s.label}
                  </dt>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* note + cta */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Want References?"
            title="Talk to Brands We Work With"
            intro="Plenty of our clients are happy to share what ordering from us is like. Ask for a reference in your industry and we will connect you, no scripting involved."
            align="center"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 text-sm text-muted-foreground">
              Or jump straight to the part where your design becomes real.{" "}
              <Link href="/contact" className="font-bold text-rust hover:underline">
                Request a quote
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Your Design Could Be Next"
        body="Send us the concept and we will show you a mockup before you spend a single dollar on samples."
      />
    </>
  );
}
