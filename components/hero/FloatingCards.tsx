"use client";

import { motion } from "framer-motion";
import {
  Award,
  Sofa,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function FloatingCards() {
  return (
    <>
      {/* Top Left */}

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="
        absolute
        top-28
        right-10
        hidden
        xl:flex
        items-center
        gap-4
        rounded-3xl
        border
        border-yellow-500/20
        bg-white/5
        backdrop-blur-2xl
        p-5
        shadow-[0_0_30px_rgba(212,175,55,.18)]
        "
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/10">
          <Award className="text-yellow-400" size={28} />
        </div>

        <div>
          <h3 className="font-semibold text-white">
            Premium Quality
          </h3>

          <p className="text-sm text-gray-400">
            Imported Materials
          </p>
        </div>
      </motion.div>

      {/* Middle Right */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="
        absolute
        top-[48%]
        right-0
        hidden
        xl:flex
        items-center
        gap-4
        rounded-3xl
        border
        border-yellow-500/20
        bg-white/5
        backdrop-blur-2xl
        p-5
        shadow-[0_0_30px_rgba(212,175,55,.18)]
        "
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/10">
          <Sofa className="text-yellow-400" size={28} />
        </div>

        <div>
          <h3 className="font-semibold">
            Modern Interiors
          </h3>

          <p className="text-sm text-gray-400">
            Elegant Designs
          </p>
        </div>
      </motion.div>

      {/* Bottom Left */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4.5,
        }}
        className="
        absolute
        bottom-24
        left-8
        hidden
        xl:flex
        items-center
        gap-4
        rounded-3xl
        border
        border-yellow-500/20
        bg-white/5
        backdrop-blur-2xl
        p-5
        shadow-[0_0_30px_rgba(212,175,55,.18)]
        "
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/10">
          <Sparkles className="text-yellow-400" size={28} />
        </div>

        <div>
          <h3 className="font-semibold">
            500+ Projects
          </h3>

          <p className="text-sm text-gray-400">
            Trusted by Clients
          </p>
        </div>
      </motion.div>

      {/* Bottom Right */}

      <motion.div
        animate={{
          y: [0, 14, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="
        absolute
        bottom-20
        right-20
        hidden
        xl:flex
        items-center
        gap-4
        rounded-3xl
        border
        border-yellow-500/20
        bg-white/5
        backdrop-blur-2xl
        p-5
        shadow-[0_0_30px_rgba(212,175,55,.18)]
        "
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/10">
          <ShieldCheck className="text-yellow-400" size={28} />
        </div>

        <div>
          <h3 className="font-semibold">
            100% Satisfaction
          </h3>

          <p className="text-sm text-gray-400">
            Premium Finish
          </p>
        </div>
      </motion.div>
    </>
  );
}