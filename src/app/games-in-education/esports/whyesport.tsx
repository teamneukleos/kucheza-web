"use client";

import { motion } from "framer-motion";

type Tile = {
    icon: string; 
    title: string;
    description: string;
};

const tiles: Tile[] = [
    {
        icon: "/icons/monitor.svg",
        title: "21st Century digital skills",
        description:
            "Esports provides an exceptional platform for developing a wide range of skills like Digital Literacy, Computational Thinking, Communication and Collaboration, Creativity, Innovation, Digital Content Creation and Media Literacy.",
    },
    {
        icon: "/icons/brain.svg",
        title: "Play age appropriate games",
        description:
            "Selecting age-appropriate games is paramount for Cognitive Development, Engagement and Motivation, Safety and Well-being, Skill Progression, and Educational Alignment.",
    },
    {
        icon: "/icons/cloud-network.svg",
        title: "Soft skills development",
        description:
            "Proven to enhance students' practical and soft skills development through first-hand experience in real job roles, the tournaments enable aspiring young people to immerse themselves in the exciting world of games whilst increasing their engagement in computing and careers education at the same time.",
    },
];

export default function WhyEsports() {
    return (
        <section className="w-full bg-[#EE1F63] text-white">
            <div className="box-border w-full px-6 py-20 sm:px-10 md:py-28 lg:px-16 xl:px-24">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto w-full max-w-[16ch] text-center text-5xl sm:text-6xl md:text-6xl"
                >
                    Why Esports?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-white/90"
                >
                    Esports empowers students with real-world skills through
                    collaborative, competitive play — building confidence, agency
                    and self-direction.
                </motion.p>

                <ul className="m-0 mx-auto mt-12 grid max-w-[1240px] list-none gap-10 p-0 md:grid-cols-3">
                    {tiles.map((tile, index) => (
                        <motion.li
                            key={tile.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex h-full flex-col items-center text-center"
                        >
                            <div className="mb-6">
                                <img
                                    src={tile.icon}
                                    alt=""
                                    className="h-16 w-16"
                                />
                            </div>
                            <h3 className="mb-3 text-2xl font-bold">{tile.title}</h3>
                            <p className="text-white/90">{tile.description}</p>
                        </motion.li>
                    ))}
                </ul>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto mt-16 max-w-3xl text-center text-lg leading-relaxed text-white/90"
                >
                    Esports introduces team dynamics to children and teaches them
                    through play. It is important to use this pioneering immersive
                    experience to engage students with 21st century skills.
                </motion.p>

            </div>
        </section>
    );
}