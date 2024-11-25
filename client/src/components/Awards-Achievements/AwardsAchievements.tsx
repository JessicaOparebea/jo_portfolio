import * as React from 'react'
import { CommunityService } from './community-service'
import { SectionTitle } from '../Shared'
import { ProfessionalMemberships } from './professional-memberships'
import { Awards } from './awards'

export const AwardsAchievements: React.FC = () => {
  return (
    <main className='flex flex-col gap-8 justify-center py-px'>
      <SectionTitle title='Awards & Achievements' />
      <CommunityService />
      <ProfessionalMemberships />
      <Awards />
    </main>
  )
}
