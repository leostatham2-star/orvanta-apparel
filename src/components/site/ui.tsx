"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

/* ── Brand logo: stitched O mark + wordmark ────────────────── */
export function Logo({
  variant = "dark",
  size = "md",
}: {
  variant?: "dark" | "light";
  size?: "sm" | "md";
}) {
  const ink = variant === "dark" ? "#1C1712" : "#F7F2E9";
  const markSize = size === "sm" ? 28 : 34;
  const wordSize = size === "sm" ? "text-lg" : "text-[21px]";
  return (
    <span className="inline-flex items-center gap-2.5 select-none">
      <svg
        width={markSize}
        height={markSize}
        viewBox="0 0 64 64"
        aria-hidden="true"
      >
        <rect width="64" height="64" rx="14" fill={variant === "dark" ? "#1C1712" : "#C2451E"} />
        <circle
          cx="32"
          cy="32"
          r="15"
          fill="none"
          stroke="#C2451E"
          strokeWidth="6"
          strokeDasharray="9 7"
          strokeLinecap="round"
        />
        <circle cx="32" cy="32" r="4.5" fill={variant === "dark" ? "#FAF7F2" : "#fff"} />
      </svg>
      <span className="leading-none">
        <span
          className={`block font-display font-extrabold tracking-tight ${wordSize}`}
          style={{ color: ink }}
        >
          ORVANTA
        </span>
        <span
          className="block text-[9px] font-semibold tracking-[0.42em] uppercase"
          style={{ color: variant === "dark" ? "#C2451E" : "#E8B49A" }}
        >
          Apparel
        </span>
      </span>
    </span>
  );
}

/* ── Scroll reveal wrapper ─────────────────────────────────── */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 26 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ── Section heading block ─────────────────────────────────── */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  dark = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
      <Reveal>
        <p className="text-xs font-bold tracking-[0.28em] uppercase text-rust">
          {eyebrow}
        </p>
        <div className={`stitch-line mt-3 ${align === "center" ? "mx-auto w-24" : "w-24"}`} />
        <h2
          className={`mt-4 font-display text-3xl sm:text-4xl font-extrabold tracking-tight ${
            dark ? "text-cream" : "text-foreground"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {intro ? (
        <Reveal delay={0.08}>
          <p className={`mt-4 text-base leading-relaxed ${dark ? "text-cream/70" : "text-muted-foreground"}`}>
            {intro}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

/* ── Inner page hero ───────────────────────────────────────── */
export function PageHero({
  eyebrow,
  title,
  intro,
  img,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  img?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-coal text-cream">
      {img ? (
        <>
          <img
            src={img}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-30"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-coal via-coal/85 to-coal/40" />
        </>
      ) : (
        <div className="absolute inset-0 dot-grid opacity-60" />
      )}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-xs font-bold tracking-[0.3em] uppercase text-rust"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="mt-4 max-w-3xl font-display text-4xl sm:text-5xl font-extrabold tracking-tight"
        >
          {title}
        </motion.h1>
        {intro ? (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-cream/75"
          >
            {intro}
          </motion.p>
        ) : null}
        {children ? (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-8"
          >
            {children}
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}

/* ── Call to action band ───────────────────────────────────── */
export function CTABand({
  title = "Ready to Build Your Line?",
  body = "Send your designs or tech pack and get costing, fabric options and lead times within 24 hours. Free mockups, low MOQ and worldwide shipping come standard.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-rust">
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-white/85">
            {body}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-coal px-7 py-3.5 text-sm font-bold text-cream transition-transform hover:translate-y-[-2px]"
            >
              Get a Production Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/923014782650"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border-2 border-white/70 px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Small tag chip ────────────────────────────────────────── */
export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground shadow-sm">
      {children}
    </span>
  );
}
