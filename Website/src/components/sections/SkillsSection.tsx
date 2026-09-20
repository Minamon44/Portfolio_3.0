"use client";

import { motion } from "motion/react";
import { skills } from "@/content/skills";

export function SkillsSection() {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex items-center gap-4">
        <span
          className="mono text-xs"
          style={{ color: "var(--color-green)", letterSpacing: "0.08em" }}
        >
          capabilities
        </span>
        <div className="flex-1 h-px" style={{ background: "var(--color-border)" }} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((group, i) => (
          <motion.div
            key={group.label}
            className="border p-6"
            style={{ borderColor: "var(--color-border)" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.35, ease: "easeOut", delay: i * 0.06 }}
          >
            <span
              className="mono text-xs block mb-4"
              style={{ color: "var(--color-green)", letterSpacing: "0.08em" }}
            >
              {group.label}
            </span>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="mono text-xs px-2.5 py-1 border"
                  style={{
                    borderColor: "var(--color-border-strong)",
                    color: "var(--color-fg-muted)",
                    fontSize: "11px",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Philosophy */}
      <div
        className="border-l-2 pl-6 py-1"
        style={{ borderColor: "var(--color-green)" }}
      >
        <p
          className="mono text-sm italic"
          style={{ color: "var(--color-fg-muted)" }}
        >
          "Notebooks don't ship. Systems do."
        </p>
      </div>
    </div>
  );
}
