"use client";

import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Whatsapp() {
  return (
    <motion.a
      href="https://wa.me/918056893829"
      target="_blank"
      rel="noopener noreferrer"
      initial={{
        scale: 0,
      }}
      animate={{
        scale: 1,
      }}
      transition={{
        duration: .6,
      }}
      whileHover={{
        scale: 1.15,
      }}
      whileTap={{
        scale: .9,
      }}
      className="
      fixed
      bottom-8
      right-8
      z-[9999]
      "
    >
      <div
        className="
        relative
        w-16
        h-16
        rounded-full
        bg-[#25D366]
        flex
        items-center
        justify-center
        shadow-[0_0_30px_rgba(37,211,102,.6)]
        "
      >
        {/* Pulse */}

        <span
          className="
          absolute
          inset-0
          rounded-full
          bg-[#25D366]
          animate-ping
          opacity-30
          "
        />

        <FaWhatsapp
          className="relative text-white"
          size={32}
        />
      </div>
    </motion.a>
  );
}