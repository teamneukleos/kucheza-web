"use client";

import { motion } from "framer-motion";
import { useContactDialog } from "@/app/contact/contact-dialog";

const syllabus = [
  {
    title: "Learning Objectives",
    items: [
      "Prepare a CAD format for the for Unreal Engine",
      "Operate Unreal Engine 5 in its basic features",
      "Transfer lossless CAD data to Unreal Engine using the Datasmith import function",
      "Create beautiful landscapes using the Landscape tools",
      "Use materials correctly in Unreal Engine",
      "Achieve fantastic lighting of your scenes thanks to Lumen, the new software raytracing in UE5",
      "Create your own videos of your scene using the sequencer",
      "Build your first blueprints using the visual programming interface"
    ],
  },
  
];

export default function CourseCurriculum() {
  const { open } = useContactDialog();

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">

        <div className="grid gap-16 lg:grid-cols-[1.8fr_0.8fr]">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold md:text-3xl">
                Unreal Engine Architecture Bootcamp
            </h2>

            <p className="mt-10 text-xl text-neutral-700">
              Save costs and be more flexible through real-time visualization in Twinmotion and Unreal Engine.  
            </p>

            <p className="mt-10 text-xl text-neutral-700">
               Good architecture deserves to be visualized with the best technical possibilities. As simple, as fast 
               and as brilliant as possible. Twinmotion and Unreal Engine give you the full spectrum of architectural 
               visualization with the right tools for the right purpose. In this innovative five-day workshop, you’ll 
               not only learn what’s possible, you’ll put it into practice during the training by independently 
               implementing your own Capstone project.            
            </p>

            <h2 className=" mt-8 text-xl font-bold md:text-xl">
                Who is this bootcamp for?
            </h2>
            
            <p className="mt-3 text-xl text-neutral-700">
              Visualization studios, architectural firms, Urban planners, Property developers

            </p>

            <h2 className=" mt-8 text-xl font-bold md:text-xl">
               Prerequisite for this workshop
            </h2>
            
            <p className="mt-3 text-xl text-neutral-700">
               Experience with design software (CAD / DCC) and with the creation of architectural projects


            </p>



            <div className="mt-12 space-y-16">
              {syllabus.map((section) => (
                <div key={section.title}>
                  <h3 className="text-xl font-bold">
                    {section.title}
                  </h3>

                  <ul className="mt-8 space-y-8">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-5 text-lg leading-relaxed text-neutral-700 md:text-lg"
                      >
                        <span className="mt-3 h-2 w-2 rounded-full bg-neutral-300 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-36 h-fit"
          >
            <div className="space-y-12">

              <div>
                <h4 className="text-2xl font-bold uppercase">
                  Duration
                </h4>

                <div className="mt-4 space-y-4 text-xl text-neutral-700">
                  <p>5 Days</p>
                  <p>9:00am – 3:00pm</p>
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-bold uppercase">
                  Training Mode
                </h4>

                <p className="mt-4 text-xl text-neutral-700">
                  Hybrid (In-person & Virtual)
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-bold uppercase">
                  Training Fee
                </h4>

                <div className="mt-4 space-y-4 text-xl text-neutral-700">
                  <p>₦500,000</p>
                  <p>$300</p>
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-bold uppercase">
                  General Training
                </h4>

                <div className="mt-4 space-y-4 text-xl text-neutral-700">
                  <p>21st – 25th October 2024</p>
                  <p>25th – 29th November 2024</p>
                  <p>27th – 31st January 2025</p>
                  <p>24th – 28th February 2025</p>
                </div>
              </div>

              <button
                onClick={open}
                className="mt-8 rounded-xl bg-[#FFD600] px-12 py-4 text-xl font-semibold  transition-all hover:translate-x-5"
              >
                Register
              </button>

            </div>
          </motion.aside>

        </div>
      </div>
    </section>
  );
}