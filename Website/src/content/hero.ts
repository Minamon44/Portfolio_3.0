import type { HeroData } from "@/types/content";

export const hero: HeroData = {
  name: "Mina Mohsen Azmy",
  handle: "mina@minamon44",
  title: "AI & Data Science Engineer",
  tagline: "I turn raw data into running systems.",
  intro:
    "End-to-end ML pipelines, multi-agent risk scoring, and LLM tooling — built for production, not notebooks. Pharmaceutical supply chains, predictive ML, freelance automation.",
  location: "Cairo, Egypt",
  status: "open to AI & Data Science roles — class of 2027",
  photo: "Website/public/mina.jpg",
  ctaLabel: "./projects",
  ctaHref: "#projects",
  stats: [
    { value: "6", suffix: "×", label: "certs earned" },
    { value: "294", suffix: "h", label: "training hours" },
    { value: "3", suffix: "×", label: "systems shipped" },
  ],
  terminalLines: [
    { type: "prompt", text: "mina@minamon44 ~/projects/pharmaflow" },
    { type: "cmd",    text: "$ python risk_agent.py --mode production" },
    { type: "blank",  text: "" },
    { type: "out",    text: "initializing agents · FastAPI · rule-engines" },
    { type: "ok",     text: "✓ shortage agent        online" },
    { type: "ok",     text: "✓ expiry agent          online" },
    { type: "warn",   text: "⚠ criticality flag      3 SKUs at risk" },
    { type: "ok",     text: "✓ risk scores           audit-ready · explainable" },
    { type: "blank",  text: "" },
    { type: "prompt", text: "mina@minamon44 ~/projects/pharmaflow $" },
  ],
};
