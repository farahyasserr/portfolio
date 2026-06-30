"use client";

import { useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { FadeIn, BlurReveal, StaggerChildren, StaggerItem } from "./FadeIn";

// Removed Flutter from techIcons
const techIcons = [
  { name: "Swift", color: "#F05138" },
  { name: "Kotlin", color: "#7F52FF" },
  { name: "React Native", color: "#61DAFB" },
  { name: "CI/CD", color: "#F97316" },
  { name: "AWS", color: "#FF9900" },
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

const ease = [0.25, 0.4, 0.25, 1] as const;

function TechPill({
  tech,
  index,
  reducedMotion,
}: {
  tech: (typeof techIcons)[number];
  index: number;
  reducedMotion: boolean | null;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.07, ease }}
      whileHover={
        reducedMotion
          ? undefined
          : { y: -4, scale: 1.04, transition: { type: "spring", stiffness: 420, damping: 22 } }
      }
      whileTap={reducedMotion ? undefined : { scale: 0.97 }}
      className="group relative cursor-default overflow-hidden rounded-xl px-3 py-2.5 text-center text-xs font-semibold"
      style={{
        background: `${tech.color}14`,
        border: `1px solid ${tech.color}28`,
        color: "#f9fafb",
        padding: "4px 8px",
      }}
    >
      <motion.span
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at 50% 120%, ${tech.color}35, transparent 70%)`,
        }}
        aria-hidden
      />
      <span className="relative z-10">{tech.name}</span>
      <motion.span
        className="pointer-events-none absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 group-hover:w-3/4"
        style={{ background: tech.color }}
        transition={{ duration: 0.35, ease }}
      />
    </motion.div>
  );
}

function SkillChip({
  skill,
  color,
  index,
  dimmed,
  reducedMotion,
}: {
  skill: string;
  color: string;
  index: number;
  dimmed: boolean;
  reducedMotion: boolean | null;
}) {
  return (
    <motion.span
      layout
      initial={{ opacity: 0, scale: 0.88 }}
      whileInView={{ opacity: dimmed ? 0.45 : 1, scale: 1 }}
      viewport={{ once: true }}
      animate={{ opacity: dimmed ? 0.45 : 1 }}
      transition={{ duration: 0.3, delay: index * 0.03, ease }}
      whileHover={
        reducedMotion
          ? undefined
          : {
              y: -2,
              scale: 1.05,
              transition: { type: "spring", stiffness: 500, damping: 24 },
            }
      }
      className="group/chip relative cursor-default whitespace-nowrap rounded-full px-3 py-1.5 text-xs md:text-sm"
      style={{
        background: `${color}10`,
        border: `1px solid ${color}22`,
        color: "var(--text-2)",
        padding: "4px 8px",
      }}
    >
      <motion.span
        className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover/chip:opacity-100"
        style={{
          boxShadow: `0 0 20px ${color}30`,
          border: `1px solid ${color}55`,
        }}
        aria-hidden
      />
      <span
        className="relative z-10 transition-colors duration-300 group-hover/chip:text-[var(--text)]"
      >
        {skill}
      </span>
    </motion.span>
  );
}

function SkillGroupRow({
  group,
  index,
  isActive,
  isDimmed,
  onHover,
  onLeave,
  reducedMotion,
}: {
  group: (typeof skillGroups)[number];
  index: number;
  isActive: boolean;
  isDimmed: boolean;
  onHover: () => void;
  onLeave: () => void;
  reducedMotion: boolean | null;
}) {
  const rowVariants: Variants = {
    hidden: { opacity: 0, x: -16 },
    visible: {
      opacity: isDimmed ? 0.55 : 1,
      x: 0,
      transition: { duration: 0.5, delay: index * 0.06, ease },
    },
  };

  return (
    <motion.div
      variants={rowVariants}
      animate={{ opacity: isDimmed ? 0.55 : 1 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onFocus={onHover}
      onBlur={onLeave}
      className="group/row relative rounded-2xl px-4 py-4 transition-colors duration-300 md:px-5"
      style={{
        background: isActive ? `${group.color}08` : "transparent",
        border: `1px solid ${isActive ? `${group.color}30` : "transparent"}`,
        padding: "10px",
      }}
    >
      {/* Animated left accent bar */}
      <motion.span
        className="absolute left-0 top-1/2 w-0.5 -translate-y-1/2 rounded-full"
        style={{ background: group.color }}
        initial={{ height: 0 }}
        whileInView={{ height: isActive ? "70%" : "40%" }}
        animate={{ height: isActive ? "70%" : "40%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease }}
      />

      <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
        <div className="flex-shrink-0 md:w-56 md:pt-0.5">
          <div className="flex items-center gap-2.5">
            <motion.span
              className="h-2 w-2 flex-shrink-0 rounded-full"
              style={{
                background: group.color,
                boxShadow: isActive ? `0 0 14px ${group.color}` : `0 0 8px ${group.color}`,
              }}
              animate={{
                scale: isActive && !reducedMotion ? [1, 1.25, 1] : 1,
              }}
              transition={
                isActive && !reducedMotion
                  ? { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
                  : { duration: 0.2 }
              }
            />
            <span
              className="text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-300"
              style={{ color: isActive ? group.color : "var(--muted)" }}
            >
              {group.category}
            </span>
            <motion.span
              className="hidden h-px flex-1 md:block"
              style={{ background: `linear-gradient(90deg, ${group.color}55, transparent)` }}
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: isActive ? 1 : 0.35 }}
              animate={{ scaleX: isActive ? 1 : 0.35 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
            />
          </div>
          <motion.p
            className="mt-2 hidden text-xs md:block"
            style={{ color: "var(--muted)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.25 }}
          >
            {group.items.length} technologies
          </motion.p>
        </div>

        <div className="flex flex-1 flex-wrap gap-2">
          {group.items.map((skill, si) => (
            <SkillChip
              key={skill}
              skill={skill}
              color={group.color}
              index={si}
              dimmed={isDimmed}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isActive = useInView(ref, { amount: 0.35, margin: "0px 0px -15% 0px" });
  const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      ref={ref}
      id="skills"
      className="relative min-h-screen snap-start snap-always scroll-mt-24 overflow-hidden border-t border-[var(--border)] bg-[var(--bg)] py-24 md:py-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="aurora absolute -left-32 top-1/4 h-72 w-72 rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(167,139,250,0.35), transparent 70%)" }}
        />
        <div
          className="aurora-slow absolute -right-24 bottom-1/4 h-80 w-80 rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(96,165,250,0.3), transparent 70%)" }}
        />
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(167,139,250,0.35), transparent)",
          }}
        />
      </div>

      <motion.div
        className="container relative z-10"
        initial={false}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 36 }}
        transition={{ duration: 0.55, ease }}
      >
        {/* Header */}
        <FadeIn className="mb-12 flex flex-col items-center text-center">
          <span className="eyebrow is-centered mb-5">Toolkit</span>
          <BlurReveal as="h2" className="heading text-4xl md:text-5xl">
            Technical <span className="gradient-text">Toolkit</span>
          </BlurReveal>
          <p className="mt-4 max-w-lg text-sm leading-relaxed" style={{ color: "var(--text-2)", marginBottom: "30px" }}>
            Mastery over the mobile lifecycle. Native performance to cross-platform efficiency.
          </p>
        </FadeIn>

        {/* Tech showcase + philosophy */}
        <FadeIn className="mb-10">
          <motion.div
            className="group/hero relative overflow-hidden rounded-3xl border px-4 py-5 md:px-6 md:py-6"
            style={{
              background:
                "linear-gradient(135deg, rgba(16,16,24,0.95), rgba(6,8,20,0.95))",
              border: "1px solid var(--border)",
              padding: "10px",
            }}
            whileHover={
              prefersReducedMotion
                ? undefined
                : { borderColor: "rgba(167,139,250,0.25)" }
            }
            transition={{ duration: 0.35 }}
          >
            <motion.div
              className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover/hero:opacity-100"
              style={{ background: "rgba(167,139,250,0.2)" }}
              aria-hidden
            />

            <div className="mb-5 grid grid-cols-3 gap-2.5 sm:grid-cols-6" style={{ marginBottom: "10px" }}>
              {techIcons.map((tech, i) => (
                <TechPill
                  key={tech.name}
                  tech={tech}
                  index={i}
                  reducedMotion={prefersReducedMotion}
                />
              ))}
            </div>

            <motion.div
              className="relative flex items-start gap-4 overflow-hidden rounded-2xl px-4 py-4 md:px-5 md:py-5"
              style={{ background: "rgba(13,14,26,0.9)", padding: "10px" }}
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : { background: "rgba(13,14,26,0.98)" }
              }
            >
              <motion.div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/hero:opacity-100"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(167,139,250,0.06), transparent 60%)",
                }}
                aria-hidden
              />

              <motion.div
                className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
                style={{
                  background: "rgba(167,139,250,0.16)",
                  color: "var(--accent-3)",
                }}
                animate={
                  prefersReducedMotion
                    ? undefined
                    : { rotate: [0, 4, -4, 0] }
                }
                transition={
                  prefersReducedMotion
                    ? undefined
                    : { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }
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
              </motion.div>

              <div className="relative z-10">
                <h3 className="mb-1.5 text-sm font-semibold tracking-tight">
                  Engineering Approach
                </h3>
                <p
                  className="text-xs leading-relaxed md:text-sm"
                  style={{ color: "var(--text-2)" }}
                >
                  With 7+ years in React Native, I take apps from architecture and design
                  systems through native iOS and Android modules to App Store and Play
                  Store releases. SOLID principles, reusable components, and
                  performance-first engineering keep every codebase maintainable — whether
                  I&apos;m leading code reviews, mentoring engineers, or shipping end to end.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </FadeIn>

        {/* Skill groups */}
        <StaggerChildren
          className="flex flex-col gap-2 md:gap-3"
          staggerDelay={0.08}
        >
          {skillGroups.map((group, gi) => {
            const isRowActive = hoveredGroup === group.category;
            const isRowDimmed =
              hoveredGroup !== null && hoveredGroup !== group.category;

            return (
              <StaggerItem key={group.category}>
                <SkillGroupRow
                  group={group}
                  index={gi}
                  isActive={isRowActive}
                  isDimmed={isRowDimmed}
                  onHover={() => setHoveredGroup(group.category)}
                  onLeave={() => setHoveredGroup(null)}
                  reducedMotion={prefersReducedMotion}
                />
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </motion.div>
    </section>
  );
}