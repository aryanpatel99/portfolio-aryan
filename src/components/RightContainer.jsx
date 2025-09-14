import React from 'react'
import { Link } from 'react-router-dom'

const RightContainer = () => {
  return (
    <div className='gap-5 grid grid-cols-1 lg:grid-cols-2 col-span-2 md:col-span-4 lg:col-span-2'>
      {/* upper */}
      <div className='relative col-span-2 row-span-2 bg-[#1E1E1E] shadow-xl border border-neutral-600 rounded-lg max-h-[240px] overflow-hidden'>
        <div className='z-20 absolute p-2 w-full'>
          <div className='flex justify-between items-center'>
            <p className='text-white text-xs'>Experience & Education</p>
            <Link onClick={()=> window.scrollTo(0, 0)} to={'/experience'}>
              <i class="ri-external-link-line"></i>
            </Link>
          </div>
          <div class="top-7 bg-neutral-600 mt-1 w-full h-[0.9px]"></div>
        </div>
        <div className='relative flex flex-col gap-5 h-[240px] overflow-hidden overflow-y-auto scroll-smooth scrollbar-hide pb-12'>
          <div className='mt-8'></div>
          <div className='flex justify-between items-center px-2'>
            <div className='flex items-center gap-2'>
              <div className='flex justify-center items-center size-[40px]'>
                <img src="" width={40} height={40} alt="" />
              </div>
              <div className='flex flex-col'>
                <h1 className='font-medium text-sm text-white'>Credohire</h1>
                <h1 className='font-normal text-xs text-white'>QA and CSM - Intern - March 2025 - July 2025</h1>
              </div>
            </div>
          </div>
          <div className='flex justify-between items-center px-2'>
            <div className='flex items-center gap-2'>
              <div className='flex justify-center items-center size-[40px]'>
                <img src="" width={40} height={40} alt="" />
              </div>
              <div className='flex flex-col'>
                <h1 className='font-medium text-sm text-white'>Credohire</h1>
                <h1 className='font-normal text-xs text-white'>QA and CSM - Intern - March 2025 - July 2025</h1>
              </div>
            </div>
          </div>
          <div className='flex justify-between items-center px-2'>
            <div className='flex items-center gap-2'>
              <div className='flex justify-center items-center size-[40px]'>
                <img src="" width={40} height={40} alt="" />
              </div>
              <div className='flex flex-col'>
                <h1 className='font-medium text-sm text-white'>Credohire</h1>
                <h1 className='font-normal text-xs text-white'>QA and CSM - Intern - March 2025 - July 2025</h1>
              </div>
            </div>
          </div>
          <div className='flex justify-between items-center px-2'>
            <div className='flex items-center gap-2'>
              <div className='flex justify-center items-center size-[40px]'>
                <img src="" width={40} height={40} alt="" />
              </div>
              <div className='flex flex-col'>
                <h1 className='font-medium text-sm text-white'>Credohire</h1>
                <h1 className='font-normal text-xs text-white'>QA and CSM - Intern - March 2025 - July 2025</h1>
              </div>
            </div>
          </div>
        </div>
        {/* for the top gradient */}
        <div className="absolute top-0 z-10 bg-gradient-to-b from-[#1E1E1E] via-[#1E1E1E] to-transparent w-full h-12"></div>
        {/* for the bottom gradient */}
        <div class="bottom-0 z-10 absolute bg-gradient-to-t from-[#1E1E1E] via-[#1E1E1E] to-transparent w-full h-12 transition-all duration-200 ease-in"></div>
      </div>
      {/* lower */}
      <div className='flex max-md:flex-col lg:flex-col gap-5 col-span-2 w-full'>
        <div className='relative flex-1 bg-[#1E1E1E] shadow-xl border border-neutral-600 rounded-lg w-full min-h-[330px] sm:min-h-[200px] max-h-[340px] overflow-hidden'>
          <div className='z-10 absolute p-2 w-full'>
            <div className='flex items-center justify-between'>
              <p className='text-white text-xs'>My Tech Stack</p>
              {/* <p></p> */}
            </div>
            <div class="top-7 bg-neutral-400 mt-1 w-full h-[0.4px]"></div>
          </div>
          {/* image or masque animation */}
          <img src={'/latest-work.webp'} loading='lazy' width={900} height={300} decoding='async' data-nimg='1' className='w-full h-full object-cover hover:scale-110 transition-all duration-300 ease-in-out' alt="" />
        </div>
        <div className='z-20 relative flex-1 bg-[#1E1E1E] shadow-xl border border-neutral-600 rounded-lg h-full lg:h-[100px] lg:max-h-[100px] cursor-pointer' draggable='false'>
          <div className='z-10 absolute p-2 w-full'>
            <div className='flex items-center justify-between'>
              <p className='text-neutral-500 text-xs'>CV</p>
              <p className='text-neutral-500 text-xs'>Hire Me</p>
            </div>
            <div class="top-7 bg-neutral-400 mt-1 w-full h-[0.4px]"></div>
          </div>
          <div className='flex justify-center items-center mt-11 px-3 pb-3 h-[calc(100%-2.75rem)]'>
            <a class="flex justify-center items-center space-x-2 bg-neutral-700 hover:bg-neutral-600 px-4 py-2 rounded-lg font-normal text-neutral-200 text-sm transition duration-300 ease-in-out animate-pulse" href="https://drive.google.com/file/d/1ZKe44J2gse6HZE70K2wfOdQ3Dq7O0D1Q/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-eye text-white"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
            <span>View CV</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightContainer