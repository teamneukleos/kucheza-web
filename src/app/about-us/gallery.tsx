"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type GalleryImage = {
    src: string;
    alt: string;
};

const images: GalleryImage[] = [
    { src: "/gallery/team-photo-1.png", alt: "Kucheza team group photo" },
    { src: "/gallery/game-makers-assembly.png", alt: "Game Makers Assembly event" },
    { src: "/gallery/team-photo-2.png", alt: "Kucheza team at event" },
    { src: "/gallery/designer-working.png", alt: "Designer working on character art" },
];

export default function Gallery() {
    return (
        <section className="w-full bg-white py-20 md:py-28">
            {/* Structural Container: Centered max width matched to your navigation, hero, and work galleries */}
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">

                    {/* Left column: big photo on top, smaller indented photo below */}
                    <div className="flex flex-col gap-2 md:gap-3">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl"
                        >
                            <Image
                                src={images[0].src}
                                alt={images[0].alt}
                                fill
                                priority
                                className="object-cover"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="relative ml-auto aspect-[4/3] w-2/3 overflow-hidden rounded-2xl sm:w-3/5"
                        >
                            <Image
                                src={images[2].src}
                                alt={images[2].alt}
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* Right column: two full-width stacked photos */}
                    <div className="flex flex-col gap-2 md:gap-3">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.05 }}
                            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl"
                        >
                            <Image
                                src={images[1].src}
                                alt={images[1].alt}
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl"
                        >
                            <Image
                                src={images[3].src}
                                alt={images[3].alt}
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
