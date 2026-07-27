"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "swiper/css";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

export type WhyChooseUsSlide = {
    quote: string;
    author: string;
    title?: string;
    coverImage?: string;
    size?: "md" | "lg" | "xl";
};

const slides: WhyChooseUsSlide[] = [
    {
        quote:
            "Godwin Udu is an Unreal Authorized Instructor, Unreal Engine trainer, AR and VR enthusiast, XR content developer, and 3D generalist with over 7 years of experience in the design and advertising industry. He is passionate about creating immersive experiences that captivate and engage audiences.",
        author: "Godwin Udu",
        title: "Fulltime Trainer @ Kucheza",
        coverImage: "/images/unreal-badge.png",
        size: "md",
    },
    {
        quote:
            "Our team of instructors comprise of certified Unreal Engine professionals who bring real-world experience and insights into the classroom. We emphasize practical, hands-on training that allows you to apply what you've learned in real-time projects.",
        author: "Expert Instructors",
        title: "Why Choose Us?",
        size: "md",
    },
];

const sizeClasses: Record<NonNullable<WhyChooseUsSlide["size"]>, string> = {
    md: "md:text-3xl xl:text-4xl 2xl:text-5xl",
    lg: "md:text-5xl xl:text-6xl 2xl:text-7xl",
    xl: "md:text-7xl xl:text-8xl 2xl:text-9xl",
};

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
            id="why-choose-us"
            className="relative overflow-hidden"
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

            <div className="relative z-10 pb-32 pt-16">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1}
                    speed={1000}
                    loop
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    className="w-full"
                >
                    {slides.map((slide, i) => (
                        <SwiperSlide key={i}>
                            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
                                {slide.title ? (
                                    <h2 className="mb-4 text-sm font-medium text-black/70">
                                        {slide.title}
                                    </h2>
                                ) : (
                                    <p className="mb-4 text-sm font-medium text-black/70">
                                        Why Choose Us?
                                    </p>
                                )}

                                <blockquote
                                    className={`my-6 break-words text-2xl font-light text-black ${sizeClasses[slide.size ?? "md"]}`}
                                >
                                    &ldquo;{slide.quote}&rdquo;
                                </blockquote>

                                <div className="flex items-center gap-3">
                                    {slide.coverImage && (
                                        <Image
                                            src={slide.coverImage}
                                            alt={slide.author}
                                            width={64}
                                            height={64}
                                            className="block max-h-[64px] w-auto object-contain"
                                        />
                                    )}

                                    <p className="text-black/80">
                                        - {slide.author}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}