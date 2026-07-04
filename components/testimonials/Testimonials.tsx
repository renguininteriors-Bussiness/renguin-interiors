"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Arun Kumar",
    role: "Home Owner",
    review:
      "RENGUIN transformed our house into a luxurious living space. Their flooring and wallpaper work exceeded our expectations.",
  },
  {
    name: "Priya Sharma",
    role: "Business Owner",
    review:
      "Professional team, premium quality materials and timely completion. Highly recommended for commercial interiors.",
  },
  {
    name: "Rahul Raj",
    role: "Villa Client",
    review:
      "The attention to detail and elegant finishing made our villa look extraordinary. Excellent customer service.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-black py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-yellow-500/10 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-yellow-500">
            Testimonials
          </p>

          <h2 className="mt-5 text-5xl font-bold text-white md:text-6xl">
            What Our
            <span className="text-yellow-500"> Clients Say</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl leading-8 text-gray-400">
            Every project is crafted with passion, precision and premium
            quality.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.8,
              }}
              whileHover={{
                y: -10,
              }}
              className="rounded-[30px] border border-yellow-500/20 bg-white/5 p-8 backdrop-blur-xl hover:border-yellow-400 hover:shadow-[0_0_40px_rgba(212,175,55,.2)]"
            >
              <Quote className="text-yellow-400" size={40} />

              <div className="mt-6 flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="mt-6 leading-8 text-gray-300">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white">
                  {item.name}
                </h3>

                <p className="text-yellow-500">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}