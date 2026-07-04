"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const rates = {
  carpet: 180,
  vinyl: 220,
  wallpaper: 120,
  gym: 250,
};

export default function Calculator() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [service, setService] = useState("carpet");

  const area = Number(length || 0) * Number(width || 0);
  const total =
    area *
    rates[service as keyof typeof rates];

  return (
    <section
      className="bg-black py-32"
      id="calculator"
    >
      <div className="mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-yellow-500">
            Cost Calculator
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Estimate Your
            <span className="text-yellow-500">
              {" "}Project Cost
            </span>
          </h2>

          <p className="mt-6 text-gray-400">
            Get an approximate estimate instantly.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* Form */}

          <div className="rounded-[35px] border border-yellow-500/20 bg-white/5 p-8 backdrop-blur-xl">

            <label className="mb-2 block">
              Room Length (ft)
            </label>

            <input
              type="number"
              value={length}
              onChange={(e) =>
                setLength(e.target.value)
              }
              className="mb-6 w-full rounded-xl bg-black/30 p-4"
            />

            <label className="mb-2 block">
              Room Width (ft)
            </label>

            <input
              type="number"
              value={width}
              onChange={(e) =>
                setWidth(e.target.value)
              }
              className="mb-6 w-full rounded-xl bg-black/30 p-4"
            />

            <label className="mb-2 block">
              Service
            </label>

            <select
              value={service}
              onChange={(e) =>
                setService(e.target.value)
              }
              className="w-full rounded-xl bg-black/30 p-4"
            >
              <option value="carpet">Carpet Flooring</option>
              <option value="vinyl">Vinyl Flooring</option>
              <option value="wallpaper">Wallpaper</option>
              <option value="gym">Gym Flooring</option>
            </select>

          </div>

          {/* Result */}

          <div className="rounded-[35px] border border-yellow-500/20 bg-white/5 p-8 backdrop-blur-xl">

            <h3 className="text-3xl font-bold">
              Estimate
            </h3>

            <div className="mt-10 space-y-6">

              <div className="flex justify-between">

                <span>Area</span>

                <span>{area} sq.ft</span>

              </div>

              <div className="flex justify-between">

                <span>Rate</span>

                <span>
                  ₹
                  {
                    rates[
                      service as keyof typeof rates
                    ]
                  }
                  /sq.ft
                </span>

              </div>

              <hr className="border-yellow-500/20" />

              <div className="flex justify-between text-4xl font-bold text-yellow-400">

                <span>Total</span>

                <span>
                  ₹
                  {total.toLocaleString()}
                </span>

              </div>

            </div>

            <button className="mt-10 w-full rounded-full bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-300 py-4 font-bold text-black">
              Get Free Quote
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}