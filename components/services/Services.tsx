"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sofa,
  House,
  Wallpaper,
  Shield,
  Dumbbell,
  Paintbrush,
} from "lucide-react";

const services = [
  {
    title: "Carpet Flooring",
    icon: Sofa,
    description:
      "Premium carpet flooring with luxurious comfort, elegant textures, and superior durability for residential and commercial spaces.",
  },
  {
    title: "Vinyl Flooring",
    icon: House,
    description:
      "Modern waterproof vinyl flooring designed for beauty, strength, and easy maintenance in every room.",
  },
  {
    title: "Imported Wallpaper",
    icon: Wallpaper,
    description:
      "Exclusive imported wallpapers featuring premium finishes, designer patterns, and timeless elegance.",
  },
  {
    title: "Mosquito Net",
    icon: Shield,
    description:
      "Invisible mosquito protection systems for windows and doors with sleek modern installation.",
  },
  {
    title: "Gym Flooring",
    icon: Dumbbell,
    description:
      "Heavy-duty rubber and gym flooring solutions for commercial gyms, fitness studios, and home workouts.",
  },
  {
    title: "Interior Design",
    icon: Paintbrush,
    description:
      "Complete luxury interior design solutions tailored to your lifestyle, combining elegance with functionality.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#050505] py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-yellow-500/10 blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-yellow-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm uppercase tracking-[6px] text-yellow-500">
            OUR SERVICES
          </p>

          <h2 className="mt-5 text-5xl font-bold md:text-6xl text-white">
            Luxury Interior
            <span className="text-yellow-500"> Solutions</span>
          </h2>

          <p className="mt-8 leading-8 text-gray-400">
            We transform ordinary spaces into extraordinary experiences through
            premium materials, innovative designs, and exceptional craftsmanship.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.7,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="
                  group
                  rounded-[28px]
                  border
                  border-yellow-500/20
                  bg-white/5
                  backdrop-blur-xl
                  p-8
                  transition-all
                  duration-300
                  hover:border-yellow-400
                  hover:shadow-[0_0_40px_rgba(212,175,55,.25)]
                "
              >
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-400 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Icon size={32} />
                </div>

                {/* Title */}
                <h3 className="mt-8 text-2xl font-semibold text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-5 leading-8 text-gray-400">
                  {service.description}
                </p>

                {/* Button */}
                <button className="mt-8 flex items-center gap-2 text-yellow-400 transition-all duration-300 group-hover:gap-4">
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}