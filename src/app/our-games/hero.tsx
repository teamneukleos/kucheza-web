"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            className="relative flex h-[85vh] min-h-[520px] w-full items-center overflow-hidden bg-[#EDEDED] bg-cover bg-top"
            style={{
                backgroundImage:
                    "linear-gradient(to bottom, rgba(75,84,89,0.4), rgba(0,0,0,0)), url('/hero/hero-bg.png')",
            }}
        >
            <div className="box-border w-full px-6 sm:px-10 lg:px-16 xl:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto w-full max-w-[688px] lg:max-w-[1024px]"
                >
                    <h1 className="relative max-w-[25ch] text-5xl font-bold leading-[1.05] text-[#12151B] sm:text-6xl md:text-6xl lg:text-7xl xl:text-[80px]">
                        Culture is at the{" "}
                        <span className="text-[#24F2BE]">heart</span>{" "}
                        <span className="bottom-0 right-0 translate-y-full sm:absolute">
                            of our games
                        </span>
                    </h1>
                </motion.div>
            </div>
        </section>
    );
}