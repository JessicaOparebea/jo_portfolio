import React from 'react'
import { SectionHeader } from './SectionHeader'

interface SectionTitleProps {
  title: string
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }: SectionTitleProps) => {
  return (
    <section className='z-40 flex overflow-hidden flex-col items-start py-5 pr-20 pl-9 bg-[#061444] w-full max-md:px-5'>
      <SectionHeader title={title} textColor='text-white' underlineColor='bg-white' />
    </section>
  )
}
