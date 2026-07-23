// brands.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const brands = [
    {
        name: "Digital House",
        logo: "/brands/digital-house.png",
    },
    {
        name: "Ukie",
        logo: "/brands/ukie.png",
    },
];

export default function Brands() {
    return (
        <section className="bg-white py-20 md:py-24 lg:py-28">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-3xl text-center text-2xl font-medium leading-tight md:text-3xl lg:text-[34px]"
                >
                    Great brands we&apos;ve partnered with through the years
                </motion.h2>
            </div>

            <div className="mt-14 flex flex-wrap items-center justify-center gap-16 md:gap-24">
                {brands.map((brand, index) => (
                    <motion.div
                        key={brand.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex h-[105px] w-[180px] flex-shrink-0 items-center justify-center"
                    >
                        <Image
                            src={brand.logo}
                            alt={brand.name}
                            width={170}
                            height={105}
                            className="h-auto max-h-[105px] w-auto object-contain"
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}