import React from 'react'
import { ProjectHero } from './ProjectHero'
import { ProjectGallery } from './ProjectGallery'
import { OtherProjects } from './OtherProjects'
import { ProjectSlugProps } from '../../../pages/projects/slug/page'

type ProjectDetailsProps = {
  projects: ProjectSlugProps[]
  slug: string
}
export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ projects, slug }) => {
  const project = projects.find((project) => project.slug == slug) ?? projects[0]
  return (
    <div className='flex flex-col bg-white'>
      <ProjectHero project={project} />
      {project.galleryImageSrcs && <ProjectGallery galleryImageUrls={project.galleryImageSrcs} />}
      <OtherProjects projects={projects} UrlSlug={slug ?? 'hi'} />
    </div>
  )
}
