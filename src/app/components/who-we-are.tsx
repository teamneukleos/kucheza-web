"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section className="bg-white py-20 md:py-28 lg:py-36">
      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center"
          >
            <Image
              src="/images/who-we-are.gif"
              alt="Who We Are"
              width={420}
              height={520}
              priority
              className="h-auto w-[220px] sm:w-[280px] md:w-[320px] lg:w-[360px] xl:w-[400px]"
              unoptimized
            />
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-[560px] lg:mx-0"
          >
            <h2 className="text-[36px] font-semibold leading-tight text-[#1E2433] md:text-[48px]">
              Who are we?
            </h2>

            <p className="mt-6 text-lg leading-9 text-[#2F3545] md:text-[22px]">
              Kucheza is an Africa based games studio utilising the power of
              video games to introduce new audiences to culture and build a
              successful and sustainable video games ecosystem in Africa.
            </p>

            <Link
              href="/about-us"
              className="mt-10 inline-flex items-center justify-center rounded-xl bg-[#35F2C7] px-8 py-4 text-base font-medium text-black duration-300 transition-all hover:translate-x-5 "
            >
              Our Values
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}