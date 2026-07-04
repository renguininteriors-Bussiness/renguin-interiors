"use client";

import { motion } from "framer-motion";

export default function BackgroundGlow() {
  return (
    <>
      <motion.div
        animate={{
          x: [-100, 100, -100],
          y: [-50, 80, -50],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
        }}
        className="fixed left-0 top-0 h-[700px] w-[700px] rounded-full bg-yellow-500/5 blur-[180px] pointer-events-none"
      />

      <motion.div
        animate={{
          x: [100, -100, 100],
          y: [80, -80, 80],
        }}
        transition={{
          repeat: Infinity,
          duration: 25,
        }}
        className="fixed right-0 bottom-0 h-[700px] w-[700px] rounded-full bg-yellow-500/5 blur-[180px] pointer-events-none"
      />
    </>
  );
}