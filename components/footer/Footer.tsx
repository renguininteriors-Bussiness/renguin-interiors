"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Gallery", href: "#gallery" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-yellow-500/20 bg-[#050505]">

      {/* Gold Glow */}

      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-4">

              <Image
                src="/logo.png"
                alt="RENGUIN"
                width={70}
                height={70}
                priority
                className="object-contain"
              />

              <div>

                <h2 className="text-2xl font-bold tracking-[4px] text-yellow-400">
                  RENGUIN
                </h2>

                <p className="text-xs tracking-[4px] text-yellow-500">
                  INTERIOR DESIGN
                </p>

              </div>

            </div>

            <p className="mt-8 leading-8 text-gray-400">
              Luxury Interior Design specializing in Carpet Flooring,
              Vinyl Flooring, Imported Wallpaper, Mosquito Nets,
              Gym Flooring and complete premium interior solutions.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <div className="space-y-4">

              {quickLinks.map((item) => (

                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-400 transition hover:text-yellow-400"
                >
                  {item.name}
                </Link>

              ))}

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-6">

              <div className="flex gap-4">

                <Phone
                  className="mt-1 text-yellow-400"
                  size={20}
                />

                <div>

                  <p className="text-gray-300">
                    +91 80568 93829
                  </p>

                  <p className="text-gray-300">
                    +91 93422 89521
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <Mail
                  className="mt-1 text-yellow-400"
                  size={20}
                />

                <p className="text-gray-300">
                  renguininteriors@gmail.com
                </p>

              </div>

              <div className="flex gap-4">

                <MapPin
                  className="mt-1 text-yellow-400"
                  size={20}
                />

                <p className="text-gray-300">
                  No.1 MuthuThevar Colony,
                  Virattipathu,
                  Madurai - 625016
                </p>

              </div>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-white">
              Follow Us
            </h3>

            <div className="flex flex-wrap gap-4">

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-yellow-500/20 bg-white/5 text-yellow-400 transition hover:scale-110 hover:bg-yellow-500 hover:text-black"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-yellow-500/20 bg-white/5 text-yellow-400 transition hover:scale-110 hover:bg-yellow-500 hover:text-black"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-yellow-500/20 bg-white/5 text-yellow-400 transition hover:scale-110 hover:bg-yellow-500 hover:text-black"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://wa.me/918056893829"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-yellow-500/20 bg-white/5 text-yellow-400 transition hover:scale-110 hover:bg-green-500 hover:text-white"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-10 border-t border-yellow-500/20" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <p className="text-center text-gray-500">
            © {new Date().getFullYear()}{" "}
            <span className="text-yellow-400 font-semibold">
              RENGUIN Interior Design
            </span>
            . All Rights Reserved.
          </p>

          <button
            onClick={scrollTop}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-300 text-black shadow-lg transition hover:scale-110"
          >
            <ArrowUp size={20} />
          </button>

        </div>

      </div>
    </footer>
  );
}