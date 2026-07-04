"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TrailPoint = {
  id: number;
  x: number;
  y: number;
};

export default function CursorTrail() {
  const [points, setPoints] = useState<TrailPoint[]>([]);

  useEffect(() => {
    let id = 0;

    const move = (e: MouseEvent) => {
      const point = {
        id: id++,
        x: e.clientX,
        y: e.clientY,
      };

      setPoints((prev) => [...prev.slice(-15), point]);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <AnimatePresence>
      {points.map((point) => (
        <motion.div
          key={point.id}
          initial={{
            opacity: 0.8,
            scale: 1,
          }}
          animate={{
            opacity: 0,
            scale: 0,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="pointer-events-none fixed z-[9998] h-3 w-3 rounded-full bg-yellow-400"
          style={{
            left: point.x - 6,
            top: point.y - 6,
          }}
        />
      ))}
    </AnimatePresence>
  );
}