import React, { useEffect, useState } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { useTheme } from "./theme-provider";
import { cn } from "@/lib/utils";
import { Home, Briefcase, FolderGit2, Moon, Sun } from "lucide-react";

export default function FloatingDockDemo() {
  const { setTheme, theme } = useTheme();
  const [hidden, setHidden] = useState(false);

  // Hide the dock as the footer approaches so it never overlaps it.
  // Tweak the bottom value below to control WHEN it hides:
  //   bigger positive  -> hides earlier (footer still far below)
  //   0px              -> hides as the footer touches the bottom of the screen
  //   negative         -> hides later (footer scrolls into view first)
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { root: null, rootMargin: "0px 0px -40px 0px", threshold: 0 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const cycleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    } else {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      setTheme(systemTheme === "dark" ? "light" : "dark");
    }
  };

  const links = [
    {
      title: "Home",
      icon: (
        <Home className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    { separator: true },
    {
      title: "Experience",
      icon: (
        <Briefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/experience",
    },
    {
      title: "Projects",
      icon: (
        <FolderGit2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects",
    },
    { separator: true },
    {
      title: "Toggle theme",
      // TODO: swap for a custom icon later if desired
      icon: (
        <span className="relative flex h-full w-full items-center justify-center text-neutral-500 dark:text-neutral-300">
          <Sun className="h-full w-full rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-full w-full rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </span>
      ),
      onClick: cycleTheme,
    },
  ];

  return (
    <div
      className={cn(
        "fixed bottom-6 md:left-1/2 md:right-auto right-6 z-[999] md:-translate-x-1/2 transition-all duration-300 ease-out",
        hidden
          ? "pointer-events-none translate-y-28 opacity-0"
          : "translate-y-0 opacity-100"
      )}
    >
      <FloatingDock items={links} />
    </div>
  );
}
