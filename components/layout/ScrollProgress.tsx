"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 35,
    mass: 0.2,
  });

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="
          fixed
          top-0
          left-0
          right-0
          h-1
          origin-left
          z-[99999]
          bg-gradient-to-r
          from-yellow-700
          via-yellow-400
          to-yellow-200
          shadow-[0_0_20px_rgba(212,175,55,0.9)]
        "
      />

      {/* Glow */}
      <motion.div
        style={{ scaleX }}
        className="
          fixed
          top-0
          left-0
          right-0
          h-[3px]
          origin-left
          z-[99998]
          blur-md
          bg-yellow-400
          opacity-80
        "
      />
    </>
  );
}