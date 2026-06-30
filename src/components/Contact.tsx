"use client";

import { motion } from "framer-motion";
import { meta } from "@/data/content";
import { FadeIn, BlurReveal } from "./FadeIn";

const linkedinHandle = meta.linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com/i, "");

const socialLinks = [
  {
    label: "GitHub",
    href: meta.github,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: meta.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

function ContactCard({
  href,
  label,
  value,
  icon,
}: {
  href: string;
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="card flex flex-1 items-center gap-4 px-5 py-5"
      style={{ borderRadius: 16, background: "var(--surface-2)" }}
    >
      <div
        className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl text-white"
        style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))" }}
      >
        {icon}
      </div>
      <div className="min-w-0 text-left">
        <div className="text-[11px] uppercase tracking-wider" style={{ color: "var(--muted)" }}>
          {label}
        </div>
        <div className="truncate text-sm font-medium" style={{ color: "var(--text)" }}>
          {value}
        </div>
      </div>
    </motion.a>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen snap-start snap-always scroll-mt-24 flex-col items-center justify-center overflow-hidden bg-[var(--bg)]"
    >
      <div
        className="aurora-slow pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(167,139,250,0.12) 0%, rgba(129,140,248,0.04) 50%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container relative z-10 flex w-full flex-col items-center justify-center">
        <div className="flex w-full max-w-3xl flex-col items-center text-center">
          <FadeIn>
            <span
              className="mb-5 inline-flex rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                color: "var(--text-2)",
                padding: "4px 8px",
              }}
            >
              Let&apos;s Connect
            </span>
          </FadeIn>

          <BlurReveal as="h2" delay={0.08} className="heading mb-6 text-4xl md:text-5xl">
            Ready to Build Something{" "}
            <span className="gradient-text">Amazing Together?</span>
          </BlurReveal>

          <FadeIn delay={0.15}>
            <p className="mb-12 max-w-xl text-base leading-relaxed" style={{ color: "var(--text-2)" , marginBlock: "30px"}}>
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to
              be part of something extraordinary.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="w-full">
            <div
              className="card w-full p-3 md:p-4"
              style={{ borderRadius: 20,  }}
            >
              <div className="flex flex-col gap-3 sm:flex-row">
                <ContactCard
                  href={`mailto:${meta.email}`}
                  label="Email"
                  value={meta.email}
                  icon={
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      className="h-5 w-5"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  }
                />
                <ContactCard
                  href={meta.linkedin}
                  label="LinkedIn"
                  value={linkedinHandle}
                  icon={
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  }
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.28}>
            <div className="mt-8 flex items-center gap-3" style={{ marginTop: "20px" }}>
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-200"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    color: "var(--text-2)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--text)";
                    e.currentTarget.style.borderColor = "var(--border-accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-2)";
                    e.currentTarget.style.borderColor = "var(--border)";
                  }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
