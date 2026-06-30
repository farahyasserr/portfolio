"use client";

import { meta } from "@/data/content";

export default function Footer() {
  return (
    <footer className="relative" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:flex-row">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <span
            className="flex h-6 w-6 items-center justify-center rounded-md text-[10px] font-bold"
            style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))", color: "#fff" }}
          >
            F
          </span>
          <span className="text-sm font-semibold" style={{ color: "var(--text-2)" }}>
            {meta.name}
          </span>
        </div>

        {/* Copyright */}
        <span className="text-xs md:order-last" style={{ color: "var(--muted)" }}>
          © {new Date().getFullYear()} {meta.name}. Engineered for high-performance mobile ecosystems.
        </span>

        {/* Social links */}
        <div className="flex items-center gap-6">
          <a
            href={meta.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors duration-200 hover:text-[color:var(--text)]"
            style={{ color: "var(--muted)" }}
          >
            GitHub
          </a>
          <a
            href={meta.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors duration-200 hover:text-[color:var(--text)]"
            style={{ color: "var(--muted)" }}
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors duration-200 hover:text-[color:var(--text)]"
            style={{ color: "var(--muted)" }}
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
