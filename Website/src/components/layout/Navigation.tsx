"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { hero } from "@/content/hero";

const navLinks = [
  { href: "#projects",  label: "./projects" },
  { href: "#skills",    label: "./skills" },
  { href: "#education", label: "./education" },
  { href: "#contact",   label: "./contact" },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeId = useScrollSpy(["hero", "projects", "skills", "education", "contact"]);

  return (
    <nav
      className="sticky top-0 z-50 h-14 w-full border-b"
      style={{
        background: "rgba(2,6,23,0.85)",
        backdropFilter: "blur(12px)",
        borderColor: "var(--color-border)",
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="h-full max-w-[1100px] mx-auto px-6 flex items-center justify-between">

        {/* Identity */}
        <div className="flex items-center gap-3">
          <Image
            src={hero.photo}
            alt="Mina Mohsen Azmy"
            width={26}
            height={26}
            className="rounded-full object-cover"
            style={{ border: "1px solid var(--color-green)" }}
            unoptimized
          />
          <span
            className="mono text-sm font-medium"
            style={{ color: "var(--color-green)" }}
          >
            {hero.handle}
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="mono text-xs link-slide transition-colors duration-150"
                style={{
                  color: isActive ? "var(--color-fg)" : "var(--color-fg-dim)",
                  letterSpacing: "0.05em",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={hero.ctaHref.replace("#projects", "#contact")}
            className="mono text-xs px-4 py-1.5 transition-colors duration-150"
            style={{
              color: "var(--color-bg)",
              background: "var(--color-green)",
              letterSpacing: "0.05em",
            }}
          >
            get in touch
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-5 h-px transition-all duration-200"
              style={{
                background: "var(--color-fg-muted)",
                transform:
                  i === 0 && isMenuOpen ? "rotate(45deg) translateY(8px)"
                  : i === 2 && isMenuOpen ? "rotate(-45deg) translateY(-8px)"
                  : "none",
                opacity: i === 1 && isMenuOpen ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile drawer */}
      {isMenuOpen && (
        <div
          className="md:hidden absolute top-14 left-0 right-0 border-b py-6 flex flex-col items-center gap-5"
          style={{
            background: "var(--color-bg)",
            borderColor: "var(--color-border)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="mono text-sm"
              style={{ color: "var(--color-fg-muted)" }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
