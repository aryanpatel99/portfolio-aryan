import React from 'react'
import { Button } from './ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { Send } from 'lucide-react'

const MainHeroContainer = () => {
    return (
        <div className='mx-auto max-w-3xl px-4 min-h-screen py-16'>
            <div className='relative inline-block'>
                <img loading='lazy' className='size-24 rounded-full border border-border' src='/logo-a.jpg' alt="" />
            </div>
            <div className='mt-8 flex flex-col gap-2'>
                <h1 className='text-4xl font-semibold'>Hi I'm Aryan - <span className='text-muted-foreground font-md'>A Full Stack Developer.</span></h1>
                <div className='mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-2 text-base text-muted-foreground md:text-lg whitespace-pre-wrap'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur optio nobis fugit omnis harum. Fuga mollitia atque delectus deleniti et voluptatum aliquam beatae pariatur. Dolor!
                </div>
            </div>
            {/* -----------buttons--------- */}
            <div className='mt-8 flex gap-4'>
                <Button variant='outline'>Resume/CV</Button>
                <Button variant='default'><Send className='size-3.5' />Get in Touch</Button>
            </div>
            {/* -----------socials--------- */}
            <div className='mt-8 flex gap-3 items-center'>
                <Tooltip>
                    <TooltipTrigger>
                        <a target='_blank' href={'https://x.com/AryanPatel_8299'}>
                            <svg stroke="currentColor" className='opacity-50' fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path></svg>
                        </a>
                        <TooltipContent>
                            <p>X.com</p>
                        </TooltipContent>
                    </TooltipTrigger>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger>

                        <a target='_blank' href={'https://www.linkedin.com/in/aryan-patel-100aa7307/'}>
                            <svg className='opacity-50' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"></path></svg>
                        </a>
                        <TooltipContent>
                            <p>Linkedin</p>
                        </TooltipContent>
                    </TooltipTrigger>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger>

                        <a target='_blank' href={'mailto:aryanpatel6215@gmail.com'}>
                            <svg className='opacity-50' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="13" x="6" y="4" rx="2"></rect><path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7"></path><path d="M2 8v11c0 1.1.9 2 2 2h14"></path></svg>
                        </a>
                        <TooltipContent>
                            <p>Mail</p>
                        </TooltipContent>
                    </TooltipTrigger>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger>

                        <a href={'https://leetcode.com/u/ARYAN99_/'} target='_blank'>
                            <svg role="img" className='opacity-50' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Leetcode--Streamline-Simple-Icons" height="1.2em" width="1.2em">
                                <path d="M13.483 0a1.374 1.374 0 0 0 -0.961 0.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0 -1.209 2.104 5.35 5.35 0 0 0 -0.125 0.513 5.527 5.527 0 0 0 0.062 2.362 5.83 5.83 0 0 0 0.349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193 0.039 0.038c2.248 2.165 5.852 2.133 8.063 -0.074l2.396 -2.392c0.54 -0.54 0.54 -1.414 0.003 -1.955a1.378 1.378 0 0 0 -1.951 -0.003l-2.396 2.392a3.021 3.021 0 0 1 -4.205 0.038l-0.02 -0.019 -4.276 -4.193c-0.652 -0.64 -0.972 -1.469 -0.948 -2.263a2.68 2.68 0 0 1 0.066 -0.523 2.545 2.545 0 0 1 0.619 -1.164L9.13 8.114c1.058 -1.134 3.204 -1.27 4.43 -0.278l3.501 2.831c0.593 0.48 1.461 0.387 1.94 -0.207a1.384 1.384 0 0 0 -0.207 -1.943l-3.5 -2.831c-0.8 -0.647 -1.766 -1.045 -2.774 -1.202l2.015 -2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0 -1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38 -1.382 1.38 1.38 0 0 0 -1.38 -1.382z" fill="currentColor" strokeWidth="1"></path>
                            </svg>
                        </a>
                        <TooltipContent>
                            <p>Leetcode</p>
                        </TooltipContent>
                    </TooltipTrigger>
                </Tooltip>


                <Tooltip>
                    <TooltipTrigger>
                        <a target='_blank' href={'https://github.com/aryanpatel99'}>
                            <svg className='opacity-50' xmlns="http://www.w3.org/2000/svg" fill='currentColor' x="0px" y="0px" width="1.6em" height="1.6em" viewBox="0 0 30 30">
                                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                            </svg>
                        </a>
                        <TooltipContent>
                            <p>GitHub</p>
                        </TooltipContent>
                    </TooltipTrigger>
                </Tooltip>


            </div>
            {/* <div></div> */}

            {/* add spotify player */}
        </div>
    )
}

export default MainHeroContainer