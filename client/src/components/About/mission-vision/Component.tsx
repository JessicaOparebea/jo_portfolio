import React from 'react'
import { MissionVision } from './MissionVision'

export const MissionAndVision: React.FC = () => {
  return (
    <section>
      <div className='hidden lg:block px-12'>
        <div className='flex flex-row max-h-[1000px]'>
          <img src='/assets/jo_streetfund.jpeg' alt='Jessica Oparebea' className='w-2/3' />
          <MissionVision />
        </div>
      </div>

      <div className='block lg:hidden'>
        <div className='relative'>
          <img src='/assets/jo_streetfund.jpeg' alt='Jessica Oparebea' className='absolute inset-0 size-full opacity-20 object-cover' />
          <MissionVision />
        </div>
      </div>
    </section>
  )
}
