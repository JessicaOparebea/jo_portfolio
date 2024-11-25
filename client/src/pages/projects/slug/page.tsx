import { useEffect } from 'react'
import { ProjectDetails } from '../../../components/Projects/slug'
import { useParams } from 'react-router-dom'

export interface ProjectSlugProps {
  imageSrc: string
  title: string
  description: string
  galleryImageSrcs?: string[]
  slug: string
}

export default function ProjectsSlug() {
  const { slug } = useParams()
  const projects: ProjectSlugProps[] = [
    {
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/433f2f2e41b6047ab59792d826756cf39922ccd17cf11a78638247f1ef94f233?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
      title: 'Chronic Kidney Disease Prediction (2023)',
      description: `In a group of five, we developed a predictive model that analyzes patient data to detect early signs of chronic kidney disease. The goal of this project was to enhance early diagnosis, enabling timely intervention and improving patient outcomes. This model leverages advanced data analysis techniques to provide actionable insights for healthcare professionals. [View Web App](https://google.com)`,
      galleryImageSrcs: ['/assets/acm_sigchi.png', '/assets/background_project.png', '/assets/black_neuro.png', 'brain.png'],
      slug: 'chronic-kidney-disease-prediction-2023'
    },
    {
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/5a415abf8b734098791f7e3475ece425eb3dcb1c094d87d8509c6cc84d724264?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
      title: 'Chronic Kidney Disease Prediction (2024)',
      description: `In a group of six, we developed a predictive model that analyzes patient data to detect early signs of chronic kidney disease. The goal of this project was to enhance early diagnosis, enabling timely intervention and improving patient outcomes. This model leverages advanced data analysis techniques to provide actionable insights for healthcare professionals. [View Web App](https://google.com)`,
      galleryImageSrcs: ['/assets/acm_sigchi.png', '/assets/background_project.png', '/assets/black_neuro.png', 'brain.png'],
      slug: 'chronic-kidney-disease-prediction-2024'
    },
    {
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/433f2f2e41b6047ab59792d826756cf39922ccd17cf11a78638247f1ef94f233?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
      title: 'Chronic Kidney Disease Prediction (2025)',
      description: `In a group of seven, we developed a predictive model that analyzes patient data to detect early signs of chronic kidney disease. The goal of this project was to enhance early diagnosis, enabling timely intervention and improving patient outcomes. This model leverages advanced data analysis techniques to provide actionable insights for healthcare professionals. [View Web App](https://google.com)`,
      galleryImageSrcs: ['/assets/acm_sigchi.png', '/assets/background_project.png', '/assets/black_neuro.png', 'brain.png'],
      slug: 'chronic-kidney-disease-prediction-2025'
    },
    {
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/433f2f2e41b6047ab59792d826756cf39922ccd17cf11a78638247f1ef94f233?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
      title: 'Chronic Kidney Disease Prediction (2026)',
      description: `In a group of eight, we developed a predictive model that analyzes patient data to detect early signs of chronic kidney disease. The goal of this project was to enhance early diagnosis, enabling timely intervention and improving patient outcomes. This model leverages advanced data analysis techniques to provide actionable insights for healthcare professionals. [View Web App](https://google.com)`,
      galleryImageSrcs: ['/assets/acm_sigchi.png', '/assets/background_project.png', '/assets/black_neuro.png', 'brain.png'],
      slug: 'chronic-kidney-disease-prediction-2026'
    },
    {
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/433f2f2e41b6047ab59792d826756cf39922ccd17cf11a78638247f1ef94f233?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
      title: 'Chronic Kidney Disease Prediction (2027)',
      description: `In a group of nine, we developed a predictive model that analyzes patient data to detect early signs of chronic kidney disease. The goal of this project was to enhance early diagnosis, enabling timely intervention and improving patient outcomes. This model leverages advanced data analysis techniques to provide actionable insights for healthcare professionals. [View Web App](https://google.com)`,
      galleryImageSrcs: ['/assets/acm_sigchi.png', '/assets/background_project.png', '/assets/black_neuro.png', 'brain.png'],
      slug: 'chronic-kidney-disease-prediction-2027'
    },
    {
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/433f2f2e41b6047ab59792d826756cf39922ccd17cf11a78638247f1ef94f233?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
      title: 'Chronic Kidney Disease Prediction (2028)',
      description: `In a group of ten, we developed a predictive model that analyzes patient data to detect early signs of chronic kidney disease. The goal of this project was to enhance early diagnosis, enabling timely intervention and improving patient outcomes. This model leverages advanced data analysis techniques to provide actionable insights for healthcare professionals. [View Web App](https://google.com)`,
      galleryImageSrcs: ['/assets/acm_sigchi.png', '/assets/background_project.png', '/assets/black_neuro.png', 'brain.png'],
      slug: 'chronic-kidney-disease-prediction-2028'
    },
    {
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/433f2f2e41b6047ab59792d826756cf39922ccd17cf11a78638247f1ef94f233?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
      title: 'Chronic Kidney Disease Prediction (2028)',
      description: `In a group of eleven, we developed a predictive model that analyzes patient data to detect early signs of chronic kidney disease. The goal of this project was to enhance early diagnosis, enabling timely intervention and improving patient outcomes. This model leverages advanced data analysis techniques to provide actionable insights for healthcare professionals. [View Web App](https://google.com)`,
      galleryImageSrcs: ['/assets/acm_sigchi.png', '/assets/background_project.png', '/assets/black_neuro.png', 'brain.png'],
      slug: 'chronic-kidney-disease-prediction-2028'
    },
    {
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/433f2f2e41b6047ab59792d826756cf39922ccd17cf11a78638247f1ef94f233?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
      title: 'Chronic Kidney Disease Prediction (2028)',
      description: `In a group of twelve, we developed a predictive model that analyzes patient data to detect early signs of chronic kidney disease. The goal of this project was to enhance early diagnosis, enabling timely intervention and improving patient outcomes. This model leverages advanced data analysis techniques to provide actionable insights for healthcare professionals. [View Web App](https://google.com)`,
      galleryImageSrcs: ['/assets/acm_sigchi.png', '/assets/background_project.png', '/assets/black_neuro.png', 'brain.png'],
      slug: 'chronic-kidney-disease-prediction-2028'
    }
  ]

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])

  return (
    <div className='flex flex-col'>
      <ProjectDetails projects={projects} slug={slug ?? 'hi'} />
    </div>
  )
}
