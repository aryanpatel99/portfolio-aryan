import React from 'react'
import { Link } from 'react-router-dom'

const HeroLowerBlock = () => {
    return (
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
                <Link to={'/projects'} className="bottom-[20px] left-1/2 z-[11] absolute flex justify-center items-center gap-1 bg-neutral-700/40 p-1 px-2 border rounded-full text-white text-xs -translate-x-1/2">
                    Show More
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-arrow-up-right"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                </Link>
            </div>
        </div>
    )
}

export default HeroLowerBlock