"use client";

import { motion } from "motion/react";
import { contact } from "@/content/contact";

const links = [
  {
    label: "email",
    display: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    label: "linkedin",
    display: "linkedin.com/in/mena-mohsen",
    href: contact.linkedin,
  },
  {
    label: "github",
    display: "github.com/Minamon44",
    href: contact.github,
  },
];

export function ContactSection() {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex items-center gap-4">
        <span
          className="mono text-xs"
          style={{ color: "var(--color-green)", letterSpacing: "0.08em" }}
        >
          contact
        </span>
        <div className="flex-1 h-px" style={{ background: "var(--color-border)" }} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left — message */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2
            className="mono font-bold mb-4"
            style={{ fontSize: "28px", color: "var(--color-fg)", letterSpacing: "-0.01em", lineHeight: 1.2 }}
          >
            Building something?<br />
            <span style={{ color: "var(--color-green)" }}>Let's talk.</span>
          </h2>
          <p
            className="text-sm leading-relaxed mb-8 max-w-sm"
            style={{ color: "var(--color-fg-muted)" }}
          >
            Open to AI & Data Science roles, freelance data projects, and
            collaboration. Cairo-based, remote-friendly.
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="mono text-xs px-6 py-3 inline-block transition-opacity duration-150 hover:opacity-80"
            style={{
              background: "var(--color-green)",
              color: "var(--color-bg)",
              letterSpacing: "0.04em",
            }}
          >
            send a message ↗
          </a>
        </motion.div>

        {/* Right — link list */}
        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== "email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="border flex items-center justify-between px-5 py-4 group transition-colors duration-150"
              style={{ borderColor: "var(--color-border)" }}
            >
              <div className="flex flex-col gap-0.5">
                <span
                  className="mono text-xs"
                  style={{ color: "var(--color-fg-dim)", fontSize: "10px", letterSpacing: "0.08em" }}
                >
                  {link.label}
                </span>
                <span
                  className="mono text-sm group-hover:text-[var(--color-fg)] transition-colors duration-150"
                  style={{ color: "var(--color-fg-muted)" }}
                >
                  {link.display}
                </span>
              </div>
              <span
                className="mono text-xs group-hover:translate-x-1 transition-transform duration-150"
                style={{ color: "var(--color-green)" }}
              >
                ↗
              </span>
            </a>
          ))}

          {/* Resume download */}
          <a
            href={contact.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="border flex items-center justify-between px-5 py-4 group transition-colors duration-150 mt-2"
            style={{
              borderColor: "var(--color-border-strong)",
              background: "var(--color-bg-card)",
            }}
          >
            <div className="flex flex-col gap-0.5">
              <span
                className="mono text-xs"
                style={{ color: "var(--color-fg-dim)", fontSize: "10px", letterSpacing: "0.08em" }}
              >
                résumé
              </span>
              <span
                className="mono text-sm"
                style={{ color: "var(--color-fg-muted)" }}
              >
                Mina_CV_Sep26.pdf
              </span>
            </div>
            <span
              className="mono text-xs group-hover:translate-y-0.5 transition-transform duration-150"
              style={{ color: "var(--color-green)" }}
            >
              ↓
            </span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
