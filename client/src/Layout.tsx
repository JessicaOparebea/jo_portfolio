import React from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

interface LayoutProps {
  children?: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='flex flex-col px-px max-md:max-w-full'>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}
