"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let currentX = mouseX;
    let currentY = mouseY;

    const moveMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", moveMouse);

    const animate = () => {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;

      cursor.style.transform = `translate(${currentX - 18}px, ${currentY - 18}px)`;

      requestAnimationFrame(animate);
    };

    animate();

    const hoverElements = document.querySelectorAll(
      "button, a, img, .group"
    );

    const enter = () => {
      cursor.classList.add("scale-[2]");
    };

    const leave = () => {
      cursor.classList.remove("scale-[2]");
    };

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", moveMouse);

      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="
      hidden lg:block
      fixed
      top-0
      left-0
      w-9
      h-9
      rounded-full
      border
      border-yellow-400
      pointer-events-none
      z-[99999]
      transition-all
      duration-300
      backdrop-blur-sm
      shadow-[0_0_25px_rgba(212,175,55,.8)]
      "
    />
  );
}