import React from 'react'

const HeroButton = ({text,icon}) => {
  return (<>
   <span className="inline-flex gap-1 items-center border-dashed border-black/20 dark:border-white/30 text-[15px] font-bold border px-2 py-0.5 dark:bg-neutral-800 bg-neutral-200/30 rounded-md text-foreground">
{icon}
   {text}</span>
  </>
  )
}

export default HeroButton