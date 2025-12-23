import React from 'react'
import { NavLink } from 'react-router-dom'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

const ExperienceCard = (
    {
  company,
  role,
  website,
  duration,
  type,
  location,
  skills = [],
  points = [],
}
) => {
    return (
        <>
            <div className='group'>
                <div className='flex items-center justify-between mb-6'>
                    <div className='flex items-center gap-4'>
                        <div className='w-12 h-12 rounded-lg border border-border bg-card flex items-center justify-center overflow-hidden'>
                            {/* add the company logo here */}
                            {/* <img src="" alt="" /> */}
                        </div>
                        <div>
                            <div className='flex items-center gap-2'>
                                <h2 className=' text-sm md:text-lg lg:text-xl font-medium text-foreground mb-1'>{company}</h2>
                                {website &&(
                                <Tooltip>
                                    <TooltipTrigger>
                                        <NavLink target='_blank' to={website}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe-icon lucide-globe opacity-50"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                                        </NavLink>

                                        <TooltipContent>
                                            <p>Visit website</p>
                                        </TooltipContent>
                                    </TooltipTrigger>
                                </Tooltip>
                                )}
                            </div>
                            <p className='sm:text-sm text-xs text-muted-foreground'>{role}</p>    
                        </div>
                    </div>
                    <div className='align-self-end'>
                        <p className='sm:text-sm text-xs text-muted-foreground'>{duration}</p>
                        <div className='flex items-center  gap-2 mt-1'>
                            <span className='text-xs text-muted-foreground'>{type}</span>
                            <span className='text-muted-foreground'>·</span>
                            <span className='text-xs text-muted-foreground'>{location}</span>
                        </div>
                    </div>
                </div>

                {/* skills */}
                <div className='flex flex-wrap gap-2 mb-8'>
                    {skills.map((skill,index)=>(
                        <div key={index} className='bg-card border border-border rounded-lg px-2.5 py-1 text-xs font-medium hover:border-zinc-600 transition-colors '>{skill}</div>
                    ))}
                </div>

                {/* points */}

                <div className='space-y-3'>
                        {points.length > 0 ? points.map((point, index) => (
                            <div className='flex items-start gap-3'>
                        <div className='w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0'></div>
                        <p className='text-sm text-muted-foreground leading-relaxed'>{point}</p>
                    </div>
                        )) : (
                            <></>
                        )}

                </div>
            </div>
        </>
    )
}

export default ExperienceCard