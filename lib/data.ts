import type { LucideIcon } from "lucide-react";
import {
  BrainCircuit,
  Database,
  Code2,
  Cpu,
  Bot,
} from "lucide-react";

/* ──────────────────────────────────────────────────────────────────────────
 * Single source of truth for all portfolio content.
 * ────────────────────────────────────────────────────────────────────────── */

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  lead: string;
  summary: string[];
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  linkedinUrl: string;
  github: string;
  githubUrl: string;
  resumeUrl: string;
  photo: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ExpertiseArea {
  title: string;
  icon: LucideIcon;
  points: string[];
}

export interface Project {
  name: string;
  technologies: string;
  githubUrl: string;
  category: string;
  description: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  current: boolean;
  highlights: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  location: string;
  year: string;
  note: string;
}

export interface Award {
  title: string;
  issuer: string;
  year: string;
  description: string;
}

export const profile: Profile = {
  name: "Sakshi Vedi",
  title: "AI & ML Engineer",
  tagline: "AI · Generative AI · Data Science",
  lead: "MSc Artificial Intelligence & Machine Learning candidate at IIIT Lucknow with strong expertise in ML, Deep Learning, Computer Vision, and Generative AI.",
  summary: [
    "I specialize in building LLM-based agent systems, RAG pipelines, and real-time computer vision applications. Proficient in Python-driven ML workflows, model deployment using Streamlit, and applying MLOps principles for reproducible and scalable AI solutions.",
    "Passionate about leveraging Generative AI, Multi-Agent architectures, and advanced data engineering to solve complex real-world problems efficiently.",
  ],
  location: "Lucknow, Uttar Pradesh",
  email: "Vedisakshi2808@gmail.com",
  phone: "+91-9521090495",
  linkedin: "linkedin.com/in/sakshivedi",
  linkedinUrl: "https://linkedin.com/in/sakshivedi",
  github: "github.com/sakshivedi-1",
  githubUrl: "https://github.com/sakshivedi-1",
  resumeUrl: "/Sakshi_vedi_CV2.pdf",
  photo: "/sakshi_image.jpeg",
};

export const stats: Stat[] = [
  { value: "MSc AI", label: "IIIT Lucknow" },
  { value: "77%", label: "Accuracy in Flood Prediction" },
  { value: "4+", label: "Flagship AI Projects" },
  { value: "Multi-Agent", label: "Systems Built" },
];

