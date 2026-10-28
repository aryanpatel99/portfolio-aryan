"use client";

import React from 'react'
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ChevronDown, ChevronUp, GitMerge } from "lucide-react";
import { Pill, PillIcon } from "./kibo-ui/pill";

const OpenSourceContributions = ({ contributions }) => {
    const [showAll, setShowAll] = useState(false)

    const displayed = showAll ? contributions : contributions.slice(0, 3)

    return (
        <div className="mt-20 rounded-lg border border-border bg-card p-6">

            <div className="flex items-center justify-between gap-4 mb-4">
                <h2 className="text-2xl font-bold">Open Source Contributions</h2>
                <Pill className="shrink-0">
                    <PillIcon icon={GitMerge} />
                    {contributions.length} merged PRs
                </Pill>
            </div>

            <div className="space-y-4">
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
                                    {c.state === "merged" && (
                                        <GitMerge size={16} className="text-purple-400" />
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

            {contributions.length > 3 && (
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="mt-4 text-sm flex items-center gap-1"
                >
                    {showAll ? "Show less" : "Show more"}
                    {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
            )}
        </div>
    );
}

export default OpenSourceContributions