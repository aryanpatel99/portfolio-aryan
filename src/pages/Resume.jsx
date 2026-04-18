import { resumeConfig } from '@/config/resume'
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const Resume = () => {
  return (
    <motion.div
      className='min-h-screen text-foreground'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
            <div className='max-w-3xl mx-auto px-6 py-16 '>
                <div className='mb-8'>
                    <Link to={'/'} className='group flex items-center flex-row gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left transition-transform group-hover:-translate-x-1"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
                        Go Back
                    </Link>
                </div>
            </div>

            <div className='mb-10 mx-auto max-w-3xl flex flex-col items-center justify-center gap-4 px-6'>
                <h1 className='text-5xl font-bold'>Resume</h1>
                <p className='text-muted-foreground'>My Resume</p>
            </div>

            <div className='mb-10 border border-b mx-auto max-w-3xl'></div>

            <motion.div
              className='mb-8 mx-auto max-w-3xl px-6'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
                <iframe
                src={resumeConfig.url}
                width={640}
                height={480}
                className="min-h-screen w-full"
                >
                </iframe>
            </motion.div>

        </motion.div>
  )
}

export default Resume