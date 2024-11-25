import React from 'react'
import DoughnutChart from './DoughnutChart'

interface SkillCardProps {
  icon: string
  title: string
  percentage: number
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, percentage }) => {
  return (
    <div className='flex flex-col items-center py-7 bg-white rounded-2xl min-w-[240px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] px-4'>
      <div className='flex gap-3 justify-center items-center max-w-full w-[385px]'>
        <img loading='lazy' src={icon} alt='' className='my-auto aspect-square w-[41px]' />
        <h3 className='my-auto text-lg text-center font-black'>{title}</h3>
      </div>
      <DoughnutChart percentage={percentage} />
      {/* <img loading='lazy' src={imageUrl} alt='' className='object-contain mt-10 aspect-[1.07] w-[87px]' /> */}
    </div>
  )
}

export default SkillCard
