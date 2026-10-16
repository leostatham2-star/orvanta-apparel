"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero, Reveal, SectionHeading, CTABand } from "../ui";
import { SERVICES, HOW_IT_WORKS, IMG, SERVICE_CHIPS } from "../data";

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="In House Capabilities"
        title="Everything Your Garment Needs"
        intro="Twelve services, one factory, one invoice. Every decoration and branding process happens on the same floor where your garments are sewn, which is why our quality stays consistent."
        img={IMG.printShop}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.06}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-lg hover:translate-y-[-3px]">
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-extrabold">{s.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                    <Link
                      href="/contact"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-rust hover:gap-2.5 transition-all"
                    >
                      Request this service <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* how it works */}
      <section className="py-16 sm:py-24 bg-coal text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How It Works"
            title="From Idea to Delivered Bulk"
            intro="The same four steps run for a 10 piece team order and a 2,000 piece program. Nothing changes except the volume."
            dark
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map((h, i) => (
              <Reveal key={h.step} delay={i * 0.07}>
                <div className="relative h-full rounded-2xl border border-white/10 bg-coal-soft/80 p-6">
                  <span className="font-display text-4xl font-extrabold text-rust/50">
                    {h.step}
                  </span>
                  <h3 className="mt-3 font-display text-base font-extrabold text-cream">
                    {h.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/65">{h.body}</p>
                  {i < HOW_IT_WORKS.length - 1 && (
                    <ArrowRight className="absolute -right-4 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-rust/60 lg:block" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-wrap justify-center gap-2.5">
              {SERVICE_CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-cream/70"
                >
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Need a Service Quoted?"
        body="Tell us what your garment needs, whether that is puff print on 400 GSM fleece or woven labels in six colorways. Quotes land within 24 hours."
      />
    </>
  );
}
