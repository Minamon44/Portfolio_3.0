import type { Metadata } from "next";
import "@fontsource-variable/jetbrains-mono/index.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mina Mohsen Azmy — AI & Data Science Engineer",
    template: "%s | Mina Mohsen Azmy",
  },
  description:
    "AI & Data Science Engineer building end-to-end ML systems and LLM applications. Pharmaceutical supply chain intelligence, predictive ML, and production-ready pipelines.",
  openGraph: {
    title: "Mina Mohsen Azmy — AI & Data Science Engineer",
    description:
      "AI & Data Science Engineer building end-to-end ML systems and LLM applications.",
    url: "https://minamon44.github.io/Portfolio-3.0",
    siteName: "Mina Mohsen Azmy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mina Mohsen Azmy — AI & Data Science Engineer",
    description:
      "AI & Data Science Engineer building end-to-end ML systems and LLM applications.",
  },
  metadataBase: new URL("https://minamon44.github.io"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
