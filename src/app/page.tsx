import { NextPage } from 'next'

import Hero from '@/sections/hero'
import Marquee from '@/sections/marquee'
import About from '@/sections/about'
import Projects from '@/sections/projects'
import Skills from '@/sections/skills'
import Contact from '@/sections/contact'

const Home : NextPage = () => {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}

export default Home
