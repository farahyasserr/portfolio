"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FadeIn, BlurReveal } from "./FadeIn";

const techIcons = [
  {
    name: "Swift",
    color: "#F05138",
  },
  {
    name: "Kotlin",
    color: "#7F52FF",
  },
  {
    name: "React Native",
    color: "#61DAFB",
  },
  {
    name: "Flutter",
    color: "#54C5F8",
  },
  {
    name: "CI/CD",
    color: "#F97316",
  },
  {
    name: "AWS",
    color: "#FF9900",
  },
];

const skillGroups = [
  {
    category: "Core",
    color: "#a78bfa",
    items: ["React Native", "TypeScript", "JavaScript", "Native Modules (iOS & Android)"],
  },
  {
    category: "State & Data",
    color: "#60a5fa",
    items: ["Redux", "Zustand", "Context API", "REST APIs", "GraphQL"],
  },
  {
    category: "Navigation & UI",
    color: "#34d399",
    items: ["React Navigation", "Reanimated 2", "Gesture Handler", "Skia"],
  },
  {
    category: "Platform Features",
    color: "#fb923c",
    items: [
      "GPS & Maps",
      "Video Streaming",
      "Screen Recording",
      "Biometric Auth",
      "Push Notifications",
      "Payments",
      "Apple Pay",
    ],
  },
  {
    category: "Tooling & Delivery",
    color: "#f472b6",
    items: ["App Store Deployment", "Play Store Deployment", "CI/CD", "Fastlane", "Performance Profiling"],
  },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isActive = useInView(ref, { amount: 0.45, margin: "0px 0px -20% 0px" });

  return (
    <section
      ref={ref}
      id="skills"
      className="relative min-h-screen snap-start snap-always scroll-mt-24 border-t border-[var(--border)] bg-[var(--bg)] py-24 md:py-32"
    >
      <motion.div
        className="container"
        initial={false}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 40 }}
        transition={{ duration: 0.55, ease: [0.25, 0.4, 0.25, 1] }}
      >
        {/* Header */}
        <FadeIn className="mb-12 flex flex-col items-center text-center">
          <span className="eyebrow is-centered mb-5">Toolkit</span>
          <BlurReveal as="h2" className="heading text-4xl md:text-5xl">
            Technical <span className="gradient-text">Toolkit</span>
          </BlurReveal>
          <p className="mt-4 max-w-lg text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>
            Mastery over the mobile lifecycle. Native performance to cross-platform efficiency.
          </p>
        </FadeIn>

        {/* Top bar: tech icons + architectural philosophy in a single band */}
        <FadeIn className="mb-10">
          <div
            className="rounded-3xl border px-4 py-4 md:px-6 md:py-5"
            style={{
              background:
                "linear-gradient(135deg, rgba(16,16,24,0.95), rgba(6,8,20,0.95))",
              border: "1px solid var(--border)",
            }}
          >
            {/* Icons row */}
            <div className="mb-4 grid grid-cols-3 gap-2.5 sm:grid-cols-6">
              {techIcons.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  className="flex items-center justify-center rounded-xl px-3 py-2 text-xs font-semibold"
                  style={{
                    background: `${tech.color}1f`,
                    border: `1px solid ${tech.color}33`,
                    color: "#f9fafb",
                  }}
                >
                  {tech.name}
                </motion.div>
              ))}
            </div>

            {/* Architectural philosophy row */}
            <div className="flex items-start gap-4 rounded-2xl bg-[rgba(13,14,26,0.9)] px-4 py-4 md:px-5 md:py-4">
              <div
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl"
                style={{
                  background: "rgba(167,139,250,0.16)",
                  color: "var(--accent-3)",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  className="h-4 w-4"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <h3 className="mb-1.5 text-sm font-semibold tracking-tight">
                  Architectural Philosophy
                </h3>
                <p
                  className="text-xs leading-relaxed md:text-sm"
                  style={{ color: "var(--text-2)" }}
                >
                  I specialise in MV-VM-C and Clean Architecture patterns,
                  ensuring every codebase remains testable, scalable, and built
                  to withstand evolving requirements. Performance is never an
                  afterthought — it&apos;s designed in from the start.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Skill rows */}
        <div className="mt-2 flex flex-col space-y-4 md:space-y-5">
          {skillGroups.map((group, gi) => (
            <FadeIn key={group.category} delay={gi * 0.05}>
              <div
                className="flex flex-col gap-3 border-t pt-3 md:flex-row md:items-center md:gap-8"
                style={{ borderColor: "var(--border)" }}
              >
                {/* Left label */}
                <div className="flex-shrink-0 md:w-56">
                  <div className="flex items-center gap-2">
                    <span
                      className="h-2 w-2 flex-shrink-0 rounded-full"
                      style={{
                        background: group.color,
                        boxShadow: `0 0 8px ${group.color}`,
                      }}
                    />
                    <span
                      className="text-xs font-semibold uppercase tracking-[0.18em]"
                      style={{ color: "var(--muted)" }}
                    >
                      {group.category}
                    </span>
                  </div>
                </div>

                {/* Right items as a single row of labels */}
                <div
                  className="flex flex-1 flex-wrap gap-x-4 gap-y-1 text-xs md:text-sm"
                  style={{ color: "var(--text-2)" }}
                >
                  {group.items.map((skill) => (
                    <span key={skill} className="whitespace-nowrap">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
