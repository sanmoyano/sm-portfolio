'use client'
import { NextPage } from 'next'
import { VStack } from '@chakra-ui/react'

import Hero from '@/sections/hero'
import Marquee from '@/sections/marquee'
import Projects from '@/sections/projects'

const Home : NextPage = () => {
  return (
    <>
      <main>
        <VStack gap={{ base: 20, md: 40 }} paddingInline={{ base: 6, lg: 12 }}>
          <Hero />
          <Marquee />
          <Projects />
        </VStack>
      </main>
    </>
  )
}

export default Home
