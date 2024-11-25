import React from 'react'
import Summary from './Summary'
import Education from './Education'
import ProfessionalAchievements from './ProfessionalAchievements'
import { SectionHeader } from '../../Shared'

const Resume: React.FC = () => {
  return (
    <main className='py-4 px-12'>
      <SectionHeader title='Resume' textColor='text-indigo-950' underlineColor='bg-indigo-950' />
      <section className='flex flex-wrap gap-10 justify-evenly items-start pt-5 pb-14 mt-8 w-full max-md:max-w-full'>
        <section className='flex flex-col min-w-[240px] w-[554px] max-md:max-w-full'>
          <Summary />
          <Education />
        </section>
        <section className='flex flex-col min-w-[240px] w-[555px] max-md:max-w-full'>
          <ProfessionalAchievements />
        </section>
      </section>
    </main>
  )
}

export default Resume
