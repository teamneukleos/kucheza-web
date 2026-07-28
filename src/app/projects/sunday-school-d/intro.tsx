"use client";

import { motion } from "framer-motion";

export default function Intro() {
    return (
        <section className="w-full bg-white py-20 text-black md:py-28">
            <div className="box-border w-full px-6 sm:px-10 lg:px-16 xl:px-24">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-[46ch] text-center text-xl font-medium leading-relaxed sm:text-xl md:text-2xl"
                >
                    Today, we discover who knows the Word and who has simply been
                    nodding during Bible study.
                    <br />
                    <br />
                    Play a couch party game where Scripture meets strategy. Prepare your
                    minds. Sharpen your wisdom. Bring your fastest fingers.
                </motion.p>
            </div>
        </section>
    );
}