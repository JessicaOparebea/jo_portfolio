import React from 'react'
import { AwardItem } from './AwardItem'
import { SectionHeader } from '../../Shared'

interface Award {
  year: string
  organization: string
  imageSrc: string
}

const awards: Award[] = [
  {
    year: '2021',
    organization: 'Black In Neuro',
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/4b4157cbae2b4d25b6e595dc1a1beb16c28819167523d552b52753d34239514c?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637'
  },
  {
    year: '2018',
    organization: 'SMART Africa Network',
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/a51054c471d0b492a51c9c7435717262bcbd5769c8b550c9ab76441bac122c7e?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637'
  },
  {
    year: '2014',
    organization: 'ACM SIGCHI',
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/9d7781f61cc35132b17fbbc48742570c154d8d9c06dd68838f79a7b8a1602ac2?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637'
  },
  {
    year: '2010',
    organization: 'YOUNGO',
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/3b43d337e7d679ffe4003d50576f19e6c46a61fe3319bdc5676be86c64574eb8?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637'
  },
  {
    year: '2014',
    organization: 'OPTIC',
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/739c72fbd2793b020dbca7c416c0cea33660e7cc20c20f29363959f9dcc290de?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637'
  },
  {
    year: '2014',
    organization: 'Black In AI',
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/b9f5614ef0e9e7e445bf368dcabadd8c9df41e61fb632fb46cfb03b449304c0c?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637'
  },
  {
    year: '2014',
    organization: 'NSBE',
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/996c812c2f932bb02bb421566dfcb848ee820ee467061f4201dee3b00ae2e89a?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637'
  }
]

export const ProfessionalMemberships: React.FC = () => {
  return (
    <section className='flex overflow-hidden flex-col w-full border-b border-black max-md:max-w-full px-12'>
      <SectionHeader title='Professional Memberships' textColor='text-indigo-950' underlineColor='bg-indigo-950' />
      <div className='flex flex-wrap gap-16 justify-center items-center px-5 py-2.5 w-full bg-white min-h-[451px] max-md:max-w-full'>
        {awards.map((award, index) => (
          <AwardItem key={index} {...award} />
        ))}
      </div>
    </section>
  )
}
