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
        <div className="relative w-full h-full overflow-hidden rounded-2xl bg-neutral-900">
            <AnimatePresence>
                <motion.img
                    key={index}
                    src={cell.images[index]}
                    alt={cell.alt ?? cell.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 h-full w-full object-fill"
                />
            </AnimatePresence>
        </div>
    );
}

export default function BentoCarousel() {
    return (
        <section className="w-full bg-white py-12 md:py-28">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
                
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-5 sm:aspect-[1389/1022] w-full">
                    {cells.map((cell, i) => {
                        let placementClass = "";
                        let mobileAspect = "";
                        
                        if (cell.id === "enter-name") {
                            placementClass = "sm:col-start-1 sm:row-start-1 sm:row-span-1";
                            mobileAspect = "aspect-[251/501]"; // Original portrait asset shape
                        } else if (cell.id === "enter-room-code") {
                            placementClass = "sm:col-start-2 sm:row-start-1 sm:row-span-1";
                            mobileAspect = "aspect-[251/501]"; // Original portrait asset shape
                        } else if (cell.id === "round-one") {
                            placementClass = "sm:col-start-3 sm:col-span-3 sm:row-start-1 sm:row-span-1";
                            mobileAspect = "aspect-[824/500]"; // Original landscape asset shape
                        } else if (cell.id === "landing-spots") {
                            placementClass = "sm:col-start-1 sm:col-span-3 sm:row-start-2 sm:row-span-1";
                            mobileAspect = "aspect-[828/493]"; // Original landscape asset shape
                        } else if (cell.id === "spot-types") {
                            placementClass = "sm:col-start-4 sm:row-start-2 sm:row-span-1";
                            mobileAspect = "aspect-[251/501]"; // Original portrait asset shape
                        } else if (cell.id === "dave-power-ups") {
                            placementClass = "sm:col-start-5 sm:row-start-2 sm:row-span-1";
                            mobileAspect = "aspect-[251/501]"; // Original portrait asset shape
                        }

                        return (
                            <div 
                                key={cell.id} 
                                className={`${placementClass} ${mobileAspect} sm:aspect-auto w-full`}
                            >
                                <BentoCell cell={cell} delay={i * STAGGER_MS} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
