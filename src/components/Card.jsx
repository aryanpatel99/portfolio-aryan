import React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import WorldIcon from './ui/world-icon'

const Card = ({
    title,
  duration,
  description,
  techStack,
  liveUrl
}
) => {
    return (
        <>
            <div className='group bg-card border border-border rounded-lg overflow-hidden hover:border-zinc-700 transition-all duration-300'>
                <div className='relative aspect-video overflow-hidden'>
                    {/* video */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
                </div>
                <div className='p-6'>
                    <div className='flex items-start justify-between mb-3'>
                        <div>
                            <h3 className='font-medium text-foreground text-lg mb-1'>{title}</h3>
                            {duration && (<time datetime="" className='text-xs text-muted-foreground'>{duration}</time>)}
                        </div>
                        <div className='flex items-center gap-2'>
                            <Tooltip>
                                <TooltipTrigger>
                                    <a href={liveUrl} target='_blank' rel='noopener noreferrer' className='text-muted-foreground hover:text-foreground transition-colors'>
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg> */}
                                        <WorldIcon className="opacity-50 hover:opacity-100" size={16} />
                                    </a>
                                    <TooltipContent>
                                        Visit Website
                                    </TooltipContent>
                                </TooltipTrigger>
                            </Tooltip>
                        </div>
                    </div>
                    <p className='text-sm text-muted-foreground leading-relaxed mb-4'>
                        {description}
                    </p>
                    <div className='flex flex-wrap gap-1.5'>
                        {/* tech stack */}
                        {techStack.map((stack, index) => (
                            <span key={index} className='px-2 py-1 text-xs  bg-secondary border border-border rounded text-secondary-foreground'>{stack}</span>
                        ))}
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card