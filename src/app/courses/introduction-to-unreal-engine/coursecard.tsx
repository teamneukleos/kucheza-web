"use client";

import Image from "next/image";
import Link from "next/link";

export type CourseCardData = {
  title: string;
  description: string;
  href: string;
  image: string;
  theme: string;
  tag: string;
  tags: string[];
};

export default function CourseCard({
  course,
}: {
  course: CourseCardData;
}) {
  const { title, description, href, image, theme, tag, tags } = course;

  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-xl"
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

        <span
          className="absolute left-0 top-0 rounded-br-md rounded-tl-xl px-4 py-1 text-lg font-medium text-black"
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
              <g clipPath="url(#notch-clip-course)">
                <path d="M19.9615 0V0.730769C9.34615 0.730769 0.730769 9.34615 0.730769 19.9615H0V0H19.9615Z" />
              </g>
              <defs>
                <clipPath id="notch-clip-course">
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
              <g clipPath="url(#notch-clip-course)">
                <path d="M19.9615 0V0.730769C9.34615 0.730769 0.730769 9.34615 0.730769 19.9615H0V0H19.9615Z" />
              </g>
            </svg>
          </span>
        </span>
      </div>

      <div className="mt-4">
        <p className="text-sm uppercase tracking-wide text-white/50">
          {title}
        </p>

        <h3 className="mt-2 text-2xl font-medium leading-tight text-white transition group-hover:underline md:text-3xl">
          {description}
        </h3>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-dashed border-white/40 px-4 py-1 text-sm text-white/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}