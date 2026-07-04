"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function BeforeAfter() {
  const [position, setPosition] = useState(50);

  const handleMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = (x / rect.width) * 100;

    if (percent >= 0 && percent <= 100) {
      setPosition(percent);
    }
  };

  return (
    <section
      id="before-after"
      className="relative overflow-hidden bg-[#050505] py-32"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-yellow-500">
            Before & After
          </p>

          <h2 className="mt-5 text-5xl font-bold md:text-6xl text-white">
            See The
            <span className="text-yellow-500">
              {" "}Transformation
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl leading-8 text-gray-400">
            Move your mouse over the image to compare
            the space before and after renovation.
          </p>

        </motion.div>

        {/* Compare */}

        <div
          onMouseMove={handleMove}
          className="
          relative
          mt-20
          h-[650px]
          overflow-hidden
          rounded-[35px]
          border
          border-yellow-500/20
          shadow-[0_0_40px_rgba(212,175,55,.15)]
          cursor-ew-resize
          "
        >
          {/* After */}

          <img
            src="/beforeafter/after.jpg"
            alt="After"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Before */}

          <div
            className="absolute inset-y-0 left-0 overflow-hidden"
            style={{
              width: `${position}%`,
            }}
          >
            <img
              src="/beforeafter/before.jpg"
              alt="Before"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Divider */}

          <div
            style={{
              left: `${position}%`,
            }}
            className="absolute top-0 h-full w-1 -translate-x-1/2 bg-yellow-400"
          >
            <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-yellow-500 text-xl font-bold text-black shadow-[0_0_25px_rgba(212,175,55,.6)]">
              ↔
            </div>
          </div>

          {/* Labels */}

          <div className="absolute left-8 top-8 rounded-full bg-black/60 px-5 py-2 text-sm tracking-[3px] text-yellow-400 backdrop-blur-lg">
            BEFORE
          </div>

          <div className="absolute right-8 top-8 rounded-full bg-black/60 px-5 py-2 text-sm tracking-[3px] text-yellow-400 backdrop-blur-lg">
            AFTER
          </div>

        </div>

      </div>

    </section>
  );
}