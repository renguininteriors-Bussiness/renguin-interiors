"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Map() {
  return (
    <section className="relative bg-black py-32">

      {/* Glow */}

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-yellow-500">
            Visit Us
          </p>

          <h2 className="mt-5 text-5xl font-bold">
            Our
            <span className="text-yellow-500">
              {" "}Location
            </span>
          </h2>

          <p className="mt-6 text-gray-400">
            Visit our showroom and discuss your dream interiors.
          </p>

        </motion.div>

        <div className="mt-16 overflow-hidden rounded-[35px] border border-yellow-500/20">

          <iframe
            src="https://www.google.com/maps?q=Virattipathu,Madurai&output=embed"
            className="h-[550px] w-full"
            loading="lazy"
          />

        </div>

        <div className="mt-10 flex items-center justify-center gap-4 text-yellow-400">

          <MapPin />

          <span>
            No.1 Muthu Thevar Colony,
            Virattipathu,
            Madurai
          </span>

        </div>

      </div>

    </section>
  );
}