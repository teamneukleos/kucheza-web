"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
    const backgroundRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!backgroundRef.current) return;

        const animation = gsap.to(backgroundRef.current, {
            x: 300,
            ease: "none",
            scrollTrigger: {
                trigger: backgroundRef.current,
                start: "top bottom",
                end: "+=2000",
                scrub: 1,
            },
        });

        return () => {
            animation.kill();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section
            className="relative overflow-hidden py-20 md:py-28"
            style={{
                background: "linear-gradient(127.19deg, #52D7FF 0%, #41F7CD 70%)",
            }}
        >
            {/* Background pattern */}
            <div
                ref={backgroundRef}
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                    backgroundImage: "url(/images/upline.svg)",
                    backgroundRepeat: "repeat",
                    backgroundPosition: "center",
                }}
            />

            {/* Structural Container */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
                <h2 className="text-xl font-medium text-[#111111] md:text-2xl">
                    Why Choose Us?
                </h2>

                <blockquote className="mt-10 text-3xl font-light leading-snug tracking-tight text-[#111111] md:text-5xl">
                    “We are committed to excellence in every aspect of game
                    development and art production.”
                </blockquote>
            </div>
        </section>
    );
}