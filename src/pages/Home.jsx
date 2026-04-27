import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutSection from "@/components/sections/AboutSection";
import GitHubActivitySection from "@/components/sections/GitHubActivitySection";
import ScrollReveal from "@/components/ScrollReveal";
import CTA from "@/components/CTA";

const Home = () => (
    <div className="mx-auto max-w-3xl px-4 min-h-screen py-16">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <AboutSection />
        <GitHubActivitySection />
        <ScrollReveal>
            <CTA />
        </ScrollReveal>
    </div>
);

export default Home;
