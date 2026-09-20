"use client";

import { motion } from "motion/react";
import { experience } from "@/content/experience";

export function ExperienceSection() {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex items-center gap-4">
        <span
          className="mono text-xs"
          style={{ color: "var(--color-green)", letterSpacing: "0.08em" }}
        >
          experience
        </span>
        <div className="flex-1 h-px" style={{ background: "var(--color-border)" }} />
      </div>

      <div className="flex flex-col gap-5">
        {experience.map((entry, i) => (
          <motion.div
            key={i}
            className="border p-6"
            style={{ borderColor: "var(--color-border)" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
              <div>
                <h3
                  className="mono font-bold"
                  style={{ fontSize: "15px", color: "var(--color-fg)" }}
                >
                  {entry.role}
                </h3>
                <p className="mono text-xs mt-0.5" style={{ color: "var(--color-green)" }}>
                  {entry.org}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="mono text-xs px-2 py-0.5 border"
                  style={{
                    borderColor: "var(--color-border-strong)",
                    color: "var(--color-fg-dim)",
                    fontSize: "10px",
                  }}
                >
                  {entry.type}
                </span>
                <span className="mono text-xs" style={{ color: "var(--color-fg-dim)", fontSize: "11px" }}>
                  {entry.period}
                </span>
              </div>
            </div>

            <ul className="flex flex-col gap-2">
              {entry.achievements.map((ach, j) => (
                <li
                  key={j}
                  className="flex items-start gap-3 text-sm"
                  style={{ color: "var(--color-fg-muted)", lineHeight: 1.6 }}
                >
                  <span
                    className="mono shrink-0 mt-0.5"
                    style={{ color: "var(--color-green)", fontSize: "10px" }}
                  >
                    ✓
                  </span>
                  {ach}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
