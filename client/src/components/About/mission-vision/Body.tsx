import React from 'react'

type BodyProps = {
  title: string
  body: string
}

export const MissionVisionBody: React.FC<BodyProps> = ({ title, body }) => (
  <div className='flex flex-col mx-auto gap-10 lg:gap-4 px-10 '>
    <h1 className='text-center uppercase font-bold text-3xl'>{title}</h1>
    <p>{body}</p>
  </div>
)
