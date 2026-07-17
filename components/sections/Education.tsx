import { GraduationCap } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/motion/RevealOnScroll";
import StaggerContainer from "@/components/motion/StaggerContainer";
import FadeUp from "@/components/motion/FadeUp";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <Section id="education">
      <RevealOnScroll>
        <SectionHeading
          id="education-title"
          eyebrow="05 · Education"
          title="Education"
          description="Continuous learning — advanced management and AI qualifications alongside an engineering foundation."
        />
      </RevealOnScroll>

      <StaggerContainer className="grid gap-5 lg:grid-cols-3">
        {education.map((item) => (
          <FadeUp key={item.institution} className="h-full">
            <article className="flex h-full flex-col rounded-xl border border-divider bg-ink2 p-6 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-[0_0_26px_-10px_rgba(0,194,255,0.5)]">
              <div className="flex items-center justify-between gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <GraduationCap size={20} aria-hidden />
                </span>
                <span className="rounded-md border border-divider px-2.5 py-1 font-mono text-[11px] text-textmuted">
                  {item.year}
                </span>
              </div>

              <h3 className="mt-4 font-display text-lg font-semibold text-textprimary">
                {item.degree}
              </h3>
              <p className="mt-0.5 font-body text-sm font-medium text-accent">
                {item.field}
              </p>
              <p className="mt-2 font-body text-sm text-textmuted">
                {item.institution}
              </p>
              <p className="font-mono text-xs text-textsub">{item.location}</p>
              <p className="mt-3 font-body text-sm text-textmuted">{item.note}</p>
            </article>
          </FadeUp>
        ))}
      </StaggerContainer>
    </Section>
  );
}
