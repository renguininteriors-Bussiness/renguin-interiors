"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Luxury Living Room",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Modern Office",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Premium Bedroom",
    category: "Luxury",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Designer Dining",
    category: "Interior",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-black py-32"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-[180px]" />

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

            Portfolio

          </p>

          <h2 className="mt-5 text-5xl font-bold md:text-6xl">

            Our Premium

            <span className="text-yellow-500">
              {" "}Projects
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-2xl leading-8 text-gray-400">

            Discover our collection of elegant residential
            and commercial interior transformations.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .15,
                duration: .8,
              }}
              className="
              group
              relative
              overflow-hidden
              rounded-[35px]
              border
              border-yellow-500/20
              "
            >

              <img
                src={project.image}
                alt={project.title}
                className="
                h-[500px]
                w-full
                object-cover
                transition
                duration-700
                group-hover:scale-110
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div
                className="
                absolute
                bottom-8
                left-8
                right-8
                flex
                items-end
                justify-between
                "
              >

                <div>

                  <p className="tracking-[4px] text-yellow-500 uppercase">

                    {project.category}

                  </p>

                  <h3 className="mt-3 text-3xl font-bold">

                    {project.title}

                  </h3>

                </div>

                <button
                  className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-yellow-500
                  text-black
                  transition
                  group-hover:rotate-45
                  "
                >

                  <ArrowUpRight />

                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}