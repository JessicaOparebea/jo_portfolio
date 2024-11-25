import React, { useState } from 'react'

interface TestimonialProps {
  imageUrl: string
  name: string
  title: string
  testimonial: string
}

const testimonials: TestimonialProps[] = [
  {
    imageUrl: '/assets/girl_in_lab.jpg',
    name: 'Dr. EvaVera Tetteyfio',
    title: 'Medical Practitioner',
    testimonial:
      "As Jessica's mentor, I have had the pleasure of observing their exceptional dedication and expertise in computational modeling and biomedical engineering. She consistently demonstrate a deep understanding of complex concepts and a strong commitment to advancing research. Her innovative approach and work ethic makes her a valuable asset to any research or development team."
  },
  {
    imageUrl: '/assets/brain.jpg',
    name: 'Mr. Robert Wonders Aggor',
    title: 'Biomedical Engineer',
    testimonial:
      'Jessica has shown exceptional skills and enthusiasm in her work on computational modeling projects. Jessica’s ability to tackle complex problems with innovative solutions has been remarkable. Her dedication, technical proficiency, and collaborative spirit have made a significant impact on our projects, showcasing her potential for future success in the field.'
  }
]

export const TestimonialCarousel: React.FC = () => {
  const [testimonialCount, setTestimonialCount] = useState(0)
  const [testimonial, setTestimonial] = useState(testimonials[testimonialCount])
  const [isDisabled, setIsDisabled] = React.useState(true)

  const handleForwardClick = () => {
    setTestimonialCount((prev) => {
      const current = prev + 1
      const ifExceedsTestimonials = current < testimonials.length ? current : 0
      setTestimonial(testimonials[ifExceedsTestimonials])
      return current < testimonials.length ? current : 0
    })
  }
  const handleBackwardClick = () => {
    setTestimonialCount((prev) => {
      const current = prev - 1
      const ifLessThanEmpty = current >= 0 ? current : testimonials.length - 1
      setTestimonial(testimonials[ifLessThanEmpty])
      return current >= 0 ? current : testimonials.length - 1
    })
  }

  if (!testimonial) <p>Testimonial Not Found</p>
  return (
    <div className='flex flex-col items-center w-full max-md:max-w-full'>
      <div className='flex flex-col max-w-full text-center'>
        <img
          loading='lazy'
          src={testimonial.imageUrl}
          alt={testimonial.name}
          className='flex self-center w-48 h-48 rounded-full bg-zinc-300 min-h-[145px]'
        />
        <h3 className='mt-3 text-4xl font-bold text-black'>{testimonial.name}</h3>
        <p className='mt-3 text-2xl text-neutral-400'>{testimonial.title}</p>
        <p className='self-stretch mt-5 text-lg lg:text-xl text-black max-md:max-w-full font-InriaSerif italic min-h-[100px]'>
          &ldquo; {testimonial.testimonial} &rdquo;
        </p>
        <div className='flex gap-6 justify-center items-center mt-5'>
          <div onClick={handleBackwardClick} role='button'>
            <img
              loading='lazy'
              src='https://cdn.builder.io/api/v1/image/assets/TEMP/0c21dd6a7ac789427479ddda79ed0f66735076a134e24958fcc8dd0598c7205e?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637'
              className='object-contain shrink-0 self-stretch my-auto aspect-square w-[25px]'
              alt=''
            />
          </div>
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`flex shrink-0 self-stretch my-auto rounded-full border border-solid ${index === testimonialCount ? 'bg-indigo-950' : 'bg-white'} border-indigo-950 h-[15px] w-[15px]`}
            />
          ))}

          <div onClick={handleForwardClick} role='button'>
            <img
              loading='lazy'
              src='https://cdn.builder.io/api/v1/image/assets/TEMP/83c109b802264700ee4d105f91aa544219a541adc973ae34ced07ed9625e22fe?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637'
              className='object-contain shrink-0 self-stretch my-auto aspect-square w-[25px]'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  )
}
