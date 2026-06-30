"use client";

import { motion } from "framer-motion";
import { domains } from "@/data/content";
import { FadeIn, StaggerChildren, StaggerItem, BlurReveal } from "./FadeIn";

const timeline = [
  { year: "2018", note: "Started my React Native journey" },
  { year: "2020", note: "Shipped my first FinTech production app" },
  { year: "2022", note: "Led mobile development on Homzmart" },
  { year: "2024", note: "Architected ProShop, Voxa & Plate from the ground up" },
  { year: "Now", note: "Seeking senior-level opportunities" },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-28 md:py-36">
      <div className="container">
        {/* Header */}
        <FadeIn className="mb-16 flex flex-col items-center text-center">
          <span className="eyebrow is-centered mb-5">About me</span>
          <BlurReveal as="h2" className="heading max-w-2xl text-4xl md:text-5xl">
            Crafting mobile experiences that{" "}
            <span className="gradient-text">feel alive</span>
          </BlurReveal>
        </FadeIn>

        <div className="grid gap-x-16 gap-y-14 md:grid-cols-2">
          {/* Bio + timeline */}
          <div className="flex flex-col gap-6">
            <FadeIn delay={0.05}>
              <p className="text-base leading-[1.85]" style={{ color: "var(--text-2)" }}>
                I&apos;m Farah, a Senior Mobile Developer with{" "}
                <strong style={{ color: "var(--text)" }}>7 years</strong> building
                production-grade React Native apps. I specialise in the gap between native
                power and cross-platform efficiency — writing custom native modules for iOS
                and Android when the JS layer isn&apos;t enough.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-base leading-[1.85]" style={{ color: "var(--text-2)" }}>
                From high-stakes FinTech compliance flows to real-time GPS tracking, video
                streaming pipelines, and social feeds — I bring a performance-first,
                detail-obsessed mindset to every project. For ProShop, I built an iOS
                ReplayKit + Android MediaProjection bridge for in-app screen recording with
                a JS annotation layer.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-base leading-[1.85]" style={{ color: "var(--text-2)" }}>
                On my latest three apps — ProShop, Voxa, and Plate — I led architectural
                decisions end to end: introduced PR templates, wrote multiple architecture
                docs, and established the patterns the team ships against today.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-2 flex flex-col gap-0">
                {timeline.map((item, i) => (
                  <div key={item.year} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span
                        className="text-xs font-bold tabular-nums"
                        style={{ color: "var(--accent-3)" }}
                      >
                        {item.year}
                      </span>
                      {i < timeline.length - 1 && (
                        <span
                          className="my-1 w-px flex-1 min-h-[1.25rem]"
                          style={{ background: "var(--border-strong)" }}
                        />
                      )}
                    </div>
                    <p
                      className="pb-5 text-sm leading-relaxed"
                      style={{ color: "var(--text-2)" }}
                    >
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Industries */}
          <div>
            <FadeIn delay={0.08}>
              <p
                className="mb-6 text-xs font-semibold uppercase tracking-[0.18em]"
                style={{ color: "var(--muted)" }}
              >
                Industries I&apos;ve shipped in
              </p>
            </FadeIn>
            <StaggerChildren className="grid grid-cols-2 gap-3" staggerDelay={0.06}>
              {domains.map((d) => (
                <StaggerItem key={d.label}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="card flex items-center gap-3 px-4 py-4"
                    style={{ borderRadius: 14 }}
                  >
                    <span className="text-xl leading-none">{d.icon}</span>
                    <span className="text-sm font-medium" style={{ color: "var(--text-2)" }}>
                      {d.label}
                    </span>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </div>
    </section>
  );
}
