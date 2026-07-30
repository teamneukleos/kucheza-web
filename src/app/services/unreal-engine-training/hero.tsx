"use client";

import Image from "next/image";

type HeroProps = {
    subtext?: string;
    title?: string;
    description?: string;
    showIcons?: boolean;
};

export default function Hero({
    subtext = "Corporate Training, Unreal Engine Support, VR & Mixed Reality",
    title = "Unreal Engine Training Centre",
    description = "Master Unreal Engine with our Expert Training!",
    showIcons = true,
}: HeroProps) {
    return (
        <section
            className="relative overflow-x-clip bg-cover bg-top"
            style={{
                backgroundImage:
                    "linear-gradient(to bottom, rgba(75,84,89,0.4), rgba(0,0,0,0)), url('/hero/hero-bg.png')",
            }}
        >
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 relative z-0 pb-20 pt-40 lg:pt-44 xl:pt-48">
                <div className="w-full max-w-[408px] lg:max-w-[748px]">
                    <span className="block text-xl font-light md:text-2xl">
                        {subtext}
                    </span>

                    <h1 className="my-5 max-w-[25ch] text-5xl font-bold md:my-6 md:text-6xl lg:my-7 xl:my-8 xl:text-6xl">
                        {title}
                    </h1>

                    <p className="text-xl font-light md:text-2xl lg:text-4xl xl:text-4xl">
                        {description}
                    </p>
                </div>

                {showIcons && (
                    <div className="hidden sm:block">
                        <Image
                            src="/hero/icons_vr_controller.png"
                            alt=""
                            width={203}
                            height={203}
                            className="absolute bottom-0 left-[62%] -z-10 w-[153px] translate-y-5 -rotate-[36deg] lg:w-[203px]"
                        />

                        <Image
                            src="/hero/icons_vr_headset.png"
                            alt=""
                            width={203}
                            height={203}
                            className="absolute bottom-[220px] left-[80%] -z-10 w-[153px] translate-y-5 rotate-[26deg] lg:w-[203px]"
                        />
                    </div>
                )}
            </div>
        </section>
    );
}
