import * as React from 'react'
import { SectionTitle } from '../Shared/SectionTitle'
import { PhilosophyAndGoals } from './philosophy-goals/Component'
import SkillsSection from './skills/Component'
import Resume from './resume/Component'
import { MissionAndVision } from './mission-vision'

export const AboutMe: React.FC = () => {
  return (
    <main className='flex flex-col'>
      <SectionTitle title='About Me' />
      <PhilosophyAndGoals />
      <MissionAndVision />
      <SkillsSection />
      <Resume />
    </main>
  )
}
