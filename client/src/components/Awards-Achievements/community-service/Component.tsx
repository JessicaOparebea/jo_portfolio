import React from 'react'
import { AwardCard } from './AwardCard'
import { SectionHeader } from '../../Shared'

interface Award {
  year: string
  organization: string
  location: string
  role: string
  description: string
  imageUrl: string
}

const awards: Award[] = [
  {
    year: '2022',
    organization: 'Street Fund Global Foundation',
    location: 'Berlin, Germany',
    role: 'Operations Director',
    description:
      'Lead initiatives in philanthropy, education, and health campaigns. Developed skills in project management, strategic planning, and team leadership',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/8bb588e3e9480d58823ec73ae220fb14523a5cef382cd4ebfdb768d4690a4e49?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637'
  },
  {
    year: '2022',
    organization: 'Elsie Effah Kaufmann Foundation',
    location: 'New York, USA',
    role: 'Junior Facilitator',
    description: 'Support various community engagement activities and educational initiatives.',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/cf6f1be60670c7526f87b84085d8d559aac9f19335c3b6553011c80cd313815b?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637'
  }
]

export const CommunityService: React.FC = () => {
  return (
    <section className='flex flex-col px-2 md:px-12 py-5 border-b border-black w-full'>
      <SectionHeader title='Community Service' textColor='text-indigo-950' underlineColor='bg-indigo-950' />
      <div className='flex flex-col justify-center items-center px-2 bg-white min-h-[516px] max-md:max-w-full'>
        <div className='flex flex-wrap gap-14 justify-center max-md:flex-col'>
          {awards.map((award, index) => (
            <div key={index} className='w-full md:w-[500px]'>
              <AwardCard key={index} {...award} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
