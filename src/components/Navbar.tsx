"use client";

import { motion, useScroll, useMotionValueEvent, useSpring } from "framer-motion";
import { useState } from "react";
import { meta } from "@/data/content";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
      style={{
        background: scrolled ? "rgba(8,8,11,0.72)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(160%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(160%)" : "none",
        borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
        transition: "background 0.4s, border-color 0.4s",
      }}
    >
      <div className="container flex h-[68px] items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold"
            style={{
              background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
              color: "#fff",
              boxShadow: "0 0 16px rgba(167,139,250,0.3)",
            }}
          >
            F
          </span>
          <span className="text-[15px] font-semibold tracking-tight" style={{ color: "var(--text)" }}>
            {meta.name}
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-4 py-2 text-sm transition-colors duration-200 hover:text-[color:var(--text)]"
              style={{ color: "var(--muted)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={meta.resume}
            download="Farah_Dawoud_Resume.pdf"
            className="btn btn-primary ml-3"
            style={{ padding: "9px 20px", fontSize: 13 }}
          >
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
            transition={{ duration: 0.25 }}
            className="block h-px w-6"
            style={{ background: "var(--text)" }}
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            className="block h-px w-6"
            style={{ background: "var(--text)" }}
          />
          <motion.span
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
            transition={{ duration: 0.25 }}
            className="block h-px w-6"
            style={{ background: "var(--text)" }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
        className="overflow-hidden md:hidden"
        style={{ background: "rgba(8,8,11,0.96)", borderTop: "1px solid var(--border)" }}
      >
        <div className="container flex flex-col gap-1 py-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-3 py-3 text-sm font-medium"
              style={{ color: "var(--text-2)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={meta.resume}
            download="Farah_Dawoud_Resume.pdf"
            onClick={() => setMenuOpen(false)}
            className="btn btn-primary mt-3"
          >
            Resume
          </a>
        </div>
      </motion.div>

      {/* Scroll progress */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-px origin-left"
        style={{
          scaleX: progress,
          background: "linear-gradient(90deg, var(--accent-3), var(--accent), var(--accent-2))",
          opacity: scrolled ? 1 : 0,
          transition: "opacity 0.4s",
        }}
      />
    </motion.nav>
  );
}
