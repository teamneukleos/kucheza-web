"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Outro() {
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
            className="relative min-h-[520px] overflow-hidden py-24 md:min-h-[640px] md:py-32"
            style={{
                background: "linear-gradient(127.19deg, #52D7FF 0%, #41F7CD 70%)",
            }}
        >
            {/* Background line pattern */}
            <div
                ref={backgroundRef}
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                    backgroundImage: "url(/images/upline.svg)",
                    backgroundRepeat: "repeat",
                    backgroundPosition: "center",
                }}
            />

            {/* Content */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
                <h2 className="mb-4 text-sm font-semibold tracking-wide text-black/90">
                    SUNDAY SCHOOL&apos;D
                </h2>

                <div className="max-w-3xl space-y-6 text-xl font-light leading-relaxed text-black sm:text-2xl">
                    <p>
                        Every great game begins with an idea, and ours began with a
                        simple question: What if learning the Bible could be as
                        exciting as playing your favourite game? That question has
                        guided every step of our journey.
                    </p>

                    <p>
                        Thank you for believing in what we&apos;re building. We
                        can&apos;t wait to welcome you into the experience and
                        share it with you soon.
                    </p>
                </div>

                {/* Store badges */}
                <div className="mt-10 flex flex-wrap items-center gap-4">
                    {/* Steam */}
                    <a
                        href="#"
                        aria-label="View on Steam"
                        className="transition-opacity hover:opacity-80"
                    >
                        <img
                            src="/icons/steam-badge.svg"
                            alt="Steam"
                            className="h-[48px] w-[48px] object-contain sm:h-[56px] sm:w-[56px] lg:h-[60px] lg:w-[60px]"
                        />
                    </a>

                    {/* Apple TV */}
                    <a
                        href="#"
                        aria-label="View on Apple TV"
                        className="transition-opacity hover:opacity-80"
                    >
                        <img
                            src="/icons/apple-tv.svg"
                            alt="Apple TV"
                            className="h-[48px] w-[48px] object-contain sm:h-[56px] sm:w-[56px] lg:h-[60px] lg:w-[60px]"
                        />
                    </a>

                    {/* Google Play */}
                    <a
                        href="#"
                        aria-label="Get it on Google Play"
                        className="transition-opacity hover:opacity-80"
                    >
                        <img
                            src="/icons/google-play.svg"
                            alt="Google Play"
                            className="h-[32px] w-auto object-contain sm:h-[36px] lg:h-[42px]"
                        />
                    </a>

                    {/* App Store */}
                    <a
                        href="#"
                        aria-label="Download on the App Store"
                        className="transition-opacity hover:opacity-80"
                    >
                        <img
                            src="/icons/app-store.svg"
                            alt="App Store"
                            className="h-[32px] w-auto object-contain sm:h-[36px] lg:h-[42px]"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}