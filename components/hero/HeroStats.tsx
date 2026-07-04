"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Users,
  Award,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "500+",
    label: "Projects Completed",
  },
  {
    icon: Users,
    value: "200+",
    label: "Happy Clients",
  },
  {
    icon: Award,
    value: "10+",
    label: "Years Experience",
  },
  {
    icon: Sparkles,
    value: "100%",
    label: "Premium Finish",
  },
];

export default function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 1.2,
        duration: 0.8,
      }}
      className="mt-20 grid grid-cols-2 gap-6 lg:grid-cols-4"
    >
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
            whileHover={{
              y: -10,
              scale: 1.04,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              group
              rounded-3xl
              border
              border-yellow-500/20
              bg-white/5
              backdrop-blur-xl
              p-6
              hover:border-yellow-400
              hover:shadow-[0_0_40px_rgba(212,175,55,.25)]
            "
          >
            <div
              className="
                mb-5
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-yellow-500/10
                text-yellow-400
              "
            >
              <Icon size={28} />
            </div>

            <h3 className="text-4xl font-bold text-yellow-400">
              {item.value}
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              {item.label}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}