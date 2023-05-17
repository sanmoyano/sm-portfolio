'use client'
import { NextPage } from 'next'
import { Stack } from '@chakra-ui/react'

import Hero from '@/sections/hero'
import Marquee from '@/sections/marquee'
import Projects from '@/sections/projects'
import About from '@/sections/about'
import Skills from '@/sections/skills'
import Contact from '@/sections/contact'

const Home : NextPage = () => {
  return (
    <>
      <main>
        <Stack gap={{ base: 20, md: 40 }} paddingInline={{ base: 6, lg: 12 }}>
          <Hero />
          <Marquee />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </Stack>
      </main>
    </>
  )
}

export default Home
