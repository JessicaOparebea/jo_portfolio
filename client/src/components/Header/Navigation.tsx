import React from 'react'
import { NavItem } from './NavItem'

const navItems = [
  { path: '/#home', title: 'Home' },
  { path: '/#about', title: 'About' },
  { path: '/#projects', title: 'Projects' },
  { path: '/#awards-achievements', title: 'Achievements' },
  { path: '/#endorsements', title: 'Endorsements' },
  { path: '/gallery', title: 'Gallery' },
  { path: '/#contact', title: 'Contact' }
]
type NavigationProps = {
  setIsMenuOpen?: any
}
export const Navigation: React.FC<NavigationProps> = ({ setIsMenuOpen }) => (
  <nav className='flex flex-col lg:flex-row gap-10 justify-between items-center self-stretch my-auto min-w-[240px] max-md:max-w-full'>
    <ul className='flex flex-col lg:flex-row gap-6'>
      {navItems.map((item, index) => (
        <NavItem key={index} path={item.path} text={item.title} setIsMenuOpen={setIsMenuOpen} />
      ))}
    </ul>
    <button className='text-white p-6 rounded-3xl bg-[#061444] hover:bg-[#041033]'>Download CV</button>
  </nav>
)
