import type { SkillGroup } from "@/types/content";

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "SQL", "Embedded C/C++"],
  },
  {
    label: "ML / Data Science",
    items: [
      "scikit-learn", "Pandas", "ML pipeline design",
      "model evaluation", "statistical analysis",
      "regression analysis", "hypothesis testing",
      "time series forecasting", "MLflow",
      "Hugging Face", "experiment tracking",
    ],
  },
  {
    label: "LLM / GenAI",
    items: [
      "prompt engineering",
      "Groq (Llama 3.3-70B)",
      "LLM-integrated application design",
    ],
  },
  {
    label: "Backend & Tooling",
    items: ["FastAPI", "python-telegram-bot", "Streamlit", "Docker", "Next.js"],
  },
  {
    label: "Analytics",
    items: ["Power BI", "Tableau"],
  },
  {
    label: "Other",
    items: ["Arduino", "embedded systems"],
  },
];
