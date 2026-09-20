import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    id: "pharmaflow",
    featured: true,
    title: "PharmaFlow",
    subtitle: "Pharmaceutical supply chain intelligence",
    role: "Risk Agent · visualizations",
    stack: ["Python", "FastAPI", "deterministic rule engines"],
    problem:
      "Opaque shortage and expiry risk in pharmaceutical inventory — operators had no early signal before SKUs became critical.",
    method:
      "Deterministic multi-agent pipeline with shortage, expiry, and criticality scoring. Rule engines over probabilistic models for audit-ready, explainable output.",
    impact:
      "Production-ready risk signal across full inventory. Criticality flags surface before stockouts occur. Audit trail built in by design.",
    github: "https://github.com/Minamon44",
    date: "Jul 2026",
  },
  {
    id: "hbc-predict",
    featured: false,
    title: "HBC Predict",
    subtitle: "Hotel booking cancellation intelligence",
    role: "Telegram bot interface · ML pipeline integration",
    stack: ["Python", "scikit-learn", "python-telegram-bot", "Streamlit"],
    problem:
      "Revenue loss from unseen booking cancellations — no system to flag risk before it hit.",
    method:
      "scikit-learn classification pipeline on booking features. Owned final integration of team's end-to-end ML pipeline from raw data to live predictions.",
    impact:
      "ROC-AUC 0.91. Live Telegram bot interface for real-time cancellation risk scoring. Streamlit dashboard for operators.",
    github: "https://github.com/Minamon44",
    date: "Aug 2026",
  },
  {
    id: "proposal-writer",
    featured: false,
    title: "Freelance Proposal Writer",
    subtitle: "LLM-generated proposals, tuned per platform",
    role: "Full-stack build · LLM pipeline design",
    stack: ["Python", "FastAPI", "Next.js", "Groq (Llama 3.3-70B)", "Docker"],
    problem:
      "Generic proposals lose freelance bids — platform-specific tone, skill-gap awareness, and budget calibration require work that scales poorly.",
    method:
      "Groq Llama 3.3-70B prompt pipelines. CV + job post parsed → platform-specific proposal with skill-gap analysis and budget suggestions. FastAPI backend, Next.js frontend, containerized.",
    impact:
      "Tailored proposals generated in seconds. Shipped as a full-stack containerized product — not a script.",
    github: "https://github.com/Minamon44",
    date: "Jun 2026",
  },
];
