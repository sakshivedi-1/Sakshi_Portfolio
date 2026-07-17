import { Trophy } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/motion/RevealOnScroll";
import StaggerContainer from "@/components/motion/StaggerContainer";
import FadeUp from "@/components/motion/FadeUp";
import { awards } from "@/lib/data";

export default function Awards() {
  return (
    <Section id="awards">
      <RevealOnScroll>
        <SectionHeading
          id="awards-title"
          eyebrow="06 · Awards"
          title="Recognition"
          description="Acknowledged by industry leaders for customer excellence and high-potential leadership."
        />
      </RevealOnScroll>

      <StaggerContainer className="grid gap-5 sm:grid-cols-2">
        {awards.map((award) => (
          <FadeUp key={award.title} className="h-full">
            <article className="relative flex h-full flex-col overflow-hidden rounded-xl border border-divider bg-ink2 p-6 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-brass/60 hover:shadow-[0_0_26px_-10px_rgba(201,146,42,0.5)]">
              {/* brass accent bar */}
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-brass to-transparent"
              />

              <div className="flex items-start justify-between gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brass-soft text-brass">
                  <Trophy size={20} aria-hidden />
                </span>
                {award.year && (
                  <span className="rounded-md border border-divider px-2.5 py-1 font-mono text-[11px] text-brass">
                    {award.year}
                  </span>
                )}
              </div>

              <h3 className="mt-4 font-display text-lg font-semibold text-textprimary">
                {award.title}
              </h3>
              <p className="mt-0.5 font-body text-sm font-medium text-brass">
                {award.issuer}
              </p>
              <p className="mt-3 font-body text-sm leading-relaxed text-textmuted">
                {award.description}
              </p>
            </article>
          </FadeUp>
        ))}
      </StaggerContainer>
    </Section>
  );
}
