import React from 'react'
import { ContactInfo } from './ContactInfo'
import { ContactForm } from './ContactForm'

const contactInfoData = [
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4ed3343299094b61c45eef4b40306cb616fd75ea0f35f124435bc8ec48ec323f?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
    text: '+233501146399',
    alt: 'Phone icon'
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e9bc80d7c36175be5c5da2e7923b99c502ebec2a15c2ff0c2832a7871f1eb07f?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
    text: 'jessica17appiah@gmail.com',
    alt: 'Email icon'
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b9411971ecd168c3074e9e348b5abd12bb02e95fd8bf0a1ea07831e50390c95c?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
    text: 'https://www.linkedin.com/in/jessie-opare',
    alt: 'LinkedIn icon'
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f94968f4765bebafd622d1a3f85a0a0adc8efe801c975527afb7182d5140dd1b?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637',
    text: 'https://github.com/JessicaOparebea',
    alt: 'GitHub icon'
  }
]

export const Contact: React.FC = () => {
  return (
    <section className='flex flex-wrap gap-7 items-center py-9 pr-9 pl-11 bg-indigo-950 bg-opacity-10 max-md:px-0'>
      <div
        className='flex flex-col grow shrink self-stretch md:px-12 pt-8 pb-48 my-auto text-lg text-white rounded-2xl border border-black border-solid min-w-[240px] w-[442px] max-md:px-5 max-md:pb-24 max-md:max-w-full'
        style={{
          background: 'linear-gradient(#061444 0%, #0F32AA 100%)'
        }}
      >
        <div className='flex flex-col justify-center items-start max-md:max-w-full font-RibeyeMarrow'>
          <h2 className='self-stretch text-3xl'>Let&apos;s Work Together</h2>
          {contactInfoData.map((info, index) => (
            <ContactInfo key={index} icon={info.icon} text={info.text} alt={info.alt} />
          ))}
        </div>
      </div>
      <ContactForm />
    </section>
  )
}
