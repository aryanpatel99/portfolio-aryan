import React from 'react'
import RightContainer from './RightContainer'
import { Link } from 'react-router-dom'

const HeroContainer = () => {
    return (
        <div className='mx-auto px-4 pt-8 max-sm:pb-6 w-full'>
            <div className='gap-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6'>
                {/* left */}
                <div className='gap-5 grid grid-cols-2 sm:grid-cols-4 col-span-2 md:col-span-4'>
                    {/* upper */}
                    <div className='gap-5 grid grid-cols-1 sm:grid-cols-2 col-span-4'>
                        {/* upper left */}
                        <div className='gap-5 grid grid-cols-2 col-span-1'>
                            {/* left */}
                            <div className='relative z-20 border-neutral-400/60 dark:border-neutral-600 col-span-1 row-span-1 shadow-xl border rounded-lg sm:h-40 cursor-pointer overflow-hidden'>
                                <div className='z-10 absolute p-2 w-full'>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-white text-xs'>Location</p>
                                        <p className='text-neutral-500 text-xs'>Kanpur</p>
                                    </div>
                                    <div class="top-7 bg-neutral-400/60 dark:bg-neutral-600 mt-1 w-full h-[0.9px]"></div>
                                </div>
                                <img src={'/map-img.jpg'} className='w-full h-full object-cover' alt="map-img" />
                            </div>
                            {/* right */}
                           <div className='relative col-span-1 row-span-1 bg-[#1E1E1E] shadow-xl border border-neutral-600 rounded-lg sm:h-40'>
                                <div className='absolute p-2 w-full'>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-white text-xs'>Status</p>
                                        <div>
                                            <span>
                                                <span className='flex justify-center items-center mr-1.5 w-2 h-2'>
                                                    <span class="absolute flex  w-2 h-2 rounded-full  opacity-75 animation-delay-4000 animate-ping bg-[var(--secondary-color)] "></span>
                                                    <span class="relative inline-flex w-1 h-1 rounded-full bg-[var(--secondary-color)]"></span>

                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='top-7 bg-neutral-400/60 dark:bg-neutral-600 mt-1 w-full h-[0.9px]'></div>
                                    <div className='flex flex-col gap-3 mt-4 h-full'>
                                        <div className='flex items-center gap-2 ml-[3px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder w-[14px] h-[14px] text-white"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
                                            <p className='text-white font-semibold text-xs'>available_for</p>
                                        </div>
                                        <div className='space-y-2 ml-3'>
                                            <div class="group flex items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file w-[14px] h-[14px] text-white"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path></svg>
                                                <span class="text-neutral-400 hover:text-neutral-300 text-xs underline cursor-pointer">freelance</span>
                                            </div>
                                            <div class="group flex items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file w-[14px] h-[14px] text-white"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path></svg>
                                                <span class="text-neutral-400 hover:text-neutral-300 text-xs underline cursor-pointer">full-time</span>
                                            </div>
                                            <div class="group flex items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file w-[14px] h-[14px] text-white"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path></svg>
                                                <span class="text-neutral-400 hover:text-neutral-300 text-xs underline cursor-pointer">contract</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           </div>
                        </div>
                        {/* upper right */}
                        <div className='col-span-1'>
                            <div className='z-20 relative sm:col-span-2 row-span-1 bg-[#1E1E1E] shadow-xl border border-neutral-600 rounded-lg sm:h-40 sm:max-h-40 cursor-pointer'>
                                <div className='z-10 absolute p-2 w-full'>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-white text-xs'>About</p>
                                        <p className='text-neutral-500 text-xs'>Aryan Patel</p>
                                    </div>
                                    <div className='bg-neutral-600 w-full top-7 mt-1 h-[0.9px]'></div>
                                </div>
                                <div className='mt-10 px-3 pb-3'>
                                    <p className='font-medium text-white text-xs leading-5'>
                                        I am a software developer passionate about crafting dynamic and user-centric web apps. With experience in modern technologies, I thrive on building scalable and intuitive web solutions. I embrace challenges as opportunities to learn and grow as a developer.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* lower */}
                    {/* make it row span 5 if the problem occurs */}
                    <div className='relative col-span-4 row-span-5 bg-[#1E1E1E] shadow-xl border border-neutral-600 rounded-lg h-full min-h-[50px] max-h-[540px]'>
                        <div className='z-20 absolute p-2 w-full'>
                            <p className='text-xs text-white'>Projects</p>
                            <div className='h-[0.9px] bg-neutral-600 mt-1 w-full'></div>
                        </div>
                        <div className='mt-10 mb-[10px] px-2'>
                            <div className='gap-3 grid grid-cols-1 sm:grid-cols-2 mx-auto pb-10 max-w-[800px] max-h-[470px] overflow-hidden'>
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
                        <div className='bottom-[0px] z-10 absolute bg-gradient-to-t from-[#1E1E1E] via-[#1e1e1eef] to-transparent w-[99%] h-32 transition-all translate-x-1 duration-200 ease-in'></div>

                        <div>
                            <a href="/" className="bottom-[20px] left-1/2 z-[11] absolute flex justify-center items-center gap-1 bg-neutral-700/40 p-1 px-2 border rounded-full text-white text-xs -translate-x-1/2">
                                Show More
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-arrow-up-right"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
                {/* right */}
                <RightContainer/>
            </div>
        </div>
    )
}

export default HeroContainer