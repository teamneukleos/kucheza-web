"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type HeroCta = {
    label: string;
    href: string;
    variant?: "default" | "secondary" | "outline";
    size?: "default" | "sm" | "lg";
};

const ctas: HeroCta[] = [
    { label: "Register Your School", href: "/contact", variant: "default", size: "lg" },
];

function isExternal(href: string) {
    return /^https?:\/\//.test(href);
}

export default function Hero() {
    return (
        <section
            className="relative overflow-x-clip bg-cover bg-top"
            style={{
                backgroundImage:
                    "linear-gradient(to bottom, rgba(75,84,89,0.4), rgba(0,0,0,0)), url(/hero/hero-bg.png)",
            }}
        >
            <div className="relative z-0 mx-auto w-full max-w-7xl px-6 pb-20 pt-32 sm:px-10 md:pt-44 lg:px-16 lg:pt-52 xl:px-24">
                <div className="mx-auto w-full max-w-[688px] text-center lg:max-w-[1024px]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="block text-2xl font-bold text-black/60 md:text-3xl lg:text-4xl">
                         Kucheza School Esports
                        </span>

                        <h1 className="my-5 mx-auto max-w-[25ch] text-5xl font-bold text-black md:my-6 md:text-6xl lg:my-7 xl:my-8 xl:text-7xl">
                            Level Up Your Game:
                             Join the Ultimate Esports Experience!
                        </h1>

                        <p className="mx-auto w-full max-w-3xl text-base font-normal text-black/70 md:text-base lg:text-lg">
                           Empowering the Next Generation of Gamers through Education, Culture, and Competition.

                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="my-10"
                    >
                        <div className="flex flex-wrap items-baseline justify-center gap-4">
                            {ctas.map((cta) => (
                                <Link
                                    key={cta.label}
                                    href={cta.href}
                                    target={isExternal(cta.href) ? "_blank" : undefined}
                                    rel={isExternal(cta.href) ? "noopener noreferrer" : undefined}
                                    className={
                                        cta.variant === "secondary"
                                            ? "inline-flex items-center justify-center rounded-full border border-black/20 bg-white px-6 py-3 text-base font-medium text-black transition-colors hover:bg-black/5"
                                            : "inline-flex items-center justify-center rounded-full bg-[#FF2D6E] px-6 py-3 text-base font-medium text-white transition-opacity hover:opacity-90"
                                    }
                                >
                                    {cta.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
