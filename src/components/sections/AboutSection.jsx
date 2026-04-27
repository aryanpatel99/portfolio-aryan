import React from "react";
import { motion } from "motion/react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from "@/components/kibo-ui/marquee";
import ScrollReveal from "@/components/ScrollReveal";
import { skills } from "@/data/projectsData";
import { useResolvedTheme } from "@/hooks/useResolvedTheme";

const AboutSection = () => {
    const resolvedTheme = useResolvedTheme();

    return (
        <ScrollReveal className="mt-20">
            <p className="text-muted-foreground text-sm opacity-50">About</p>
            <h2 className="text-2xl font-bold">Me</h2>

            <div className="mt-8 flex flex-col md:flex-row gap-8">
                <motion.img
                    src="/aizen-pixelated.png"
                    loading="lazy"
                    className="size-60 border-2 border-secondary rounded-md object-cover"
                    alt="Aryan Patel"
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                />
                <div className="mt-4 flex-1 min-w-0">
                    <h3 className="text-2xl font-bold">Aryan Patel</h3>
                    <p className="text-muted-foreground mt-4">
                        I'm a Full Stack web developer and Open Source Contributor, I love building
                        products to solve real-world problems. I'm specialized in building MVP's.
                    </p>
                    <div className="mt-4 overflow-hidden">
                        <p className="text-muted-foreground text-base font-semibold opacity-50 mb-4">Skills</p>
                        <Marquee>
                            <MarqueeFade side="left" />
                            <MarqueeFade side="right" />
                            <MarqueeContent>
                                {skills.map((skill, index) => (
                                    <Tooltip key={index}>
                                        <TooltipTrigger>
                                            <MarqueeItem className="h-10 w-10">
                                                <img
                                                    alt={skill.title}
                                                    className="h-full w-full object-contain"
                                                    src={skill.img[resolvedTheme]}
                                                />
                                            </MarqueeItem>
                                            <TooltipContent>
                                                <p className="text-xs">{skill.title}</p>
                                            </TooltipContent>
                                        </TooltipTrigger>
                                    </Tooltip>
                                ))}
                            </MarqueeContent>
                        </Marquee>
                    </div>
                </div>
            </div>
        </ScrollReveal>
    );
};

export default AboutSection;
