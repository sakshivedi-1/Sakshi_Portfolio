"use client";

import { motion } from "framer-motion";
import { staggerVariants } from "./variants";

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  /** "scroll" (default) triggers once on viewport entry; "mount" runs immediately. */
  trigger?: "scroll" | "mount";
  stagger?: number;
  delayChildren?: number;
}

/** Orchestrates child FadeUp / FadeIn elements in sequence. */
export default function StaggerContainer({
  children,
  className,
  trigger = "scroll",
  stagger = 0.12,
  delayChildren = 0.08,
}: StaggerContainerProps) {
  const triggerProps =
    trigger === "mount"
      ? ({ initial: "hidden", animate: "show" } as const)
      : ({
          initial: "hidden",
          whileInView: "show",
          viewport: { once: true, amount: 0.15 },
        } as const);

  return (
    <motion.div
      className={className}
      variants={staggerVariants(stagger, delayChildren)}
      {...triggerProps}
    >
      {children}
    </motion.div>
  );
}
