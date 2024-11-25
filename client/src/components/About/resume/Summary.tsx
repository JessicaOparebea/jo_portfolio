import React from 'react'

const Summary: React.FC = () => {
  return (
    <>
      <h2 className='text-3xl font-bold text-indigo-950 mb-4'>Summary</h2>
      <div className='flex flex-wrap gap-3 pb-[0.295rem] self-stretch'>
        <div className='hidden md:block -ml-2 my-auto h-4 bg-white rounded-full border border-solid border-indigo-950 w-[17px]' />
        <h3 className='max-md:max-w-full text-indigo-950 font-bold text-3xl'>JESSICA OPAREBEA</h3>
      </div>
      <div className='flex flex-col items-start p-2 md:p-5 -mt-3.5 max-w-full text-lg md:border-l text-black border-black'>
        <div className='mt-6 mr-0 max-md:max-w-full'>
          {' '}
          <p className='text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae
            consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiu optio, eaque rerum!
            Provident similique accusantium nemo autem
          </p>
          <br />
          <ul>
            <li>
              <span className='text-lg italic'>Portland par 127,Orlando, FL</span>
            </li>
            <li>
              <span className='text-lg italic'>(123) 456-7891</span>
            </li>
            <li>
              <span className='text-lg italic'>alice.barkley@example.com</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Summary
