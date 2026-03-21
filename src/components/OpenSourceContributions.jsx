import React from 'react'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, ChevronUp, GitMerge } from "lucide-react";
import { fallbackContributions } from "../data/fallbackContributions";

const OpenSourceContributions = () => {
    const [showAll, setShowAll] = useState(false)
    const [contributions, setContributions] = useState(fallbackContributions)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function load() {
            try {
                setLoading(true)
                const response = await fetch("/api/github-contributions")
                const data = await response.json()

                if (data.success && data.contributions.length > 0) {
                    setContributions(data.contributions)
                }
            } catch (error) {
                console.error("Failed to load contributions", error)
            } finally {
                setLoading(false)
            }
        }

        load()
    }, [])


    const displayed = showAll ? contributions : contributions.slice(0, 3)

    return (
        // <div className="p-6 rounded-lg mt-20 ">
        <div className="p-6 rounded-lg mt-20 border border-secondary  drop-shadow-xs   ">

            <h2 className="text-xl mb-4 font-semibold">Open Source Contributions</h2>

            {loading ? (
                <div>Loading contributions...</div>
            ) : (
                <div className="space-y-4">
                    {displayed.map((c, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
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

                            <a href={c.link} target="_blank">
                                <ArrowUpRight />
                            </a>
                        </motion.div>
                    ))}
                </div>
            )}

            {!loading && contributions.length > 3 && (
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