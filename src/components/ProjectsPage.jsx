import React from 'react'
import { Link } from 'react-router-dom'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import Card from './Card'
import { projects } from '@/data/projectsData'
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
                        A showcase of the projects I've built so far - from early experiments to practical applications. While still evolving, each project highlights my focus on clarity, functionality, and continuous growth as a developer.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {/* project card */}
                    
                   {projects.map((project) => (
                    <Card 
                        key={project.id}
                        title={project.title}
                        duration={project.duration}
                        description={project.description}
                        techStack={project.techStack}
                        liveUrl={project.liveUrl}
                    />
                   ))}  

                </div>
            </div>

        </div>
    )
}

export default ProjectsPage