import React from 'react'

interface SectionHeaderProps {
  title: string
  textColor: string
  underlineColor: string
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, textColor, underlineColor }) => (
  <header className='flex flex-col items-start'>
    <h2 className={`text-4xl font-bold ${textColor}`}>{title}</h2>
    <div className={`flex shrink-0 h-1.5 ${underlineColor} w-[39px]`} />
  </header>
)
