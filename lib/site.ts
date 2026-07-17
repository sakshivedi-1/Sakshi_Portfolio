/**
 * Centralized site / SEO configuration.
 *
 * NOTE: set NEXT_PUBLIC_SITE_URL to the real production domain before deploying.
 * It is the base used for canonical URLs, OpenGraph, sitemap and robots.
 */
export const siteConfig = {
  name: "Sakshi Vedi",
  title: "Sakshi Vedi — AI & ML Engineer | Generative AI",
  shortTitle: "Sakshi Vedi",
  description:
    "MSc Artificial Intelligence & Machine Learning candidate with expertise in Deep Learning, Computer Vision, and Generative AI.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sakshivedi.in",
  locale: "en_IN",
  keywords: [
    "Sakshi Vedi",
    "AI & ML",
    "Generative AI",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "RAG Pipelines",
    "LangChain",
    "LangGraph",
  ],
  ogImageAlt: "Sakshi Vedi — AI & ML Engineer",
} as const;
