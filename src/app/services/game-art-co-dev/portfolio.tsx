"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type PortfolioItem = {
    title: string;
    type: "2D" | "3D";
    image: string;
};

const portfolioItems: PortfolioItem[] = [
    { title: "Danfo", type: "3D", image: "/portfolio/danfo.png" },
    { title: "Train", type: "3D", image: "/portfolio/train.png" },
    { title: "Ogun", type: "3D", image: "/portfolio/ogun.png" },
    { title: "Obatala", type: "2D", image: "/portfolio/obatala.png" },
    { title: "Ogun", type: "3D", image: "/portfolio/ogun-2.png" },
    { title: "Obatala", type: "3D", image: "/portfolio/obatala-2.png" },
    { title: "Orunmila", type: "2D", image: "/portfolio/orunmila.png" },
    { title: "Sango", type: "2D", image: "/portfolio/sango.png" },
    { title: "Oya", type: "2D", image: "/portfolio/oya.png" },
    { title: "Babaluaiye", type: "2D", image: "/portfolio/babaluaiye.png" },
    { title: "Olokun", type: "2D", image: "/portfolio/olokun.png" },
    { title: "Agemo", type: "2D", image: "/portfolio/agemo.png" },
    { title: "osun", type: "2D", image: "/portfolio/osun.png" },
    { title: "CMS Church 3D environment", type:"3D", image: "/portfolio/cms-church.png"},
    { title: "Mosque 3D environment", type: "3D", image: "/portfolio/mosque-environs.png"},
    { title: "Sango Orisha Card", type: "2D", image: "/portfolio/sango-orisha-card.png"},
    { title: "Ogun Orisha Card", type: "2D", image: "/portfolio/ogun-orisha-card.png"},
    { title: "Obatala Orisha Card", type: "2D", image: "/portfolio/obatala-orisha-card.png"},
    { title: "Ogun Regular Card", type: "2D", image: "/portfolio/ogun-regular-card.png"},
    { title: "Sango Regular Card", type: "2D", image: "/portfolio/sango-regular-card.png"},
    { title: "The Wild Kingdoms All Regular Cards", type: "2D", image: "/portfolio/wild-regular-card.png"}
];

type FilterTag = "all" | "2D" | "3D";

const filters: { label: string; value: FilterTag }[] = [
    { label: "All", value: "all" },
    { label: "2D", value: "2D" },
    { label: "3D", value: "3D" },
];

export default function Portfolio() {
    const [activeTag, setActiveTag] = useState<FilterTag>("all");

    const filteredItems = useMemo(() => {
        if (activeTag === "all") return portfolioItems;
        return portfolioItems.filter((item) => item.type === activeTag);
    }, [activeTag]);

    return (
        <section id="portfolio" className="w-full bg-black text-white py-20 md:py-28">
            {/* Structural Container: Balanced spacing limits matching your top navigation header and grids */}
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

                {/* Card Display Grid with Clean Inner Boarders Layout */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTag}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-8 grid grid-cols-1 border-t border-l border-white/20 sm:grid-cols-2 md:grid-cols-4"
                    >
                        {filteredItems.map((item) => (
                            <div key={item.title} className="h-full border-r border-b border-white/20">
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
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
