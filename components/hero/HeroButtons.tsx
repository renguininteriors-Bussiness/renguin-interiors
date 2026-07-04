"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.9,
        duration: 0.8,
      }}
      className="mt-14 flex flex-wrap gap-6"
    >
      {/* Primary Button */}

      <motion.a
        href="#portfolio"
        whileHover={{
          scale: 1.05,
          y: -3,
        }}
        whileTap={{
          scale: 0.97,
        }}
        className="
          group
          relative
          overflow-hidden
          rounded-full
          bg-gradient-to-r
          from-yellow-700
          via-yellow-500
          to-yellow-300
          px-9
          py-4
          font-semibold
          text-black
          shadow-[0_0_30px_rgba(212,175,55,.35)]
        "
      >
        <span className="relative z-10 flex items-center gap-3">
          Explore Projects

          <ArrowRight
            size={20}
            className="transition-transform duration-300 group-hover:translate-x-2"
          />
        </span>

        <div
          className="
            absolute
            inset-0
            -translate-x-full
            bg-white/20
            transition-transform
            duration-700
            group-hover:translate-x-full
          "
        />
      </motion.a>

      {/* Secondary Button */}

      <motion.a
        href="#contact"
        whileHover={{
          scale: 1.05,
          y: -3,
        }}
        whileTap={{
          scale: 0.97,
        }}
        className="
          group
          rounded-full
          border
          border-yellow-500/40
          bg-white/5
          backdrop-blur-xl
          px-9
          py-4
          text-yellow-400
          transition-all
          duration-300
          hover:border-yellow-400
          hover:bg-yellow-500
          hover:text-black
        "
      >
        <span className="flex items-center gap-3">
          <PhoneCall size={19} />

          Book Consultation
        </span>
      </motion.a>
    </motion.div>
  );
}