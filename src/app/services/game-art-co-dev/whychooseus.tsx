"use client";

export default function WhyChooseUs() {
    return (
        <section
            className="relative overflow-hidden py-20 md:py-28"
            style={{
                background: "linear-gradient(127.19deg, #52D7FF 0%, #41F7CD 70%)",
            }}
        >
            {/* Background pattern */}
            <div
                className="pointer-events-none absolute left-0 top-0 h-full w-full animate-[sway_8s_ease-in-out_infinite] bg-cover bg-center opacity-60"
                style={{
                    backgroundImage: "url(/images/upline.svg)",
                }}
            />

            {/* Structural Container: Balanced spacing limits matching your global layouts */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
                {/* Small title */}
                <h2 className="text-xl font-medium text-[#111111] md:text-2xl">
                    Why Choose Us?
                </h2>

                {/* Quote */}
                <blockquote className="mt-10 text-3xl font-light leading-snug tracking-tight text-[#111111] md:text-5xl">
                    “We are committed to excellence in every aspect of game development and art
                    production.”
                </blockquote>
            </div>
        </section>
    );
}
