"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  Building2,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    icon: Building2,
    end: 500,
    suffix: "+",
    title: "Projects Completed",
  },
  {
    icon: Users,
    end: 300,
    suffix: "+",
    title: "Happy Clients",
  },
  {
    icon: Award,
    end: 10,
    suffix: "+",
    title: "Years Experience",
  },
  {
    icon: ShieldCheck,
    end: 100,
    suffix: "%",
    title: "Premium Quality",
  },
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="relative bg-black py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * .1,
                }}
                className="
                rounded-3xl
                border
                border-yellow-500/20
                bg-white/5
                p-8
                text-center
                backdrop-blur-xl
                hover:border-yellow-400
                hover:shadow-[0_0_40px_rgba(212,175,55,.25)]
                "
              >

                <Icon
                  className="mx-auto text-yellow-400"
                  size={40}
                />

                <h2 className="mt-6 text-5xl font-bold text-white">

                  {inView && (
                    <CountUp
                      end={item.end}
                      duration={3}
                    />
                  )}

                  {item.suffix}

                </h2>

                <p className="mt-4 text-gray-400">
                  {item.title}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}