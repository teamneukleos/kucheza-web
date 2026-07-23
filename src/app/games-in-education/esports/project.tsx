// projects.tsx
"use client";

import { motion } from "framer-motion";
import ProjectCard, { ProjectCardData } from "./projectcard";

const projects: ProjectCardData[] = [
    {
        title: "SCHOOL ESPORTS INVITATIONALS",
        description:
            "The School Esports Invitationals are special events where select schools are invited to participate in competitive esports tournaments.",
        image: "/esports/project-1.png",
        theme: "#EE1F63",
        tag: "Course",
        tags: ["December", "30 Public Schools", "3 Esports Tiles", "Annually"],
    },
    {
        title: "SCHOOL ESPORT LEAGUE",
        description:
            "The School Esports League is our annual series of esports tournaments and competitions that run throughout the academic year.",
        image: "/esports/project-2.png",
        theme: "#EE1F63",
        tag: "Course",
        tags: ["June", "4 Schools", "3 Esports Tiles", "Annually"],
    },
    {
        title: "SCHOOL ESPORT BOOST",
        description:
            "This program aimed at enhancing the esports capabilities of schools.",
        image: "/esports/project-3.png",
        theme: "#EE1F63",
        tag: "Course",
        tags: ["Periodically", "Inter School"],
    },
    {
        title: "CAREER IN VIDEO GAMES",
        description:
            "With every event, we strive to promote careers in the video games industry.",
        image: "/esports/project-4.png",
        theme: "#EE1F63",
        tag: "Course",
        tags: ["Periodically"],
    },
];

export default function Projects() {
    return (
        <section className="bg-black py-20 text-white md:py-28">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-md text-3xl font-medium leading-tight sm:text-4xl"
                >
                   Take a look at our amazing projects
                </motion.h2>

                <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}