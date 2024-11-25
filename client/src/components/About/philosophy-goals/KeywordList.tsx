import * as React from 'react'

type KeywordListProps = {
  keywords: string[]
}

export const KeywordList: React.FC<KeywordListProps> = ({ keywords }) => (
  <section className='flex flex-col justify-center items-start self-stretch px-6 py-6 lg:px-16 border-t border-b border-black max-md:px-5 max-md:mt-10 max-md:mb-2.5 max-md:max-w-full'>
    <div className='flex flex-col md:flex-row gap-6 md:gap-0 justify-between max-w-full w-full'>
      {keywords.map((keyword, index) => (
        <p key={index} className='text-lg lg: flex justify-between'>
          • {keyword}
        </p>
      ))}
    </div>
  </section>
)
