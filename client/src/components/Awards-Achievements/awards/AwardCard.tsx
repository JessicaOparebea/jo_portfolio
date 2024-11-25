import React from 'react'

export interface AwardCardProps {
  imageSrc: string
  year: string
  title: string
  location: string
}

export const AwardCard: React.FC<AwardCardProps> = ({ imageSrc, year, title, location }) => {
  return (
    <article className='flex flex-col grow shrink items-center px-4 w-[180px]'>
      <img loading='lazy' src={imageSrc} alt={`Award for ${title}`} className='object-contain w-32 max-w-full aspect-[1.39]' />
      <h3 className='mt-4 text-2xl'>{year}</h3>
      <p className='z-10 self-stretch mt-1 text-base leading-7'>{title}</p>
      <p className='text-xs font-medium uppercase opacity-60'>{location}</p>
    </article>
  )
}
