import { Download, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/motion/RevealOnScroll";
import StaggerContainer from "@/components/motion/StaggerContainer";
import FadeUp from "@/components/motion/FadeUp";
import { profile } from "@/lib/data";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    external: false,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
    external: false,
  },
  {
    icon: ExternalLink,
    label: "LinkedIn",
    value: profile.linkedin,
    href: profile.linkedinUrl,
    external: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    href: null,
    external: false,
  },
];

export default function Contact() {
  return (
    <Section id="contact">
      <RevealOnScroll>
        <SectionHeading
          id="contact-title"
          eyebrow="07 · Contact"
          title="Get in touch"
          description="Open to new opportunities and collaborations in AI, Machine Learning, and Generative AI."
        />
      </RevealOnScroll>

      <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {channels.map(({ icon: Icon, label, value, href, external }) => {
          const inner = (
            <>
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Icon size={20} aria-hidden />
              </span>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-wide text-textsub">
                {label}
              </p>
              <p className="mt-1 break-words font-body text-sm text-textprimary">
                {value}
              </p>
            </>
          );

          const base =
            "flex h-full flex-col rounded-xl border border-divider bg-ink2 p-6";

          return (
            <FadeUp key={label} className="h-full">
              {href ? (
                <a
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={`${base} transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-[0_0_26px_-10px_rgba(0,194,255,0.5)]`}
                >
                  {inner}
                </a>
              ) : (
                <div className={base}>{inner}</div>
              )}
            </FadeUp>
          );
        })}
      </StaggerContainer>

      <RevealOnScroll>
        <div className="mt-8">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-sky"
          >
            <Download size={16} aria-hidden />
            Download Résumé
          </a>
        </div>
      </RevealOnScroll>
    </Section>
  );
}
