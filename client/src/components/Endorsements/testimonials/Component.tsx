import React from 'react'
import { TestimonialCarousel } from './TestimonialCarousel'
import { SectionHeader } from '../../Shared'

export const Testimonials: React.FC = () => {
  return (
    <section className='flex flex-col px-12 py-5 w-full bg-white border-b border-black max-md:px-5'>
      <SectionHeader title='Testimonials' textColor='text-indigo-950' underlineColor='bg-indigo-950' />
      <TestimonialCarousel />
    </section>
  )
}
