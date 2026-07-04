"use client";

import { useEffect, useRef } from "react";

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const mouse = {
      x: width / 2,
      y: height / 2,
    };

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener("resize", () => {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;
    });

    class Particle {
      x: number;
      y: number;
      r: number;
      dx: number;
      dy: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.r = Math.random() * 2 + 1;
        this.dx = (Math.random() - 0.5) * 0.4;
        this.dy = (Math.random() - 0.5) * 0.4;
      }

      draw() {
        if (!ctx) return;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);

        ctx.fillStyle = "rgba(212,175,55,0.8)";

        ctx.shadowColor = "#d4af37";
        ctx.shadowBlur = 15;

        ctx.fill();
      }

      update() {
        this.x += this.dx;
        this.y += this.dy;

        if (this.x < 0 || this.x > width) this.dx *= -1;
        if (this.y < 0 || this.y > height) this.dy *= -1;

        const dist = Math.hypot(
          this.x - mouse.x,
          this.y - mouse.y
        );

        if (dist < 120) {
          this.x += (this.x - mouse.x) * 0.015;
          this.y += (this.y - mouse.y) * 0.015;
        }

        this.draw();
      }
    }

    const particles: Particle[] = [];

    for (let i = 0; i < 90; i++) {
      particles.push(new Particle());
    }

    function animate() {
      if (!ctx) return;

      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => particle.update());

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none opacity-40"
    />
  );
}