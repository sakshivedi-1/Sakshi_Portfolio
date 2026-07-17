import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/motion/RevealOnScroll";
import StaggerContainer from "@/components/motion/StaggerContainer";
import FadeUp from "@/components/motion/FadeUp";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Section id="projects">
      <RevealOnScroll>
        <SectionHeading
          id="projects-title"
          eyebrow="03 · Projects"
          title="Flagship Projects"
          description="Advanced AI systems, Agentic workflows, and real-time computer vision applications."
        />
      </RevealOnScroll>

      <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <FadeUp key={project.name} className="h-full">
            <ProjectCard project={project} />
          </FadeUp>
        ))}
      </StaggerContainer>
    </Section>
  );
}
