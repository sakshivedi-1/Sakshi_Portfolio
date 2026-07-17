"use client";

import { MotionConfig } from "framer-motion";

/**
 * Global motion settings. reducedMotion="user" makes every Framer Motion
 * component honor the OS "prefers-reduced-motion" setting automatically —
 * positional/scale animation is dropped while opacity transitions remain.
 */
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