export const expertise: ExpertiseArea[] = [
  {
    title: "Machine Learning & Deep Learning",
    icon: BrainCircuit,
    points: [
      "Supervised & Unsupervised Learning",
      "CNNs, RNNs, LSTMs, Transformers",
      "Transfer Learning, PyTorch, TensorFlow",
    ],
  },
  {
    title: "Generative AI & LLMs",
    icon: Bot,
    points: [
      "RAG Pipelines, Agentic AI, LangChain, LangGraph",
      "Fine-tuning (PEFT, LoRA, QLoRA)",
      "OpenAI APIs, Edge TTS, AI Validation",
    ],
  },
  {
    title: "Data Engineering & MLOps",
    icon: Database,
    points: [
      "Docker, DVC, CI/CD Pipelines",
      "Model Deployment (FastAPI, Streamlit)",
      "Vector Databases (ChromaDB, PostgreSQL+PGVector)",
    ],
  },
  {
    title: "Computer Vision",
    icon: Cpu,
    points: [
      "Image-based Prediction Systems",
      "Real-time object & pose detection (MediaPipe, YOLO)",
      "OCR and facial landmark analysis",
    ],
  },
  {
    title: "Programming & Tools",
    icon: Code2,
    points: [
      "Python, SQL, Shell Scripting",
      "Git, GitHub, VS Code, Jupyter Notebook",
      "Analytical Thinking & Problem Solving",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Agentic YouTube Summarizer",
    technologies: "LangChain, RAG, PGVector, Gemini",
    githubUrl: "https://github.com/sakshivedi-1",
    category: "Generative AI",
    description:
      "A Multi-Agent system orchestrating Extractor, Analyzer, and Summarizer agents to process YouTube transcripts asynchronously using RAG.",
  },
  {
    name: "Multi Agent AI Trip Planner",
    technologies: "LangGraph, LLMs, Streamlit",
    githubUrl: "https://github.com/sakshivedi-1",
    category: "Agentic AI",
    description:
      "Built a multi-agent travel planner using LangGraph and real-time APIs to generate personalized itineraries with parallel agent execution.",
  },
  {
    name: "RAG-Powered Chatbot",
    technologies: "Groq LLaMA, Docker",
    githubUrl: "https://github.com/sakshivedi-1",
    category: "LLM App",
    description:
      "A chatbot answering queries from PDFs/Markdown with vector similarity retrieval, source citations, and Dockerized Streamlit deployment.",
  },
  {
    name: "Eye Drowsiness Detection",
    technologies: "OpenCV, EAR Analysis",
    githubUrl: "https://github.com/sakshivedi-1",
    category: "Computer Vision",
    description:
      "Real-time driver drowsiness detection using OpenCV facial landmarks and Eye Aspect Ratio, featuring audio alerts and low-latency execution.",
  },
  {
    name: "Fine-Tuned LLaMA 2",
    technologies: "QLoRA, Hugging Face, PyTorch",
    githubUrl: "https://github.com/sakshivedi-1",
    category: "Model Fine-Tuning",
    description:
      "Fine-tuned LLaMA 2 on domain-specific datasets for improved response quality with optimized memory-efficient deployment.",
  },
];

export const experience: Experience[] = [
  {
    company: "Obel System Pvt. Ltd.",
    role: "Data Analyst Intern",
    location: "",
    start: "Apr 2026",
    end: "Jun 2026",
    current: false,
    highlights: [
      "Worked on the Rahat project under the Government of Uttar Pradesh, managing large-scale government portal data.",
      "Performed data validation, cleaning, and ensured consistency across records.",
      "Generated reports, monitored data quality, and resolved data discrepancies to support daily operations.",
    ],
  },
  {
    company: "TaskNova",
    role: "AI Intern",
    location: "",
    start: "Apr 2026",
    end: "May 2026",
    current: false,
    highlights: [
      "Developed backend services using FastAPI and integrated LLM-based conversational AI.",
      "Implemented emotion detection, crisis detection, and personalized context management modules.",
      "Built REST APIs, worked with Supabase (PostgreSQL), Celery, Redis, Docker, and voice AI pipelines.",
    ],
  },
  {
    company: "Gaara AI",
    role: "AI/ML Engineer Intern",
    location: "",
    start: "Feb 2026",
    end: "Mar 2026",
    current: false,
    highlights: [
      "Developed a real-time AI pose detection system using MediaPipe Pose.",
      "Designed pose validation and correction modules, optimizing inference for low-latency.",
      "Evaluated multiple pose estimation frameworks including MediaPipe, MoveNet, and YOLO Pose.",
    ],
  },
  {
    company: "IIIT Lucknow",
    role: "Climate Data Science Volunteer",
    location: "Lucknow",
    start: "Jul 2025",
    end: "Jan 2026",
    current: false,
    highlights: [
      "Built an XGBoost-based flood prediction model using hydrological and meteorological data.",
      "Applied preprocessing, feature engineering, and SMOTE to handle class imbalance.",
      "Achieved 77% accuracy in predicting flood risk across multiple river basins.",
    ],
  },
];

export const education: Education[] = [
  {
    institution: "IIIT Lucknow",
    degree: "MSc (IT)",
    field: "Artificial Intelligence & Machine Learning",
    location: "Lucknow, Uttar Pradesh",
    year: "Present",
    note: "CGPA: 8.62/10",
  },
  {
    institution: "Maharshi Dayanand Saraswati University",
    degree: "BSc",
    field: "Mathematics",
    location: "Ajmer, Rajasthan",
    year: "Completed",
    note: "74.27%",
  },
];

export const awards: Award[] = [];

export const languages: string[] = ["English", "Hindi"];
