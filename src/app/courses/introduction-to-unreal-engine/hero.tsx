// game-art-codev-hero.tsx
"use client";

import { motion } from "framer-motion";

export default function GameArtCodevHero() {
    return (
            <section className="relative overflow-hidden bg-[#EDEDED] pt-40 pb-16 lg:pt-52 lg:pb-20">
                {/* World map background texture */}
            <div
                className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-40"
                style={{ backgroundImage: "url(/hero/hero-bg.png)" }}
            />

            {/* Structural Outer Container: Synchronized grid limits perfectly mapped to the Navbar, Hero, and Services */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
                
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-xl text-black sm:text-xl font-light"
                >
                  Introduction to Unreal Engine
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mt-4 max-w-2xl text-2xl font-extrabold leading-[1.05] text-black sm:text-4xl md:text-6xl"
                >
                  Unleash Your Creativity with Unreal Engine
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-8 max-w-2xl text-xl leading-relaxed text-black sm:text-2xl font-light"
                >
                   Dive into the immersive world of Unreal Engine, the industry-leading game development platform that powers some of the most stunning games and real-time 3D experiences.                </motion.p>
            </div>
        </section>
    );
}
