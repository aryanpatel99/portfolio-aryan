import React from 'react'
import { Link } from 'react-router-dom'

const Experience = () => {
  return (
    <div className='flex justify-center w-full flex-col '>
        <div className='max-w-[800px] mx-auto px-4 py-16 flex flex-col'>
            <div className='pl-4'>
                <Link to={'/'} className='group flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left transition-transform group-hover:-translate-x-1"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
                        Go Back
                </Link>
            </div>

            <div className='min-h-screen text-white'>
                <div className='w-full max-w-4xl mx-auto px-4 sm:px-6 py-16'>
                    <div className='mb-20'>
                        <h1 className='text-4xl font-bold mb-8'>Work Experience</h1>
                        <p className='text-lg text-zinc-400 leading-relaxed max-w-3xl mb-8'>
                            I'm a full-stack developer passionate about creating scalable web applications and leading technical teams. My expertise spans modern JavaScript frameworks, cloud technologies, and agile development practices. I thrive in collaborative environments where I can mentor others while continuously learning and implementing cutting-edge solutions.
                        </p>
                    <div className='mb-8'>
                        <h2 className='text-xl font-semibold mb-4 text-white'>Technologies & Tools</h2>
                        <div className='flex flex-wrap gap-2 break-words'>
                            <div className='bg-zinc-900/50 border border-zinc-700 rounded-lg px-2.5 py-1 text-xs font-medium hover:border-zinc-600 transition-colors '>React.js</div>
                            <div className='bg-zinc-900/50 border border-zinc-700 rounded-lg px-2.5 py-1 text-xs font-medium hover:border-zinc-600 transition-colors '>TypeScript</div>
                            <div className='bg-zinc-900/50 border border-zinc-700 rounded-lg px-2.5 py-1 text-xs font-medium hover:border-zinc-600 transition-colors '>Next.js</div>
                            <div className='bg-zinc-900/50 border border-zinc-700 rounded-lg px-2.5 py-1 text-xs font-medium hover:border-zinc-600 transition-colors '>TailwindCSS</div>
                            <div className='bg-zinc-900/50 border border-zinc-700 rounded-lg px-2.5 py-1 text-xs font-medium hover:border-zinc-600 transition-colors '>ExpressJs</div>
                            <div className='bg-zinc-900/50 border border-zinc-700 rounded-lg px-2.5 py-1 text-xs font-medium hover:border-zinc-600 transition-colors '>MongoDB</div>
                            <div className='bg-zinc-900/50 border border-zinc-700 rounded-lg px-2.5 py-1 text-xs font-medium hover:border-zinc-600 transition-colors '>Prisma</div>
                            <div className='bg-zinc-900/50 border border-zinc-700 rounded-lg px-2.5 py-1 text-xs font-medium hover:border-zinc-600 transition-colors '>Node.js</div>
                            <div className='bg-zinc-900/50 border border-zinc-700 rounded-lg px-2.5 py-1 text-xs font-medium hover:border-zinc-600 transition-colors '>JavaScript</div>
                            <div className='bg-zinc-900/50 border border-zinc-700 rounded-lg px-2.5 py-1 text-xs font-medium hover:border-zinc-600 transition-colors '>HTML</div>
                            <div className='bg-zinc-900/50 border border-zinc-700 rounded-lg px-2.5 py-1 text-xs font-medium hover:border-zinc-600 transition-colors '>CSS</div>
                            <div className='bg-zinc-900/50 border border-zinc-700 rounded-lg px-2.5 py-1 text-xs font-medium hover:border-zinc-600 transition-colors '>Git</div>
                            <div className='bg-zinc-900/50 border border-zinc-700 rounded-lg px-2.5 py-1 text-xs font-medium hover:border-zinc-600 transition-colors '>MySQL</div>
                            <div className='bg-zinc-900/50 border border-zinc-700 rounded-lg px-2.5 py-1 text-xs font-medium hover:border-zinc-600 transition-colors '>Figma</div>
                            <div className='bg-zinc-900/50 border border-zinc-700 rounded-lg px-2.5 py-1 text-xs font-medium hover:border-zinc-600 transition-colors '>Vercel</div>
                            <div className='bg-zinc-900/50 border border-zinc-700 rounded-lg px-2.5 py-1 text-xs font-medium hover:border-zinc-600 transition-colors '>Postman</div>
                            <div className='bg-zinc-900/50 border border-zinc-700 rounded-lg px-2.5 py-1 text-xs font-medium hover:border-zinc-600 transition-colors '>Python</div>
                            <div className='bg-zinc-900/50 border border-zinc-700 rounded-lg px-2.5 py-1 text-xs font-medium hover:border-zinc-600 transition-colors '>Pandas</div>
                        </div>
                    </div>
                    </div>
                    <div className='space-y-16'>
                        <div className='group'>
                            <div className='flex items-center justify-between mb-6'>
                                <div className='flex items-center gap-4'>
                                    <div className='w-12 h-12 rounded-lg border border-zinc-800 bg-zinc-900/50 flex items-center justify-center overflow-hidden'>
                                    {/* add the company logo here */}
                                        {/* <img src="" alt="" /> */}
                                    </div>
                                    <div>
                                        <h2 className='text-xl font-medium text-white mb-1'>CredoHire</h2>
                                        <p className='text-sm text-zinc-400'>QA and CSM - Intern</p>
                                    </div>
                                </div>
                                <div className='align-self-end'>
                                    <p className='text-sm text-zinc-400'>March 2025 - July 2025</p>
                                    <div className='flex items-center gap-2 mt-1'>
                                        <span className='text-xs text-zinc-600'>Full-time</span>
                                        <span className='text-zinc-700'>.</span>
                                        <span className='text-xs text-zinc-600'>Remote</span>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-wrap gap-2 mb-8'>
                                <div className='bg-zinc-900/50 border border-zinc-700 rounded-lg px-2.5 py-1 text-xs font-medium hover:border-zinc-600 transition-colors '>Manual Testing</div>
                                <div className='bg-zinc-900/50 border border-zinc-700 rounded-lg px-2.5 py-1 text-xs font-medium hover:border-zinc-600 transition-colors '>Next.js</div>
                                <div className='bg-zinc-900/50 border border-zinc-700 rounded-lg px-2.5 py-1 text-xs font-medium hover:border-zinc-600 transition-colors '>Excel</div>
                            </div>

                            <div className='space-y-3'>
                                <div className='flex items-start gap-3'>
                                    <div className='w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2 flex-shrink-0'></div>
                                    <p className='text-sm text-zinc-400 leading-relaxed'>Reported critical bugs to the development team</p>
                                </div>
                                <div className='flex items-start gap-3'>
                                    <div className='w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2 flex-shrink-0'></div>
                                    <p className='text-sm text-zinc-400 leading-relaxed'>Reported critical bugs to the development team</p>
                                </div>
                                <div className='flex items-start gap-3'>
                                    <div className='w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2 flex-shrink-0'></div>
                                    <p className='text-sm text-zinc-400 leading-relaxed'>Reported critical bugs to the development team</p>
                                </div>
                                <div className='flex items-start gap-3'>
                                    <div className='w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2 flex-shrink-0'></div>
                                    <p className='text-sm text-zinc-400 leading-relaxed'>Reported critical bugs to the development team</p>
                                </div>
                            </div>
                            <div className='h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mt-16'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience