// featurecard.tsx
"use client";

import Image from "next/image";

export type FeatureCardData = {
    title: string;
    description: string;
    category: string;
    image: string;
    theme: string;
    tags: string[];
};

export default function FeatureCard({ tile }: { tile: FeatureCardData }) {
    const { title, description, category, image, theme, tags } = tile;

    return (
        <div
            className="group relative h-full overflow-hidden rounded-xl"
            style={{ "--primary": theme } as React.CSSProperties}
        >
            <div className="relative">
                <Image
                    src={image}
                    alt={title}
                    width={520}
                    height={293}
                    className="aspect-video w-full overflow-hidden rounded-xl object-cover"
                />
            </div>

            <div className="mt-4 p-4">
                <div className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                    {title}
                </div>

                <h2 className="mb-4 text-xl font-medium leading-tight text-white group-hover:underline sm:text-2xl md:text-2xl">
                    {description}
                </h2>

                <div className="flex flex-wrap gap-2 text-sm">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-dashed border-white px-4 py-2"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Category badge, top-left, with curved corner notches */}
            <span
                className="absolute top-0 rounded-br-md rounded-tl-md px-4 py-1 text-lg text-black"
                style={{ backgroundColor: "var(--primary)" }}
            >
                <span>{category}</span>

                {/* Right notch */}
                <span className="absolute right-[1px] top-0 translate-x-full">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        style={{ fill: "var(--primary)" }}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#notch-clip)">
                            <path d="M19.9615 0V0.730769C9.34615 0.730769 0.730769 9.34615 0.730769 19.9615H0V0H19.9615Z" />
                        </g>
                        <defs>
                            <clipPath id="notch-clip">
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
                        <g clipPath="url(#notch-clip)">
                            <path d="M19.9615 0V0.730769C9.34615 0.730769 0.730769 9.34615 0.730769 19.9615H0V0H19.9615Z" />
                        </g>
                    </svg>
                </span>
            </span>
        </div>
    );
}