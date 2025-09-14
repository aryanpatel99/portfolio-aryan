import React from 'react'
import RightContainer from './RightContainer'
import { Link } from 'react-router-dom'
import HeroUpperBlock from './HeroUpperBlock'
import HeroLowerBlock from './HeroLowerBlock'

const HeroContainer = () => {
    return (
        <div className='mx-auto px-4 pt-8 max-sm:pb-6 w-full'>
            <div className='gap-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6'>
                {/* left */}
                <div className='gap-5 grid grid-cols-2 sm:grid-cols-4 col-span-2 md:col-span-4'>
                    {/* upper */}
                    <HeroUpperBlock/>
                    {/* lower */}
                    {/* make it row span 5 if the problem occurs */}
                    <HeroLowerBlock/>
                </div>
                {/* right */}
                <RightContainer/>
            </div>
        </div>
    )
}

export default HeroContainer