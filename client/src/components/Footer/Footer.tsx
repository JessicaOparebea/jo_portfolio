import * as React from 'react'
import { Navigation } from '../Header'
import { SocialMedia } from '../Shared'

export const Footer: React.FC = () => {
  return (
    <footer className='flex flex-col gap-14 justify-between items-start px-8 py-9 text-xl text-white bg-[#061444] max-md:px-5'>
      <div className='flex flex-col gap-14 md:flex-row justify-between items-center px-9 w-full text-base text-white max-md:px-5 max-md:max-w-full'>
        <address className='w-[266px] not-italic'>
          Phone: <br /> +233 50 114 6399
        </address>
        <address className='w-[278px] not-italic'>
          Email <br /> jessica17appiah@gmail.com
        </address>
      </div>
      <div className='flex flex-col gap-14 md:flex-row justify-between items-center px-9 w-full text-base text-white max-md:px-0 max-md:max-w-full'>
        <SocialMedia color='white' />
        {/* <Navigation /> */}
        <button className='text-white px-12 py-6 rounded-3xl border border-solid bg-[#061444] hover:bg-[#041033]'>Download CV</button>
      </div>
    </footer>
  )
}
