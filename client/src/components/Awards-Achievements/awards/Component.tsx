import React from 'react'
import { SectionHeader } from '../../Shared'
import { AwardCard, AwardCardProps } from './AwardCard'

const awards: AwardCardProps[] = [
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/1bfa5b886a6bb7619bd80a9ac6ecd9e645634569e2a8af7fbb684aa6aa06ada7?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
    year: '2024',
    title: 'Amplify Optics Immersion Attendee',
    location: 'Colorado, USA'
  },
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/e2d9f3c1699448f13568f841c20f88a10cc3c08890cbfaf25d6305fbcf2b1447?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
    year: '2024',
    title: 'TReND Computational Neuroscience Scholar',
    location: 'Kigali, Rwanda'
  },
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/a08228eaafc5ff880955ae606684ccca6308d340c45610becf0c05be23789b65?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
    year: '2024',
    title: 'Imbizo Simons Computational Neuroscience Scholar',
    location: 'Kigali, Rwanda'
  },
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/5041c74d8415d54c8d7d54197cecd575b003b2d74c2b93a8531969f7094005bf?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
    year: '2023',
    title: '1st position - Student Design Competition,',
    location: 'AfriChi, South africa'
  },
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/278092ae6040cfe7cb805bc379bdcbd09a54f740fc7f0a363fafbb3b345ea8f9?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
    year: '2023',
    title: '3rd Position, Nyanspo AI Challenge',
    location: 'Legon, Ghana'
  },
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/11d13ec83f474bc10550f58ad44e79952cf2b06b5fdb77ca8583e3bcfbcb9e42?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
    year: '2023',
    title: 'Course Project',
    location: 'Biomedical Engineering Department, UG'
  },
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/d7a59ac2d3907452a87e11c46f889ffe06adb0a0f90c02db2f535ec761c48845?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
    year: '2022',
    title: 'Innovative Student Award,',
    location: 'ESUG, Ug'
  }
]

export const Awards: React.FC = () => {
  return (
    <section className='flex overflow-hidden flex-col self-stretch px-12 w-full font-bold max-md:max-w-full'>
      <SectionHeader title='Awards And Recognitions' textColor='text-indigo-950' underlineColor='bg-indigo-950' />
      <div className='flex flex-wrap gap-12 p-5 justify-center items-center w-full leading-relaxed text-center bg-white min-h-[528px] text-[color(display-p3_0.1137_0.1294_0.1882)] max-md:max-w-full'>
        {awards.map((award, index) => (
          <AwardCard key={index} {...award} />
        ))}
      </div>
    </section>
  )
}
