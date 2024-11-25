import React from 'react'
import { MissionVisionBody } from './Body'

export const MissionVision: React.FC = () => (
  <div className='bg-[#061444] w-full py-24 lg:py-0 lg:w-1/3 text-white flex flex-col gap-y-20 items-center justify-center'>
    <MissionVisionBody
      title='Mission'
      body='To leverage cutting-edge computational techniques and interdisciplinary collaboration to address complex challenges in biomedical research. Through dedicated work in both technical and philanthropic endeavors, I aim to contribute to impactful solutions that enhance human health and support community well-being.'
    />
    <div className='flex flex-row items-center w-3/4 mx-auto'>
      <div className='rounded-full bg-white w-[15px] h-[15px]' />
      <div className='bg-white w-full h-[5px]' />
      <div className='rounded-full bg-white w-[15px] h-[15px]' />
    </div>
    <MissionVisionBody
      title='Vision'
      body='To be at the forefront of computational, optical, neural and cardiac engineering,  driving innovative research and development that significantly advances our understanding of neural processes and improves healthcare outcomes on a global scale.'
    />
  </div>
)
