"use client";

import { motion } from "framer-motion";
import { fadeUpVariants } from "./variants";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  /** Fraction of the element that must be visible before revealing. */
  amount?: number;
}

/** Self-contained "reveal once when scrolled into view" wrapper for single blocks. */
export default function RevealOnScroll({
  children,
  className,
  amount = 0.2,
}: RevealOnScrollProps) {
  return (
    <motion.div
      className={className}
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}
