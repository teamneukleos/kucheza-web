// testimonials.tsx
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export type TestimonialData = {
    quote: string;
    author: string;
    title?: string; 
    coverImage?: string; 
    size?: "md" | "lg" | "xl"; 
};

const testimonials: TestimonialData[] = [
    {
        quote:
            "Kucheza Gaming has shown remarkable potential in game development, fueled by their high energy and collaborative spirit. We are proud to support their journey and look forward to their building momentum in creating engaging game experiences.",
        author: "343 Industries",
        size: "md",
    },
];

const sizeClasses: Record<NonNullable<TestimonialData["size"]>, string> = {
    md: "md:text-3xl xl:text-4xl 2xl:text-5xl",
    lg: "md:text-5xl xl:text-6xl 2xl:text-7xl",
    xl: "md:text-7xl xl:text-8xl 2xl:text-9xl",
};

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="relative overflow-hidden"
            style={{
                background: "linear-gradient(127.19deg, #52D7FF 0%, #41F7CD 70%)",
            }}
        >
            {/* Background line pattern, subtle sway */}
            <div
                className="pointer-events-none absolute left-0 top-0 h-full w-full animate-[sway_8s_ease-in-out_infinite] bg-cover bg-center opacity-60"
                style={{ backgroundImage: "url(/images/upline.svg)" }}
            />

            <div className="relative z-10 pb-32 pt-16">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1}
                    speed={1000}
                    loop
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    className="w-full"
                >
                    {testimonials.map((t, i) => (
                        <SwiperSlide key={i}>
                            {/* Structural Container: Synchronized grid limits across sections */}
                            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
                                {t.title && (
                                    <h2 className="mb-4 text-sm font-medium text-black/70">
                                        {t.title}
                                    </h2>
                                )}

                                {!t.title && (
                                    <p className="mb-4 text-sm font-medium text-black/70">
                                        Testimonials
                                    </p>
                                )}

                                {/* Adjusted margins to clear text indentation limits */}
                                <blockquote
                                    className={`my-6 break-words text-2xl font-light text-black ${sizeClasses[t.size ?? "md"]}`}
                                >
                                    {t.quote}
                                </blockquote>

                                <div className="flex items-center gap-3">
                                    {t.coverImage && (
                                        <Image
                                            src={t.coverImage}
                                            alt={t.author}
                                            width={64}
                                            height={64}
                                            className="block max-h-[64px] w-auto object-contain"
                                        />
                                    )}
                                    <p className="text-black/80">- {t.author}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
