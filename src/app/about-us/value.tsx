"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type ValueItem = {
    title: string;
    description: string;
    image: string;
};

const values: ValueItem[] = [
    {
        title: "Build Roots ",
        description:
            "Coach and empower people to create socially cohesive communities. To build trust, resilience, openness and safe spaces.",
        image: "/values/build-roots.png",
    },
    {
        title: "Be The Advocate",
        description:
            "We have a mission to future proof and equip Africa's next generation through play. Together we must defend and safeguard the people we seek to serve.",
        image: "/values/be-the-advocate.png",
    },
    {
        title: "Live and Learn",
        description:
            "Be curious, ask for help, and demonstrate an ability to grow. Own and learn from mistakes. Take a moment to smile, enjoy the ride.",
        image: "/values/liveandlearn.png",
    },
    {
        title: "Go the Distance",
        description:
            "Be willing to get up from stumbles, stay in it, finish.",
        image: "/values/go-the-distance.png",
    },
];

export default function Values() {
    return (
        <section className="w-full bg-white py-20 text-black md:py-28">
            {/* Structural Container: Centers and applies identical layout constraints to previous sections */}
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
                <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                        >
                            <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                                <Image
                                    src={value.image}
                                    alt={value.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <h3 className="mt-5 text-xl font-bold sm:text-2xl">
                                {value.title}
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-black/60 sm:text-base">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
