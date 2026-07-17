import { stats } from "@/lib/data";

/** Stat strip beneath the hero (years, voltage class, portfolio, MVA). */
export default function HeroStats() {
  return (
    <div className="relative border-y border-divider bg-ink2/40">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 px-4 sm:grid-cols-4 sm:px-6">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`px-2 py-7 text-center sm:py-9 ${
              i !== 0 ? "border-l border-divider/60" : ""
            } ${i === 2 ? "border-l-0 sm:border-l" : ""}`}
          >
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <span className="block font-display text-3xl font-bold text-accent sm:text-4xl">
                {stat.value}
              </span>
              <span className="mt-1 block font-mono text-[11px] uppercase tracking-wide text-textmuted">
                {stat.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
