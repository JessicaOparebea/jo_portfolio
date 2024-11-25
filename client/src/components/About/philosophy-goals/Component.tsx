import * as React from 'react'
import { SectionHeader } from '../../Shared/SectionHeader'
import { KeywordList } from './KeywordList'

export const PhilosophyAndGoals: React.FC = () => {
  const keywords = ['RESEARCH', 'INNOVATIVE', 'PRODUCTIVE', 'COOPERATIVE']

  return (
    <>
      <section className='flex overflow-hidden flex-col items-start px-16 pt-11 pb-20 w-full max-md:px-5'>
        <SectionHeader title='Management Philosopy' textColor='text-indigo-950' underlineColor='bg-indigo-950' />
        <p className='mt-9 text-xl text-black max-md:max-w-full'>
          I believe in leading with a collaborative and innovative mindset, fostering an environment where creativity and teamwork thrive.
          My management approach emphasizes clear communication, strategic vision, and a commitment to continuous learning and improvement.
          I strive to empower my team members by supporting their professional development and encouraging a culture of excellence and
          accountability.
        </p>
      </section>

      <div className='border-black border-solid border-[3px] min-h-[3px] mx-auto w-3/4' />

      <section className='flex overflow-hidden flex-col items-start px-4 md:px-16 py-11 text-xl text-black w-full'>
        <SectionHeader title='Professional Goals' textColor='text-indigo-950' underlineColor='bg-indigo-950' />
        <p className='mt-14 max-md:mt-10 max-md:max-w-full pb-4'>
          I aim to advance computational modeling through innovative techniques in biomedical engineering, contribute to groundbreaking
          research, and collaborate with interdisciplinary teams to drive impactful projects.
        </p>
        <KeywordList keywords={keywords} />
      </section>
    </>
  )
}
