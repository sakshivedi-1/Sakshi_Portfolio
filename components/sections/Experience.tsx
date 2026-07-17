import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/motion/RevealOnScroll";
import TimelineItem from "./TimelineItem";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <Section id="experience">
      <RevealOnScroll>
        <SectionHeading
          id="experience-title"
          eyebrow="04 · Experience"
          title="Career Timeline"
          description="15+ years across procurement, supply chain and business development in the power-infrastructure sector."
        />
      </RevealOnScroll>

      <RevealOnScroll amount={0.05}>
        <ol className="relative">
          {experience.map((item, i) => (
            <TimelineItem
              key={item.company}
              item={item}
              isLast={i === experience.length - 1}
            />
          ))}
        </ol>
      </RevealOnScroll>
    </Section>
  );
}
