"use client";

import Image from "next/image";
import Link from "next/link";

export type ProjectCardData = {
    title: string;
    description: string;
    href: string;
    image: string;
    theme: string;
    tag: string;
    tags?: string[];
    isViewable?: boolean;
};

const REVOLVE_TEXT = "Kucheza   ".repeat(6);

export default function ProjectCard({
    project,
}: {
    project: ProjectCardData;
}) {
    const {
        title,
        description,
        href = "#",
        image,
        theme,
        tag,
        tags = [],
        isViewable = true,
    } = project;

    const useWhiteText =
        tag === "Games in Education" || tag === "Events";

    const isExternal = /^https?:\/\//.test(href);

    return (
        <Link
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="group relative block overflow-hidden rounded-xl"
            style={{ "--primary": theme } as React.CSSProperties}
        >
            <div className="relative">
                <Image
                    src={image}
                    alt={title}
                    width={640}
                    height={360}
                    className="aspect-video w-full rounded-xl object-cover"
                />

                {isViewable && (
                    <>
                        <span
                            className="absolute bottom-4 right-4 inline-flex h-10 items-center justify-center whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/70 backdrop-blur-xl transition-all duration-500 group-hover:lg:h-[120px] group-hover:lg:w-[120px] group-hover:lg:translate-x-1/2 group-hover:lg:translate-y-1/2 group-hover:lg:scale-0 group-hover:lg:bottom-1/2 group-hover:lg:right-1/2 group-hover:lg:px-0 group-hover:lg:opacity-0"
                        >
                            View Project
                        </span>

                        <span
                            className={`absolute -bottom-8 -right-8 hidden h-[150px] w-[150px] scale-0 place-items-center rounded-full text-center text-xl font-bold leading-tight transition-all duration-500 group-hover:bottom-1/2 group-hover:right-1/2 group-hover:translate-x-1/2 group-hover:translate-y-1/2 group-hover:scale-100 lg:grid ${
                                useWhiteText ? "text-white" : "text-black"
                            }`}
                            style={{ backgroundColor: "var(--primary)" }}
                        >
                            <span className="relative z-[1]">
                                View
                                <br />
                                Project
                            </span>

                            <span className="absolute h-[150px] w-[150px] animate-[spin_8s_linear_infinite] text-[10px] tracking-[-0.1em]">
                                {REVOLVE_TEXT.split("").map((char, i) => (
                                    <span
                                        key={i}
                                        className="absolute left-1/2 origin-[0_75px] py-1"
                                        style={{
                                            transform: `rotate(${6 * i}deg)`,
                                        }}
                                    >
                                        {char}
                                    </span>
                                ))}
                            </span>
                        </span>
                    </>
                )}

                {/* Top-left theme tag */}
                <span
                    className={`absolute left-0 top-0 rounded-br-md rounded-tl-xl px-4 py-1 text-lg font-medium ${
                        useWhiteText ? "text-white" : "text-black"
                    }`}
                    style={{ backgroundColor: "var(--primary)" }}
                >
                    <span>{tag}</span>

                    {/* Right notch */}
                    <span className="absolute right-[1px] top-0 translate-x-full">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            style={{ fill: "var(--primary)" }}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#notch-clip-project)">
                                <path d="M19.9615 0V0.730769C9.34615 0.730769 0.730769 9.34615 0.730769 19.9615H0V0H19.9615Z" />
                            </g>
                            <defs>
                                <clipPath id="notch-clip-project">
                                    <rect
                                        width="20"
                                        height="20"
                                        fill="white"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </span>

                    {/* Bottom notch */}
                    <span className="absolute bottom-[1px] left-0 translate-y-full">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            style={{ fill: "var(--primary)" }}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#notch-clip-project)">
                                <path d="M19.9615 0V0.730769C9.34615 0.730769 0.730769 9.34615 0.730769 19.9615H0V0H19.9615Z" />
                            </g>
                        </svg>
                    </span>
                </span>
            </div>

            <div className="mt-4">
                <h3 className="mb-2 text-xl font-medium leading-tight text-white group-hover:underline sm:text-2xl md:text-3xl">
                    {title}
                </h3>

                <p className="mb-2 mt-2 text-white/60">
                    {description}
                </p>
            </div>

            {tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                    {tags.map((t) => (
                        <span
                            key={t}
                            className="rounded-full border border-dashed border-white px-4 py-2 text-white"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            )}
        </Link>
    );
}