"use client";

import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import ExperienceCard from "@/components/ExperienceCard";
import { experiences } from "@/data/projectsData";

const ExperienceSection = () => (
    <ScrollReveal className="mt-20">
        <p className="text-muted-foreground text-sm opacity-50">Work</p>
        <h2 className="text-2xl font-bold">Experiences</h2>

        <div className="space-y-16 mt-8">
            {experiences.map((exp, i) => (
                <div key={exp.id}>
                    <ExperienceCard {...exp} />
                    {i < experiences.length - 1 && (
                        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mt-16" />
                    )}
                </div>
            ))}
        </div>
    </ScrollReveal>
);

export default ExperienceSection;
