import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { TooltipContent, Tooltip, TooltipTrigger } from './ui/tooltip'
import { experiences, skills } from '@/data/projectsData'
import ExperienceCard from './ExperienceCard'

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
                                        <div key={skill} className='bg-card border border-border rounded-lg px-2.5 py-1 text-xs font-medium hover:border-zinc-600 transition-colors '>{skill}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='space-y-16'>
                            {experiences.map((experience) => (
                        <ExperienceCard key={experience.id} {...experience} />
                    ))}

                            
                            <div className='h-px bg-gradient-to-r from-transparent via-border to-transparent mt-16'></div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience