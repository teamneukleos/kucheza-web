"use client";

import { motion } from "framer-motion";
import { useContactDialog } from "@/app/contact/contact-dialog";

export default function Cta() {
    const { open } = useContactDialog();

    return (
        <section className="relative w-full overflow-hidden bg-black py-24 md:py-32">
            <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl text-2xl font-medium leading-tight text-white sm:text-3xl md:text-5xl"
                >
                    Got a project to discuss?
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="mt-10"
                >
                    <button
                        type="button"
                        onClick={open}
                        className="inline-flex items-center justify-center rounded-lg bg-[#FBCD00] px-10 py-4 text-lg font-semibold text-[#15151E] transition-all hover:translate-x-5"
                    >
                        Contact Us
                    </button>
                </motion.div>
            </div>
        </section>
    );
}