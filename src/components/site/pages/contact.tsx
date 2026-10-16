"use client";

import { useState, type FormEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";
import { PageHero, Reveal, CTABand } from "../ui";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CONTACT, HOW_IT_WORKS, IMG } from "../data";

const COUNTRIES = [
  "United States", "United Kingdom", "Canada", "Australia", "Germany",
  "France", "Netherlands", "Spain", "Italy", "Sweden", "Norway", "Denmark",
  "Ireland", "Belgium", "Switzerland", "Austria", "Poland", "Portugal",
  "United Arab Emirates", "Saudi Arabia", "Qatar", "Kuwait", "South Africa",
  "Nigeria", "Kenya", "Japan", "South Korea", "Singapore", "Malaysia",
  "New Zealand", "Brazil", "Mexico", "Other",
];

const CATEGORY_OPTIONS = [
  "Streetwear",
  "Sportswear / Teamwear",
  "Activewear",
  "Services only (printing, labels, etc)",
  "Not sure yet",
];

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [category, setCategory] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [sending, setSending] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    // Simulated send; wire to your CRM or email service when deploying live.
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 900);
  }

  return (
    <>
      <PageHero
        eyebrow="Worldwide OEM / ODM Factory"
        title="Let's Build Your Brand"
        intro="Send your designs or tech pack and get pricing, fabric options and lead times within 24 hours. The more detail you give us, the sharper the quote."
        img={IMG.fabricShelves}
      />

      {submitted ? (
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-xl px-4 sm:px-6 text-center">
            <Reveal>
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rust/10">
                <CheckCircle2 className="h-9 w-9 text-rust" />
              </span>
              <h2 className="mt-6 font-display text-3xl font-extrabold">
                Got it. You'll hear from us fast.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Your inquiry is with our merchandising team. Expect a reply with
                costing and next steps within one working day, usually much
                sooner. If it is urgent, message us on WhatsApp and mention your
                name.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href={CONTACT.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-rust px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-rust-deep"
                >
                  <Phone className="h-4 w-4" /> Message on WhatsApp
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-border px-7 py-3 text-sm font-bold transition-colors hover:bg-secondary"
                >
                  Send Another Inquiry
                </button>
              </div>
            </Reveal>
          </div>
        </section>
      ) : (
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            {/* form */}
            <Reveal>
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-9 shadow-sm">
                <h2 className="font-display text-2xl font-extrabold">Request a Quote</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fields marked with an asterisk are required.
                </p>
                <form className="mt-7 grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" name="firstName" placeholder="James" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" name="lastName" placeholder="Okafor" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" placeholder="you@brand.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">WhatsApp Number</Label>
                    <Input id="whatsapp" name="whatsapp" type="tel" placeholder="+1 555 000 1234" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country *</Label>
                    <Select value={country} onValueChange={setCountry} required>
                      <SelectTrigger id="country" className="w-full">
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent className="max-h-72 nice-scroll">
                        {COUNTRIES.map((c) => (
                          <SelectItem key={c} value={c}>
                            {c}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">What do you need? *</Label>
                    <Select value={category} onValueChange={setCategory} required>
                      <SelectTrigger id="category" className="w-full">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {CATEGORY_OPTIONS.map((c) => (
                          <SelectItem key={c} value={c}>
                            {c}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="details">Inquiry Details *</Label>
                    <Textarea
                      id="details"
                      name="details"
                      rows={6}
                      required
                      placeholder="Tell us about the garments, quantities, fabric if you know it, decoration and your target date. A tech pack link or a description of the design both work."
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Button
                      type="submit"
                      disabled={sending}
                      className="w-full sm:w-auto bg-rust hover:bg-rust-deep text-white font-bold rounded-md px-8 py-6 text-sm"
                    >
                      {sending ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Submit Inquiry <Send className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </Reveal>

            {/* sidebar */}
            <Reveal delay={0.1}>
              <div className="space-y-5">
                <div className="rounded-2xl bg-coal p-7 text-cream">
                  <h3 className="font-display text-lg font-extrabold">Fastest Reply</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/70">
                    WhatsApp gets answered first, usually within a couple of hours
                    during the working week.
                  </p>
                  <a
                    href={CONTACT.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-md bg-rust px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-rust-deep"
                  >
                    <Phone className="h-4 w-4" /> {CONTACT.whatsapp}
                  </a>
                </div>

                <div className="rounded-2xl border border-border bg-card p-7">
                  <h3 className="font-display text-lg font-extrabold">Get In Touch</h3>
                  <ul className="mt-4 space-y-4 text-sm">
                    <li className="flex items-start gap-3">
                      <Mail className="mt-0.5 h-4 w-4 shrink-0 text-rust" />
                      <div>
                        <p className="font-bold">Email</p>
                        <a
                          href={`mailto:${CONTACT.email}`}
                          className="text-muted-foreground hover:text-rust transition-colors break-all"
                        >
                          {CONTACT.email}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Phone className="mt-0.5 h-4 w-4 shrink-0 text-rust" />
                      <div>
                        <p className="font-bold">Call / WhatsApp</p>
                        <p className="text-muted-foreground">{CONTACT.whatsapp}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-rust" />
                      <div>
                        <p className="font-bold">Factory</p>
                        <p className="text-muted-foreground">{CONTACT.factory}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-rust" />
                      <div>
                        <p className="font-bold">Hours</p>
                        <p className="text-muted-foreground">{CONTACT.hours}</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="overflow-hidden rounded-2xl border border-border">
                  <img
                    src={IMG.packing}
                    alt="Finished orders packed for shipping at Orvanta"
                    className="h-52 w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* how it works strip */}
      {!submitted && (
        <section className="py-16 sm:py-20 bg-cream-deep/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="font-display text-2xl font-extrabold text-center">
                What Happens After You Hit Send
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {HOW_IT_WORKS.map((h, i) => (
                <Reveal key={h.step} delay={i * 0.06}>
                  <div className="h-full rounded-2xl border border-border bg-card p-6">
                    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-rust font-display text-sm font-extrabold text-white">
                      {h.step}
                    </span>
                    <h3 className="mt-3 font-display text-base font-extrabold">{h.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand />
    </>
  );
}
