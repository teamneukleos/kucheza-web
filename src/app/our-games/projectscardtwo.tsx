"use client";

import Image from "next/image";
import Link from "next/link";
import { ProjectCardData } from "../components/projectcard";

const REVOLVE_TEXT = "Kucheza   ".repeat(6);

export default function ProjectCardTwo({
    project,
    direction = "normal",
}: {
    project: ProjectCardData;
    direction?: "normal" | "reverse";
}) {
    const { title, description, href, image, theme, tag, isViewable = true } = project;
    const isReverse = direction === "reverse";

    return (
        <Link
            href={href}
            className={`group relative flex flex-col gap-10 overflow-hidden rounded-xl md:flex-row ${
                isReverse ? "md:flex-row-reverse" : ""
            }`}
            style={{ "--primary": theme } as React.CSSProperties}
        >
            {/* Image side */}
            <div className="relative flex-1">
                <Image
                    src={image}
                    alt={title}
                    width={760}
                    height={428}
                    className="aspect-video w-full overflow-hidden rounded-xl object-cover"
                />

                {/*
                  Tag sits on the image itself, not the whole card — otherwise
                  it overlaps the title text on rows where text is on the left.
                  It anchors to whichever corner is the "outer" edge of the row:
                  top-left when the image is on the left (normal), top-right
                  when the image is on the right (reverse). Notches mirror
                  to match, so the folded-ribbon shape always points inward.
                */}
                <span
                    className={`absolute top-0 rounded-tl-xl px-4 py-1 text-lg font-medium text-black ${
                        isReverse ? "right-0 rounded-bl-md" : "left-0 rounded-br-md"
                    }`}
                    style={{ backgroundColor: "var(--primary)" }}
                >
                    <span>{tag}</span>

                    {isReverse ? (
                        <>
                            {/* Left notch */}
                            <span className="absolute left-[1px] top-0 -translate-x-full scale-x-[-1]">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    style={{ fill: "var(--primary)" }}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#notch-clip-project-two)">
                                        <path d="M19.9615 0V0.730769C9.34615 0.730769 0.730769 9.34615 0.730769 19.9615H0V0H19.9615Z" />
                                    </g>
                                    <defs>
                                        <clipPath id="notch-clip-project-two">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>

                            {/* Bottom notch */}
                            <span className="absolute bottom-[1px] right-0 translate-y-full scale-x-[-1]">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    style={{ fill: "var(--primary)" }}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#notch-clip-project-two)">
                                        <path d="M19.9615 0V0.730769C9.34615 0.730769 0.730769 9.34615 0.730769 19.9615H0V0H19.9615Z" />
                                    </g>
                                </svg>
                            </span>
                        </>
                    ) : (
                        <>
                            {/* Right notch */}
                            <span className="absolute right-[1px] top-0 translate-x-full">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    style={{ fill: "var(--primary)" }}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#notch-clip-project-two)">
                                        <path d="M19.9615 0V0.730769C9.34615 0.730769 0.730769 9.34615 0.730769 19.9615H0V0H19.9615Z" />
                                    </g>
                                    <defs>
                                        <clipPath id="notch-clip-project-two">
                                            <rect width="20" height="20" fill="white" />
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
                                    <g clipPath="url(#notch-clip-project-two)">
                                        <path d="M19.9615 0V0.730769C9.34615 0.730769 0.730769 9.34615 0.730769 19.9615H0V0H19.9615Z" />
                                    </g>
                                </svg>
                            </span>
                        </>
                    )}
                </span>

                {isViewable && (
                    <>
                        <span className="absolute bottom-4 right-4 inline-flex h-10 items-center justify-center whitespace-nowrap rounded-full border border-black/10 bg-black/5 px-4 py-2 text-sm font-medium text-black/70 backdrop-blur-xl transition-all duration-500 group-hover:lg:h-[120px] group-hover:lg:w-[120px] group-hover:lg:translate-x-1/2 group-hover:lg:translate-y-1/2 group-hover:lg:scale-0 group-hover:lg:bottom-1/2 group-hover:lg:right-1/2 group-hover:lg:px-0 group-hover:lg:opacity-0">
                            View Project
                        </span>

                        <span
                            className="absolute -bottom-8 -right-8 hidden h-[150px] w-[150px] scale-0 place-items-center rounded-full text-center text-xl font-bold leading-tight text-black transition-all duration-500 group-hover:scale-100 group-hover:bottom-1/2 group-hover:right-1/2 group-hover:translate-x-1/2 group-hover:translate-y-1/2 lg:grid"
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
                                        style={{ transform: `rotate(${6 * i}deg)` }}
                                    >
                                        {char}
                                    </span>
                                ))}
                            </span>
                        </span>
                    </>
                )}
            </div>

            {/* Text side */}
            <div className="mt-4 md:w-1/2 lg:w-[400px]">
                <h3 className="mb-2 text-3xl font-medium leading-tight text-black group-hover:underline sm:text-4xl md:text-4xl">
                    {title}
                </h3>
                <p className="mb-2 mt-2 text-lg text-black/60">{description}</p>
            </div>
        </Link>
    );
}