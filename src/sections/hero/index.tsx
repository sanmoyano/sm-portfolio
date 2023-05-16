import React from 'react'
import { Stack } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'

import ParallaxContainer from '@/components/parallax'

import HeroImage from './heroImage'

const Hero: React.FC = () => {
  return (
    <ParallaxContainer>
      <AnimatePresence>
        <Stack
          alignItems='center'
          height='100vh'
          id='1'
          justifyContent='center'
          overflow='hidden'
          paddingTop={90}
          position='relative'
          width='100%'
        >
          <Stack justifyContent='center'>
            <HeroImage />
          </Stack>
        </Stack>
      </AnimatePresence>
    </ParallaxContainer>
  )
}

export default Hero
