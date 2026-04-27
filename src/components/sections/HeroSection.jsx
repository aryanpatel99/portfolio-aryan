import React, { useRef } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useNavigate } from "react-router-dom";
import HeroButton from "@/components/HeroButton";
import FileDescriptionIcon from "@/components/ui/file-description-icon";
import SendIcon from "@/components/ui/send-icon";
import TwitterXIcon from "@/components/ui/twitter-x-icon";
import LinkedinIcon from "@/components/ui/linkedin-icon";
import MailFilledIcon from "@/components/ui/mail-filled-icon";
import GithubIcon from "@/components/ui/github-icon";
import { NextJSIcon, NodeJSIcon, ReactIcon, TypeScriptIcon } from "@/icons";
import { cld } from "@/lib/cloudinary";

const heroStagger = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
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

const LeetcodeIcon = () => (
    <svg
        role="img"
        className="opacity-50"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        height="1.2em"
        width="1.2em"
    >
        <path
            d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"
            fill="currentColor"
            strokeWidth="1"
        />
    </svg>
);

const SOCIALS = [
    { href: "https://x.com/codexaryan", label: "X.com", icon: (props) => <TwitterXIcon {...props} /> },
    { href: "https://www.linkedin.com/in/aryan-patel-100aa7307/", label: "Linkedin", icon: (props) => <LinkedinIcon {...props} /> },
    { href: "mailto:aryanpatel6215@gmail.com", label: "Mail", icon: (props) => <MailFilledIcon {...props} /> },
    { href: "https://leetcode.com/u/ARYAN99_/", label: "Leetcode", icon: () => <LeetcodeIcon /> },
    { href: "https://github.com/aryanpatel99", label: "GitHub", icon: (props) => <GithubIcon {...props} /> },
];

const HeroSection = () => {
    const fileIconRef = useRef(null);
    const sendIconRef = useRef(null);
    const navigate = useNavigate();

    return (
        <motion.div variants={heroStagger} initial="hidden" animate="visible">
            <motion.div className="relative inline-block" variants={heroChild}>
                <img
                    loading="lazy"
                    className="size-24 rounded-full border border-border object-cover"
                    src={cld("aizen-pixelated", "w_288,h_288,c_fill")}
                    alt="Aryan Patel"
                />
            </motion.div>

            <motion.div className="mt-8 flex flex-col gap-2" variants={heroChild}>
                <h1 className="text-4xl font-semibold">
                    Hi I'm Aryan -{" "}
                    <span className="text-muted-foreground font-md">A Full Stack Developer.</span>
                </h1>
                <div className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-2 text-base text-muted-foreground md:text-lg whitespace-pre-wrap leading-7">
                    I build interactive, responsive, and accessible web applications using
                    <HeroButton text="TypeScript" icon={<TypeScriptIcon />} />,{" "}
                    <HeroButton text="React.js" icon={<ReactIcon />} />,{" "}
                    <HeroButton text="Next.js" icon={<NextJSIcon />} />, and{" "}
                    <HeroButton text="Node.js" icon={<NodeJSIcon />} />.
                    <span>Focused on delivering seamless and intuitive user experiences.</span>
                </div>
            </motion.div>

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
                <Button
                    onClick={() => (window.location.href = "mailto:aryanpatel6215@gmail.com?subject=Let's Connect")}
                    variant="default"
                    onMouseEnter={() => sendIconRef.current?.startAnimation()}
                    onMouseLeave={() => sendIconRef.current?.stopAnimation()}
                >
                    <SendIcon ref={sendIconRef} className="size-4" />
                    Get in Touch
                </Button>
            </motion.div>

            <motion.div className="mt-8 flex gap-2 items-center" variants={heroChild}>
                {SOCIALS.map(({ href, label, icon: Icon }) => (
                    <Tooltip key={label}>
                        <TooltipTrigger>
                            <a target="_blank" href={href} rel="noreferrer">
                                <Icon size={24} className="opacity-50" />
                            </a>
                            <TooltipContent><p>{label}</p></TooltipContent>
                        </TooltipTrigger>
                    </Tooltip>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default HeroSection;
