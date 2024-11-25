import React from 'react'
import { ProjectCard } from './ProjectCard'
import { SectionTitle } from '../Shared'
import { ProjectSlugProps } from '../../pages/projects/slug/page'

const projects: ProjectSlugProps[] = [
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/433f2f2e41b6047ab59792d826756cf39922ccd17cf11a78638247f1ef94f233?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
    title: 'Chronic Kidney Disease Prediction (2023)',
    description: `In a group of five, we developed a predictive model that analyzes patient data to detect early signs of chronic kidney disease. The goal of this project was to enhance early diagnosis, enabling timely intervention and improving patient outcomes. This model leverages advanced data analysis techniques to provide actionable insights for healthcare professionals [ <a href="https://web-app-frontend-bakq.onrender.com/" className='underline' target='_blank' rel='noopener noreferrer'> View Web App</a>].`,
    galleryImageSrcs: ['/assets/acm_sigchi.png', '/assets/background_project.png', '/assets/black_neuro.png', 'brain.png'],
    slug: 'chronic-kidney-disease-prediction-2023'
  },
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/5a415abf8b734098791f7e3475ece425eb3dcb1c094d87d8509c6cc84d724264?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
    title: 'Chronic Kidney Disease Prediction (2024)',
    description: `In a group of six, we developed a predictive model that analyzes patient data to detect early signs of chronic kidney disease. The goal of this project was to enhance early diagnosis, enabling timely intervention and improving patient outcomes. This model leverages advanced data analysis techniques to provide actionable insights for healthcare professionals [ <a href="https://web-app-frontend-bakq.onrender.com/" className='underline' target='_blank' rel='noopener noreferrer'> View Web App</a>].`,
    galleryImageSrcs: ['/assets/acm_sigchi.png', '/assets/background_project.png', '/assets/black_neuro.png', 'brain.png'],
    slug: 'chronic-kidney-disease-prediction-2024'
  },
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/433f2f2e41b6047ab59792d826756cf39922ccd17cf11a78638247f1ef94f233?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
    title: 'Chronic Kidney Disease Prediction (2025)',
    description: `In a group of seven, we developed a predictive model that analyzes patient data to detect early signs of chronic kidney disease. The goal of this project was to enhance early diagnosis, enabling timely intervention and improving patient outcomes. This model leverages advanced data analysis techniques to provide actionable insights for healthcare professionals [ <a href="https://web-app-frontend-bakq.onrender.com/" className='underline' target='_blank' rel='noopener noreferrer'> View Web App</a>].`,
    galleryImageSrcs: ['/assets/acm_sigchi.png', '/assets/background_project.png', '/assets/black_neuro.png', 'brain.png'],
    slug: 'chronic-kidney-disease-prediction-2025'
  },
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/433f2f2e41b6047ab59792d826756cf39922ccd17cf11a78638247f1ef94f233?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
    title: 'Chronic Kidney Disease Prediction (2026)',
    description: `In a group of eight, we developed a predictive model that analyzes patient data to detect early signs of chronic kidney disease. The goal of this project was to enhance early diagnosis, enabling timely intervention and improving patient outcomes. This model leverages advanced data analysis techniques to provide actionable insights for healthcare professionals [ <a href="https://web-app-frontend-bakq.onrender.com/" className='underline' target='_blank' rel='noopener noreferrer'> View Web App</a>].`,
    galleryImageSrcs: ['/assets/acm_sigchi.png', '/assets/background_project.png', '/assets/black_neuro.png', 'brain.png'],
    slug: 'chronic-kidney-disease-prediction-2026'
  },
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/433f2f2e41b6047ab59792d826756cf39922ccd17cf11a78638247f1ef94f233?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
    title: 'Chronic Kidney Disease Prediction (2027)',
    description: `In a group of nine, we developed a predictive model that analyzes patient data to detect early signs of chronic kidney disease. The goal of this project was to enhance early diagnosis, enabling timely intervention and improving patient outcomes. This model leverages advanced data analysis techniques to provide actionable insights for healthcare professionals [ <a href="https://web-app-frontend-bakq.onrender.com/" className='underline' target='_blank' rel='noopener noreferrer'> View Web App</a>].`,
    galleryImageSrcs: ['/assets/acm_sigchi.png', '/assets/background_project.png', '/assets/black_neuro.png', 'brain.png'],
    slug: 'chronic-kidney-disease-prediction-2027'
  },
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/433f2f2e41b6047ab59792d826756cf39922ccd17cf11a78638247f1ef94f233?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
    title: 'Chronic Kidney Disease Prediction (2028)',
    description: `In a group of ten, we developed a predictive model that analyzes patient data to detect early signs of chronic kidney disease. The goal of this project was to enhance early diagnosis, enabling timely intervention and improving patient outcomes. This model leverages advanced data analysis techniques to provide actionable insights for healthcare professionals [ <a href="https://web-app-frontend-bakq.onrender.com/" className='underline' target='_blank' rel='noopener noreferrer'> View Web App</a>].`,
    galleryImageSrcs: ['/assets/acm_sigchi.png', '/assets/background_project.png', '/assets/black_neuro.png', 'brain.png'],
    slug: 'chronic-kidney-disease-prediction-2028'
  },
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/433f2f2e41b6047ab59792d826756cf39922ccd17cf11a78638247f1ef94f233?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
    title: 'Chronic Kidney Disease Prediction (2028)',
    description: `In a group of eleven, we developed a predictive model that analyzes patient data to detect early signs of chronic kidney disease. The goal of this project was to enhance early diagnosis, enabling timely intervention and improving patient outcomes. This model leverages advanced data analysis techniques to provide actionable insights for healthcare professionals [ <a href="https://web-app-frontend-bakq.onrender.com/" className='underline' target='_blank' rel='noopener noreferrer'> View Web App</a>].`,
    galleryImageSrcs: ['/assets/acm_sigchi.png', '/assets/background_project.png', '/assets/black_neuro.png', 'brain.png'],
    slug: 'chronic-kidney-disease-prediction-2028'
  },
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/433f2f2e41b6047ab59792d826756cf39922ccd17cf11a78638247f1ef94f233?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
    title: 'Chronic Kidney Disease Prediction (2028)',
    description: `In a group of twelve, we developed a predictive model that analyzes patient data to detect early signs of chronic kidney disease. The goal of this project was to enhance early diagnosis, enabling timely intervention and improving patient outcomes. This model leverages advanced data analysis techniques to provide actionable insights for healthcare professionals [ <a href="https://web-app-frontend-bakq.onrender.com/" className='underline' target='_blank' rel='noopener noreferrer'> View Web App</a>].`,
    galleryImageSrcs: ['/assets/acm_sigchi.png', '/assets/background_project.png', '/assets/black_neuro.png', 'brain.png'],
    slug: 'chronic-kidney-disease-prediction-2028'
  }
]

export const Projects: React.FC = () => {
  return (
    <section className='flex flex-col font-bold'>
      <SectionTitle title='Projects' />
      <main className='flex flex-col w-full max-md:max-w-full'>
        <div className='flex relative flex-col w-full max-md:max-w-full'>
          <div
            className='absolute inset-0'
            style={{
              backgroundImage: 'url("/assets/girl_in_lab.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.1,
              zIndex: 1
            }}
          />
          <div className='absolute inset-0 bg-[#00ABE4] bg-opacity-5 z-10' />
          <div className='flex overflow-hidden z-20 relative flex-wrap gap-10 justify-center items-center px-2.5 py-11 w-full bg-sky-500 bg-opacity-10 max-md:max-w-full'>
            {projects.map((project, index) => (
              <ProjectCard key={index} imageUrl={project.imageSrc} title={project.title} slug={project.slug} />
            ))}
          </div>
        </div>
      </main>
    </section>
  )
}
