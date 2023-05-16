'use client'
import React, { useState } from 'react'
import { Stack } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'

import ParallaxContainer from '@/components/parallax'

import HeroImage from './heroImage'

const Hero: React.FC = () => {
  const [isImageLoading, setImageLoading] = useState(false)

  return (
    <ParallaxContainer>
      <Stack id='1'>
        <Stack>
          <HeroImage loadingHandlers={{ isImageLoading, setImageLoading }} />
        </Stack>
      </Stack>
    </ParallaxContainer>
  )
}

export default Hero
