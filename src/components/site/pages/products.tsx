"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero, Reveal, SectionHeading, CTABand } from "../ui";
import {
  CATEGORIES,
  STREETWEAR_PRODUCTS,
  SPORTSWEAR_LIST,
  ACTIVEWEAR_PRODUCTS,
  IMG,
} from "../data";

/* ── Products hub ──────────────────────────────────────────── */
export function ProductsHubPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Make"
        title="Products Built to Your Spec"
        intro="Three categories, one factory floor. Every style runs from your tech pack or your idea, with MOQs that let small brands start and big brands scale."
        img={IMG.fabricShelves}
      >
        <div className="flex flex-wrap gap-3">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/products/${c.slug}`}
              className="inline-flex items-center gap-2 rounded-md border border-white/25 px-5 py-2.5 text-sm font-bold text-cream transition-colors hover:bg-white/10"
            >
              {c.name} <ArrowRight className="h-4 w-4 text-rust" />
            </Link>
          ))}
        </div>
      </PageHero>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Three Lanes"
            title="Pick a Category"
            intro="Streetwear for drops, sportswear for teams, activewear for training. Most of our clients end up crossing into at least two of them."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {CATEGORIES.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.08}>
                <Link
                  href={`/products/${c.slug}`}
                  className="group block h-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-xl hover:translate-y-[-4px]"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={c.img}
                      alt={`${c.name} manufactured by Orvanta`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 rounded bg-coal/85 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-cream">
                      {c.moq}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-extrabold">{c.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-rust">
                      Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}

/* ── Streetwear category page ──────────────────────────────── */
export function StreetwearPage() {
  return (
    <>
      <PageHero
        eyebrow="Streetwear · MOQ 30 Pieces"
        title="Streetwear Manufacturing"
        intro="Heavyweight fleece, boxy fits and finishing that holds up after the tenth wash. If you can sketch it, we can build it, from 300 GSM hoodies to fully custom varsity jackets."
        img={IMG.streetCard}
      />
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Range"
            title="What We Build"
            intro="Eight core styles, each one cut to your pattern and decorated in house. Fabric weights, washes and trims are all your call."
          />
          <div className="mt-12 space-y-14">
            {STREETWEAR_PRODUCTS.map((p, i) => (
              <Reveal key={p.name} delay={0.03}>
                <div
                  className={`grid gap-8 items-center lg:grid-cols-2 ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
                    <img
                      src={p.img}
                      alt={`${p.name} manufactured by Orvanta Apparel`}
                      className="h-[300px] sm:h-[380px] w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <span className="font-display text-sm font-extrabold tracking-[0.2em] text-rust">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold">
                      {p.name}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">{p.body}</p>
                    <ul className="mt-5 space-y-2.5">
                      {p.specs.map((s) => (
                        <li key={s} className="flex items-start gap-2.5 text-sm">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-rust" />
                          <span className="text-foreground/85">{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTABand
        title="Got a Streetwear Design in Mind?"
        body="Send the sketch, the tech pack or a photo of the vibe you want. We will come back with mockups, fabric options and costing within 24 hours."
      />
    </>
  );
}

/* ── Sportswear category page ──────────────────────────────── */
export function SportswearPage() {
  return (
    <>
      <PageHero
        eyebrow="Sportswear · MOQ 10 Pieces"
        title="Teamwear & Sportswear Manufacturing"
        intro="Fully sublimated kits and cut & sew uniforms for clubs, schools, leagues and teamwear resellers. Ten pieces per design means even a single team can order."
        img={IMG.sportCard}
      />
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Every Sport Covered"
            title="Kits We Produce"
            intro="All garments are produced in moisture wicking poly interlock and mesh, decorated by dye sublimation or cut & sew panels that never crack or peel."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SPORTSWEAR_LIST.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.03}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                  <h3 className="font-display text-lg font-extrabold">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* sublimation explainer */}
      <section className="py-16 sm:py-24 bg-cream-deep/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-border shadow-md">
              <img
                src={IMG.basketballKit}
                alt="Fully sublimated basketball uniform produced by Orvanta"
                className="h-[320px] sm:h-[420px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Why Sublimation"
              title="Full Color, Zero Limits"
            />
            <Reveal delay={0.1}>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Dye sublimation prints your artwork straight into the fabric, so
                logos, numbers, sponsor placements and all over patterns become
                part of the garment itself. There is no texture you can feel, no
                cracking after ten washes and no color limit to worry about.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Unlimited colors and gradients per kit",
                  "Names and numbers included at no extra setup",
                  "Lightweight feel, ideal for performance fabrics",
                  "MOQ 10 pieces per design, mixed sizes allowed",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-rust" />
                    <span className="text-foreground/85">{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
      <CTABand
        title="Kit Out Your Whole Team"
        body="Send your club crest, colors and player list. We return mockups of every jersey position plus a per kit price within 24 hours."
      />
    </>
  );
}

/* ── Activewear category page ──────────────────────────────── */
export function ActivewearPage() {
  return (
    <>
      <PageHero
        eyebrow="Activewear · MOQ 30 Pieces"
        title="Activewear Manufacturing"
        intro="Poly spandex knits, compressive fits and flatlock seams that sit flat under a barbell. Built for fitness brands that actually train, not just pose."
        img={IMG.activeCard}
      />
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Range"
            title="What We Build"
            intro="Every piece is cut to your pattern in certified performance knits, with squat proof coverage and waistbands that stay put."
          />
          <div className="mt-12 space-y-14">
            {ACTIVEWEAR_PRODUCTS.map((p, i) => (
              <Reveal key={p.name} delay={0.03}>
                <div
                  className={`grid gap-8 items-center lg:grid-cols-2 ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
                    <img
                      src={p.img}
                      alt={`${p.name} manufactured by Orvanta Apparel`}
                      className="h-[300px] sm:h-[380px] w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <span className="font-display text-sm font-extrabold tracking-[0.2em] text-rust">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold">
                      {p.name}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">{p.body}</p>
                    <ul className="mt-5 space-y-2.5">
                      {p.specs.map((s) => (
                        <li key={s} className="flex items-start gap-2.5 text-sm">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-rust" />
                          <span className="text-foreground/85">{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTABand
        title="Launch Your Activewear Line"
        body="Send your fits and fabric references. We will match them, quote them and sample them, starting from 30 pieces per style."
      />
    </>
  );
}
