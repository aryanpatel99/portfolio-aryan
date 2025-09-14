import React from 'react'

const HeroUpperBlock = () => {
    return (
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
                            Hi, I'm a software developer who loves crafting dynamic and intuitive web apps. I combine modern tech with a problem-solving mindset to build solutions that scale. For me, every challenge is an opportunity to create, learn, and push boundaries.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroUpperBlock