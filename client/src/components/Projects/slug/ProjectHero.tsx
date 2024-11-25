import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { ProjectSlugProps } from '../../../pages/projects/slug/page'

type ProjectHeroProps = {
  project: ProjectSlugProps
}
export const ProjectHero: React.FC<ProjectHeroProps> = ({ project }) => {
  return (
    <section className='flex flex-col justify-center items-center px-12 py-6 relative'>
      <img src='/assets/background_project.png' alt='background' className='absolute inset-0 size-full object-cover z-0' />
      <div className='z-20'>
        <h1 className='text-6xl font-bold text-indigo-950 max-md:max-w-full max-md:text-4xl'>{project.title}</h1>
        <img loading='lazy' src={project.imageSrc} alt={project.title} className='object-contain mt-16 w-full max-md:mt-10' />
        <ReactMarkdown
          className='markdown mt-16 text-xl text-indigo-950 max-md:mt-10 max-md:max-w-full'
          remarkPlugins={[remarkGfm]}
          components={{
            a: ({ node, ...props }) => (
              <a
                {...props}
                className='text-blue-500 hover:text-blue-700 hover:underline underline-offset-4'
                target='_blank'
                rel='noopener noreferrer'
              >
                {props.children}
              </a>
            )
          }}
        >
          {project.description}
        </ReactMarkdown>
      </div>
    </section>
  )
}
