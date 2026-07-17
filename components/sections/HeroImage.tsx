"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { profile } from "@/lib/data";

/** Framed portrait: cyan glow, brass corners, floating badge, gentle hover, load skeleton. */
export default function HeroImage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="group relative mx-auto w-full max-w-sm lg:max-w-md">
      {/* cyan glow */}
      <div
        aria-hidden
        className="absolute -inset-5 rounded-3xl bg-accent/20 blur-3xl transition-opacity duration-500 group-hover:opacity-80"
      />

      <div className="relative rounded-2xl border border-accent/60 bg-ink2 p-2 shadow-[0_0_45px_-8px_rgba(0,194,255,0.55)] transition-transform duration-500 ease-out group-hover:-translate-y-1">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
          {/* loading skeleton — hidden once the portrait is decoded */}
          {!loaded && (
            <div className="skeleton-shimmer absolute inset-0 z-10" aria-hidden />
          )}
          <Image
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            fill
            priority
            sizes="(max-width: 1024px) 80vw, 420px"
            onLoad={() => setLoaded(true)}
            className={cn(
              "object-cover object-top transition-[transform,opacity] duration-700 ease-out group-hover:scale-[1.03]",
              loaded ? "opacity-100" : "opacity-0"
            )}
          />
        </div>

        {/* brass accent corners */}
        <span
          aria-hidden
          className="absolute -left-2 -top-2 h-10 w-10 rounded-tl-2xl border-l-2 border-t-2 border-brass"
        />
        <span
          aria-hidden
          className="absolute -bottom-2 -right-2 h-10 w-10 rounded-br-2xl border-b-2 border-r-2 border-brass"
        />

        {/* floating badge */}
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl border border-divider bg-ink/90 px-4 py-2 text-center shadow-lg backdrop-blur-md">
          <p className="font-display text-sm font-semibold text-textprimary">
            Senior Manager · SCM
          </p>
          <p className="font-mono text-[10px] uppercase tracking-wide text-accent">
            Jakson Limited
          </p>
        </div>
      </div>
    </div>
  );
}
