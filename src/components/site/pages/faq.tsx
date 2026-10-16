"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHero, Reveal, CTABand } from "../ui";
import { FAQS, IMG } from "../data";

export function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Answers First"
        title="Frequently Asked Questions"
        intro="Everything brands usually want to know before their first order with us. If your question is not here, ask it directly, we reply within a working day."
        img={IMG.cutting}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
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

          <Reveal delay={0.1}>
            <div className="mt-12 rounded-2xl border border-border bg-card p-7 text-center">
              <h2 className="font-display text-xl font-extrabold">
                Question Not Answered Here?
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Ask us anything about fabrics, lead times or pricing. No sales
                script, just straight answers from the production team.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center justify-center rounded-md bg-rust px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-rust-deep"
              >
                Ask Your Question
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}

/* ── Privacy Policy ────────────────────────────────────────── */
export function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        intro="How Orvanta Apparel collects, uses and protects the information you share with us."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
              <div>
                <h2 className="font-display text-lg font-extrabold text-foreground">
                  1. Information We Collect
                </h2>
                <p className="mt-3">
                  When you contact us for a quote or place an order, we collect the
                  details you provide directly. That usually includes your name,
                  company name, email address, phone or WhatsApp number, country
                  and the content of your inquiry such as designs, tech packs and
                  quantities. We also keep records of our communications with you
                  so nothing gets lost between conversations.
                </p>
              </div>
              <div>
                <h2 className="font-display text-lg font-extrabold text-foreground">
                  2. How We Use Your Information
                </h2>
                <p className="mt-3">
                  We use your information to quote and produce your orders, to
                  communicate with you about samples, production and shipping, and
                  to handle invoicing and logistics paperwork. Your designs and
                  technical documents are used for production purposes only. We do
                  not sell, rent or trade your personal information to anyone.
                </p>
              </div>
              <div>
                <h2 className="font-display text-lg font-extrabold text-foreground">
                  3. Design Protection
                </h2>
                <p className="mt-3">
                  Client designs, patterns, tech packs and branding materials are
                  treated as confidential property of the client. They are stored
                  securely, shared internally only with the staff who need them for
                  production, and never used for any other client or purpose. We
                  are happy to sign an NDA before you send anything sensitive.
                </p>
              </div>
              <div>
                <h2 className="font-display text-lg font-extrabold text-foreground">
                  4. Data Sharing
                </h2>
                <p className="mt-3">
                  We share the minimum information necessary with third parties who
                  help us deliver your order, such as courier companies, freight
                  forwarders and payment providers. These parties receive only what
                  they need to complete their part of the job and are bound to
                  handle it securely.
                </p>
              </div>
              <div>
                <h2 className="font-display text-lg font-extrabold text-foreground">
                  5. Cookies & Analytics
                </h2>
                <p className="mt-3">
                  This website uses basic, privacy respecting analytics to
                  understand which pages are useful to visitors. No advertising
                  trackers are installed and no profiles are built about you. You
                  can browse the entire site without accepting any cookies.
                </p>
              </div>
              <div>
                <h2 className="font-display text-lg font-extrabold text-foreground">
                  6. Data Retention
                </h2>
                <p className="mt-3">
                  We keep inquiry records for as long as needed to serve you and to
                  meet legal and tax obligations in Pakistan. If you ask us to
                  delete your personal data and no legal requirement prevents it,
                  we will do so within 30 days.
                </p>
              </div>
              <div>
                <h2 className="font-display text-lg font-extrabold text-foreground">
                  7. Your Rights
                </h2>
                <p className="mt-3">
                  You can ask us at any time for a copy of the personal data we
                  hold about you, request corrections, or ask for deletion. Email
                  us and we will action your request promptly.
                </p>
              </div>
              <div>
                <h2 className="font-display text-lg font-extrabold text-foreground">
                  8. Contact
                </h2>
                <p className="mt-3">
                  Questions about this policy can go to info@orvantaapparel.com or
                  to our factory address in Faisalabad, Pakistan. We aim to reply
                  to privacy questions within one working day.
                </p>
              </div>
              <p className="text-xs text-muted-foreground/80">Last updated: January 2026</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
