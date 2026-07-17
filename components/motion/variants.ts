import type { Variants } from "framer-motion";

/**
 * Shared animation variants. Keys "hidden" / "show" are used everywhere so
 * children can inherit orchestration from a StaggerContainer parent.
 */

const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export const staggerVariants = (
  staggerChildren = 0.12,
  delayChildren = 0.08
): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});
