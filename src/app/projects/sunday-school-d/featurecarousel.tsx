"use client";

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Slide = {
    title: string;
    description: string;
    image: string;
};

const slides: Slide[] = [
    {
        title: "PARTY-FRIENDLY MULTIPLAYER",
        description:
            "Designed for laughter around one screen. Balance knowledge, timing, and strategy to outplay your opponents and claim victory.",
        image: "/sunday-schoold/feature-1.png",
    },
    {
        title: "COMMUNITY PLAY",
        description: "Whether you're playing with family, friends, youth groups or a larger community, every match creates new stories to tell and memories to relive.",
        image: "/sunday-schoold/feature-2.png",
    },
    {
        title: "INTERACTIVE GAME SHOW EXPERIENCE",
        description: "Every round feels like a live game show, combining exciting challenges, strategic decisions, and nonstop fun.",
        image: "/sunday-schoold/feature-3.png",
    },
    {
        title: "BIBLE DISCOVERY",
        description: "Dive into a variety of themes that challenge different areas of your biblical knowledge. Every theme brings a new experience, encouraging players to learn while having fun.",
        image: "/sunday-schoold/feature-4.png",
    },
];

const SLIDE_DURATION_MS = 7000;

export default function FeatureCarousel() {
    const [index, setIndex] = useState(0);

    const goTo = useCallback((next: number) => {
        setIndex((prev) => {
            const total = slides.length;
            return (next + total) % total;
        });
    }, []);

    const goNext = useCallback(() => goTo(index + 1), [goTo, index]);
    const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);

    useEffect(() => {
        const timer = setTimeout(() => {
            goTo(index + 1);
        }, SLIDE_DURATION_MS);

        return () => clearTimeout(timer);
    }, [index, goTo]);

    const slide = slides[index];

    return (
        <section className="w-full bg-white py-20 text-black md:py-28">
            {/* Structural Container: Centers and applies identical layout constraints across sections */}
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">

                <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">

                    {/* Text side */}
                    <div className="w-full lg:w-[380px] lg:flex-shrink-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className="text-2xl font-black uppercase leading-tight sm:text-3xl">
                                    {slide.title}
                                </h3>
                                <p className="mt-4 text-base leading-relaxed text-black/60 sm:text-lg">
                                    {slide.description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Image side */}
                    <div className="relative w-full flex-1">
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={index}
                                    src={slide.image}
                                    alt={slide.title}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </AnimatePresence>
                    </div>

                    {/* Nav arrows */}
                    <div className="mt-4 flex justify-end gap-3">
                        <button type="button" onClick={goPrev} aria-label="Previous" className="transition-opacity hover:opacity-70">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 57 57"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8"
                            >
                                <path d="M53.4375 28.5C53.4375 23.5678 51.9749 18.7464 49.2348 14.6455C46.4946 10.5445 42.5999 7.34822 38.0432 5.46076C33.4864 3.5733 28.4723 3.07945 23.6349 4.04167C18.7975 5.00389 14.3541 7.37896 10.8665 10.8665C7.37895 14.3541 5.00389 18.7975 4.04167 23.6349C3.07945 28.4723 3.5733 33.4864 5.46076 38.0432C7.34822 42.5999 10.5445 46.4946 14.6455 49.2348C18.7464 51.9749 23.5678 53.4375 28.5 53.4375C35.1138 53.4375 41.4568 50.8102 46.1335 46.1335C50.8102 41.4568 53.4375 35.1138 53.4375 28.5ZM42.75 30.2813L21.1078 30.2813L31.0472 40.2687L28.5 42.75L14.25 28.5L28.5 14.25L31.0472 16.7918L21.1078 26.7188L42.75 26.7188L42.75 30.2813Z" fill="#4878FB" />
                            </svg>
                        </button>

                        <button type="button" onClick={goNext} aria-label="Next" className="transition-opacity hover:opacity-70">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 57 57"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8"
                            >
                                <path d="M3.5625 28.5C3.5625 33.4322 5.02506 38.2536 7.76523 42.3545C10.5054 46.4555 14.4001 49.6518 18.9568 51.5392C23.5136 53.4267 28.5277 53.9206 33.3651 52.9583C38.2025 51.9961 42.6459 49.621 46.1335 46.1335C49.621 42.6459 51.9961 38.2025 52.9583 33.3651C53.9206 28.5277 53.4267 23.5136 51.5392 18.9568C49.6518 14.4001 46.4555 10.5054 42.3545 7.76523C38.2536 5.02506 33.4322 3.5625 28.5 3.5625C21.8862 3.5625 15.5432 6.18984 10.8665 10.8665C6.18984 15.5432 3.5625 21.8862 3.5625 28.5ZM14.25 26.7188H35.8922L25.9528 16.7313L28.5 14.25L42.75 28.5L28.5 42.75L25.9528 40.2082L35.8922 30.2812H14.25V26.7188Z" fill="#4878FB" />
                            </svg>
                        </button>
                    </div>

                </div>

            </div>

        </div>
    </section>
    );
}
