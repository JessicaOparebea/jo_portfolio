import React from 'react'
import { Link } from 'react-router-dom'

type NavItemProps = {
  path: string
  text: string
  setIsMenuOpen: any
}

export const NavItem: React.FC<NavItemProps> = ({ path, text, setIsMenuOpen }) => (
  <Link to={path} className='self-stretch my-auto' onClick={setIsMenuOpen}>
    {text}
  </Link>
)
