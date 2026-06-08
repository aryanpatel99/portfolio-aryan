import React from 'react'
// import { Link, NavLink, useNavigate } from 'react-router-dom'
// import { ModeToggle } from './mode-toggle'
import { motion } from 'motion/react'
// import { cld } from '@/lib/cloudinary'
import { FlickeringGrid } from './ui/flickering-grid'

const Navbar = () => {
  // const navigate = useNavigate();
  return (
    <motion.div
      className='relative w-full flex justify-between items-center py-4 px-3  top-0 z-[999] backdrop-blur-md bg-background/60'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* <div className='flex items-center space-x-2'>
        <img className='size-10 hover:transform hover:scale-119 duration-300 ease-out transition rounded-full object-cover cursor-pointer' src={cld("aizen-pixelated", "w_120,h_120,c_fill")} alt="" onClick={() => navigate("/")} />
        <div>
          <h1 className='text-sm'>Aryan</h1>
          <p className='text-muted-foreground text-xs'>Software Developer</p>
        </div>
      </div>
      <div className='flex flex-wrap justify-center space-x-4 items-center'>
        <NavLink to={'/experience'} className="relative group text-sm md:text-base">
          {({ isActive }) => (
            <>
              Experience
              <span className={`absolute left-0 -bottom-1 h-[2px] bg-foreground transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : 'w-0'}`}></span>
            </>
          )}
        </NavLink>

        <NavLink to={'/projects'} className="relative group text-sm md:text-base">
          {({ isActive }) => (
            <>
              Projects
              <span className={`absolute left-0 -bottom-1 h-[2px] bg-foreground transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : 'w-0'}`}></span>
            </>
          )}
        </NavLink>
        <ModeToggle />
      </div> */}

      <div className="pointer-events-none absolute inset-0 top-0 left-0 right-0 h-[100px] overflow-hidden z-0">
              <FlickeringGrid
                className="h-full w-full"
                squareSize={2}
                gridGap={2}
                maxOpacity={0.5}
                color="rgb(140, 140, 140)"
                style={{
                  maskImage: "linear-gradient(to bottom, black, transparent)",
                  WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
                }}
              />
            </div>
    </motion.div>
  )
}

export default Navbar