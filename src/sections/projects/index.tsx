'use client'
import React from 'react'
import { Box } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'

import ParallaxContainer from '@/components/parallax'
import Title from '@/components/titles'
import useFloatAnimation from '@/hooks/useFloatAnimation'

const Projects = () => {
  const animation = useFloatAnimation()

  return (
    <AnimatePresence>
      <ParallaxContainer speed={-10}>
        <Box
          height='100vh'
          id='id'
          sx={{ display: 'grid', placeContent: 'center' }}
          width='100%'
        >
          <Link href='/projects'>
            <Title
              content='projects'
              float={animation}
              textStyle='title'
              titlingScale={1.2}
            />
          </Link>
        </Box>
      </ParallaxContainer>
    </AnimatePresence>
  )
}

export default Projects
