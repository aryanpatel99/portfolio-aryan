import React from "react";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Card from "@/components/Card";
import ScrollReveal from "@/components/ScrollReveal";
import { projects } from "@/data/projectsData";

const ProjectsSection = () => (
    <ScrollReveal className="mt-8">
        <p className="text-muted-foreground text-sm opacity-50">Featured</p>
        <h2 className="text-2xl font-bold">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {projects.slice(0, 4).map((project, index) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <Card
                        title={project.title}
                        img={project.img}
                        duration={project.duration}
                        description={project.description}
                        techStack={project.techStack}
                        liveUrl={project.liveUrl}
                    />
                </motion.div>
            ))}
        </div>

        <div className="flex justify-center mt-4">
            <NavLink to="/projects">
                <Button variant="outline">See More Projects</Button>
            </NavLink>
        </div>
    </ScrollReveal>
);

export default ProjectsSection;
