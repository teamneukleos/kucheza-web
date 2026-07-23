"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhoWeAre() {
    return (
        <section className="relative w-full overflow-hidden bg-white py-20 text-black md:py-28">
            <div className="relative box-border w-full px-6 sm:px-10 lg:px-16 xl:px-24">

                <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">

                    {/* spacer to reserve room for the floating top-left device on large screens */}
                    <div className="hidden lg:block lg:w-[180px] lg:flex-shrink-0" />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-[720px]"
                    >
                        <p className="text-lg font-semibold leading-relaxed sm:text-xl md:text-2xl">
                            We are a fun loving and diverse team of mums, dads, gamers,
                            visual designers, engineers, architects, UE Instructors,
                            culture shapers and good citizens who believe in the power of
                            games as a pathway to youth empowerment. That&apos;s why we are
                            building a sustainable video games ecosystem in Africa through
                            Outsourced Art and Co-Dev.
                        </p>

                        <p className="mt-6 text-lg leading-relaxed text-black/70 sm:text-xl">
                            Join us on our playful journey to redefine what games can be!
                        </p>

                        <p className="mt-4 text-lg font-medium sm:text-xl">
                            We are Game Ready!
                        </p>

                        
                    </motion.div>
                </div>

                {/* Floating decorative devices — desktop only */}
                <div className="pointer-events-none absolute inset-0 hidden lg:block">
                    <Image
                        src="/about/device-1.png"
                        alt=""
                        width={204}
                        height={204}
                        className="absolute left-0 top-4 w-[140px] -rotate-[36deg] xl:w-[170px]"
                    />
                    <Image
                        src="/about/device-2.png"
                        alt=""
                        width={204}
                        height={204}
                        className="absolute bottom-0 right-6 w-[140px] rotate-45 xl:w-[170px]"
                    />
                </div>

            </div>
        </section>
    );
}