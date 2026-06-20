import React from "react";
import { Link, NavLink } from "react-router-dom";
import { TooltipContent, Tooltip, TooltipTrigger } from "./ui/tooltip";
import { experiences, skills } from "@/data/projectsData";
import ExperienceCard from "./ExperienceCard";
import WorldIcon from "./ui/world-icon";
import { motion } from "motion/react";

const Experience = () => {
    const stagger = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.15 },
        },
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    return (
        <div className="flex justify-center w-full flex-col">
            <motion.div
                className="max-w-[800px] mx-auto px-4 py-16 flex flex-col"
                variants={stagger}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="pl-4" variants={fadeUp}>
                    <Link
                        to={"/"}
                        className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-arrow-left transition-transform group-hover:-translate-x-1"
                        >
                            <path d="m12 19-7-7 7-7"></path>
                            <path d="M19 12H5"></path>
                        </svg>
                        Go Back
                    </Link>
                </motion.div>

                <div className="text-foreground">
                    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-16">
                        <motion.div className="mb-20" variants={fadeUp}>
                            <h1 className="text-4xl font-bold mb-8">Work Experience</h1>
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-8">
                                Hi, I'm a software developer who loves crafting dynamic and
                                intuitive web apps. I combine modern tech with a problem-solving
                                mindset to build solutions that scale. For me, every challenge
                                is an opportunity to create, learn, and push boundaries.
                            </p>
                            <div className="mb-8">
                                <h2 className="text-xl font-semibold mb-4 text-foreground">
                                    Technologies & Tools
                                </h2>
                                <div className="flex flex-wrap gap-2 wrap-break-word">
                                    {skills.map((skill, index) => (
                                        <motion.div
                                            key={skill.title}
                                            className="bg-card border border-dashed  border-black/20 dark:border-white/30 text-[14px] rounded-full px-2.5 py-1 text-xs font-medium hover:border-neutral-200 dark:hover:border-neutral-400 transition-colors "
                                            initial={{ opacity: 0, scale: 0.85 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3, delay: 0.3 + index * 0.03 }}
                                        >
                                            {skill.title}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className="space-y-16" variants={fadeUp}>
                            {experiences.map((experience) => (
                                <ExperienceCard key={experience.id} {...experience} />
                            ))}
                            <div className='h-px bg-gradient-to-r from-transparent via-border to-transparent mt-16'></div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Experience;
