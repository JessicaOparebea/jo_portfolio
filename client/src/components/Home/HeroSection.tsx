import React from 'react'
import { SocialMedia } from '../Shared'

export const HeroSection: React.FC = () => (
  <section className='flex relative flex-col-reverse lg:flex-row gap-10 justify-between items-center pb-5 md:p-4 lg:px-11 w-full max-md:max-w-full'>
    <img loading='lazy' src='/assets/group_stud_pic.jpg' alt='jessie' className='object-cover absolute inset-0 size-full opacity-20' />
    <div
      className='absolute inset-0'
      style={{
        background:
          'linear-gradient(-30deg, rgba(233, 241, 250, 0.5) 0%, rgba(189, 228, 246, 0.5) 34%, rgba(159, 219, 243, 0.5) 37%, rgba(233, 241, 250, 0.5) 55%, rgba(233, 241, 250, 0.5) 71%)'
      }}
    />
    <div className='flex z-10 flex-col self-stretch px-9 my-auto rounded-none min-w-[240px] w-[755px] max-md:px-5 max-md:max-w-full'>
      <SocialMedia color='#061444' />
      <div className='mt-6 md:mr-12 text-6xl text-indigo-950  max-md:max-w-full max-md:text-4xl'>
        <span className='font-bold text-indigo-950'>Hello, I am</span>
        <br />
        <span className='md:text-7xl font-bold text-indigo-950'>Jessica Oparebea</span>
      </div>
      <p className='mt-6 text-xl text-indigo-950 max-md:max-w-full'>
        I am a Biomedical Engineering student with a strong focus on computational modeling and research. My academic background has
        equipped me with advanced skills in developing innovative solutions for biomedical challenges. Beyond my technical expertise, I am
        passionate about philanthropy and actively contribute to community-focused initiatives, leading efforts in education, health, and
        support for underserved populations. My commitment to blending technical excellence with social impact drives my pursuit of
        meaningful contributions both in my field and within my community.
      </p>
      <div className='flex gap-5 justify-between items-start mt-10 max-w-full text-base w-[462px]'>
        <button className='px-10 py-3.5 rounded-[60px] text-indigo-950 max-md:px-5'>Contact Me</button>
        <button className='px-4 py-3.5 text-black border border-solid border-stone-500 rounded-[60px]'>View My Portfolio</button>
      </div>
    </div>
    <img
      loading='lazy'
      src='/assets/Jessie.jpg'
      alt='Jessica Oparebea portrait'
      className='object-contain self-stretch my-auto aspect-[0.75] min-w-[240px] md:w-full lg:w-[500px] max-md:max-w-full z-10'
    />
  </section>
)
