"use client";

import { motion } from "motion/react";
import { education, certs, languages } from "@/content/education";

export function EducationSection() {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex items-center gap-4">
        <span
          className="mono text-xs"
          style={{ color: "var(--color-green)", letterSpacing: "0.08em" }}
        >
          education & credentials
        </span>
        <div className="flex-1 h-px" style={{ background: "var(--color-border)" }} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Degree */}
        <div className="lg:col-span-1">
          <span
            className="mono text-xs block mb-4"
            style={{ color: "var(--color-fg-dim)", letterSpacing: "0.08em" }}
          >
            degree
          </span>
          {education.map((entry, i) => (
            <motion.div
              key={i}
              className="border p-5"
              style={{ borderColor: "var(--color-border)" }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h3
                className="mono font-bold mb-1"
                style={{ fontSize: "14px", color: "var(--color-fg)" }}
              >
                {entry.degree}
              </h3>
              <p className="mono text-xs mb-2" style={{ color: "var(--color-green)" }}>
                {entry.institution}
              </p>
              <p className="mono text-xs mb-3" style={{ color: "var(--color-fg-dim)" }}>
                {entry.period}
              </p>
              {entry.details && (
                <p className="text-xs leading-relaxed" style={{ color: "var(--color-fg-muted)" }}>
                  {entry.details}
                </p>
              )}
            </motion.div>
          ))}

          {/* Languages */}
          <div className="mt-6 border p-5" style={{ borderColor: "var(--color-border)" }}>
            <span
              className="mono text-xs block mb-4"
              style={{ color: "var(--color-fg-dim)", letterSpacing: "0.08em" }}
            >
              languages
            </span>
            <div className="flex flex-col gap-2">
              {languages.map(({ lang, level }) => (
                <div key={lang} className="flex items-center justify-between">
                  <span className="mono text-xs" style={{ color: "var(--color-fg-muted)" }}>
                    {lang}
                  </span>
                  <span className="mono text-xs" style={{ color: "var(--color-fg-dim)", fontSize: "10px" }}>
                    {level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="lg:col-span-2">
          <span
            className="mono text-xs block mb-4"
            style={{ color: "var(--color-fg-dim)", letterSpacing: "0.08em" }}
          >
            certifications — {certs.length}
          </span>
          <div className="flex flex-col gap-3">
            {certs.map((cert, i) => (
              <motion.div
                key={i}
                className="border p-5 flex flex-col gap-1"
                style={{ borderColor: "var(--color-border)" }}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.35, ease: "easeOut", delay: i * 0.06 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <h4
                    className="mono font-medium text-sm"
                    style={{ color: "var(--color-fg)" }}
                  >
                    {cert.name}
                  </h4>
                  <span
                    className="mono text-xs shrink-0"
                    style={{ color: "var(--color-fg-dim)", fontSize: "10px" }}
                  >
                    {cert.date}
                  </span>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="mono text-xs" style={{ color: "var(--color-green)", fontSize: "11px" }}>
                    {cert.issuer}
                  </span>
                  {cert.hours && (
                    <span className="mono text-xs" style={{ color: "var(--color-fg-dim)", fontSize: "10px" }}>
                      {cert.hours}
                    </span>
                  )}
                  {cert.capstone && (
                    <span
                      className="mono text-xs px-2 py-0.5"
                      style={{
                        background: "rgba(34,197,94,0.1)",
                        color: "var(--color-green)",
                        fontSize: "10px",
                        border: "1px solid rgba(34,197,94,0.2)",
                      }}
                    >
                      capstone: {cert.capstone}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
