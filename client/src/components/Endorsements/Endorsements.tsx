import * as React from 'react'
import { SectionTitle } from '../Shared'
import { Testimonials } from './testimonials'
import { References } from './references'

export const Endorsements: React.FC = () => {
  return (
    <main className='flex flex-col gap-8 justify-center py-px'>
      <SectionTitle title='Endorsements' />
      <Testimonials />
      <References />
    </main>
  )
}
