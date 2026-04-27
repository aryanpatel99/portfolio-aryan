import React from 'react'
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ChevronDown, ChevronUp, GitMerge } from "lucide-react";
import staticContributions from "../data/contributions.json";

const OpenSourceContributions = () => {
    const [showAll, setShowAll] = useState(false)
    const [contributions, setContributions] = useState(staticContributions)

    useEffect(() => {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 4000);

        const API_BASE = import.meta.env.VITE_API_BASE || "";
        fetch(`${API_BASE}/api/github-contributions`, { signal: controller.signal })
            .then(r => r.ok ? r.json() : null)
            .then(data => {
                if (data?.success && data.contributions.length > 0) {
                    setContributions(data.contributions);
                }
            })
            .catch(() => {})
            .finally(() => clearTimeout(timeout));

        return () => { controller.abort(); clearTimeout(timeout); };
    }, [])


    const displayed = showAll ? contributions : contributions.slice(0, 3)

    return (
        // <div className="p-6 rounded-lg mt-20 ">
        <div className="p-6 rounded-lg mt-20 border border-secondary  drop-shadow-xs   ">

            <h2 className="text-xl mb-4 font-semibold">Open Source Contributions</h2>

            <div className="space-y-4">
                    {displayed.map((c, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-30px" }}
                            transition={{ delay: i * 0.08, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                            className="flex justify-between border-b border-zinc-700 pb-3"
                        >
                            <div>
                                <div className="flex items-center gap-2">
                                    {c.state === "merged" && (
                                        <GitMerge size={16} className="text-purple-400" />
                                    )}
                                    <h4 className="font-medium">{c.title}</h4>
                                    <span className="text-xs text-zinc-400">{c.date}</span>
                                </div>

                                <p className="text-sm text-zinc-400">{c.description}</p>
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