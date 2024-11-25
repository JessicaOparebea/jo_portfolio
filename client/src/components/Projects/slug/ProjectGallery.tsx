import React from 'react'
import { SectionTitle } from '../../Shared'

type ProjectGalleryProps = {
  galleryImageUrls: string[]
}
export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ galleryImageUrls }) => {
  return (
    <section className='flex flex-col w-full text-4xl font-bold text-white bg-sky-500 bg-opacity-10 max-md:max-w-full'>
      <SectionTitle title='Project Gallery' />
      <div className='flex flex-wrap p-4 gap-y-12 justify-center items-center'>
        {galleryImageUrls.map((imageUrl, index) => (
          <img key={index} loading='lazy' src={imageUrl} alt='' className='w-[500px]' />
        ))}
      </div>
    </section>
  )
}
