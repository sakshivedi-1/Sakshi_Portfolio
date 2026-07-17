"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which `section[id]` is currently centered in the viewport.
 *
 * Uses an IntersectionObserver with a symmetric -45% top/bottom rootMargin so a
 * section is considered "active" only once its midpoint crosses the viewport
 * center. Returns the id of the active section (empty string before any match).
 *
 * @param sectionIds - ordered list of section ids to observe
 */
export function useActiveSection(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}

export default useActiveSection;
