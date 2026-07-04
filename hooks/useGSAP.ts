"use client";

import { useEffect } from "react";
import { initGSAP } from "@/lib/gsap";

export default function useGSAPInit() {
  useEffect(() => {
    initGSAP();
  }, []);
}