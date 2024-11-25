import React from 'react'

interface AwardItemProps {
  year: string
  organization: string
  imageSrc: string
}

export const AwardItem: React.FC<AwardItemProps> = ({ year, organization, imageSrc }) => {
  return (
    <article className='flex flex-col grow shrink justify-center items-center self-stretch my-auto text-center text-[color(display-p3_0.1137_0.1294_0.1882)] w-[118px]'>
      <img
        loading='lazy'
        src={imageSrc}
        alt={`${organization} award badge`}
        className='object-contain max-w-full aspect-[0.97] w-[120px]'
      />
      <h3 className='text-2xl font-bold leading-relaxed'>{year}</h3>
      <p className='text-xl'>{organization}</p>
    </article>
  )
}
