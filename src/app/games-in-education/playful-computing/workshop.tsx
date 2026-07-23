// workshops.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type WorkshopTile = {
    title: string;
    image: string;
    theme: string; // hex, colors the block beneath the image
};

const workshops: WorkshopTile[] = [
    {
        title: "Game Design",
        image: "/images/workshop-game-design.png",
        theme: "#3EC1FF",
    },
    {
        title: "Dance with the Algo-rhythm",
        image: "/images/workshop-just-dance.png",
        theme: "#FFC107",
    },
    {
        title: "Eco Gamer",
        image: "/images/workshop-eco-gamer.png",
        theme: "#3EE8B8",
    },
];

export default function Workshops() {
    return (
        <section className="w-full bg-white py-20 md:py-28">
            {/* Structural Container: Centers and applies identical layout constraints across sections */}
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
                <div className="mb-8 flex items-end justify-between gap-4">
                    <h2 className="mx-auto w-full max-w-[16ch] text-center text-2xl font-bold sm:text-4xl md:text-5xl">
                        Sample Workshops
                    </h2>
                </div>

                <ul className="grid gap-8 md:grid-cols-3">
                    {workshops.map((tile, index) => (
                        <motion.li
                            key={tile.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <WorkshopCard tile={tile} />
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

function WorkshopCard({ tile }: { tile: WorkshopTile }) {
    return (
        <div className="overflow-hidden rounded-xl">
            <Image
                src={tile.image}
                alt={tile.title}
                width={640}
                height={360}
                className="aspect-video w-full object-cover"
            />

            <div
                className="p-6"
                style={{ backgroundColor: tile.theme }}
            >
                <h3 className="text-2xl font-bold text-black md:text-xl lg:text-2xl">
                    {tile.title}
                </h3>
            </div>
        </div>
    );
}
