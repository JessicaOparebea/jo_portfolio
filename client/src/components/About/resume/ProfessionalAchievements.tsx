import React from 'react'
import ReactMarkdown from 'react-markdown'

interface AchievementProps {
  title: string
  period: string
  company: string
  description: string
}

const Achievement: React.FC<AchievementProps> = ({ title, period, company, description }) => {
  return (
    <div className='flex flex-col items-start pr-20 w-full max-w-[555px] max-md:pr-5 max-md:max-w-full'>
      <div className='flex z-10 gap-4 text-3xl font-bold text-indigo-950'>
        <div className='-ml-2 my-auto h-4 bg-white rounded-full border border-solid border-indigo-950 w-[17px]' />
        <h3 className='flex-auto max-md:max-w-full'>{title}</h3>
      </div>
      <div className='flex flex-col items-start py-8 pl-6 -mt-3 max-w-full text-lg text-black md:border-l border-black w-[429px] max-md:pl-5'>
        <div className='p-2 text-lg bg-sky-100 text-indigo-950 font-Iceberg'>{period}</div>
        <div className='mt-4 -mr-14 max-md:max-w-full italic'>{company}</div>
        <ReactMarkdown className='markdown -ml-4 max-md:max-w-full'>{description}</ReactMarkdown>
      </div>
    </div>
  )
}

const ProfessionalAchievements: React.FC = () => {
  const achievements = [
    {
      title: 'Biomedical Engineering Intern',
      period: '2024 – Present',
      company: 'Innovate Labs',
      description: '- Conducted industrial research focusing on user-centered engineering designs.'
    },
    {
      title: 'Biomedical Engineering Intern',
      period: '2022 - 2023',
      company: 'StradMed Innovations',
      description:
        '- Researched and developed a user-centered blood-dissolving device.\n- Utilized qualitative methodologies to assess user needs and preferences.\n- Gained hands-on experience in welding, cutting, and 3D printing.\n- Applied diverse fabrication techniques to bring conceptual designs to life.'
    },
    {
      title: 'Biomedical Engineering Intern',
      period: '2021 - 2022',
      company: 'Worcester Polytechnic Institute (Virtual, United States)',
      description:
        '- Led a team of three international students in designing a low-cost air purifier for asthma patients.\n- Presented project outcomes in a detailed video presentation: [Watch here](https://google.com).'
    }
  ]

  return (
    <>
      <h2 className='text-3xl font-bold text-indigo-950 mb-4'>Professional Achievements</h2>
      {achievements.map((achievement, index) => (
        <Achievement key={index} {...achievement} />
      ))}
    </>
  )
}

export default ProfessionalAchievements
