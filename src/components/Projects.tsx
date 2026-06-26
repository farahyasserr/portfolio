"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects, Project } from "@/data/content";
import { FadeIn, BlurReveal } from "./FadeIn";

const categoryColors: Record<string, string> = {
  "Golf / Sports": "#34d399",
  "Golf / EdTech": "#34d399",
  FinTech: "#60a5fa",
  "Banking / FinTech": "#60a5fa",
  "E-commerce": "#f472b6",
  "Health & Fitness": "#fb923c",
  "Social Platform": "#a78bfa",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const color = categoryColors[project.category] || "var(--accent)";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -12, scale: 0.97 }}
      transition={{
        duration: 0.42,
        delay: index * 0.06,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className="group flex-shrink-0 w-72 md:w-80"
    >
      <div
        className="relative flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 group-hover:scale-[1.02]"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
        }}
      >
        {/* Top image area */}
        <div
          className="relative h-44 overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${color}18 0%, rgba(8,8,11,0.8) 100%)`,
          }}
        >
          {project.logo ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="overflow-hidden rounded-2xl"
                style={{
                  width: 80,
                  height: 80,
                  boxShadow: `0 8px 32px ${color}30`,
                }}
              >
                <Image
                  src={project.logo}
                  alt={project.name}
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="flex items-center justify-center rounded-2xl text-3xl font-bold"
                style={{
                  width: 80,
                  height: 80,
                  background: `${color}18`,
                  border: `1px solid ${color}30`,
                  color,
                }}
              >
                {project.name[0]}
              </div>
            </div>
          )}

        
          {/* Glow */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background: `radial-gradient(ellipse at 50% 80%, ${color}28, transparent 70%)`,
            }}
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5" style={{ padding: "12px" }}>
          <div className="mb-1 flex items-center justify-between gap-2">
            <h3 className="text-base font-bold leading-tight">
              {project.name}
            </h3>
            {project.builtFromScratch && (
              <span
                className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold whitespace-nowrap"
                style={{
                  background: "rgba(167,139,250,0.14)",
                  border: "1px solid var(--border-accent)",
                  color: "var(--accent-3)",
                  padding: "2px 8px",
                }}
              >
                Built from scratch
              </span>
            )}
          </div>
          <span
            className="mb-3 text-[11px] font-semibold uppercase tracking-wider"
            style={{ color }}
          >
            {project.category}
          </span>

          <p
            className="mb-4 flex-1 text-xs leading-[1.75]"
            style={{ color: "var(--text-2)" }}
          >
            {project.description}
          </p>

          <div className="mb-4 flex flex-wrap gap-1.5">
            {project.highlights.slice(0, 4).map((h) => (
              <span
                key={h}
                className="rounded-md px-2 py-0.5 text-[10px] font-medium"
                style={{
                  background: `${color}12`,
                  border: `1px solid ${color}22`,
                  color,
                }}
              >
                {h}
              </span>
            ))}
          </div>

          {(project.appStoreUrl || project.websiteUrl) && (
            <div
              className="flex items-center gap-4 pt-3"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              {project.appStoreUrl && (
                <a
                  href={project.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold transition-opacity hover:opacity-70"
                  style={{ color }}
                >
                  App Store ↗
                </a>
              )}
              {project.websiteUrl && (
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold transition-opacity hover:opacity-70"
                  style={{ color: "var(--muted)" }}
                >
                  Website ↗
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

const CARDS_PER_PAGE = 3;

export default function Projects() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(projects.length / CARDS_PER_PAGE);
  const visible = projects.slice(page * CARDS_PER_PAGE, page * CARDS_PER_PAGE + CARDS_PER_PAGE);

  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  return (
    <section id="projects" className="relative min-h-screen snap-start snap-always scroll-mt-24 bg-[var(--bg)] py-24 md:py-32">
      <div className="container">
        {/* Header */}
        <FadeIn className="mb-10 flex flex-col items-start">
          <span className="eyebrow mb-4">Selected work</span>
          <div className="flex w-full items-end justify-between" style={{ marginBottom: "10px", marginTop: "30px" }}>
            <div>
              <BlurReveal as="h2" className="heading text-4xl md:text-5xl">
                Featured <span className="gradient-text">Mobile Apps</span>
              </BlurReveal>
              <p className="mt-3 max-w-lg text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>
                Deep-dive into selected architectural solutions for high-scale mobile environments.
              </p>
            </div>
            {/* Arrow nav */}
            <div className="hidden items-center gap-2 md:flex">
              <button
                onClick={prev}
                disabled={page === 0}
                className="flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200"
                style={{
                  background: page === 0 ? "var(--surface)" : "rgba(167,139,250,0.12)",
                  border: "1px solid var(--border)",
                  color: page === 0 ? "var(--muted)" : "var(--accent-3)",
                  cursor: page === 0 ? "not-allowed" : "pointer",
                }}
                aria-label="Previous"
              >
                ←
              </button>
              <button
                onClick={next}
                disabled={page === totalPages - 1}
                className="flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200"
                style={{
                  background: page === totalPages - 1 ? "var(--surface)" : "rgba(167,139,250,0.12)",
                  border: "1px solid var(--border)",
                  color: page === totalPages - 1 ? "var(--muted)" : "var(--accent-3)",
                  cursor: page === totalPages - 1 ? "not-allowed" : "pointer",
                }}
                aria-label="Next"
              >
                →
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Cards */}
        <div className="overflow-hidden">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.38, ease: [0.25, 0.4, 0.25, 1] }}
              className="grid gap-6 md:grid-cols-3"
              style={{paddingBlock: "30px"}}
            >
              {visible.map((p, i) => (
                <ProjectCard key={p.name} project={p} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile arrow nav */}
        <div className="mt-8 flex items-center justify-center gap-3 md:hidden">
          <button
            onClick={prev}
            disabled={page === 0}
            className="flex h-9 w-9 items-center justify-center rounded-full"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              color: page === 0 ? "var(--muted)" : "var(--accent-3)",
            }}
            aria-label="Previous"
          >
            ←
          </button>
          <span className="text-xs" style={{ color: "var(--muted)" }}>
            {page + 1} / {totalPages}
          </span>
          <button
            onClick={next}
            disabled={page === totalPages - 1}
            className="flex h-9 w-9 items-center justify-center rounded-full"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              color: page === totalPages - 1 ? "var(--muted)" : "var(--accent-3)",
            }}
            aria-label="Next"
          >
            →
          </button>
        </div>

        {/* Pagination dots */}
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === page ? 24 : 6,
                background: i === page ? "var(--accent)" : "var(--border-strong)",
              }}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
