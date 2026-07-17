"use client";

import { motion } from "framer-motion";
import { fadeInVariants } from "./variants";

type Trigger = "inherit" | "scroll" | "mount";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  trigger?: Trigger;
  delay?: number;
}

/** Opacity-only fade. Gentle option for elements where movement is undesirable. */
export default function FadeIn({
  children,
  className,
  trigger = "inherit",
  delay = 0,
}: FadeInProps) {
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
      variants={fadeInVariants}
      transition={delay ? { delay } : undefined}
      {...triggerProps}
    >
      {children}
    </motion.div>
  );
}
