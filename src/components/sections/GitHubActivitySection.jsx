import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import ScrollReveal from "@/components/ScrollReveal";
import OpenSourceContributions from "@/components/OpenSourceContributions";
import { useResolvedTheme } from "@/hooks/useResolvedTheme";

const explicitTheme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
};

const GitHubActivitySection = () => {
    const resolvedTheme = useResolvedTheme();

    return (
        <>
            <ScrollReveal className="mt-20">
                <p className="text-muted-foreground text-sm opacity-50">Featured</p>
                <h2 className="text-2xl font-bold">Github Activity</h2>
                <div className="mt-8">
                    <div className="border border-secondary rounded-md drop-shadow-xs p-4">
                        <GitHubCalendar
                            username="aryanpatel99"
                            colorScheme={resolvedTheme}
                            theme={explicitTheme}
                            year={new Date().getFullYear()}
                            tooltips={{
                                activity: {
                                    text: (activity) => {
                                        const date = new Date(activity.date).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                        });
                                        return `${activity.count} contribution${activity.count !== 1 ? "s" : ""} on ${date}`;
                                    },
                                    placement: "top",
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
        </>
    );
};

export default GitHubActivitySection;
