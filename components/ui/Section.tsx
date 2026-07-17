import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

/** Consistent section shell: anchor id, navbar scroll offset, max width, padding.
 *  Becomes a named "region" landmark via aria-labelledby → `<id>-title`. */
export default function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn("scroll-mt-24 border-t border-divider/60", className)}
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        {children}
      </div>
    </section>
  );
}
