import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { TooltipContent, Tooltip, TooltipTrigger } from './ui/tooltip'
import { experiences, skills } from '@/data/projectsData'
import ExperienceCard from './ExperienceCard'
import WorldIcon from './ui/world-icon'

const Experience = () => {
    return (
        <div className='flex justify-center w-full flex-col'>
            <div className='max-w-[800px] mx-auto px-4 py-16 flex flex-col'>
                <div className='pl-4'>
                    <Link to={'/'} className='group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left transition-transform group-hover:-translate-x-1"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
                        Go Back
                    </Link>
                </div>

                <div className='text-foreground'>
                    <div className='w-full max-w-4xl mx-auto px-4 sm:px-6 py-16'>
                        <div className='mb-20'>
                            <h1 className='text-4xl font-bold mb-8'>Work Experience</h1>
                            <p className='text-lg text-muted-foreground leading-relaxed max-w-3xl mb-8'>
                                Hi, I'm a software developer who loves crafting dynamic and intuitive web apps. I combine modern tech with a problem-solving mindset to build solutions that scale. For me, every challenge is an opportunity to create, learn, and push boundaries.
                            </p>
                            <div className='mb-8'>
                                <h2 className='text-xl font-semibold mb-4 text-foreground'>Technologies & Tools</h2>
                                <div className='flex flex-wrap gap-2 break-words'>
                                    {skills.map((skill, index) => (
                                        <div key={skill} className='bg-card border border-dashed  border-black/20 dark:border-white/30 text-[14px] rounded-lg px-2.5 py-1 text-xs font-medium hover:border-black/50 dark:hover:border-white/50 transition-colors '>{skill.title}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='space-y-16'>
                            {/* {experiences.map((experience) => (
                        <ExperienceCard key={experience.id} {...experience} />
                    ))} */}

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


                            <div className='h-px bg-gradient-to-r from-transparent via-border to-transparent mt-16'></div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience