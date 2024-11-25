import React from 'react'
import ReactMarkdown from 'react-markdown'

interface AwardCardProps {
  year: string
  organization: string
  location: string
  role: string
  description: string
  imageUrl: string
}

export const AwardCard: React.FC<AwardCardProps> = ({ year, organization, location, role, description, imageUrl }) => {
  return (
    <article className='flex flex-col max-md:ml-0'>
      <div className='flex flex-col grow items-center text-[color(display-p3_0.1137_0.1294_0.1882)] max-md:mt-10'>
        <img loading='lazy' src={imageUrl} alt={`${organization} logo`} className='object-contain max-w-full aspect-[1.29] w-[225px]' />
        <h3 className='text-2xl leading-relaxed text-center font-RhodiumLibre'>{year}</h3>
        <p className='mt-1 text-xl text-center'>{organization}</p>
        <p className='mt-1.5 text-xs font-medium leading-relaxed text-center uppercase opacity-60'>{location}</p>
        <div className='flex flex-col self-stretch p-4 mt-9 text-base text-black bg-gray-200 rounded-md min-h-[171px]'>
          <h4 className='leading-relaxed uppercase font-bold font-RhodiumLibre'>{role}</h4>
          <ReactMarkdown className='markdown mt-2.5 font-light leading-6'>{description}</ReactMarkdown>
        </div>
      </div>
    </article>
  )
}
