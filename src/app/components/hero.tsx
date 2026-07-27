"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden min-h-screen flex items-center">
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/hero/hero-bg.png" 
          alt="Hero Background"
          fill
          priority
          quality={85}
          className="object-cover object-center"
        />
      </div>

      {/* Structural Outer Container: Centers and controls maximum content width identically to the Navbar */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 z-10">
        
        {/* Inner Box Content Padding: Handles vertical spacing for layout structure */}
        <div className="relative box-border w-full pb-20 pt-32 md:pt-40 lg:pt-48">
          <div className="relative flex flex-col items-start justify-between gap-16 lg:flex-row">
            
            {/* LEFT AREA */}
            <div className="max-w-[760px]">
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-lg font-light text-[#15151D] leading-relaxed md:text-2xl lg:text-3xl">
                  Promoting cultural entrepreneurship through games
                </p>
                <h1 className="mt-4 text-5xl font-normal text-[#15151D] leading-[0.9] tracking-tight md:text-6xl lg:mt-6 lg:text-8xl">
                  Make games <br /> everywhere
                </h1>
                <p className="mt-6 text-xl font-light text-[#15151D] leading-tight md:text-2xl lg:text-4xl xl:text-5xl">
                  Made in <span className="font-semibold">Africa</span> for the world
                </p>
              </motion.div>

              {/* Showreel Button */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-10"
              >
                <button className="inline-flex items-center gap-4 rounded-[26px] bg-white p-3 pr-6 shadow-lg transition-transform hover:scale-[1.02]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#24F2BE] lg:h-16 lg:w-16">
                    <svg
                      viewBox="0 0 40 47"
                      className="h-6 w-6 lg:h-8 lg:w-8 fill-black"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M40 23.5L0.25 46.45V0.55L40 23.5Z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-[#111111] lg:text-base">
                    Showreel Video
                  </span>
                </button>
              </motion.div>
            </div>

            {/* RIGHT SIDE CARD */}
            <motion.aside
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="relative hidden flex-shrink-0 lg:block"
            >
              <div className="w-[220px] rounded-[34px] bg-white p-6 shadow-xl">
                <div className="flex justify-end">
                  <span className="text-[10px] text-neutral-500">
                    343 Industries
                  </span>
                </div>
                <p className="mt-5 text-[17px] leading-7 text-neutral-900">
                  Kucheza Gaming has shown remarkable potential in game development
                </p>
                <div className="mt-6 flex justify-center">
                  <Link
                    href="/#testimonials"
                    className="rounded-xl bg-[#24F2BE] px-6 py-3 text-sm font-medium text-black transition hover:brightness-95"
                  >
                    More
                  </Link>
                </div>
              </div>

              {/* Gamepad Floating GIF */}
              <div className="absolute bottom-8 translate-y-full">
                <Image
                  src="/images/gamepad_1.gif"
                  alt="Gamepad"
                  width={200}
                  height={200}
                />
              </div>
            </motion.aside>
          </div>

          {/* Floating decorative gaming controllers */}
          <div className="pointer-events-none absolute inset-0 hidden sm:block -z-10">
            <Image
              src="/hero/controller-1.png"
              alt="Controller 1"
              width={204}
              height={204}
              className="absolute bottom-5 left-[30%] w-[154px] translate-y-1/3 rotate-45 lg:w-[204px]"
            />
            <Image
              src="/hero/controller-2.png"
              alt="Controller 2"
              width={168}
              height={168}
              className="absolute bottom-[260px] left-[50%] w-[128px] translate-y-1/3 rotate-6 lg:w-[168px]"
            />
            <Image
              src="/hero/controller-3.png"
              alt="Controller 3"
              width={203}
                  height={203}
              className="absolute bottom-0 left-[60%] w-[153px] translate-y-5 -rotate-[36deg] lg:w-[203px]"
            />
            <Image
              src="/hero/controller-4.png"
              alt="Controller 4"
              width={203}
              height={203}
              className="absolute bottom-[300px] left-[60%] w-[153px] translate-y-5 rotate-[26deg] lg:w-[203px]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
