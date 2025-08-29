import React from 'react'

const RightContainer = () => {
  return (
    <div className='gap-5 grid grid-cols-1 lg:grid-cols-2 col-span-2 md:col-span-4 lg:col-span-2'>
      {/* upper */}
        <div className='relative col-span-2 row-span-2 bg-[#1E1E1E] shadow-xl border border-neutral-600 rounded-lg max-h-[240px] overflow-hidden'>
          <div className='z-20 absolute p-2 w-full'>
            <div className='flex justify-between items-center'>
              <p className='text-white text-xs'>Experience & Education</p>
              <a href={'/'}>
              <i  class="ri-external-link-line"></i>
              </a>
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
                  <h1 className='font-normal text-xs text-white'>QA and CSM - Inter - March 2025 - July 2025</h1>
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
                  <h1 className='font-normal text-xs text-white'>QA and CSM - Inter - March 2025 - July 2025</h1>
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
                  <h1 className='font-normal text-xs text-white'>QA and CSM - Inter - March 2025 - July 2025</h1>
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
                  <h1 className='font-normal text-xs text-white'>QA and CSM - Inter - March 2025 - July 2025</h1>
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

        </div>
    </div>
  )
}

export default RightContainer