import React from 'react'
import { Link } from 'react-router-dom'

interface ProjectCardProps {
  imageUrl: string
  title: string
  slug: string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, title, slug }) => {
  return (
    <article className='flex flex-col justify-center items-center self-stretch pr-3 pl-2.5 my-auto rounded-md bg-white bg-opacity-80 min-h-[421px] min-w-[240px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-full md:w-[289px]'>
      <img loading='lazy' src={imageUrl} alt={title} className='object-contain max-w-full aspect-[1.62] w-[341px]' />
      <h2 className='mt-6 text-base text-center text-black'>{title}</h2>
      <Link
        to={`/projects/${slug}`}
        className='gap-2.5 self-stretch px-8 py-4 mt-6 text-base text-center rounded bg-[color(display-p3_0.9098_0.9216_0.9412)] text-indigo-950 max-md:px-5'
      >
        Learn more
      </Link>
    </article>
  )
}
