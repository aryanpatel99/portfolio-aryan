import React from 'react'
import { Link } from 'react-router-dom'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
const ProjectsPage = () => {
    return (
        <div className='min-h-screen text-foreground'>
            <div className='max-w-3xl mx-auto px-6 py-16 '>
                <div className='mb-8'>
                    <Link to={'/'} className='group flex items-center flex-row gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left transition-transform group-hover:-translate-x-1"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
                        Go Back
                    </Link>
                </div>
                <div className='mb-10'>
                    <h1 className='text-4xl font-bold mb-8'>My Projects</h1>
                    <p className='text-lg text-muted-foreground leading-relaxed max-w-3xl'>
                        A showcase of the projects I've built so far — from early experiments to practical applications. While still evolving, each project highlights my focus on clarity, functionality, and continuous growth as a developer.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {/* project card */}
                    <div className='group bg-card border border-border rounded-lg overflow-hidden hover:border-zinc-700 transition-all duration-300'>
                        <div className='relative aspect-video overflow-hidden'>
                            {/* video */}
                            <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
                        </div>
                        <div className='p-6'>
                            <div className='flex items-start justify-between mb-3'>
                                <div>
                                    <h3 className='font-medium text-foreground text-lg mb-1'>Learnify.app</h3>
                                    <time datetime="" className='text-xs text-muted-foreground'>July 2025 - Present</time>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <a href={'https://learnify-app-omega.vercel.app/'} target='_blank' rel='noopener noreferrer' className='text-muted-foreground hover:text-foreground transition-colors'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                                            </a>
                                            <TooltipContent>
                                                Visit Website
                                            </TooltipContent>
                                        </TooltipTrigger>
                                    </Tooltip>
                                </div>
                            </div>
                            <p className='text-sm text-muted-foreground leading-relaxed mb-4'>
                                Learnify is an interactive learning platform with course search, progress tracking, a responsive React + Tailwind UI, and secure Clerk authentication.
                            </p>
                            <div className='flex flex-wrap gap-1.5'>
                                <span className='px-2 py-1 text-xs  bg-secondary border border-border rounded text-secondary-foreground'>React.js</span>
                                <span className='px-2 py-1 text-xs  bg-secondary border border-border rounded text-secondary-foreground'>TailwindCSS</span>
                                <span className='px-2 py-1 text-xs  bg-secondary border border-border rounded text-secondary-foreground'>Vercel</span>
                            </div>
                        </div>
                    </div>


                    <div className='group bg-card border border-border rounded-lg overflow-hidden hover:border-zinc-700 transition-all duration-300'>
                        <div className='relative aspect-video overflow-hidden'>
                            {/* video */}
                            <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
                        </div>
                        <div className='p-6'>
                            <div className='flex items-start justify-between mb-3'>
                                <div>
                                    <h3 className='font-medium text-foreground text-lg mb-1'>Movie Recommendation App</h3>
                                    <time datetime="" className='text-xs text-muted-foreground'>March - 2025</time>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <a href={'https://learnify-app-omega.vercel.app/'} target='_blank' rel='noopener noreferrer' className='text-muted-foreground hover:text-foreground transition-colors'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                                            </a>
                                            <TooltipContent>
                                                Visit Website
                                            </TooltipContent>
                                        </TooltipTrigger>
                                    </Tooltip>
                                </div>
                            </div>
                            <p className='text-sm text-zinc-400 leading-relaxed mb-4'>
                                A modern movie app that displays top trending movies with a clean, responsive design and up-to-date content.
                            </p>
                            <div className='flex flex-wrap gap-1.5'>
                                <span className='px-2 py-1 text-xs  bg-secondary border border-border rounded text-secondary-foreground'>React.js</span>
                                <span className='px-2 py-1 text-xs  bg-secondary border border-border rounded text-secondary-foreground'>TailwindCSS</span>
                                <span className='px-2 py-1 text-xs  bg-secondary border border-border rounded text-secondary-foreground'>Vercel</span>
                                <span className='px-2 py-1 text-xs  bg-secondary border border-border rounded text-secondary-foreground'>Appwrite</span>
                                <span className='px-2 py-1 text-xs  bg-secondary border border-border rounded text-secondary-foreground'>Framer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProjectsPage