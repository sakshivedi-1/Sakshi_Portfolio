import { ExternalLink, Code } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/data";

/** Single project card with technologies and github link. */
export default function ProjectCard({ project }: { project: Project }) {
  const isFlagship = project.category === "Generative AI" || project.category === "Agentic AI";

  return (
    <article className="flex h-full flex-col rounded-xl border border-divider bg-ink2 p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_10px_34px_-12px_rgba(0,194,255,0.5)]">
      <div className="flex items-center justify-between gap-3">
        <span
          className={cn(
            "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 font-mono text-xs font-semibold",
            isFlagship
              ? "bg-brass-soft text-brass"
              : "bg-accent/10 text-accent"
          )}
        >
          <Code size={12} aria-hidden />
          {project.technologies}
        </span>
        <span className="text-right font-mono text-[10px] uppercase tracking-wide text-textsub">
          {project.category}
        </span>
      </div>

      <h3 className="mt-4 font-display text-lg font-semibold text-textprimary">
        {project.name}
      </h3>
      {project.githubUrl && (
        <a 
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1.5 font-mono text-xs text-accent hover:text-sky transition-colors"
        >
          <ExternalLink size={14} />
          View Source
        </a>
      )}
      <p className="mt-3 font-body text-sm leading-relaxed text-textmuted">
        {project.description}
      </p>
    </article>
  );
}
