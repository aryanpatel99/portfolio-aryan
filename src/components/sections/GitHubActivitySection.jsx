"use client";

import React from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { GitHubCalendar } from "react-github-calendar";
import ScrollReveal from "@/components/ScrollReveal";
import OpenSourceContributions from "@/components/OpenSourceContributions";
import { useResolvedTheme } from "@/hooks/useResolvedTheme";

const calendarTheme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
};

const GitHubActivitySection = ({ contributions, calendar }) => {
    const resolvedTheme = useResolvedTheme();
    const year = new Date().getFullYear();

    const calendarProps = {
        colorScheme: resolvedTheme,
        theme: calendarTheme,
        tooltips: {
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
        },
    };

    return (
        <>
            <ScrollReveal className="mt-20">
                <p className="text-muted-foreground text-sm opacity-50">Activity</p>
                <h2 className="text-2xl font-bold">Github Activity</h2>
                <div className="mt-8">
                    <div className="rounded-lg border border-border bg-card p-6">
                        {calendar ? (
                            <ActivityCalendar
                                data={calendar}
                                labels={{ totalCount: "{{count}} contributions in {{year}}" }}
                                maxLevel={4}
                                {...calendarProps}
                            />
                        ) : (
                            // No server data (missing token or GitHub down): fetch in the browser instead
                            <GitHubCalendar username="aryanpatel99" year={year} {...calendarProps} />
                        )}
                    </div>
                </div>
            </ScrollReveal>

            <ScrollReveal>
                <OpenSourceContributions contributions={contributions} />
            </ScrollReveal>
        </>
    );
};

export default GitHubActivitySection;
