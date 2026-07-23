// tournament.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type TournamentTile = {
    title: string;
    image: string;
    theme: string; // hex, colors the block beneath the image
};

const tournaments: TournamentTile[] = [
    {
        title: "Smash Bros",
        image: "/esports/tournament-smash-bros.png",
        theme: "#3EE8B8",
    },
    {
        title: "Mario Kart 8",
        image: "/esports/tournament-mario-kart.png",
        theme: "#3EC1FF",
    },
    {
        title: "EA FC",
        image: "/esports/tournament-ea-fc.png",
        theme: "#FFC107",
    },
    {
        title: "Brawlhalla",
        image: "/esports/tournament-brawlhalla.png",
        theme: "#FB1A5C",
    },
    {
        title: "Fortnite",
        image: "/esports/tournament-fortnite.png",
        theme: "#4A0080",
    },
    {
        title: "Minecraft",
        image: "/esports/tournament-minecraft.png",
        theme: "#52D7FF",
    },
];

export default function Tournament() {
    return (
        <section className="w-full bg-white py-20 md:py-28">
            {/* Structural Container: Centers and applies identical layout constraints across sections */}
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
                <div className="mb-8 flex items-end justify-between gap-4">
                    <h2 className="mx-auto w-full max-w-[16ch] text-center text-2xl font-bold sm:text-4xl md:text-5xl">
                        Tournament Games
                    </h2>
                </div>

                <ul className="grid gap-8 md:grid-cols-3">
                    {tournaments.map((tile, index) => (
                        <motion.li
                            key={tile.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                        >
                            <TournamentCard tile={tile} />
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

function TournamentCard({ tile }: { tile: TournamentTile }) {
    return (
        <div className="overflow-hidden rounded-xl">
            <Image
                src={tile.image}
                alt={tile.title}
                width={640}
                height={360}
                className="aspect-video w-full object-cover"
            />

            <div className="p-6" style={{ backgroundColor: tile.theme }}>
                <h3 className="text-2xl font-bold text-black md:text-xl lg:text-2xl">
                    {tile.title}
                </h3>
            </div>
        </div>
    );
}