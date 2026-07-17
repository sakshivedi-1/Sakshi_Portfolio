import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/motion/RevealOnScroll";
import StaggerContainer from "@/components/motion/StaggerContainer";
import FadeUp from "@/components/motion/FadeUp";
import { expertise } from "@/lib/data";

export default function Expertise() {
  return (
    <Section id="expertise">
      <RevealOnScroll>
        <SectionHeading
          id="expertise-title"
          eyebrow="02 · Expertise"
          title="Core Capabilities"
          description="Extensive experience in designing, building, and deploying scalable AI solutions, multi-agent systems, and real-time models."
        />
      </RevealOnScroll>

      <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {expertise.map((area) => {
          const Icon = area.icon;
          return (
            <FadeUp key={area.title} className="h-full">
              <div className="h-full rounded-xl border border-divider bg-ink2 p-6 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-[0_0_26px_-10px_rgba(0,194,255,0.55)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon size={20} aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-textprimary">
                  {area.title}
                </h3>
                <ul className="mt-3 space-y-2">
                  {area.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 font-body text-sm leading-relaxed text-textmuted"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
