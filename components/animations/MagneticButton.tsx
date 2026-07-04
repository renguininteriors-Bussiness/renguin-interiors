"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function MagneticButton({
  children,
  className = "",
}: Props) {
  return (
    <motion.button
      whileHover={{
        scale: 1.08,
        rotate: -1,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
      }}
      className={className}
    >
      {children}
    </motion.button>
  );
}