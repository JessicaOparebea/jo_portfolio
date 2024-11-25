import React from 'react'

type ContactInfoProps = {
  icon: string
  text: string
  alt: string
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ icon, text, alt }) => (
  <div className='flex flex-col md:flex-row gap-4 mx-auto md:mx-0 items-center mt-12 max-w-full max-md:mt-10 text-wrap'>
    <img
      loading='lazy'
      src={icon}
      alt={alt}
      className='mx-auto object-contain shrink-0 self-stretch my-auto aspect-square w-[31px] md:w-[41px]'
    />
    <p className='my-auto text-base md:text-lg'>{text}</p>
  </div>
)
