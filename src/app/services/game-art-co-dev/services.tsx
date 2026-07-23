"use client";

import Link from "next/link";

const services = [
  { title: "Concept Art", href: "#" },
  { title: "2D Art", href: "#" },
  { title: "Splash Art", href: "#" },
  { title: "2D Characters", href: "#" },
  { title: "3D Environments", href: "#" },
  { title: "3D Assets", href: "#" },
  { title: "Modelling", href: "#" },
  { title: "Advergames", href: "#" }
];

export default function Services() {
  return (
    <section className="bg-[#2B2F32] text-white">
      {/* Structural Container: Centers layouts identically to your Navbar, Hero, and Galleries */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 py-24">
        
        <h2 className="mb-16 text-5xl font-normal text-[#43DFFF]">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href ?? "#"}
              className="group flex items-center justify-between py-10 transition-colors hover:bg-white/5"
            >
              <h3 className="text-4xl font-light tracking-tight text-[#BDBDBD] transition-colors duration-300 group-hover:text-white lg:text-5xl">
                {service.title}
              </h3>

              {/* Rotate 45deg on hover so arrow becomes → */}
              <div className="flex-shrink-0 transition-transform duration-300 group-hover:rotate-45">
                <ArrowIcon className="h-20 w-20 lg:h-28 lg:w-28" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 114 114"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
    >
      <rect
        x="0.707107"
        y="56.5685"
        width="79"
        height="79"
        rx="39.5"
        transform="rotate(-45 0.707107 56.5685)"
        stroke="#F7F6F3"
        className="transition-colors duration-300 group-hover:stroke-[#43DFFF]"
      />

      <g clipPath="url(#service-arrow)">
        <path
          d="M62.2425 54.6876L54.5639 62.3662L46.8566 70.0735L43.6756 66.8926L59.1469 51.132L56.8413 51.6447C55.5443 51.9007 53.007 52.0666 51.19 51.9752C49.3729 51.8836 46.6608 51.4147 45.1598 50.8914C43.6587 50.3682 41.5223 49.4972 40.5115 48.9465C39.4429 48.3956 38.576 47.7588 38.5754 47.5281C38.5747 47.2974 39.4369 46.2039 42.4567 43.2419L44.4206 44.2855C45.518 44.8653 47.5968 45.7362 49.0688 46.1728C50.5119 46.6382 53.368 47.021 55.4733 47.0556C57.5496 47.0614 60.2884 46.7517 61.5272 46.3226C62.7951 45.9224 64.4944 45.1484 66.9702 43.598L70.0352 46.6057L69.0011 48.0447C68.4266 48.8506 67.6527 50.5499 67.2235 51.8464C66.7945 53.1429 66.4562 55.9106 66.462 57.9869C66.4683 60.2938 66.8506 62.9769 67.4325 64.8241C67.9561 66.4982 68.7984 68.6058 70.218 71.0032L65.9043 75.317L65.1217 73.9018C64.7447 73.1222 63.9905 71.5627 63.5836 70.4081C63.119 69.2534 62.5073 67.0311 62.1856 65.4441C61.8641 63.8571 61.6556 61.463 61.7096 60.1366C61.7635 58.8101 61.9317 57.0226 62.2425 54.6876Z"
          fill="#F7F6F3"
          className="transition-colors duration-300 group-hover:fill-[#43DFFF]"
        />
      </g>

      <defs>
        <clipPath id="service-arrow">
          <rect
            width="39.994"
            height="39.994"
            fill="white"
            transform="translate(28.2891 56.5685) rotate(-45)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
