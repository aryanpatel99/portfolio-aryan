import React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import WorldIcon from './ui/world-icon'

const Card = ({
    title,
    img,
    duration,
    description,
    techStack,
    liveUrl
}
) => {
    return (
        <>
            <div className='group bg-card border border-border rounded-lg  overflow-hidden hover:border-zinc-700 transition-all duration-300'>
                <div className='relative aspect-video overflow-hidden'>
                    {/* video */}
                    <img className='group-hover:scale-102 transition-all duration-300 ease-in-out' src={img} alt="projectImg" />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent'></div>
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
                                        <WorldIcon className="opacity-50 hover:opacity-100 mt-1" size={16} />
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