// about-hero.tsx
"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
    return (
        <section className="relative w-full overflow-hidden bg-[#EDEDED] pb-24 pt-20 md:pb-32 md:pt-38">
            {/* World map background texture */}
            <div
                className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-40"
                style={{ backgroundImage: "url(/hero/hero-bg.png)" }}
            />

            {/* Structural Container: Grid limits perfectly mapped to the Navbar, Hero, and Services */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
                
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block rounded-md bg-[#24F2BE] px-6 py-3 text-2xl font-bold text-black"
                >
                    About Us
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mt-8 max-w-4xl text-2xl font-extrabold leading-[1.1] text-black sm:text-3xl md:text-4xl"
                >
                    Founded in 2019, Kucheza is a growing game studio based in Lagos.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-8 max-w-3xl text-xl leading-relaxed text-black sm:text-2xl"
                >
                    We are best known for promoting culture in games through our mobile game, The Wild kingdoms and providing top-notch concepting and art services.
                </motion.p>
            </div>
        </section>
    );
}
