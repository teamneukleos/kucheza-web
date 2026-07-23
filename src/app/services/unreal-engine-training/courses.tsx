"use client";

import { motion } from "framer-motion";
import CourseCard, { CourseCardData } from "./coursecard";

const courses: CourseCardData[] = [
  {
    title: "INTRODUCTION TO UNREAL ENGINE",
    description:
      "Learn the basics of Unreal Engine, from installation to creating your first interactive scene.",
    href: "/courses/introduction-to-unreal-engine",
    image: "/courses/course-1.png",
    theme: "#FFD400",
    tag: "Course",
    tags: ["4 Weeks", "Beginner", "Blueprints"],
  },
  {
    title: "UNREAL ENGINE FOR ARCHITECTURE",
    description:
      "Build your first interactive architectural walkthrough for sales and investor relations.",
    href: "/courses/unreal-engine-architecture",
    image: "/courses/course-2.png",
    theme: "#FFD400",
    tag: "Course",
    tags: ["2 Weeks", "Architecture", "Animation"],
  },
  {
    title: "REAL-TIME CINEMATICS",
    description:
      "Create beautiful cinematics and animations using Sequencer inside Unreal Engine.",
    href: "/courses/real-time-cinematics",
    image: "/courses/course-3.png",
    theme: "#FFD400",
    tag: "Course",
    tags: ["Sequencer", "Lighting", "Cinematics"],
  },
  {
    title: "GAME DEVELOPMENT BOOTCAMP",
    description:
      "Learn game mechanics, Blueprints, UI systems and packaging your first playable game.",
    href: "/courses/game-development",
    image: "/courses/course-4.png",
    theme: "#FFD400",
    tag: "Course",
    tags: ["8 Weeks", "Gameplay", "UI"],
  },
];export default function Courses() {
  return (
    <section className="bg-black py-20 text-white md:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md text-3xl font-medium leading-tight sm:text-4xl"
        >
          Take a look at our Courses
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}