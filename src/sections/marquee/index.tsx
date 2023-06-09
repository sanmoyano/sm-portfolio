'use client'
import React, { useRef } from 'react'
import { Stack, Text, useTheme, Divider } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'

import useDimensions from '@/hooks/useDimensions'
import ParallaxContainer from '@/components/parallax'
import { calcFontSize } from '@/utils/calcFontSize'

import MarqueeContainer from './container'

export interface FontSizes {
  base:string
  md:string
  lg:string
}

const Marquee = () => {
  const DIMENSION_REF = useRef(null)
  const dimensions = useDimensions(DIMENSION_REF)
  const { textStyles } = useTheme()
  const captionSize: FontSizes = textStyles?.caption?.fontSize

  return (
    <AnimatePresence>
      <ParallaxContainer speed={-5}>
        <Stack
          alignItems='center'
          as={motion.div}
          direction={{ base: 'column', lg: 'row' }}
          id='2'
          initial='hidden'
          justifyContent='space-between'
          spacing={{ base: 12, md: 24 }}
          variants={{
            visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
            hidden: { opacity: 0, scale: 0 }
          }}
          viewport={{ once: true }}
          whileInView='visible'
          width='100%'
        >
          <Stack
            ref={DIMENSION_REF}
            height='100%'
            justifyContent='space-between'
            paddingRight={{ lg: 12 }}
            width={{ base: '90vw', lg: '70%' }}
          >
            <Text
              fontWeight={700}
              lineHeight={1}
              // textAlign='justify'
              textStyle='caption'
              textTransform='uppercase'
            >
              I see every project as a chance to leave my footprint
            </Text>
            <Text
              fontFamily='Roboto'
              fontSize={{
                base: calcFontSize(captionSize?.base),
                md: calcFontSize(captionSize?.md),
                lg: calcFontSize(captionSize?.lg)
              }}
              lineHeight={1}
              // textAlign='justify'
              textTransform='uppercase'
            >
              and explore unique UX/UI solutions for the users.
            </Text>
          </Stack>
          <Stack display={{ base: 'none', lg: 'block' }} height={dimensions.height}>
            <Divider orientation='vertical' variant='solid' />
          </Stack>
          <Stack display={{ base: 'block', lg: 'none' }} width='100%'>
            <Divider orientation='horizontal' variant='solid' />
          </Stack>
          <MarqueeContainer height={dimensions.height} width={dimensions.width} />
        </Stack>
      </ParallaxContainer>
    </AnimatePresence>
  )
}

export default Marquee
