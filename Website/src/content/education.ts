import type { EducationEntry, CertEntry } from "@/types/content";

export const education: EducationEntry[] = [
  {
    degree: "B.Sc. Computer Engineering",
    institution: "Kafr El-Shiekh University (KSU)",
    period: "2022 — 2027",
    details: "Faculty of Engineering — Department of Computer Engineering. Five-year track, class of 2027.",
  },
];

export const certs: CertEntry[] = [
  {
    name: "DEPI Data Scientist (IBM track)",
    issuer: "MCIT Egypt",
    date: "Nov 2025 – Jul 2026",
    hours: "174 hrs",
    capstone: "PharmaFlow",
  },
  {
    name: "Advanced Data Analytics",
    issuer: "NTI / ITIDA",
    date: "Aug 2026",
    hours: "120 hrs",
    capstone: "HBC Predict",
  },
  {
    name: "Building LLM Applications With Prompt Engineering",
    issuer: "NVIDIA DLI",
    date: "Mar 2026",
  },
  {
    name: "AI for All: From Basics to GenAI Practice",
    issuer: "NVIDIA Academy",
    date: "Feb 2026",
  },
  {
    name: "Python Programming Basics",
    issuer: "ITI / Mahara-Tech",
    date: "Feb 2026",
  },
  {
    name: "Electrical Engineering Training",
    issuer: "UNESCO / RCTWS",
    date: "Jul 2025",
  },
];

export const languages = [
  { lang: "Arabic", level: "Native" },
  { lang: "English", level: "C1 — Advanced" },
  { lang: "Japanese", level: "N5 — Learning" },
];
