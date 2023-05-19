import React from 'react'
import { Stack } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'

import ParallaxContainer from '@/components/parallax'

const DynamicHeroImage = dynamic(() => import('./heroImage'), { ssr: false })

const Hero = () => {
  return (
    <ParallaxContainer speed={5}>
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
            <DynamicHeroImage />
          </Stack>
        </Stack>
      </AnimatePresence>
    </ParallaxContainer>
  )
}

export default Hero
