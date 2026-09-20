export interface HeroData {
  name: string;
  handle: string;
  title: string;
  tagline: string;
  intro: string;
  location: string;
  status: string;
  photo: string;
  ctaLabel: string;
  ctaHref: string;
  stats: { value: string; suffix: string; label: string }[];
  terminalLines: { type: "prompt" | "cmd" | "out" | "ok" | "warn" | "val" | "blank"; text: string }[];
}

export interface Project {
  id: string;
  featured: boolean;
  title: string;
  subtitle: string;
  role: string;
  stack: string[];
  problem: string;
  method: string;
  impact: string;
  github: string;
  date: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface CertEntry {
  name: string;
  issuer: string;
  date: string;
  hours?: string;
  capstone?: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface ExperienceEntry {
  role: string;
  org: string;
  type: string;
  period: string;
  achievements: string[];
}

export interface Contact {
  email: string;
  linkedin: string;
  github: string;
  resume: string;
}
