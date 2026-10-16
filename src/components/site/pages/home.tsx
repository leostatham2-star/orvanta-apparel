"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, SectionHeading, Chip, CTABand } from "../ui";
import {
  IMG,
  STATS,
  SPECS,
  PROCESS,
  WHY,
  AUDIENCES,
  SERVICE_CHIPS,
  CATEGORIES,
  FAQS,
  CONTACT,
} from "../data";

export function HomePage() {
  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-coal text-cream">
        <img
          src={IMG.heroBg}
          alt="Orvanta Apparel sewing floor with industrial machines"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-coal via-coal/90 to-coal/30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-xs font-bold tracking-[0.3em] uppercase text-rust"
          >
            Custom OEM / ODM Apparel Factory · Faisalabad, Pakistan
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.07 }}
            className="mt-5 max-w-3xl font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight"
          >
            Custom Clothing Manufacturer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14 }}
            className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-cream/80"
          >
            Orvanta Apparel makes streetwear, sportswear and activewear strictly
            to your designs. You bring the idea, the tech pack or even a rough
            sketch. We handle sourcing, patterns, sampling, bulk production and
            shipping, all under one roof, with MOQ starting at{" "}
            <strong className="text-cream">10 pieces for teamwear</strong> and{" "}
            <strong className="text-cream">30 for streetwear</strong>.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.21 }}
            className="mt-9 flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-rust px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-rust-deep hover:translate-y-[-2px]"
            >
              Get a Production Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-cream/40 px-7 py-3 text-sm font-bold text-cream transition-colors hover:bg-cream/10"
            >
              Send Your Tech Pack
            </Link>
          </motion.div>

          {/* stats */}
          <motion.dl
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-4"
          >
            {STATS.map((s) => (
              <div key={s.value} className="bg-coal/70 px-5 py-5">
                <dd className="font-display text-2xl sm:text-3xl font-extrabold text-cream">
                  {s.value}
                </dd>
                <dt className="mt-1 block text-xs leading-snug text-cream/60">
                  {s.label}
                </dt>
              </div>
            ))}
          </motion.dl>
        </div>
      </section>

      {/* ── 2. WHAT IT MEANS ────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <SectionHeading
              eyebrow="What It Means"
              title="What Is a Custom Clothing Manufacturer?"
            />
            <Reveal delay={0.1}>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                A custom clothing manufacturer builds garments to your designs,
                not ours. Your patterns, your fabrics, your labels. You own the
                finished product completely, we just happen to be very good at
                making it.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                That is what separates full package OEM production from buying
                blanks and printing a logo on them. Nothing generic leaves our
                floor. Every stitch is checked against your spec before anything
                ships, and your styles never run for another client. Ever.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="relative">
            <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
              <img
                src={IMG.whatMeans}
                alt="Hands sewing a garment at the Orvanta factory"
                className="h-[320px] sm:h-[420px] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden sm:block rounded-xl bg-rust px-6 py-4 text-white shadow-lg">
              <p className="font-display text-2xl font-extrabold">Est. {CONTACT.est}</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
                Same floor, same team
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 3. THREE CATEGORIES ─────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-cream-deep/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Manufacture"
            title="Three Categories, One Factory"
            intro="Every garment is made to your spec, from a 10 piece minimum on teamwear to 30 on streetwear and activewear. Pick a lane or run all three."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {CATEGORIES.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.08}>
                <Link
                  href={`/products/${c.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-xl hover:translate-y-[-4px]"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={c.img}
                      alt={`${c.name} manufactured by Orvanta Apparel`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 rounded bg-coal/85 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-cream">
                      {c.moq}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-extrabold">{c.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {c.desc}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-rust">
                      Explore {c.name}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. ONE STOP SHOP ────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="All Under One Roof"
            title="One Stop Shop"
            intro="Printing, embroidery, washing, labels, tags and packing all happen inside the same building where your garments get sewn. No middlemen, no chasing three different vendors, no finger pointing when something needs fixing. One team, one point of contact, one invoice."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {SERVICE_CHIPS.map((chip, i) => (
              <Reveal key={chip} delay={i * 0.03}>
                <Chip>{chip}</Chip>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-rust hover:gap-3 transition-all"
            >
              See all 12 services in detail <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── 5. LOWER INVENTORY RISK ─────────────────────────── */}
      <section className="py-16 sm:py-24 bg-cream-deep/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
          <Reveal className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-rust p-7 text-white shadow-md">
                <p className="font-display text-4xl font-extrabold">30</p>
                <p className="mt-1 text-sm font-semibold text-white/85">
                  pieces to launch a streetwear style
                </p>
              </div>
              <div className="rounded-2xl bg-coal p-7 text-cream shadow-md">
                <p className="font-display text-4xl font-extrabold">10</p>
                <p className="mt-1 text-sm font-semibold text-cream/70">
                  pieces to kit out a full team
                </p>
              </div>
              <div className="col-span-2 rounded-2xl border border-border bg-card p-7 shadow-sm">
                <p className="font-display text-4xl font-extrabold text-foreground">
                  0<span className="text-rust">%</span>
                </p>
                <p className="mt-1 text-sm font-semibold text-muted-foreground">
                  of your capital tied up in deadstock nobody ordered
                </p>
              </div>
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Start Small, Scale Smart"
              title="Lower Your Inventory Risk"
            />
            <Reveal delay={0.1}>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Big factories will ask you to commit to 500 pieces per style
                before they even open your email. We start at 10 for teamwear
                and 30 for streetwear. That means you can test a design properly
                before you bet your budget on it.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Launch a drop, see what your customers actually buy, then scale
                the winners. Less money locked up in stock, less deadstock
                sitting in a warehouse. It is smarter business, and honestly it
                is how most of our best clients grew.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 6. CAPABILITIES & SPECS ─────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Hard Numbers"
            title="Custom Manufacturing Capabilities & Specs"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SPECS.map((spec, i) => (
              <Reveal key={spec.tag} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                  <span className="inline-flex rounded-md bg-secondary px-3 py-1 font-display text-xs font-extrabold tracking-[0.2em] text-rust">
                    {spec.tag}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-extrabold">{spec.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {spec.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. INSIDE OUR FACTORY (dark band) ───────────────── */}
      <section className="relative py-16 sm:py-24 bg-coal text-cream overflow-hidden">
        <img
          src={IMG.factoryBand}
          alt="Cutting table at the Orvanta factory"
          className="absolute inset-0 h-full w-full object-cover opacity-15"
          loading="lazy"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Not a Trading Company"
            title="Inside Our Factory"
            intro="Your order is cut, sewn, printed and finished on our own floor by our own team. We are happy to walk you through a video call of the production line any working day."
            dark
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07}>
                <div className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-coal-soft/80">
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded-md bg-rust font-display text-sm font-extrabold text-white">
                      {i + 1}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-base font-extrabold text-cream">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/65">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. WHY ORVANTA ──────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Brands Choose Us"
            title="Why Orvanta as Your Clothing Partner"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {WHY.map((w, i) => (
              <Reveal key={w.num} delay={i * 0.06}>
                <div className="flex h-full gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <span className="font-display text-3xl font-extrabold text-rust/40">
                    {w.num}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-extrabold">{w.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {w.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. WHO WE BUILD FOR ─────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-cream-deep/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Who We Build For"
            title="Brands & Industries We Serve"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {AUDIENCES.map((a, i) => (
              <Reveal key={a.bold} delay={i * 0.04}>
                <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-rust/10">
                    <Check className="h-4 w-4 text-rust" />
                  </span>
                  <p className="text-sm">
                    <strong className="font-bold">{a.bold}</strong>{" "}
                    <span className="text-muted-foreground">{a.rest}</span>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. FAQ ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Answers"
            title="Custom Clothing Manufacturer FAQ"
            intro="Straight answers to the questions every brand asks before its first order."
            align="center"
          />
          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="mt-10">
              {FAQS.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-display text-base font-bold hover:text-rust hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 text-center text-sm text-muted-foreground">
              Still weighing something up?{" "}
              <Link href="/faq" className="font-bold text-rust hover:underline">
                Read the full FAQ
              </Link>{" "}
              or{" "}
              <Link href="/contact" className="font-bold text-rust hover:underline">
                send us your question
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 11. CTA ─────────────────────────────────────────── */}
      <CTABand
        title="Let's Manufacture Your Line"
        body="Send your designs or tech pack and get a costing, fabric options and a lead time estimate within 24 hours. Free mockups, low MOQ and worldwide shipping."
      />
    </>
  );
}
