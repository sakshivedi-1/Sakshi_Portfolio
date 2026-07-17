import { cn } from "@/lib/utils";
import type { Experience } from "@/lib/data";

interface TimelineItemProps {
  item: Experience;
  isLast: boolean;
}

/** One role on the experience timeline: marker, connector line, details. */
export default function TimelineItem({ item, isLast }: TimelineItemProps) {
  return (
    <li className="relative pl-8 sm:pl-10">
      {/* connector line */}
      {!isLast && (
        <span
          aria-hidden
          className="absolute left-[6px] top-4 h-full w-px bg-divider"
        />
      )}
      {/* marker */}
      <span
        aria-hidden
        className={cn(
          "absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2",
          item.current
            ? "border-accent bg-accent shadow-[0_0_10px_rgba(0,194,255,0.7)]"
            : "border-divider bg-ink2"
        )}
      />

      <div className="pb-10">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="font-display text-lg font-semibold text-textprimary">
            {item.role}
          </h3>
          <span className="inline-flex items-center gap-2 font-mono text-xs text-textsub">
            {item.start} – {item.end}
            {item.current && (
              <span className="rounded bg-accent/10 px-1.5 py-0.5 text-[10px] font-medium text-accent">
                Current
              </span>
            )}
          </span>
        </div>

        <p className="mt-1 font-body text-sm font-medium text-accent">
          {item.company}
          {item.location && (
            <span className="text-textmuted"> · {item.location}</span>
          )}
        </p>

        <ul className="mt-3 space-y-2">
          {item.highlights.map((h) => (
            <li
              key={h}
              className="flex gap-2.5 font-body text-sm leading-relaxed text-textmuted"
            >
              <span
                aria-hidden
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70"
              />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
