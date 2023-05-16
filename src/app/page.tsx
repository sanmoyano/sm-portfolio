'use client'
import { NextPage } from 'next'
import { VStack } from '@chakra-ui/react'

import Hero from '@/sections/hero'

const Home : NextPage = () => {
  return (
    <>
      <main>
        <VStack gap={{ base: 20, md: 40 }} paddingInline={{ base: 6, lg: 12 }}>
          <Hero />
        </VStack>
      </main>
    </>
  )
}

export default Home
