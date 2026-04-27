import React, { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Send } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Card from "./Card";
import { experiences, projects, skills } from "@/data/projectsData";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "./theme-provider";
import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from "./kibo-ui/marquee";
import TwitterXIcon from "./ui/twitter-x-icon";
import LinkedinIcon from "./ui/linkedin-icon";
import MailFilledIcon from "./ui/mail-filled-icon";
import GithubIcon from "./ui/github-icon";
import WorldIcon from "./ui/world-icon";
import FileDescriptionIcon from "./ui/file-description-icon";
import SendIcon from "./ui/send-icon";
import CTA from "./CTA";
import HeroButton from "./HeroButton";
import ExperienceCard from "./ExperienceCard";
import { NextJSIcon, NodeJSIcon, ReactIcon, TypeScriptIcon } from "@/icons";
import OpenSourceContributions from "./OpenSourceContributions";

// Reusable scroll-triggered section wrapper
const ScrollReveal = ({ children, className, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
        className={className}
    >
        {children}
    </motion.div>
);

const MainHeroContainer = () => {
    const { theme } = useTheme();
    const [resolvedTheme, setResolvedTheme] = useState("dark");
    const fileIconRef = useRef(null);
    const sendIconRef = useRef(null);
    const navigate = useNavigate()

    useEffect(() => {
        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
                .matches
                ? "dark"
                : "light";
            setResolvedTheme(systemTheme);
        } else {
            setResolvedTheme(theme);
        }
    }, [theme]);

    const explicitTheme = {
        light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
        // dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
    }

    // Stagger container for the hero intro
    const heroStagger = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
            },
        },
    };

    const heroChild = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    return (
        <div className="mx-auto max-w-3xl px-4 min-h-screen py-16">
            {/* Hero intro — staggered fade-in on load */}
            <motion.div
                className="mx-auto max-w-3xl"
                variants={heroStagger}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="relative inline-block" variants={heroChild}>
                    <img
                        loading="lazy"
                        className="size-24 rounded-full border border-border object-cover"
                        src="/aizen-pixelated.png"
                        alt=""
                    />
                </motion.div>
                <motion.div className="mt-8 flex flex-col gap-2" variants={heroChild}>
                    <h1 className="text-4xl font-semibold">
                        Hi I'm Aryan -{" "}
                        <span className="text-muted-foreground font-md">
                            A Full Stack Developer.
                        </span>
                    </h1>
                    <div className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-2 text-base text-muted-foreground md:text-lg whitespace-pre-wrap leading-7">
                        I build interactive, responsive, and accessible web applications using<HeroButton text="TypeScript" icon={<TypeScriptIcon/>} />, <HeroButton text="React.js" icon={<ReactIcon/>} />, <HeroButton text="Next.js" icon={<NextJSIcon/>} />, and <HeroButton text="Node.js" icon={<NodeJSIcon/>} />.
                        <span>Focused on delivering seamless and intuitive user experiences.</span>
                    </div>
                </motion.div>
                {/* -------------CTA----------- */}
                <motion.div className="mt-8 flex gap-4" variants={heroChild}>
                    <Button
                        onClick={() => navigate("/resume")}
                        variant="outline"
                        onMouseEnter={() => fileIconRef.current?.startAnimation()}
                        onMouseLeave={() => fileIconRef.current?.stopAnimation()}
                    >
                        <FileDescriptionIcon ref={fileIconRef} className="size-4" />
                        Resume/CV
                    </Button>
                    <Button onClick={()=> window.location.href = "mailto:aryanpatel6215@gmail.com?subject=Let's Connect"} variant="default" onMouseEnter={() => sendIconRef.current?.startAnimation()} onMouseLeave={() => sendIconRef.current?.stopAnimation()}>
                        {/* <Send className="size-3.5" /> */}
                        <SendIcon  ref={sendIconRef} className="size-4" />
                        Get in Touch
                    </Button>
                </motion.div>
                {/* --------------socials----------- */}
                <motion.div className="mt-8 flex gap-2 items-center" variants={heroChild}>
                    <Tooltip>
                        <TooltipTrigger>
                            <a target="_blank" href={"https://x.com/codexaryan"}>
                                <TwitterXIcon size={24} className="opacity-50" />
                            </a>
                            <TooltipContent>
                                <p>X.com</p>
                            </TooltipContent>
                        </TooltipTrigger>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger>
                            <a
                                target="_blank"
                                href={"https://www.linkedin.com/in/aryan-patel-100aa7307/"}
                            >
                                <LinkedinIcon size={24} className="opacity-50" />
                            </a>
                            <TooltipContent>
                                <p>Linkedin</p>
                            </TooltipContent>
                        </TooltipTrigger>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger>
                            <a target="_blank" href={"mailto:aryanpatel6215@gmail.com"}>
                                <MailFilledIcon size={24} className="opacity-50" />
                            </a>
                            <TooltipContent>
                                <p>Mail</p>
                            </TooltipContent>
                        </TooltipTrigger>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger>
                            <a href={"https://leetcode.com/u/ARYAN99_/"} target="_blank">
                                <svg
                                    role="img"
                                    className="opacity-50"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="Leetcode--Streamline-Simple-Icons"
                                    height="1.2em"
                                    width="1.2em"
                                >
                                    <path
                                        d="M13.483 0a1.374 1.374 0 0 0 -0.961 0.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0 -1.209 2.104 5.35 5.35 0 0 0 -0.125 0.513 5.527 5.527 0 0 0 0.062 2.362 5.83 5.83 0 0 0 0.349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193 0.039 0.038c2.248 2.165 5.852 2.133 8.063 -0.074l2.396 -2.392c0.54 -0.54 0.54 -1.414 0.003 -1.955a1.378 1.378 0 0 0 -1.951 -0.003l-2.396 2.392a3.021 3.021 0 0 1 -4.205 0.038l-0.02 -0.019 -4.276 -4.193c-0.652 -0.64 -0.972 -1.469 -0.948 -2.263a2.68 2.68 0 0 1 0.066 -0.523 2.545 2.545 0 0 1 0.619 -1.164L9.13 8.114c1.058 -1.134 3.204 -1.27 4.43 -0.278l3.501 2.831c0.593 0.48 1.461 0.387 1.94 -0.207a1.384 1.384 0 0 0 -0.207 -1.943l-3.5 -2.831c-0.8 -0.647 -1.766 -1.045 -2.774 -1.202l2.015 -2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0 -1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38 -1.382 1.38 1.38 0 0 0 -1.38 -1.382z"
                                        fill="currentColor"
                                        strokeWidth="1"
                                    ></path>
                                </svg>
                            </a>
                            <TooltipContent>
                                <p>Leetcode</p>
                            </TooltipContent>
                        </TooltipTrigger>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger>
                            <a target="_blank" href={"https://github.com/aryanpatel99"}>
                                <GithubIcon className="opacity-50" size={24} />
                            </a>
                            <TooltipContent>
                                <p>GitHub</p>
                            </TooltipContent>
                        </TooltipTrigger>
                    </Tooltip>
                </motion.div>
                {/* <div></div> */}

                {/* add spotify player */}
            </motion.div>

            {/* ----------------experiences---------------- */}
            <ScrollReveal className="mt-20">
                <p className="text-muted-foreground text-sm opacity-50">Featured</p>
                <h2 className="text-2xl font-bold">Experiences</h2>

                <div className="space-y-16 mt-8">
                    <div className="group">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg border border-border bg-card flex flex-wrap items-center justify-center overflow-hidden">
                                    {/* <img src="./credohire-logo.png"  alt="img" />} */}<span className="text-xs tracking-tight opacity-50">Cred</span> 
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h2 className="sm:text-xl text-sm font-medium text-foreground mb-1">
                                            CredoHire
                                        </h2>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <NavLink
                                                    target="_blank"
                                                    to={"https://www.credohire.ai/"}
                                                >
                                                    <WorldIcon className="opacity-50 hover:opacity-100" size={16} />
                                                </NavLink>

                                                <TooltipContent>
                                                    <p>Visit website</p>
                                                </TooltipContent>
                                            </TooltipTrigger>
                                        </Tooltip>
                                    </div>
                                    <p className="sm:text-sm text-xs text-muted-foreground">
                                        QA and CSM - Intern
                                    </p>
                                </div>
                            </div>
                            <div className="align-self-end sm:text-sm text-xs">
                                <p className="sm:text-sm text-xs text-muted-foreground">
                                    March 2025 - July 2025
                                </p>
                                <div className="flex items-center  gap-2 mt-1">
                                    <span className="text-xs text-muted-foreground">
                                        Full-time
                                    </span>
                                    <span className="text-muted-foreground">·</span>
                                    <span className="text-xs text-muted-foreground">Remote</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-8">
                            <div className="bg-card border border-border rounded-lg px-2.5 py-1 text-xs font-medium hover:border-zinc-600 transition-colors ">
                                Manual Testing
                            </div>
                            <div className="bg-card border border-border rounded-lg px-2.5 py-1 text-xs font-medium hover:border-zinc-600 transition-colors ">
                                Next.js
                            </div>
                            {/* <div className="bg-card border border-border rounded-lg px-2.5 py-1 text-xs font-medium hover:border-zinc-600 transition-colors ">
                                Excel
                            </div> */}
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0"></div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Collaborated with the development team to identify, document,
                                    and resolve multiple bugs, leading to a smoother and more
                                    reliable user experience.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0"></div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Conducted functional and UI/UX testing, providing actionable
                                    feedback that enhanced product performance.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0"></div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Worked closely with mentors and senior developers to
                                    understand workflows, debug issues, and suggest improvements.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0"></div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Improved product usability by identifying and reporting edge
                                    cases during testing.
                                </p>
                            </div>
                        </div>
                        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mt-16"></div>
                    </div>
                </div>

                {/* ------------projects----------- */}
                <ScrollReveal>
                    <div className="mt-8">
                        <p className="text-muted-foreground text-sm opacity-50">Featured</p>
                        <h2 className="text-2xl font-bold">Projects</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        {/* ----------------project card---------------- */}

                        {projects.slice(0, 4).map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{
                                    duration: 0.45,
                                    delay: index * 0.08,
                                    ease: [0.25, 0.1, 0.25, 1],
                                }}
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
                        <NavLink to={"/projects"}>
                            <Button variant="outline">See More Projects</Button>
                        </NavLink>
                    </div>
                </ScrollReveal>
            </ScrollReveal>

            {/* ------------about----------- */}
            <ScrollReveal className="mt-20">
                <p className="text-muted-foreground text-sm opacity-50">About</p>
                <h2 className="text-2xl font-bold">Me</h2>

                <div className="mt-8 flex flex-col md:flex-row gap-8">
                    <motion.img
                        src={'/aizen-pixelated.png'}
                        loading="lazy"
                        className="size-60 border-2 border-secondary rounded-md object-cover"
                        alt="logo"
                        initial={{ opacity: 0, scale: 0.92 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    />
                    <div className="mt-4 flex-1 min-w-0">
                        <h3 className="text-2xl font-bold">Aryan Patel</h3>
                        <p className="text-muted-foreground mt-4">I'm a Full Stack web developer and Open Source Contributor, I love building products to solve real-world problems. I'm specialized in building MVP's.</p>
                        <div className="mt-4 overflow-hidden">
                            <p className="text-muted-foreground text-base font-semibold opacity-50 mb-4">Skills</p>
                            <Marquee>
                                <MarqueeFade side="left" />
                                <MarqueeFade side="right" />
                                <MarqueeContent>
                                    {skills.map((skill, index) => (
                                        <Tooltip key={index}>
                                            <TooltipTrigger>
                                                <MarqueeItem className="h-10 w-10" key={index}>
                                                    <img
                                                        alt={`Placeholder ${index}`}
                                                        className="h-full w-full object-contain"
                                                        src={skill.img[resolvedTheme]}
                                                    />
                                                </MarqueeItem>
                                                <TooltipContent>
                                                    <p className="text-xs ">{skill.title}</p>
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

            {/* -----------------github activity----------------- */}
            <ScrollReveal className="mt-20">
                <p className="text-muted-foreground text-sm opacity-50">Featured</p>
                <h2 className="text-2xl font-bold">Github Activity</h2>
                <div className="mt-8">
                    {/* <ContributionGraphComponent /> */}
                    <div className="border border-secondary rounded-md drop-shadow-xs p-4">
                        <GitHubCalendar
                            username="aryanpatel99"
                            colorScheme={resolvedTheme}
                            theme={explicitTheme}
                            year={new Date().getFullYear()}
                            tooltips={{
                                activity: {
                                    text: activity => {
                                        const date = new Date(activity.date).toLocaleDateString(
                                            'en-US',
                                            { year: 'numeric', month: 'short', day: 'numeric' }
                                        )

                                        return `${activity.count} contribution${activity.count !== 1 ? 's' : ''} on ${date}`
                                    },
                                    placement: 'top',
                                    offset: 8,
                                    hoverRestMs: 200,
                                    withArrow: true,
                                },
                            }}
                        />
                    </div>


                </div>
            </ScrollReveal>

            <ScrollReveal>
                <OpenSourceContributions />
            </ScrollReveal>

            {/* -----------CTA----------- */}
            <ScrollReveal>
                <CTA />
            </ScrollReveal>

        </div>
    );
};

export default MainHeroContainer;
