import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ModeToggle } from './mode-toggle'
const Navbar = () => {
  return (
    <div className='max-w-3xl mx-auto flex justify-between items-center py-4 border-b border-border px-3 sticky top-0 z-[999] backdrop-blur-md bg-background/60'>
      <div className='flex items-center space-x-2'>
        <img className='size-10 hover:transform hover:scale-119 duration-300 ease-out transition rounded-full' src={"/logo-a.jpg"} alt="" />
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
      </div>
    </div>
  )
}

export default Navbar