"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

import { sendEnquiry } from "@/lib/api";

export default function Contact() {

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    area: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    setLoading(true);

    setSuccess("");

    setError("");

    if (
      !form.name ||
      !form.phone ||
      !form.email ||
      !form.service ||
      !form.message
    ) {

      setError("Please fill all required fields.");

      setLoading(false);

      return;

    }

    try {

      await sendEnquiry(form);

      setSuccess("✅ Enquiry Sent Successfully!");

      setForm({
        name: "",
        phone: "",
        email: "",
        service: "",
        area: "",
        budget: "",
        message: "",
      });

    } catch (err) {

      console.error(err);

      setError("❌ Failed to send enquiry.");

    } finally {

      setLoading(false);

    }

  };

  return (

    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] py-32"
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

            Contact Us

          </p>

          <h2 className="mt-5 text-5xl font-bold text-white md:text-6xl">

            Let's Build Your

            <span className="text-yellow-500">

              {" "}Dream Space

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-2xl leading-8 text-gray-400">

            Get in touch with our experts and transform your
            residential or commercial space into something
            extraordinary.

          </p>

        </motion.div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
            {/* ================= CONTACT INFO ================= */}

<motion.div
  initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="space-y-8"
>

  {/* Phone */}

  <div className="rounded-3xl border border-yellow-500/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-yellow-500 hover:shadow-[0_0_40px_rgba(234,179,8,0.25)]">

    <div className="flex items-center gap-5">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10">

        <Phone
          className="text-yellow-400"
          size={30}
        />

      </div>

      <div>

        <h3 className="text-2xl font-semibold text-white">

          Call Us

        </h3>

        <p className="mt-2 text-gray-300">

          +91 80568 93829

        </p>

        <p className="text-gray-300">

          +91 93422 89521

        </p>

      </div>

    </div>

  </div>

  {/* Email */}

  <div className="rounded-3xl border border-yellow-500/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-yellow-500 hover:shadow-[0_0_40px_rgba(234,179,8,0.25)]">

    <div className="flex items-center gap-5">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10">

        <Mail
          className="text-yellow-400"
          size={30}
        />

      </div>

      <div>

        <h3 className="text-2xl font-semibold text-white">

          Email

        </h3>

        <p className="mt-2 text-gray-300 break-all">

          renguininteriors@gmail.com

        </p>

      </div>

    </div>

  </div>

  {/* Address */}

  <div className="rounded-3xl border border-yellow-500/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-yellow-500 hover:shadow-[0_0_40px_rgba(234,179,8,0.25)]">

    <div className="flex items-center gap-5">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10">

        <MapPin
          className="text-yellow-400"
          size={30}
        />

      </div>

      <div>

        <h3 className="text-2xl font-semibold text-white">

          Office Address

        </h3>

        <p className="mt-3 leading-8 text-gray-300">

          No.1 Muthu Thevar Colony
          <br />
          Virattipathu
          <br />
          Madurai - 625016

        </p>

      </div>

    </div>

  </div>

  {/* Business Hours */}

  <div className="rounded-3xl border border-yellow-500/20 bg-gradient-to-r from-yellow-600/10 via-yellow-500/10 to-yellow-400/10 p-8 backdrop-blur-xl">

    <h3 className="mb-5 text-2xl font-bold text-yellow-400">

      Business Hours

    </h3>

    <div className="space-y-3 text-gray-300">

      <div className="flex justify-between">

        <span>Monday - Saturday</span>

        <span>09:00 AM - 08:00 PM</span>

      </div>

      <div className="flex justify-between">

        <span>Sunday</span>

        <span>10:00 AM - 02:00 PM</span>

      </div>

    </div>

  </div>

</motion.div>{/* ================= ENQUIRY FORM ================= */}

<motion.form
  onSubmit={handleSubmit}
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="rounded-[35px] border border-yellow-500/20 bg-white/5 p-8 backdrop-blur-xl"
>

  <div className="grid gap-6">

    <input
      type="text"
      name="name"
      value={form.name}
      onChange={handleChange}
      required
      placeholder="Full Name"
      className="rounded-xl border border-yellow-500/20 bg-black/30 p-4 text-white outline-none transition focus:border-yellow-500"
    />

    <input
      type="tel"
      name="phone"
      value={form.phone}
      onChange={handleChange}
      required
      placeholder="Phone Number"
      className="rounded-xl border border-yellow-500/20 bg-black/30 p-4 text-white outline-none transition focus:border-yellow-500"
    />

    <input
      type="email"
      name="email"
      value={form.email}
      onChange={handleChange}
      required
      placeholder="Email Address"
      className="rounded-xl border border-yellow-500/20 bg-black/30 p-4 text-white outline-none transition focus:border-yellow-500"
    />

    <select
      name="service"
      value={form.service}
      onChange={handleChange}
      required
      className="rounded-xl border border-yellow-500/20 bg-black/30 p-4 text-white outline-none transition focus:border-yellow-500"
    >
      <option value="">Select Service</option>
      <option value="Carpet Flooring">Carpet Flooring</option>
      <option value="Vinyl Flooring">Vinyl Flooring</option>
      <option value="Imported Wallpaper">Imported Wallpaper</option>
      <option value="Mosquito Net">Mosquito Net</option>
      <option value="Gym Flooring">Gym Flooring</option>
    </select>

    <div className="grid gap-6 md:grid-cols-2">

      <input
        type="text"
        name="area"
        value={form.area}
        onChange={handleChange}
        placeholder="Area (sq.ft)"
        className="rounded-xl border border-yellow-500/20 bg-black/30 p-4 text-white outline-none transition focus:border-yellow-500"
      />

      <input
        type="text"
        name="budget"
        value={form.budget}
        onChange={handleChange}
        placeholder="Budget"
        className="rounded-xl border border-yellow-500/20 bg-black/30 p-4 text-white outline-none transition focus:border-yellow-500"
      />

    </div>

    <textarea
      rows={6}
      name="message"
      value={form.message}
      onChange={handleChange}
      required
      placeholder="Tell us about your project..."
      className="rounded-xl border border-yellow-500/20 bg-black/30 p-4 text-white outline-none transition focus:border-yellow-500"
    />

    <button
      type="submit"
      disabled={loading}
      className="flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-300 px-8 py-4 font-semibold text-black transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {loading ? (
        <>
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent" />
          Sending...
        </>
      ) : (
        <>
          Send Enquiry
          <Send size={18} />
        </>
      )}
    </button>

    {success && (
      <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-center text-green-400">
        {success}
      </div>
    )}

    {error && (
      <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-center text-red-400">
        {error}
      </div>
    )}

  </div>

</motion.form>

</div>

</div>

</section>
  );
}