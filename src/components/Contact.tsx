"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { meta } from "@/data/content";
import { FadeIn, BlurReveal } from "./FadeIn";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 900));
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative snap-start snap-always scroll-mt-24 overflow-hidden bg-[var(--bg)] pt-16 pb-32 md:pt-20 md:pb-40"
    >
      {/* Ambient glow */}
      <div
        className="aurora-slow pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(167,139,250,0.12) 0%, rgba(129,140,248,0.04) 50%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container relative z-10">
        <div className="grid gap-14 md:grid-cols-2 md:gap-20 md:items-start">
          {/* Left column */}
          <div>
            <FadeIn>
              <span className="eyebrow mb-5 block">Get in touch</span>
            </FadeIn>
            <BlurReveal as="h2" delay={0.08} className="heading mb-6 text-4xl md:text-5xl">
              Let&apos;s Build{" "}
              <span className="gradient-text">Something Great</span>
            </BlurReveal>

            <FadeIn delay={0.15}>
              <p className="mb-10 text-base leading-relaxed" style={{ color: "var(--text-2)" }}>
                Whether you have a breakthrough app idea or need technical leadership for an existing
                project, let&apos;s connect and define the future.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
                    style={{ background: "rgba(167,139,250,0.1)", color: "var(--accent-3)" }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider" style={{ color: "var(--muted)" }}>
                      Email
                    </div>
                    <a
                      href={`mailto:${meta.email}`}
                      className="text-sm font-medium transition-colors hover:text-[color:var(--accent)]"
                      style={{ color: "var(--text)" }}
                    >
                      {meta.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
                    style={{ background: "rgba(167,139,250,0.1)", color: "var(--accent-3)" }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider" style={{ color: "var(--muted)" }}>
                      Based in
                    </div>
                    <span className="text-sm font-medium" style={{ color: "var(--text)" }}>
                      San Francisco, CA
                    </span>
                  </div>
                </div>

                <div className="mt-2 flex gap-3">
                  <a
                    href={meta.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                    style={{ padding: "9px 18px", fontSize: 13 }}
                  >
                    LinkedIn ↗
                  </a>
                  <a
                    href={`mailto:${meta.email}`}
                    className="btn btn-primary"
                    style={{ padding: "9px 18px", fontSize: 13 }}
                  >
                    Say hello
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right column — form */}
          <FadeIn delay={0.1}>
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 rounded-2xl p-8"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--muted)" }}>
                    Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
                    style={{
                      background: "var(--bg-soft)",
                      border: "1px solid var(--border)",
                      color: "var(--text)",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--border-accent)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--muted)" }}>
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
                    style={{
                      background: "var(--bg-soft)",
                      border: "1px solid var(--border)",
                      color: "var(--text)",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--border-accent)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--muted)" }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="resize-none rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
                  style={{
                    background: "var(--bg-soft)",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--border-accent)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending || sent}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-primary mt-1 w-full"
                style={{ justifyContent: "center" }}
              >
                {sent ? "Message sent ✓" : sending ? "Sending…" : "Send Message"}
              </motion.button>

              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-xs"
                  style={{ color: "#34d399" }}
                >
                  Thanks! I&apos;ll get back to you shortly.
                </motion.p>
              )}
            </motion.form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
