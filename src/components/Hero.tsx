"use client";

import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { meta } from "@/data/content";

function AnimatedCounter({
  to,
  suffix = "",
  active = false,
}: {
  to: number;
  suffix?: string;
  active?: boolean;
}) {
  const valueRef = useRef<HTMLSpanElement>(null);
  const count = useMotionValue(0);

  useMotionValueEvent(count, "change", (latest) => {
    if (valueRef.current) {
      valueRef.current.textContent = String(Math.round(latest));
    }
  });

  useEffect(() => {
    if (!active) return;
    count.set(0);
    const controls = animate(count, to, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [active, to, count]);

  return (
    <>
      <span ref={valueRef}>0</span>
      {suffix}
    </>
  );
}

const stats = [
  { value: 6, suffix: "+", label: "Industries Served" },
  { value: 10, suffix: "+", label: "Apps Developed" },
  { value: 7, suffix: "+", label: "Years Experience" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const [statsActive, setStatsActive] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-screen snap-start snap-always items-center overflow-hidden pt-24 pb-0 md:pt-28">
      {/* Background image */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundColor: "#050a1b" }}
      >
        <motion.div
          className="absolute inset-[-8%]"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={
            prefersReducedMotion
              ? { opacity: 1, scale: 1.05 }
              : {
                  opacity: 1,
                  scale: [1.05, 1.12, 1.05],
                  x: ["0%", "-1.5%", "0%"],
                  y: ["0%", "-1%", "0%"],
                }
          }
          transition={
            prefersReducedMotion
              ? { opacity: { duration: 1.2, ease } }
              : {
                  opacity: { duration: 1.2, ease },
                  scale: {
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  x: { duration: 22, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 22, repeat: Infinity, ease: "easeInOut" },
                }
          }
        >
          <Image
            src="/hero-bg.png"
            alt=""
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center center" }}
          />
        </motion.div>
        {/* Dark overlay gradient so text stays readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(8,10,20,0.55) 0%, rgba(8,10,20,0.3) 40%, rgba(8,10,20,0.75) 80%, var(--bg) 100%)",
          }}
        />
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center">
        {/* Greeting + Name */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.3, ease }}
          className="heading text-white"
          style={{ fontSize: "clamp(2.6rem, 8vw, 5.5rem)" }}
        >
          Hi, I&apos;m{" "}
          <span style={{ color: "var(--accent)" }}>{meta.name}</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.48, ease }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed md:text-lg"
          style={{ color: "rgba(220,225,245,0.85)" }}
        >
          {meta.title} crafting high-performance ecosystems for the next
          generation of digital products.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.62, ease }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
          style={{ margin: "20px 20px" }}
        >
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in Touch
          </a>
        </motion.div>

        {/* Availability pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-medium"
          style={{
            background: "rgba(167,139,250,0.08)",
            border: "1px solid var(--border-accent)",
            color: "var(--accent-3)",
            padding: "4px 8px",
            marginBottom: "40px",
          }}
        >
          <span className="relative flex h-2 w-2">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
              style={{ background: "var(--accent)" }}
            />
            <span
              className="relative inline-flex h-2 w-2 rounded-full"
              style={{ background: "var(--accent)" }}
            />
          </span>
          Open to new opportunities
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.82, ease }}
          onAnimationComplete={() => setStatsActive(true)}
          className="mt-20 mb-0 grid w-full max-w-2xl grid-cols-3 divide-x overflow-hidden rounded-2xl"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            marginTop: "20px",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center gap-1 px-6 py-7"
              style={{
                borderRight:
                  i < stats.length - 1
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "none",
                padding: "10px",
              }}
            >
              <div
                className="text-3xl font-bold tabular-nums md:text-4xl"
                style={{ color: "var(--accent-3)" }}
              >
                <AnimatedCounter
                  to={s.value}
                  suffix={s.suffix}
                  active={statsActive}
                />
              </div>
              <div
                className="text-center text-[11px] uppercase tracking-[0.14em]"
                style={{ color: "rgba(180,184,197,0.75)" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade into next section */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--bg))",
        }}
      />
    </section>
  );
}
