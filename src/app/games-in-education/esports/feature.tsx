// features.tsx
"use client";

import { motion } from "framer-motion";
import FeatureCard, { FeatureCardData } from "./featurecard";

const features: FeatureCardData[] = [
    {
        title: "Category",
        description: "Placeholder description one",
        category: "Tag",
        image: "/images/feature-1.png",
        theme: "#24F2BE",
        tags: ["Placeholder"],
    },
    {
        title: "Category",
        description: "Placeholder description two",
        category: "Tag",
        image: "/images/feature-2.png",
        theme: "#FF2D6E",
        tags: ["Placeholder"],
    },
    {
        title: "Category",
        description: "Placeholder description three",
        category: "Tag",
        image: "/images/feature-3.png",
        theme: "#52D7FF",
        tags: ["Placeholder"],
    },
    {
        title: "Category",
        description: "Placeholder description four",
        category: "Tag",
        image: "/images/feature-4.png",
        theme: "#FFD400",
        tags: ["Placeholder"],
    },
    {
        title: "Category",
        description: "Placeholder description five",
        category: "Tag",
        image: "/images/feature-5.png",
        theme: "#24F2BE",
        tags: ["Placeholder"],
    },
    {
        title: "Category",
        description: "Placeholder description six",
        category: "Tag",
        image: "/images/feature-6.png",
        theme: "#FF2D6E",
        tags: ["Placeholder"],
    },
];

export default function Features() {
    return (
        <section className="bg-black text-white">
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:px-8">
                <div className="mb-10">
                    <h2 className="mx-auto w-full max-w-[16ch] text-center text-5xl sm:text-6xl">
                        Section Title
                    </h2>
                </div>

                <ul className="m-0 grid list-none gap-4 p-0 md:grid-cols-2">
                    {features.map((tile, index) => (
                        <motion.li
                            key={tile.description}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                        >
                            <FeatureCard tile={tile} />
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
}