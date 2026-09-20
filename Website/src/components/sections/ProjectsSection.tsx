"use client";

import { motion } from "motion/react";
import { projects } from "@/content/projects";

export function ProjectsSection() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <div className="flex flex-col gap-12">
      {/* Section label */}
      <div className="flex items-center gap-4">
        <span
          className="mono text-xs"
          style={{ color: "var(--color-green)", letterSpacing: "0.08em" }}
        >
          selected work
        </span>
        <div className="flex-1 h-px" style={{ background: "var(--color-border)" }} />
        <span className="mono text-xs" style={{ color: "var(--color-fg-dim)" }}>
          {projects.length} projects
        </span>
      </div>

      {/* Featured project — wide card */}
      {featured && (
        <motion.article
          className="border"
          style={{ borderColor: "var(--color-border)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          {/* Header bar */}
          <div
            className="px-8 py-4 border-b flex items-center justify-between"
            style={{
              background: "var(--color-bg-card)",
              borderColor: "var(--color-border)",
            }}
          >
            <div className="flex items-center gap-3">
              <span
                className="mono text-xs px-2 py-0.5"
                style={{
                  background: "var(--color-green)",
                  color: "var(--color-bg)",
                  fontSize: "10px",
                  letterSpacing: "0.06em",
                }}
              >
                featured
              </span>
              <span className="mono text-xs" style={{ color: "var(--color-fg-dim)" }}>
                {featured.date}
              </span>
            </div>
            <span className="mono text-xs" style={{ color: "var(--color-fg-dim)" }}>
              role: {featured.role}
            </span>
          </div>

          {/* Body */}
          <div className="px-8 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3
                className="mono font-bold mb-1"
                style={{ fontSize: "24px", color: "var(--color-fg)", letterSpacing: "-0.01em" }}
              >
                {featured.title}
              </h3>
              <p className="text-sm mb-6" style={{ color: "var(--color-fg-muted)" }}>
                {featured.subtitle}
              </p>

              <div className="flex flex-col gap-4 text-sm">
                {[
                  { key: "problem", value: featured.problem },
                  { key: "method",  value: featured.method },
                ].map(({ key, value }) => (
                  <div key={key}>
                    <span
                      className="mono text-xs block mb-1"
                      style={{ color: "var(--color-fg-dim)", letterSpacing: "0.06em" }}
                    >
                      {key}
                    </span>
                    <p style={{ color: "var(--color-fg-muted)", lineHeight: 1.65 }}>{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-4 text-sm">
                <div>
                  <span
                    className="mono text-xs block mb-1"
                    style={{ color: "var(--color-fg-dim)", letterSpacing: "0.06em" }}
                  >
                    impact
                  </span>
                  <p style={{ color: "var(--color-fg-muted)", lineHeight: 1.65 }}>{featured.impact}</p>
                </div>
              </div>

              <div className="mt-8">
                {/* Stack tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {featured.stack.map((s) => (
                    <span
                      key={s}
                      className="mono text-xs px-3 py-1 border"
                      style={{
                        borderColor: "var(--color-border-strong)",
                        color: "var(--color-fg-muted)",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <a
                  href={featured.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono text-xs inline-flex items-center gap-2 link-slide transition-colors duration-150"
                  style={{ color: "var(--color-fg-dim)" }}
                >
                  view on github ↗
                </a>
              </div>
            </div>
          </div>
        </motion.article>
      )}

      {/* Secondary projects — 2-col grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {rest.map((project, i) => (
          <motion.article
            key={project.id}
            className="border flex flex-col"
            style={{ borderColor: "var(--color-border)" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.08 }}
          >
            {/* Header */}
            <div
              className="px-6 py-3 border-b flex items-center justify-between"
              style={{
                background: "var(--color-bg-card)",
                borderColor: "var(--color-border)",
              }}
            >
              <span className="mono text-xs" style={{ color: "var(--color-fg-dim)" }}>
                {project.date}
              </span>
              <span className="mono text-xs" style={{ color: "var(--color-fg-dim)" }}>
                {project.role}
              </span>
            </div>

            {/* Content */}
            <div className="px-6 py-6 flex flex-col flex-1">
              <h3
                className="mono font-bold mb-1"
                style={{ fontSize: "18px", color: "var(--color-fg)", letterSpacing: "-0.01em" }}
              >
                {project.title}
              </h3>
              <p className="text-xs mb-4" style={{ color: "var(--color-fg-muted)" }}>
                {project.subtitle}
              </p>

              <div className="flex flex-col gap-3 text-xs flex-1">
                {[
                  { key: "problem", value: project.problem },
                  { key: "impact",  value: project.impact },
                ].map(({ key, value }) => (
                  <div key={key}>
                    <span
                      className="mono block mb-0.5"
                      style={{ color: "var(--color-fg-dim)", letterSpacing: "0.06em" }}
                    >
                      {key}
                    </span>
                    <p style={{ color: "var(--color-fg-muted)", lineHeight: 1.6 }}>{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 3).map((s) => (
                    <span
                      key={s}
                      className="mono text-xs px-2 py-0.5 border"
                      style={{
                        borderColor: "var(--color-border)",
                        color: "var(--color-fg-dim)",
                        fontSize: "10px",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono text-xs link-slide transition-colors duration-150"
                  style={{ color: "var(--color-fg-dim)", fontSize: "10px" }}
                >
                  github ↗
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
