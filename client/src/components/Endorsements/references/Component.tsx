import React from 'react'

interface ReferenceProps {
  name: string
  title: string
  email: string
  phone?: string
  additionalInfo?: string[]
}

const references: ReferenceProps[] = [
  {
    name: 'Mr. Robert Wonders Aggor',
    title: 'CEO, Trestle Academy',
    email: 'wonders@trestleacademyghana.org'
  },
  {
    name: 'Dr. Tetteyfio Evavera',
    title: 'SHO, Paediatric, Greater Accra Regional Hospital',
    email: 'naa2shika@gmail.com',
    phone: '+233 243 453 073'
  },
  {
    name: 'Prof. Samuel Kojo Kwofie',
    title: 'Head of Department',
    email: 'Skkwofie@ug.edu.gh',
    phone: '+233 20 379 7922',
    additionalInfo: [
      '(PhD, PGCE Cum Laude- UWC) (MSc- UCT, BSc Hons- KNUST),',
      'Biomedical Engineering Department,',
      'School of Engineering Sciences',
      'University of Ghana'
    ]
  }
]

export const References: React.FC = () => {
  return (
    <section data-layername='references' className='flex flex-col px-12 py-5 max-w-full bg-white w-[981px] max-md:px-5'>
      <div className='flex flex-col max-w-full text-4xl font-bold text-indigo-950 w-[195px]'>
        <h2 data-layername='references'>References</h2>
        <div className='flex shrink-0 h-1.5 bg-indigo-950 w-[39px]' />
      </div>
      <div className='mt-14 text-xl text-black max-md:mt-10 max-md:max-w-full'>
        {references.map((reference, index) => (
          <React.Fragment key={index}>
            <p className='font-bold'>{reference.name}</p>
            <p>{reference.title}</p>
            {reference.additionalInfo && reference.additionalInfo.map((info, i) => <p key={i}>{info}</p>)}
            <p>
              Email:{' '}
              <a href={`mailto:${reference.email}`} className='underline text-indigo-950 text-[1.15rem] md:text-lg'>
                {reference.email}
              </a>
            </p>
            {reference.phone && (
              <p>
                Phone: <span className='underline text-indigo-950'>{reference.phone}</span>
              </p>
            )}
            {index < references.length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
