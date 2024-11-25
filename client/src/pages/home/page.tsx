import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { AboutMe } from '../../components/About'
import { HeroSection } from '../../components/Home'
import { AwardsAchievements } from '../../components/Awards-Achievements'
import { Endorsements } from '../../components/Endorsements'
import { Contact } from '../../components/Contact'
import { Projects } from '../../components/Projects'

export default function Home() {
  const aboutRef = useRef<HTMLDivElement | null>(null)
  const projectsRef = useRef<HTMLDivElement | null>(null)
  const awardsRef = useRef<HTMLDivElement | null>(null)
  const endorsementsRef = useRef<HTMLDivElement | null>(null)
  const contactRef = useRef<HTMLDivElement | null>(null)
  const location = useLocation()

  useEffect(() => {
    const scrollToSection = () => {
      switch (location.hash) {
        case '#home':
          window.scrollTo({ top: 0, behavior: 'smooth' })
          break
        case '#about':
          aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
          break
        case '#projects':
          projectsRef.current?.scrollIntoView({ behavior: 'smooth' })
          break
        case '#awards-achievements':
          awardsRef.current?.scrollIntoView({ behavior: 'smooth' })
          break
        case '#endorsements':
          endorsementsRef.current?.scrollIntoView({ behavior: 'smooth' })
          break
        case '#contact':
          contactRef.current?.scrollIntoView({ behavior: 'smooth' })
          break
        default:
          break
      }
    }
    scrollToSection()
  }, [location])

  return (
    <main className='flex flex-col'>
      <section id='home'>
        <HeroSection />
      </section>

      <section id='about' ref={aboutRef}>
        <AboutMe />
      </section>

      <section id='projects' ref={projectsRef}>
        <Projects />
      </section>

      <section id='awards-achievements' ref={awardsRef}>
        <AwardsAchievements />
      </section>

      <section id='endorsements' ref={endorsementsRef}>
        <Endorsements />
      </section>

      <section id='contact' ref={contactRef}>
        <Contact />
      </section>
    </main>
  )
}
