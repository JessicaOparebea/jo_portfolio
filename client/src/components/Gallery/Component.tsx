import React from 'react'
import { Link } from 'react-router-dom'

export const GallerySection: React.FC = () => {
  return (
    <section>
      <div className='flex flex-row gap-4'>
        <div className='hidden md:block'>
          {/* <img src='/assets/background_project.png' alt='background' className='absolute inset-0 size-full object-cover z-0' /> */}
          <div className='flex flex-col justify-center items-center min-w-48 max-w-96 gap-12 h-screen'>
            <a
              href='#campus'
              className='flex flex-row gap-4 items-center justify-center hover:bg-[#061444] p-4 rounded-md hover:text-white'
            >
              <div className='h-full rounded-full w-[3px] bg-[#061444]' />
              <div>Campus</div>
            </a>
            <a
              href='#kempiski'
              className='flex flex-row gap-4 items-center justify-center hover:bg-[#061444] p-4 rounded-md hover:text-white'
            >
              <div className='h-full rounded-full w-[3px] bg-[#061444]' />
              Kempiski
            </a>
            <a href='#mall' className='flex flex-row gap-4 items-center justify-center hover:bg-[#061444] p-4 rounded-md hover:text-white'>
              <div className='h-full rounded-full w-[3px] bg-[#061444]' />
              Super Mall
            </a>
          </div>
        </div>
        <div className='custom-scrollbar overflow-scroll h-screen w-full'>
          <div id='campus' className=''>
            <img
              loading='lazy'
              src='https://cdn.builder.io/api/v1/image/assets/TEMP/4ebed35f96089b84534e799b41af285463e8d7e759c4db3e58ea07294296d4bf?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637'
              alt='Gallery showcase'
              className='object-contain w-full aspect-[0.92] max-md:max-w-full'
            />
          </div>
          <div id='kempiski' className=''>
            <img
              loading='lazy'
              src='https://cdn.builder.io/api/v1/image/assets/TEMP/4ebed35f96089b84534e799b41af285463e8d7e759c4db3e58ea07294296d4bf?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637'
              alt='Gallery showcase'
              className='object-contain w-full aspect-[0.92] max-md:max-w-full'
            />
          </div>
          <div id='mall' className=''>
            <img
              loading='lazy'
              src='https://cdn.builder.io/api/v1/image/assets/TEMP/4ebed35f96089b84534e799b41af285463e8d7e759c4db3e58ea07294296d4bf?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637'
              alt='Gallery showcase'
              className='object-contain w-full aspect-[0.92] max-md:max-w-full'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
