"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownLeft } from "lucide-react";
import { motion } from "framer-motion";

type Plan = {
  title: string;
  price: string;
};

const plans: Plan[] = [
  {
    title: "Corporate",
    price: "Contact Us",
  },
  {
    title: "Individual",
    price: "$100",
  },
];

export default function PricingPlans() {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="relative min-h-[650px] overflow-hidden rounded-[32px]">

          {/* Background */}
          <Image
            src="/courses/pricing-bg.jpg"
            alt="Pricing"
            fill
            priority={false}
            className="object-cover"
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />

          {/* Content */}
          <div className="relative z-10 flex h-full items-center p-10 md:p-16 lg:p-20">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-[620px]"
            >
              <h2 className="mb-6 text-5xl font-medium leading-none text-[#FFD600] md:text-6xl lg:text-7xl xl:text-8xl">
                Enroll
              </h2>

              <p className="max-w-[560px] text-lg leading-relaxed text-white md:text-xl lg:text-2xl">
                Enroll in one of our courses today and start your journey to
                mastering Unreal Engine.
              </p>

              <div className="mt-10 flex flex-wrap gap-5">
                {plans.map((plan) => (
                  <div
                    key={plan.title}
                    className="min-w-[220px] rounded-2xl border border-white/40 bg-white/10 px-8 py-6 backdrop-blur-md"
                  >
                    <span className="mb-3 block text-lg font-medium text-white">
                      {plan.title}
                    </span>

                    <span className="text-3xl font-medium text-white">
                      {plan.price}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="absolute bottom-0 right-0 z-20 flex items-center gap-4 rounded-tl-[28px] bg-black px-8 py-5 text-2xl font-medium text-white transition hover:bg-neutral-900 md:text-3xl"
          >
            <ArrowDownLeft
              className="h-10 w-10 text-[#FFD600]"
              strokeWidth={2.5}
            />
            Enroll now
          </Link>
        </div>
      </div>
    </section>
  );
}