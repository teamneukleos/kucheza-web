"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProjectCard, { ProjectCardData } from "./projectcard";

const games: ProjectCardData[] = [
    {
        title: "The Wild Kingdoms",
        description: "Adventure game based on a Yoruba mythological Universe",
        href: "https://play.google.com/store/apps/details?id=com.kuchezaGaming.thewildkingdoms&pcampaignid=web_share",
        image: "/projects/wild-kingdoms.png",
        theme: "#24F2BE",
        tag: "Our Games",
        tags: ["Concept Art", "2D", "3D", "Character Design", "Animation"],
    },
    {
        title: "Danfo Dash",
        description: "Afro futuristic combat runner multiplayer game",
        href: "https://www.youtube.com/watch?v=7LNl2Bbt0os",
        image: "/projects/danfo-dash.png",
        theme: "#24F2BE",
        tag: "Our Games",
        tags: ["Concept Art", "2D", "3D", "Character Design", "Animation", "Environment Design", "Splash Art", "Hero Art"],
    },
    {
        title: "Sunday School'd",
        description: "A Bible party trivia game filled with fun, strategy, and surprises.",
        href: "/projects/sunday-school-d",
        image: "/projects/sunday-schoold.png",
        theme: "#24F2BE",
        tag: "Our Games",
        tags: ["Concept Art", "2D", "Character Design", "Animation", "Splash Art", "Hero Art"],
    },
    {
        title: "Trading Card Game Design",
        description: "Strategy CCG game based on African mythological Universe",
        href: "/services/game-art-outsourcing",
        image: "/projects/trading-card.png",
        theme: "#52D7FF",
        tag: "Game Art Co-Dev",
        tags: ["3D", "Card Design", "Board Design"],
    },
    {
        title: "School Esports League",
        description: "Student led esports tournaments that provide immersive careers education",
        href: "/projects/school-esports-league",
        image: "/projects/esport-league.png",
        theme: "#FF2D6E",
        tag: "Games in Education",
        tags: ["Esports", "Careers", "Workshop", "Esports Education"],
    },
    {
        title: "Lagos games week",
        description: "Annual Trade Fair for video games",
        href: "/projects/lagos-games-week",
        image: "/projects/lgw.png",
        theme: "#4A0080",
        tag: "Events",
        tags: ["Game Dev", "Workshops", "Community", "Networking", "Pitch Stage", "Playtest"],
    },
];

export default function OurGames() {
    return (
        <section className="w-full bg-black py-20 md:py-28">
            {/* Structural Container: Ensures alignment matches Navbar, Hero, and Services exactly */}
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">

                <div className="flex items-center justify-between gap-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-md text-3xl font-medium leading-tight text-white sm:text-4xl"
                    >
                        Take a look at our amazing projects
                    </motion.h2>

                    <Link
                        href="/projects"
                        className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#24F2BE] px-5 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-90"
                    >
                        See all work
                    </Link>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
                    {games.map((game, index) => (
                        <motion.div
                            // Unique compound key prevents virtual DOM conflicts
                            key={`${game.title}-${index}`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                        >
                            <ProjectCard project={game} />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
