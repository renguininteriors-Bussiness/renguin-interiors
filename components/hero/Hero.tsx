"use client";

import HeroContent from "./HeroContent";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import FloatingCards from "./FloatingCards";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505]">

      {/* Background Image */}
      <div className="absolute inset-0">

        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Interior"
          className="h-full w-full object-cover opacity-20 scale-110"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

      </div>

      {/* Gold Glow */}

      <div className="absolute left-[-250px] top-[-150px] h-[600px] w-[600px] rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="absolute right-[-200px] bottom-[-150px] h-[550px] w-[550px] rounded-full bg-yellow-500/10 blur-[180px]" />

      {/* Floating Cards */}

      <FloatingCards />

      {/* Content */}

      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-10">

        <div className="max-w-4xl">

          <HeroContent />

          <HeroButtons />

          <HeroStats />

        </div>

      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.6,
        }}
        className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2"
      >
        <div className="flex h-12 w-7 justify-center rounded-full border-2 border-yellow-500">

          <div className="mt-2 h-3 w-1.5 rounded-full bg-yellow-500" />

        </div>
      </motion.div>

    </section>
  );
}