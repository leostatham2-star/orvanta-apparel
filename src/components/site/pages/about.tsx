"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { PageHero, Reveal, SectionHeading, CTABand } from "../ui";
import { IMG, CONTACT } from "../data";

const FACTS = [
  { value: "2016", label: "Founded with 8 machines" },
  { value: "120+", label: "Machines across 3 floors" },
  { value: "180+", label: "Brands produced for" },
  { value: "230+", label: "People on the team" },
];

const VALUES = [
  {
    title: "Say What We Do, Then Do It",
    body: "Quotes are firm, lead times are real and problems get flagged early, not after your deadline has passed. Factories that overpromise are the reason brands get nervous about offshore production, and we would rather lose an order than be that factory.",
  },
  {
    title: "Small Brands Get the Same Floor",
    body: "A 30 piece order runs through the same cutting tables, the same QC checklist and the same finishing standards as a 2,000 piece program. The only thing that changes is the box size on the packing table.",
  },
  {
    title: "Protect What Is Yours",
    body: "Your patterns, your samples, your customer lists. Nothing leaves our building, nothing gets shown to other clients and staff sign confidentiality terms as part of their employment.",
  },
];

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Orvanta Apparel"
        title="A Factory That Thinks Like a Partner"
        intro="We started in 2016 with eight machines and one rule, make what the customer actually asked for. Nearly a decade later that rule still runs the place."
        img={IMG.teamWorker}
      />

      {/* story */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="From 8 Machines to 3 Floors"
            />
            <Reveal delay={0.1}>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Orvanta started because our founder spent years watching small
                  brands get quoted crazy minimums and longer lead times by big
                  factories that had no reason to care. The idea was simple, build
                  a factory where a first time founder with 30 pieces gets treated
                  exactly like an established label with 3,000.
                </p>
                <p>
                  Today we run three production floors in Faisalabad, the textile
                  heart of Pakistan. Cutting, stitching, printing, embroidery,
                  washing and packing all sit under one roof, handled by a team of
                  over 230 people. Most of our supervisors have been with us since
                  the early days, and that shows in the consistency of what ships.
                </p>
                <p>
                  We are not a trading company. When you email us at 9pm, someone
                  who can physically walk onto the production floor reads it. That
                  is the whole difference, and it is why 96 percent of our clients
                  come back for a second order.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
                <img
                  src={IMG.cutting}
                  alt="Cutting floor at Orvanta Apparel"
                  className="h-56 w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden rounded-2xl border border-border shadow-sm translate-y-6">
                <img
                  src={IMG.stitching}
                  alt="Stitching detail at Orvanta Apparel"
                  className="h-56 w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden rounded-2xl border border-border shadow-sm -translate-y-2">
                <img
                  src={IMG.fabricStack}
                  alt="Fabric library at Orvanta Apparel"
                  className="h-44 w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden rounded-2xl border border-border shadow-sm translate-y-4">
                <img
                  src={IMG.packing}
                  alt="Order packing at Orvanta Apparel"
                  className="h-44 w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* facts band */}
      <section className="py-14 bg-coal text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
            {FACTS.map((f, i) => (
              <Reveal key={f.label} delay={i * 0.06}>
                <div>
                  <dd className="font-display text-4xl font-extrabold text-cream">
                    {f.value}
                  </dd>
                  <dt className="mt-1 block text-sm text-cream/65">{f.label}</dt>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* values */}
      <section className="py-16 sm:py-24 bg-cream-deep/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How We Operate"
            title="Three Rules We Don't Bend"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-sm">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-rust/10">
                    <Check className="h-5 w-5 text-rust" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-extrabold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mt-10 text-center text-sm text-muted-foreground">
              Based in {CONTACT.factory.replace("Plot 214, Khuddian Wala, ", "")} · Est. {CONTACT.est} ·{" "}
              <Link href="/contact" className="font-bold text-rust hover:underline">
                Come see the floor on a video call
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Let's See If We're a Fit"
        body="Send us your project and judge us on the reply. Fast, specific and honest, the same way we run production."
      />
    </>
  );
}
