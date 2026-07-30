"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Video() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.72, 1]);

  const radius = useTransform(scrollYProgress, [0, 1], [36, 0]);

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
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/roJMw5-yqrM?autoplay=1&mute=1&loop=1&playlist=roJMw5-yqrM&playsinline=1"
            title="Kucheza Gaming Showreel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </motion.div>
    </section>
  );
}
