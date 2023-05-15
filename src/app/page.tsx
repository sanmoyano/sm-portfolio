'use client'
import { NextPage } from 'next'
import { VStack } from '@chakra-ui/react'

import Hero from '@/sections/hero'
import Marquee from '@/sections/marquee'
import About from '@/sections/about'
import Projects from '@/sections/projects'
import Skills from '@/sections/skills'
import Contact from '@/sections/contact'

const Home : NextPage = () => {
  return (
    <VStack gap={{ base: 20, md: 40 }} paddingInline={{ base: 6, lg: 12 }}>
      {/* <Hero />
      <Marquee />
      <About />
      <Projects />
      <Skills />
      <Contact /> */}
    </VStack>
  )
}

export default Home
