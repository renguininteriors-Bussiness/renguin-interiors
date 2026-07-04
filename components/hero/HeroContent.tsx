"use client";

import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <div className="relative z-20 max-w-4xl">

      {/* Tag */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        className="inline-flex items-center gap-3 rounded-full border border-yellow-500/30 bg-black/40 backdrop-blur-xl px-6 py-3"
      >
        <span className="h-3 w-3 rounded-full bg-yellow-500 animate-pulse" />

        <p className="uppercase tracking-[5px] text-yellow-500 text-sm">
          Luxury Interior Design
        </p>
      </motion.div>

      {/* Main Title */}

      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: .2,
          duration: 1,
        }}
        className="
        mt-10
        text-6xl
        md:text-8xl
        xl:text-[120px]
        font-black
        leading-none
        tracking-tight
        "
      >
        <span className="block text-white">
          RENGUIN
        </span>

        <span className="block bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-200 bg-clip-text text-transparent">
          INTERIORS
        </span>
      </motion.h1>

      {/* Subtitle */}

      <motion.p
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: .5,
          duration: .9,
        }}
        className="
        mt-10
        max-w-2xl
        text-lg
        md:text-xl
        text-gray-300
        leading-9
        "
      >
        We transform ordinary spaces into timeless luxury interiors
        through premium craftsmanship, elegant flooring,
        imported wallpapers, mosquito net systems,
        and bespoke design solutions.
      </motion.p>

      {/* Premium Line */}

      <motion.div
        initial={{
          width: 0,
        }}
        animate={{
          width: 180,
        }}
        transition={{
          delay: .8,
          duration: 1,
        }}
        className="
        mt-12
        h-[3px]
        rounded-full
        bg-gradient-to-r
        from-yellow-700
        via-yellow-400
        to-yellow-200
        "
      />

    </div>
  );
}