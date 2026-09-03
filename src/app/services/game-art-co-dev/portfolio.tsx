"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";

type PortfolioItem = {
  id: string;
  title: string;
  type: "2D" | "3D";
  image: string;
};

const portfolioItems: PortfolioItem[] = [
  { id: "danfo", title: "Danfo", type: "3D", image: "/portfolio/danfo.png" },
  { id: "train", title: "Train", type: "3D", image: "/portfolio/train.png" },
  { id: "ogun-3d-1", title: "Ogun", type: "3D", image: "/portfolio/ogun.png" },
  { id: "obatala-2d-1", title: "Obatala", type: "2D", image: "/portfolio/obatala.png" },
  { id: "ogun-3d-2", title: "Ogun", type: "2D", image: "/portfolio/ogun-2.png" },
  { id: "obatala-3d-1", title: "Obatala", type: "2D", image: "/portfolio/obatala-2.png" },
  { id: "orunmila", title: "Orunmila", type: "3D", image: "/portfolio/orunmila.png" },
  { id: "sango", title: "Sango", type: "3D", image: "/portfolio/sango.png" },
  { id: "oya", title: "Oya", type: "3D", image: "/portfolio/oya.png" },
  { id: "babaluaiye", title: "Babaluaiye", type: "3D", image: "/portfolio/babaluaiye.png" },
  { id: "olokun", title: "Olokun", type: "3D", image: "/portfolio/olokun.png" },
  { id: "agemo", title: "Agemo", type: "3D", image: "/portfolio/agemo.png" },
  { id: "osun", title: "osun", type: "3D", image: "/portfolio/osun.png" },
  { id: "cms-church", title: "CMS Church 3D environment", type: "3D", image: "/portfolio/cms-church.png" },
  { id: "mosque", title: "Mosque 3D environment", type: "3D", image: "/portfolio/mosque-environs.png" },
  { id: "sango-orisha-card", title: "Sango Orisha Card", type: "2D", image: "/portfolio/sango-orisha-card.png" },
  { id: "ogun-orisha-card", title: "Ogun Orisha Card", type: "2D", image: "/portfolio/ogun-orisha-card.png" },
  { id: "obatala-orisha-card", title: "Obatala Orisha Card", type: "2D", image: "/portfolio/obatala-orisha-card.png" },
  { id: "ogun-regular-card", title: "Ogun Regular Card", type: "2D", image: "/portfolio/ogun-regular-card.png" },
  { id: "sango-regular-card", title: "Sango Regular Card", type: "2D", image: "/portfolio/sango-regular-card.png" },
  { id: "wild-kingdoms", title: "The Wild Kingdoms All Regular Cards", type: "2D", image: "/portfolio/wild-regular-card.png" }
];

type FilterTag = "all" | "2D" | "3D";

const filters: { label: string; value: FilterTag }[] = [
  { label: "All", value: "all" },
  { label: "2D", value: "2D" },
  { label: "3D", value: "3D" },
];

// Added explicit Framer Motion typing here
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// Added explicit Framer Motion typing here
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: "easeOut" } 
  },
};

export default function Portfolio() {
  const [activeTag, setActiveTag] = useState<FilterTag>("all");

  const filteredItems = useMemo(() => {
    if (activeTag === "all") return portfolioItems;
    return portfolioItems.filter((item) => item.type === activeTag);
  }, [activeTag]);

  return (
    <section id="portfolio" className="w-full bg-black text-white py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <h2 className="mb-8 w-full max-w-[16ch] text-2xl font-bold sm:text-4xl md:text-5xl">
          Portfolio
        </h2>

        {/* Filter pills */}
        <div className="flex flex-wrap items-center gap-2">
          {filters.map((filter) => {
            const isActive = activeTag === filter.value;
            return (
              <button
                key={filter.value}
                onClick={() => setActiveTag(filter.value)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#24E5FF] text-black"
                    : "bg-white text-black hover:bg-white/90"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Card Display Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTag}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            exit="hidden"
            viewport={{ amount: 0.05 }}
            className="mt-8 grid grid-cols-1 border-t border-l border-white/20 sm:grid-cols-2 md:grid-cols-4"
          >
            {filteredItems.map((item) => (
              <motion.div 
                key={item.id} 
                variants={cardVariants}
                className="h-full border-r border-b border-white/20"
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-black p-6">
                  <h3 className="truncate text-xl font-semibold text-white sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/50">{item.type}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
