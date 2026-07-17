const LANGUAGES = ["English", "Hindi"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-divider bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row sm:px-6">
        <p className="font-mono text-xs text-textmuted">
          © {year} Sakshi Vedi · AI & ML Engineer
        </p>
        <ul className="flex items-center gap-2">
          {LANGUAGES.map((lang) => (
            <li
              key={lang}
              className="rounded border border-divider px-2 py-1 font-mono text-[10px] text-textmuted"
            >
              {lang}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
