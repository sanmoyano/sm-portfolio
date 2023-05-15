'use client'
import React from 'react'
import { Stack, Text } from '@chakra-ui/react'

import Title from '@/components/titles'
// import { floatAnimation } from '@/utils/floatAnimation'

const Hero: React.FC = () => {
  // const float: string = floatAnimation()

  return (
    <Stack>
      <Title content='HERO' textStyle='h1' />
    </Stack>
  )
}

export default Hero
