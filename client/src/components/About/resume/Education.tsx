import React from 'react'
import ReactMarkdown from 'react-markdown'

interface EducationItemProps {
  title: string
  period: string
  institution: string
  description: string
}

const EducationItem: React.FC<EducationItemProps> = ({ title, period, institution, description }) => {
  return (
    <>
      {/* <div className='flex flex-wrap gap-3 pb-[0.295rem] self-stretch'>
        <div className='hidden md:block -ml-2 my-auto h-4 bg-white rounded-full border border-solid border-indigo-950 w-[17px]' />
        <h3 className='max-md:max-w-full font-bold'>{title}</h3>
      </div> */}
      <div className='flex z-10 gap-4 text-3xl font-bold text-indigo-950'>
        <div className='-ml-2 my-auto h-4 bg-white rounded-full border border-solid border-indigo-950 w-[17px]' />
        <h3 className='flex-auto max-md:max-w-full'>{title}</h3>
      </div>
      <div className='flex flex-col items-start px-2 md:px-5 py-5 -mt-3.5 max-w-full text-lg md:border-l text-black border-black'>
        <div className='p-2 bg-sky-100 text-indigo-950 font-Iceberg'>{period}</div>
        <div className='mt-5 italic'>{institution}</div>
        <ReactMarkdown className='markdown -ml-2 mr-0 max-md:max-w-full'>{description}</ReactMarkdown>
      </div>
    </>
  )
}

const Education: React.FC = () => {
  const educationData = [
    {
      title: 'Bachelor Of Science In Engineering',
      period: '2021 - 2024',
      institution: 'University of Ghana, Legon, GH',
      description:
        '* University of Ghana, School of Engineering Sciences (SES).\n' +
        '- Undergraduate Thesis: Design of an ECG Device integrated with Deep Learning for Cardiac Arrhythmia Detection and Classification'
    },
    {
      title: 'Degree In Data Science',
      period: '2021 - 2024',
      institution: 'ALX, GH',
      description:
        'Courses:\n' +
        '- Excel\n' +
        '- MySQL\n' +
        '- Data Visualization\n' +
        '- Python\n' +
        '- Regression\n' +
        '- NLP\n' +
        '- Unsupervised Learning'
    },
    {
      title: 'Computational Neuroscience',
      period: '2024',
      institution: 'Carnegie Mellon University, Rwanda',
      description: '- TReND in Africa, Carnegie Mellon University, Africa'
    }
  ]

  return (
    <div className='flex flex-col items-start pt-7 pr-3.5 pb-5 mt-5 w-full text-3xl max-w-[553px] text-indigo-950 max-md:max-w-full'>
      <h2 className='text-3xl font-bold text-indigo-950 mb-4'>Education</h2>
      {educationData.map((item, index) => (
        <EducationItem key={index} {...item} />
      ))}
    </div>
  )
}

export default Education
