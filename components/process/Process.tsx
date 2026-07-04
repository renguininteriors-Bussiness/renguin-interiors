"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  PencilRuler,
  Hammer,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const process = [
  {
    number: "01",
    title: "Consultation",
    icon: MessageSquare,
    description:
      "We understand your vision, requirements, budget and lifestyle before beginning the project.",
  },
  {
    number: "02",
    title: "Planning & Design",
    icon: PencilRuler,
    description:
      "Our designers create elegant layouts, premium material selections and 3D concepts.",
  },
  {
    number: "03",
    title: "Execution",
    icon: Hammer,
    description:
      "Our skilled craftsmen execute every detail with precision and premium quality workmanship.",
  },
  {
    number: "04",
    title: "Luxury Finishing",
    icon: Sparkles,
    description:
      "Every corner is perfected with elegant finishing touches and premium detailing.",
  },
  {
    number: "05",
    title: "Project Handover",
    icon: CheckCircle2,
    description:
      "Final inspection, quality assurance and project delivery with complete customer satisfaction.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#050505] py-32"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-yellow-500">
            Our Process
          </p>

          <h2 className="mt-5 text-5xl font-bold md:text-6xl text-white">
            From Vision To
            <span className="text-yellow-500"> Reality</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl leading-8 text-gray-400">
            Every project follows a carefully planned process to ensure
            outstanding quality, transparency and customer satisfaction.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Vertical Line */}

          <div className="absolute left-8 top-0 h-full w-[2px] bg-gradient-to-b from-yellow-500 via-yellow-400 to-transparent lg:left-1/2 lg:-translate-x-1/2" />

          <div className="space-y-14">

            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.7,
                  }}
                  className={`
                    relative flex flex-col lg:flex-row items-center gap-8
                    ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}
                  `}
                >
                  {/* Card */}

                  <div className="w-full lg:w-[45%] rounded-[30px] border border-yellow-500/20 bg-white/5 p-8 backdrop-blur-xl hover:border-yellow-400 hover:shadow-[0_0_40px_rgba(212,175,55,.2)] transition-all">
                    <span className="text-sm tracking-[4px] text-yellow-500">
                      STEP {step.number}
                    </span>

                    <h3 className="mt-3 text-3xl font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-5 leading-8 text-gray-400">
                      {step.description}
                    </p>
                  </div>

                  {/* Timeline Icon */}

                  <div className="relative z-20 flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#050505] bg-yellow-500 text-black shadow-[0_0_25px_rgba(212,175,55,.5)]">
                    <Icon size={28} />
                  </div>

                  <div className="hidden lg:block lg:w-[45%]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}