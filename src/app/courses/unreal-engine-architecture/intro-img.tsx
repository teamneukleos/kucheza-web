"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Video() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "center center"],
  });

  // Scale goes from a condensed block to 100% full viewport size
  const scale = useTransform(scrollYProgress, [0, 1], [0.72, 1]);

  // Rounded corners smoothly flatten to square edges on full scale
  const radius = useTransform(scrollYProgress, [0, 1], [36, 0]);

  // Adjust container width to 100% on completion so it fills the screen edges perfectly
  const containerWidth = useTransform(scrollYProgress, [0, 1], ["85%", "100%"]);

  return (
    <section
      ref={ref}
      className="relative z-10 w-full overflow-hidden"
    >
      <motion.div
        style={{
          scale,
          width: containerWidth,
        }}
        className="mx-auto overflow-hidden will-change-transform"
      >
        <div className="relative aspect-video w-full bg-black">
          <Image
            src="/images/architecture-training.png" 
            alt="Kucheza Gaming Showreel"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}