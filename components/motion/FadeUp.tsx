"use client";

import { motion } from "framer-motion";
import { fadeUpVariants } from "./variants";

type Trigger = "inherit" | "scroll" | "mount";

interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  /** "inherit" (default) animates from a StaggerContainer parent; "scroll" / "mount" self-trigger. */
  trigger?: Trigger;
  delay?: number;
}

/** Fade + rise. Inherits from a StaggerContainer, or self-triggers on scroll/mount. */
export default function FadeUp({
  children,
  className,
  trigger = "inherit",
  delay = 0,
}: FadeUpProps) {
  const triggerProps =
    trigger === "scroll"
      ? ({
          initial: "hidden",
          whileInView: "show",
          viewport: { once: true, amount: 0.2 },
        } as const)
      : trigger === "mount"
        ? ({ initial: "hidden", animate: "show" } as const)
        : {};

  return (
    <motion.div
      className={className}
      variants={fadeUpVariants}
      transition={delay ? { delay } : undefined}
      {...triggerProps}
    >
      {children}
    </motion.div>
  );
}
