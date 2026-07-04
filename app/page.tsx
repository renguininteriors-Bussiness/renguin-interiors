"use client";

import Loader from "@/components/loader/Loader";

import SmoothScroll from "@/components/providers/SmoothScroll";

import Cursor from "@/components/cursor/Cursor";
import CursorTrail from "@/components/cursor/CursorTrail";
import Particles from "@/components/particles/Particles";

import BackgroundGlow from "@/components/layout/BackgroundGlow";
import MouseSpotlight from "@/components/layout/MouseSpotlight";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Whatsapp from "@/components/layout/Whatsapp";

import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Portfolio from "@/components/portfolio/Portfolio";
import Gallery from "@/components/gallery/Gallery";
import BeforeAfter from "@/components/beforeafter/BeforeAfter";
import Calculator from "@/components/calculator/Calculator";
import About from "@/components/about/About";
import Stats from "@/components/stats/Stats";
import Process from "@/components/process/Process";
import Testimonials from "@/components/testimonials/Testimonials";
import Contact from "@/components/contact/Contact";
import Map from "@/components/map/Map";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <SmoothScroll>

      {/* Loader */}
      <Loader />

      {/* Premium Effects */}
      <Cursor />
      <CursorTrail />
      <Particles />
      <BackgroundGlow />
      <MouseSpotlight />
      <ScrollProgress />
      <Whatsapp />

      {/* Website */}
      <main className="relative min-h-screen overflow-x-hidden bg-[#050505] text-white">

        <Navbar />

        <Hero />

        <Services />

        <Portfolio />

        <Gallery />

        <BeforeAfter />

        <Calculator />

        <About />

        <Stats />

        <Process />

        <Testimonials />

        <Contact />

        <Map />

        <Footer />

      </main>

    </SmoothScroll>
  );
}