import React from 'react'
import SkillCard from './SkillCard'
import { SectionHeader } from '../../Shared'

interface Skill {
  icon: string
  title: string
  percentage: number
}

const skills: Skill[] = [
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/426db79ac1ae0898fda373aa90306725c1aa6a51ca37be979c4ae7a416c9500e?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
    title: 'Communication & Team Collaboration',
    percentage: 95
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3105d5302669a0b9f97ecfb36c0a033bde5b3d5f8f761896ffed473437246a84?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
    title: 'Literature Review & Research',
    percentage: 90
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/69a3092e034108a7e40ef2543dc4d8d1d4b24d0de2f76655db36aab2d6334272?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
    title: 'Project Management',
    percentage: 80
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e69e6aefd123493fd6e28fe0d39fa354b1e9fbd3d6d198cc923586a67e8cace3?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
    title: 'Leadership',
    percentage: 70
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/110b7080bee670386639c94d5ff6b906d8fc62e86337d418636c796f1654e168?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
    title: 'Data Analysis and Interpretation',
    percentage: 65
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e99538d25eed1753d458c0b47fbab37415183e4dbe7dcdd4e4eb7adab4dfb0f7?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
    title: 'Deep Learning',
    percentage: 60
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/09d26d4651dfd83eb03a21e93e0faf5faf5dfeab2af7cb879c88e7910ac06285?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
    title: 'Machine Learning',
    percentage: 60
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/90028c3b7acc8e26128520843aa51722ff887688141f230ae0017fd52b9245ff?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
    title: 'Signal Processing',
    percentage: 58
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/adc87328eff6a735394ef789c9db8298fda8fdaf1365cc1ccce84759224c6133?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
    title: 'Circuit Design and Simulation',
    percentage: 50
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/adc87328eff6a735394ef789c9db8298fda8fdaf1365cc1ccce84759224c6133?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
    title: 'Prototyping and Simulation',
    percentage: 50
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/adc87328eff6a735394ef789c9db8298fda8fdaf1365cc1ccce84759224c6133?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
    title: 'Laboratory Experimentation',
    percentage: 50
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/adc87328eff6a735394ef789c9db8298fda8fdaf1365cc1ccce84759224c6133?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
    title: 'Hardware Design',
    percentage: 40
  }
]

const SkillsSection: React.FC = () => {
  return (
    <section className='relative flex overflow-hidden flex-col pt-11 pb-1.5 text-indigo-950'>
      <div
        className='absolute inset-0'
        style={{
          backgroundImage: 'url("/assets/brain.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1,
          zIndex: 1
        }}
      />
      <div className='absolute inset-0 bg-[#00ABE4] bg-opacity-5 z-10' />
      <div className='relative z-20'>
        <div className='flex flex-col items-start px-12 w-full max-md:px-5 max-md:max-w-full'>
          <SectionHeader title='Skills' textColor='text-[#061444]' underlineColor='bg-[#061444]' />
          <p className='self-stretch mt-8 text-xl max-md:max-w-full'>
            I bring a diverse set of technical and analytical skills to drive impactful research. Below are some key areas where my
            expertise shines:
          </p>
        </div>
        <div className='flex flex-wrap gap-8 justify-between items-center p-5 mt-14 w-full text-lg font-black max-md:mt-10 max-md:max-w-full'>
          {skills.map((skill, index) => (
            <div key={index} className='w-full md:w-[332px]'>
              <SkillCard icon={skill.icon} title={skill.title} percentage={skill.percentage} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
