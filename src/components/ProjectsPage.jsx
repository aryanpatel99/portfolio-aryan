import React from 'react'
import { Link } from 'react-router-dom'
const ProjectsPage = () => {
    return (
        <div className='min-h-screen bg-black text-white'>
            <div className='max-w-3xl mx-auto px-6 py-16 '>
                <div className='mb-8'>
                    <Link to={'/'} className='group flex items-center flex-row gap-2 text-sm text-zinc-400 hover:text-white transition-colors'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left transition-transform group-hover:-translate-x-1"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
                        Go Back
                    </Link>
                </div>
                <div className='mb-10'>
                    <h1 className='text-4xl font-bold mb-8'>My Projects</h1>
                    <p className='text-lg text-zinc-400 leading-relaxed max-w-3xl'>
                        A showcase of the projects I've built so far — from early experiments to practical applications. While still evolving, each project highlights my focus on clarity, functionality, and continuous growth as a developer.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='group bg-zinc-900/50 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-700 transition-all duration-300'>
                        <div className='relative aspect-video overflow-hidden'>
                            {/* video */}
                            <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
                        </div>
                        <div className='p-6'>
                            <div className='flex items-start justify-between mb-3'>
                                <div>
                                    <h3 className='font-medium text-white text-lg mb-1'>abcd</h3>
                                    <time datetime="" className='text-xs text-zinc-400'>time</time>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <a href={'/'} target='_blank' rel='noopener noreferrer' className='text-zinc-400 hover:text-white transition-colors'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                                    </a>
                                </div>
                            </div>
                            <p className='text-sm text-zinc-400 leading-relaxed mb-4'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptates facilis nostrum
                            </p>
                            <div className='flex flex-wrap gap-1.5'>
                                <span className='px-2 py-1 text-xs  bg-zinc-800 border border-zinc-700 rounded text-zinc-300'>React.js</span>
                                <span className='px-2 py-1 text-xs  bg-zinc-800 border border-zinc-700 rounded text-zinc-300'>TailwindCSS</span>
                                <span className='px-2 py-1 text-xs  bg-zinc-800 border border-zinc-700 rounded text-zinc-300'>GSAP</span>
                                <span className='px-2 py-1 text-xs  bg-zinc-800 border border-zinc-700 rounded text-zinc-300'>Framer Motion</span>
                            </div>
                        </div>
                    </div>


                    <div className='group bg-zinc-900/50 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-700 transition-all duration-300'>
                        <div className='relative aspect-video overflow-hidden'>
                            {/* video */}
                            <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
                        </div>
                        <div className='p-6'>
                            <div className='flex items-start justify-between mb-3'>
                                <div>
                                    <h3 className='font-medium text-white text-lg mb-1'>abcd</h3>
                                    <time datetime="" className='text-xs text-zinc-400'>time</time>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <a href={'/'} target='_blank' rel='noopener noreferrer' className='text-zinc-400 hover:text-white transition-colors'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                                    </a>
                                </div>
                            </div>
                            <p className='text-sm text-zinc-400 leading-relaxed mb-4'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptates facilis nostrum
                            </p>
                            <div className='flex flex-wrap gap-1.5'>
                                <span className='px-2 py-1 text-xs  bg-zinc-800 border border-zinc-700 rounded text-zinc-300'>React.js</span>
                                <span className='px-2 py-1 text-xs  bg-zinc-800 border border-zinc-700 rounded text-zinc-300'>TailwindCSS</span>
                                <span className='px-2 py-1 text-xs  bg-zinc-800 border border-zinc-700 rounded text-zinc-300'>GSAP</span>
                                <span className='px-2 py-1 text-xs  bg-zinc-800 border border-zinc-700 rounded text-zinc-300'>Framer Motion</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProjectsPage