import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <h1 className='text-6xl font-bold text-red-600 mb-4'>404</h1>
      <h2 className='text-3xl font-semibold mb-2'>Page Not Found</h2>
      <p className='text-lg mb-8'>The page you are looking for does not exist.</p>
      <Link to='/' className='text-blue-500 hover:underline text-lg'>
        Go to Homepage
      </Link>
    </div>
  )
}
