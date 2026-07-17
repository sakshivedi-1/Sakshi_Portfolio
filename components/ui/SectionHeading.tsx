interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  /** id for the heading — referenced by the parent Section's aria-labelledby. */
  id?: string;
}

/** Eyebrow + title + gradient rule used at the top of every section. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 sm:mb-14">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-3 font-display text-3xl font-bold text-textprimary sm:text-4xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl font-body text-textmuted">{description}</p>
      )}
      <div className="mt-5 h-px w-full bg-gradient-to-r from-accent/60 via-divider to-transparent" />
    </div>
  );
}
