import React, { useState } from 'react'
import { Navigation } from './Navigation'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className={`sticky top-0 ${isMenuOpen ? 'z-50' : 'z-30'} bg-white`}>
      <div className='relative'>
        {/* <img loading='lazy' src='/assets/group_stud_pic.jpg' alt='jessie' className='object-cover absolute inset-0 size-full opacity-20' /> */}
        <div
          className='absolute inset-0'
          style={{
            background:
              'linear-gradient(-30deg, rgba(233, 241, 250, 0.5) 0%, rgba(189, 228, 246, 0.5) 34%, rgba(159, 219, 243, 0.5) 37%, rgba(233, 241, 250, 0.5) 55%, rgba(233, 241, 250, 0.5) 71%)'
          }}
        />
        <header className='relative flex justify-between items-center px-9 w-full text-base text-black border-b border-stone-300 max-md:px-5 max-md:max-w-full h-24'>
          <Link to='/#home' className='my-auto text-8xl max-md:text-4xl font-Inspiration'>
            Jessie
          </Link>

          <button className='lg:hidden text-black' onClick={toggleMobileMenu}>
            {isMenuOpen ? <FontAwesomeIcon icon={faX} size='xl' /> : <FontAwesomeIcon icon={faBars} size='2xl' />}
          </button>

          <nav className='hidden lg:flex'>
            <Navigation />
          </nav>

          {isMenuOpen && (
            <nav className='absolute top-full left-0 w-full bg-white shadow-md p-5 lg:hidden z-20'>
              <Navigation setIsMenuOpen={toggleMobileMenu} />
            </nav>
          )}
        </header>
      </div>
    </div>
  )
}
// 'grow shrink gap-2.5 self-stretch px-32 py-6 my-auto text-white rounded-3xl border border-solid bg-indigo-950 border-stone-300
//       min-h-[67px] w-[14px] max-md:px-5''
