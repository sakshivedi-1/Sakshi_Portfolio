import { ArrowRight, Download, MapPin } from "lucide-react";
import { profile } from "@/lib/data";
import HeroStats from "./HeroStats";
import HeroImage from "./HeroImage";
import StaggerContainer from "@/components/motion/StaggerContainer";
import FadeUp from "@/components/motion/FadeUp";
import RevealOnScroll from "@/components/motion/RevealOnScroll";

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden"
    >
      {/* ambient cyan glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 55% at 78% 18%, rgba(0,194,255,0.13), transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-28">
        {/* ── Left: intro (sequenced on mount) ── */}
        <StaggerContainer trigger="mount">
          <FadeUp>
            <span className="inline-flex items-center gap-2 rounded-full border border-divider bg-ink2/60 px-3 py-1 font-mono text-xs text-textmuted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {profile.tagline}
            </span>
          </FadeUp>

          <FadeUp>
            <h1
              id="hero-title"
              className="mt-6 font-display text-4xl font-bold leading-[1.05] text-textprimary sm:text-5xl lg:text-6xl"
            >
              {profile.name}
            </h1>
          </FadeUp>

          <FadeUp>
            <p className="mt-3 font-display text-lg font-medium text-accent sm:text-xl">
              {profile.title}
            </p>
          </FadeUp>

          <FadeUp>
            <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-textmuted">
              {profile.lead}
            </p>
          </FadeUp>

          <FadeUp>
            <p className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-textsub">
              <MapPin size={14} aria-hidden />
              {profile.location}
            </p>
          </FadeUp>

          <FadeUp>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-sky"
              >
                Get in touch
                <ArrowRight size={16} aria-hidden />
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-divider px-5 py-2.5 text-sm font-semibold text-textprimary transition-colors hover:border-accent/60 hover:text-accent"
              >
                <Download size={16} aria-hidden />
                Download Résumé
              </a>
            </div>
          </FadeUp>
        </StaggerContainer>

        {/* ── Right: portrait (arrives last) ── */}
        <FadeUp trigger="mount" delay={0.45}>
          <HeroImage />
        </FadeUp>
      </div>

      <RevealOnScroll>
        <HeroStats />
      </RevealOnScroll>
    </section>
  );
}
