"use client";

import { motion } from "framer-motion";
import ProjectCardTwo from "./projectscardtwo";
import { ProjectCardData } from "../components/projectcard";

const games: ProjectCardData[] = [
    {
        title: "The Wild Kingdoms",
        description: "A action-adventure mobile game. Step into the shoes of a King Alantakun in search of his true heritage",
        href: "https://play.google.com/store/apps/details?id=com.kuchezaGaming.thewildkingdoms&pcampaignid=web_share",
        image: "/projects/wild-kingdoms.png",
        theme: "#24F2BE",
        tag: "Our Games",
    },
    {
        title: "Danfo Dash",
        description: "An Afro futuristic combat runner multiplayer game set in the futuristic and bustling city of Lagos",
        href: "https://www.youtube.com/watch?v=7LNl2Bbt0os",
        image: "/projects/danfo-dash.png",
        theme: "#24F2BE",
        tag: "Our Games",
    },
    {
        title: "Sunday School'd",
        description: "Step into with Sunday School'd, the Bible-inspired party game that transforms scripture into a form, social and strategic for players of all ages",
        href: "/projects/sunday-school-d",
        image: "/projects/sunday-schoold.png",
        theme: "#FF2D6E",
        tag: "Our Games",
    },
];

export default function OurGamesList() {
    return (
        <section className="w-full bg-white">
            {/* Structural Container: Centers and applies identical layout padding to previous sections */}
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 py-20 md:py-28">

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 w-full max-w-[16ch] text-2xl font-bold text-black sm:text-4xl md:text-5xl"
                >
                    Our Games
                </motion.h2>

                <ul className="mt-6 grid gap-14">
                    {games.map((game, index) => (
                        <motion.li
                            key={game.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="h-full"
                        >
                            <ProjectCardTwo
                                project={game}
                                direction={index % 2 === 0 ? "normal" : "reverse"}
                            />
                        </motion.li>
                    ))}
                </ul>

            </div>
        </section>
    );
}
