"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { hero } from "@/content/hero";

const typeColor = {
  prompt: "var(--color-green)",
  cmd:    "var(--color-fg-dim)",
  out:    "var(--color-fg-dim)",
  ok:     "var(--color-green)",
  warn:   "var(--color-amber)",
  val:    "var(--color-blue)",
  blank:  "transparent",
};

export function HeroSection() {
  return (
    <section
      className="w-full border-b"
      style={{ borderColor: "var(--color-border)" }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ minHeight: "calc(100vh - 56px)" }}
        >
          {/* LEFT — identity + headline */}
          <motion.div
            className="flex flex-col justify-center py-16 pr-0 md:pr-12 border-b md:border-b-0 md:border-r"
            style={{ borderColor: "var(--color-border)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Photo + identity row */}
            <div className="flex items-start gap-5 mb-8">
              <div style={{ flexShrink: 0 }}>
                <Image
                  src={hero.photo}
                  alt="Mina Mohsen Azmy"
                  width={72}
                  height={72}
                  className="object-cover"
                  style={{ border: "1px solid var(--color-green)" }}
                  unoptimized
                />
              </div>
              <div className="flex flex-col gap-1 pt-1">
                <span
                  className="mono text-sm font-medium"
                  style={{ color: "var(--color-fg-muted)" }}
                >
                  {hero.name}
                </span>
                <div
                  className="mono flex items-center gap-2 text-xs"
                  style={{ color: "var(--color-green)" }}
                >
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full"
                    style={{
                      background: "var(--color-green)",
                      animation: "pulse-dot 2s infinite",
                    }}
                    aria-hidden="true"
                  />
                  {hero.status}
                </div>
                <span
                  className="mono text-xs"
                  style={{ color: "var(--color-fg-dim)" }}
                >
                  {hero.location}
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1
              className="mono font-bold leading-none mb-5"
              style={{
                fontSize: "clamp(28px, 4vw, 42px)",
                letterSpacing: "-0.02em",
                color: "var(--color-fg)",
              }}
            >
              {hero.tagline.split("running systems.")[0]}
              <span style={{ color: "var(--color-green)" }}>running systems.</span>
            </h1>

            <p
              className="text-sm leading-relaxed mb-8 max-w-md"
              style={{ color: "var(--color-fg-muted)" }}
            >
              {hero.intro}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link
                href={hero.ctaHref}
                className="mono text-xs px-5 py-2.5 transition-opacity duration-150 hover:opacity-80"
                style={{
                  background: "var(--color-green)",
                  color: "var(--color-bg)",
                  letterSpacing: "0.04em",
                }}
              >
                {hero.ctaLabel}
              </Link>
              <a
                href="https://minamon44.github.io/Mina_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mono text-xs px-5 py-2.5 border transition-colors duration-150"
                style={{
                  borderColor: "var(--color-border-strong)",
                  color: "var(--color-fg-muted)",
                  letterSpacing: "0.04em",
                }}
              >
                résumé ↗
              </a>
            </div>
          </motion.div>

          {/* RIGHT — terminal + stats */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          >
            {/* Terminal */}
            <div
              className="flex-1 flex flex-col py-8 px-8"
              style={{ background: "var(--color-bg-card)" }}
            >
              {/* Window chrome */}
              <div className="flex items-center gap-2 mb-5">
                {["var(--color-border-strong)", "var(--color-border-strong)", "var(--color-green)"].map(
                  (c, i) => (
                    <span
                      key={i}
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: c }}
                      aria-hidden="true"
                    />
                  )
                )}
              </div>

              {/* Lines */}
              <div className="mono text-xs leading-7 flex-1" aria-label="Terminal output">
                {hero.terminalLines.map((line, i) => (
                  <motion.p
                    key={i}
                    className="m-0 whitespace-pre"
                    style={{ color: typeColor[line.type] }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + i * 0.07, duration: 0.2 }}
                  >
                    {line.type === "blank" ? "\u00A0" : line.text}
                    {i === hero.terminalLines.length - 1 && (
                      <span
                        className="inline-block w-2 h-3 align-middle ml-1"
                        style={{
                          background: "var(--color-green)",
                          animation: "blink 1s step-end infinite",
                        }}
                        aria-hidden="true"
                      />
                    )}
                  </motion.p>
                ))}
              </div>
            </div>

            {/* Stats row */}
            <div
              className="grid border-t"
              style={{
                gridTemplateColumns: `repeat(${hero.stats.length}, 1fr)`,
                borderColor: "var(--color-border)",
              }}
            >
              {hero.stats.map((stat, i) => (
                <div
                  key={i}
                  className="px-6 py-5 border-r last:border-r-0"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <span
                    className="mono font-bold block mb-1"
                    style={{ fontSize: "22px", color: "var(--color-fg)", lineHeight: 1 }}
                  >
                    {stat.value}
                    <span style={{ color: "var(--color-green)" }}>{stat.suffix}</span>
                  </span>
                  <span
                    className="mono block"
                    style={{ fontSize: "10px", color: "var(--color-fg-dim)", letterSpacing: "0.07em", textTransform: "uppercase" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
