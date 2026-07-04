"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Award,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const features = [
  "Premium Quality Materials",
  "Experienced Interior Designers",
  "Modern & Luxury Designs",
  "100% Customer Satisfaction",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] py-32"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-20 h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-10">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          <p className="uppercase tracking-[6px] text-yellow-500">
            About Us
          </p>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-white">

            Creating Luxury
            <span className="text-yellow-500">
              {" "}Interior Experiences
            </span>

          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-400">

            At RENGUIN Interior Design, we specialize in
            transforming homes, offices, villas, apartments,
            and commercial spaces into elegant environments.

            Every project reflects luxury,
            innovation and timeless craftsmanship.

          </p>

          <div className="mt-10 space-y-5">

            {features.map((item) => (

              <div
                key={item}
                className="flex items-center gap-4"
              >

                <CheckCircle2
                  className="text-yellow-400"
                  size={26}
                />

                <p className="text-lg text-gray-300">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="grid gap-6"
        >

          <div className="overflow-hidden rounded-[35px]">

            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1974&auto=format&fit=crop"
              alt="Luxury Interior"
              className="h-[500px] w-full object-cover transition duration-700 hover:scale-110"
            />

          </div>

          <div className="grid grid-cols-3 gap-5">

            <div className="rounded-3xl border border-yellow-500/20 bg-white/5 p-6 text-center backdrop-blur-xl">

              <Award
                className="mx-auto text-yellow-400"
                size={34}
              />

              <h3 className="mt-4 text-3xl font-bold text-white">
                500+
              </h3>

              <p className="mt-2 text-gray-400">
                Projects
              </p>

            </div>

            <div className="rounded-3xl border border-yellow-500/20 bg-white/5 p-6 text-center backdrop-blur-xl">

              <ShieldCheck
                className="mx-auto text-yellow-400"
                size={34}
              />

              <h3 className="mt-4 text-3xl font-bold text-white">
                10+
              </h3>

              <p className="mt-2 text-gray-400">
                Years
              </p>

            </div>

            <div className="rounded-3xl border border-yellow-500/20 bg-white/5 p-6 text-center backdrop-blur-xl">

              <Sparkles
                className="mx-auto text-yellow-400"
                size={34}
              />

              <h3 className="mt-4 text-3xl font-bold text-white">
                100%
              </h3>

              <p className="mt-2 text-gray-400">
                Premium
              </p>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}