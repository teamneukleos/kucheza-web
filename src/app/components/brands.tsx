"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const brands = [
  {
    name: "HP",
    logo: "/brands/hp.png",
  },
  {
    name: "Unreal engine",
    logo: "/brands/unreal-engine.png",
  },
  {
    name: "343",
    logo: "/brands/343.png",
  },
  {
    name: "Xbox",
    logo: "/brands/xbox.png",
  },
  {
    name: "Union bank",
    logo: "/brands/edu360.png",
  },
  {
    name: "French Consulate",
    logo: "/brands/french-embassy.png",
  },
  {
    name: "Image and time",
    logo: "/brands/imageandtime.png",
  },
  {
    name: "Neukleos",
    logo: "/brands/neukleos.png"
  },
  {
    name: "Digital House",
    logo: "/brands/digital-house.png"
  }
];

const loopBrands = [...brands, ...brands];

export default function Brands() {
  return (
    <section className="overflow-hidden bg-white py-20 pt-2">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center text-2xl font-medium leading-tight sm:text-2xl lg:text-3xl"
        >
          Great brands we've partnered with through the years
        </motion.h2>
      </div>

      <div className="relative mt-14 overflow-hidden">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />

        {/* Right Fade */}
        <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max items-center gap-20"
        >
          {loopBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex h-[105px] w-[180px] flex-shrink-0 items-center justify-center"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={170}
                height={105}
                className="h-auto max-h-[105px] w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}