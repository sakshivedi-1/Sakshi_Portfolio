import { Briefcase, Globe, MapPin, Zap } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/motion/RevealOnScroll";
import StaggerContainer from "@/components/motion/StaggerContainer";
import FadeUp from "@/components/motion/FadeUp";
import { profile, languages } from "@/lib/data";

const facts = [
  { icon: Briefcase, label: "Education", value: "MSc AI & ML, IIIT Lucknow" },
  { icon: Zap, label: "Focus", value: "Generative AI, Computer Vision, MLOps" },
  { icon: MapPin, label: "Based in", value: profile.location },
  { icon: Globe, label: "Languages", value: languages.join(" · ") },
];

export default function About() {
  return (
    <Section id="about">
      <RevealOnScroll>
        <SectionHeading
          id="about-title"
          eyebrow="01 · About"
          title="Professional Summary"
        />
      </RevealOnScroll>

      <StaggerContainer className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
        <FadeUp>
          <div className="space-y-4">
            {profile.summary.map((para, i) => (
              <p
                key={i}
                className="font-body text-base leading-relaxed text-textmuted"
              >
                {para}
              </p>
            ))}
          </div>
        </FadeUp>

        <FadeUp className="h-full">
          <aside className="h-full rounded-xl border border-divider bg-ink2 p-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-textsub">
              At a glance
            </p>
            <dl className="mt-5 space-y-5">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon size={16} aria-hidden />
                  </span>
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-wide text-textsub">
                      {label}
                    </dt>
                    <dd className="mt-0.5 font-body text-sm text-textprimary">
                      {value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </aside>
        </FadeUp>
      </StaggerContainer>
    </Section>
  );
}
