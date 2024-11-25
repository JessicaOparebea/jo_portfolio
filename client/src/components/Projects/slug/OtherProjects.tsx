import React from 'react'
import { ProjectCard } from '../ProjectCard'
import { SectionTitle } from '../../Shared'
import { ProjectSlugProps } from '../../../pages/projects/slug/page'
import { Link } from 'react-router-dom'

type OtherProjectsProp = {
  projects: ProjectSlugProps[]
  UrlSlug: string
}
export const OtherProjects: React.FC<OtherProjectsProp> = ({ projects, UrlSlug }) => {
  const otherProjects = projects.filter((project) => project.slug != UrlSlug)

  return (
    <section data-layername='projects' className='flex flex-col w-full max-md:max-w-full'>
      <SectionTitle title='Other Projects' />
      <div className='flex flex-col justify-between px-9 py-3.5 w-full bg-sky-500 bg-opacity-10 min-h-[518px] max-md:px-5 max-md:max-w-full'>
        <Link to='/#projects' className='text-base text-black'>
          See All Projects
        </Link>
        <div className='flex overflow-hidden h-[450px] flex-wrap gap-10 justify-evenly items-center p-4'>
          {otherProjects.map((project, index) => (
            <ProjectCard key={index} imageUrl={project.imageSrc} title={project.title} slug={project.slug} />
          ))}
        </div>
      </div>
    </section>
  )
}
