"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Cell = {
    id: string;
    images: string[];
    span: 1 | 2;
    alt?: string;
};


const cells: Cell[] = [
    {
        id: "enter-name",
        span: 1,
        images: [
            "/sunday-schoold/bento/enter-name-1.png",
            "/sunday-schoold/bento/enter-name-1.png",
            "/sunday-schoold/bento/enter-name-1.png",
            "/sunday-schoold/bento/enter-name-1.png",
            "/sunday-schoold/bento/enter-name-2.png",
            "/sunday-schoold/bento/enter-name-2.png",
            "/sunday-schoold/bento/enter-name-2.png",
        ],
    },
    {
        id: "enter-room-code",
        span: 1,
        images: [
            "/sunday-schoold/bento/enter-room-1.png",
            "/sunday-schoold/bento/enter-room-1.png",
            "/sunday-schoold/bento/enter-room-1.png",
            "/sunday-schoold/bento/enter-room-2.png",
            "/sunday-schoold/bento/enter-room-2.png",
            "/sunday-schoold/bento/enter-room-3.png",
            "/sunday-schoold/bento/enter-room-3.png",
        ],
    },
    {
        id: "round-one",
        span: 2,
        images: [
            "/sunday-schoold/bento/round-one-1.png",
            "/sunday-schoold/bento/round-one-2.png",
            "/sunday-schoold/bento/round-one-2.png",
            "/sunday-schoold/bento/round-one-2.png",
            "/sunday-schoold/bento/round-one-2.png",
            "/sunday-schoold/bento/round-one-2.png",
            "/sunday-schoold/bento/round-one-3.png"
        ],
    },
    {
        id: "landing-spots",
        span: 2,
        images: [
            "/sunday-schoold/bento/landing-spots-1.png",
            "/sunday-schoold/bento/landing-spots-1.png",
            "/sunday-schoold/bento/landing-spots-2.png",
            "/sunday-schoold/bento/landing-spots-2.png",
            "/sunday-schoold/bento/landing-spots-3.png",
            "/sunday-schoold/bento/landing-spots-3.png",
            "/sunday-schoold/bento/landing-spots-3.png",
        ],
    },
    {
        id: "spot-types",
        span: 1,
        images: [
            "/sunday-schoold/bento/spot-types-1.png",
            "/sunday-schoold/bento/spot-types-1.png",
            "/sunday-schoold/bento/spot-types-1.png",
            "/sunday-schoold/bento/spot-types-2.png",
            "/sunday-schoold/bento/spot-types-2.png",
            "/sunday-schoold/bento/spot-types-2.png",
            "/sunday-schoold/bento/spot-types-2.png"
        ],
    },
    {
        id: "dave-power-ups",
        span: 1,
        images: [
            "/sunday-schoold/bento/dave-1.png",
            "/sunday-schoold/bento/dave-1.png",
            "/sunday-schoold/bento/dave-1.png",
            "/sunday-schoold/bento/dave-1.png",
            "/sunday-schoold/bento/dave-1.png",
            "/sunday-schoold/bento/dave-1.png",
            "/sunday-schoold/bento/dave-1.png",
        ],
    },
];


const BASE_INTERVAL_MS = 2500;
const STAGGER_MS = 350;

function BentoCell({ cell, delay }: { cell: Cell; delay: number }) {
    const [index, setIndex] = useState(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        if (cell.images.length <= 1) return;

        const startTimeout = setTimeout(() => {
            intervalRef.current = setInterval(() => {
                setIndex((prev) => (prev + 1) % cell.images.length);
            }, BASE_INTERVAL_MS);
        }, delay);

        return () => {
            clearTimeout(startTimeout);
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [cell.images.length, delay]);

    return (
        <div className="relative h-[220px] w-full overflow-hidden rounded-2xl sm:h-[280px] lg:h-[320px]">
            <AnimatePresence>
                <motion.img
                    key={index}
                    src={cell.images[index]}
                    alt={cell.alt ?? cell.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </AnimatePresence>
        </div>
    );
}

export default function BentoCarousel() {
    return (
        <section className="w-full bg-white py-20 md:py-28">
            {/* Structural Container: Centered max-width boundaries matching Navbar, Hero, and layout pages */}
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
                
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
                    {cells.map((cell, i) => (
                        <div
                            key={cell.id}
                            className={
                                cell.span === 2
                                    ? "sm:col-span-2 lg:col-span-4"
                                    : "sm:col-span-1 lg:col-span-1"
                            }
                        >
                            <BentoCell cell={cell} delay={i * STAGGER_MS} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
