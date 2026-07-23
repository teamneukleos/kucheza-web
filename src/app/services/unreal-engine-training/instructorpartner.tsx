// game-art-showcase.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function InstructorPartner() {
    return (
        <section className="w-full bg-white py-20 md:py-28">
            {/* Structural Container: Centers layout identically to the Navbar, Hero, and Services */}
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

                    {/* Left: single image */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative aspect-[4/3] w-full"
                    >
                        <Image
                            src="/images/instructor-partner.png"
                            alt="Trading card game art examples"
                            fill
                            className="object-contain"
                        />
                    </motion.div>

                    {/* Right: heading + paragraph */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h2 className="text-4xl font-extrabold leading-[1.1] text-black sm:text-5xl">
                            Cutting Edge UE Studio and Training Centre
                        </h2>

                        <p className="mt-6 text-lg leading-relaxed text-black/70 sm:text-xl">
                           Whether you're a beginner looking to break into the industry or a professional seeking to enhance your expertise, 
                           our comprehensive training programs and services are designed to meet your needs and help you achieve your goals.                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
