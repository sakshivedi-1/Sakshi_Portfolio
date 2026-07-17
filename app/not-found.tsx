import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
      <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent">
        Error 404
      </p>
      <h1 className="mt-4 font-display text-4xl font-bold text-textprimary sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md font-body text-textmuted">
        The page you’re looking for doesn’t exist or may have been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-sky"
      >
        <ArrowLeft size={16} aria-hidden />
        Back to home
      </Link>
    </div>
  );
}
