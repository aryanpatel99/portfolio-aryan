"use client";

import React from 'react'
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { GitMergeIcon, GitPullRequestIcon } from "@/icons";
import { cn } from "@/lib/utils";

const TABS = [
    { value: "merged", label: "Merged", icon: GitMergeIcon, iconClass: "text-[#8250df] dark:text-[#a371f7]" },
    { value: "open", label: "Open", icon: GitPullRequestIcon, iconClass: "text-[#1a7f37] dark:text-[#3fb950]" },
];

// Tracks an element's rendered height so the container can animate to it
const useMeasuredHeight = () => {
    const ref = useRef(null)
    const [height, setHeight] = useState("auto")

    useEffect(() => {
        if (!ref.current) return
        const observer = new ResizeObserver(([entry]) => setHeight(entry.contentRect.height))
        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return [ref, height]
}

const OpenSourceContributions = ({ contributions }) => {
    const [showAll, setShowAll] = useState(false)
    const [tab, setTab] = useState("merged")
    const [contentRef, contentHeight] = useMeasuredHeight()

    const filtered = contributions.filter((c) => c.state === tab)
    const displayed = showAll ? filtered : filtered.slice(0, 3)

    const selectTab = (value) => {
        setTab(value)
        setShowAll(false)
    }

    return (
        <div className="mt-20 rounded-lg border border-border bg-card p-6">

            <h2 className="text-2xl font-bold">Open Source Contributions</h2>

            <div role="tablist" aria-label="Pull request status" className="mt-4 mb-4 inline-flex gap-1 rounded-lg border border-border p-1">
                {TABS.map(({ value, label, icon: Icon, iconClass }) => (
                    <button
                        key={value}
                        role="tab"
                        aria-selected={tab === value}
                        onClick={() => selectTab(value)}
                        className={cn(
                            "relative flex items-center gap-1.5 rounded-md px-3 py-1 text-sm transition-colors duration-300",
                            tab === value ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        {/* One shared highlight that slides between tabs */}
                        {tab === value && (
                            <motion.span
                                layoutId="pr-tab-highlight"
                                className="absolute inset-0 rounded-md bg-secondary"
                                transition={{ type: "spring", stiffness: 400, damping: 35 }}
                            />
                        )}
                        <span className="relative flex items-center gap-1.5">
                            <Icon width={14} height={14} className={iconClass} />
                            {label}
                            <span className="text-xs text-muted-foreground">
                                {contributions.filter((c) => c.state === value).length}
                            </span>
                        </span>
                    </button>
                ))}
            </div>

            <motion.div
                initial={false}
                animate={{ height: contentHeight }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="overflow-hidden"
            >
            <div ref={contentRef}>
            <div role="tabpanel" className="space-y-4">
                    {filtered.length === 0 && (
                        <p className="text-sm text-muted-foreground">No {tab} pull requests right now.</p>
                    )}
                    {displayed.map((c, i) => (
                        <motion.div
                            key={c.link || i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-30px" }}
                            transition={{ delay: i * 0.08, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                            className="flex justify-between border-b border-border pb-3"
                        >
                            <div>
                                <div className="flex items-center gap-2">
                                    {c.state === "merged" ? (
                                        <GitMergeIcon className="shrink-0 text-[#8250df] dark:text-[#a371f7]" />
                                    ) : (
                                        <GitPullRequestIcon className="shrink-0 text-[#1a7f37] dark:text-[#3fb950]" />
                                    )}
                                    <h4 className="font-medium">{c.title}</h4>
                                    <span className="text-xs text-muted-foreground">{c.date}</span>
                                </div>

                                <p className="text-sm text-muted-foreground">{c.description}</p>
                            </div>

                            <a
                                href={c.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${c.title} on GitHub`}
                            >
                                <ArrowUpRight aria-hidden="true" />
                            </a>
                        </motion.div>
                    ))}
                </div>

            {filtered.length > 3 && (
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="mt-4 text-sm flex items-center gap-1"
                >
                    {showAll ? "Show less" : "Show more"}
                    {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
            )}
            </div>
            </motion.div>
        </div>
    );
}

export default OpenSourceContributions