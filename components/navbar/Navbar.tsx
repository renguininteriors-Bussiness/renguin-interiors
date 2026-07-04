"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Gallery", href: "#gallery" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-yellow-500/20 bg-black/80 backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

          {/* Logo */}

          <Link href="/" className="flex items-center gap-4">

            <Image
              src="/logo.png"
              alt="RENGUIN Logo"
              width={60}
              height={60}
              priority
              className="object-contain"
            />

            <div>

              <h1 className="text-xl font-bold tracking-[5px] text-yellow-400">
                RENGUIN
              </h1>

              <p className="text-[10px] tracking-[5px] text-yellow-500">
                INTERIOR DESIGN
              </p>

            </div>

          </Link>

          {/* Desktop Menu */}

          <nav className="hidden items-center gap-10 lg:flex">

            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm uppercase tracking-[2px] text-white transition hover:text-yellow-400"
              >
                {item.name}
              </Link>
            ))}

          </nav>

          {/* Quote Button */}

          <a
            href="https://wa.me/918056893829"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-yellow-500 bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-300 px-6 py-3 font-semibold text-black shadow-[0_0_20px_rgba(212,175,55,.35)] transition hover:scale-105 lg:flex"
          >
            Get Quote

            <ArrowRight size={18} />

          </a>

          {/* Mobile Button */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white lg:hidden"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>
      </motion.header>

      {/* Mobile Menu */}

      <AnimatePresence>

        {isOpen && (

          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed top-0 right-0 z-[60] flex h-screen w-[320px] flex-col bg-[#050505] p-8 shadow-2xl lg:hidden"
          >

            <div className="mb-12 flex items-center justify-between">

              <Image
                src="/logo.png"
                alt="Logo"
                width={55}
                height={55}
              />

              <button
                onClick={() => setIsOpen(false)}
              >
                <X
                  size={32}
                  className="text-white"
                />
              </button>

            </div>

            <div className="flex flex-col gap-7">

              {navLinks.map((item) => (

                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-white/10 pb-3 text-lg text-white transition hover:text-yellow-400"
                >
                  {item.name}
                </Link>

              ))}

            </div>

            <a
              href="https://wa.me/918056893829"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-300 py-4 font-bold text-black"
            >
              Get Quote

              <ArrowRight size={18} />

            </a>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}