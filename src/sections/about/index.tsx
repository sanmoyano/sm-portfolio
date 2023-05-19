'use client'
import React, { useRef } from 'react'
import { Stack, Text, Grid, GridItem, Container, useColorModeValue } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'

import { verticalText } from '@/theme/styles/verticalText'
import Title from '@/components/titles'
import ParallaxContainer from '@/components/parallax'
import useDimensions from '@/hooks/useDimensions'
import AnimationContainer from '@/components/animationContainer'
import useFloatAnimation from '@/hooks/useFloatAnimation'

interface TextContentProp {
  content: string
  aling?: 'left' | 'center' | 'right' | 'justify';
}

const About = () => {
  const HEIGHT_TEXT_REF = useRef<HTMLDivElement>(null)
  const dimension = useDimensions(HEIGHT_TEXT_REF)
  const colorText = useColorModeValue('brand.100', 'brand.200')
  const animation = useFloatAnimation()

  // Animation settings
  const animationVariants = {
    visible: {
      translateX: '0%',
      transition: { duration: 1 }
    },
    hidden: {
      translateX: '-100%'
    }
  }

  const GridItemText = ({ content }: TextContentProp) => {
    return (
      <GridItem
        animate={{ opacity: 1, transition: { duration: 3, delay: 0.2 } }}
        as={motion.div}
        height='100%'
        initial={{ opacity: 0 }}
        width='100%'
      >
        <Container centerContent maxW='100%'>
          <Text textAlign='justify' textStyle='paragraph'>
            {content}
          </Text>
        </Container>
      </GridItem>
    )
  }

  const TextQuote = ({ content, aling }: TextContentProp) => {
    return (
      <Text
        as={motion.p}
        color={colorText}
        textAlign={{ base: 'center', md: aling }}
        textStyle='quotes'
        width={{ base: '100%', md: '200px' }}
      >
        {content}
      </Text>
    )
  }

  return (
    <ParallaxContainer speed={10}>
      <AnimatePresence>
        <Stack
          alignItems='center'
          direction={{ base: 'column', lg: 'row' }}
          height='100vh'
          justifyContent={{ base: 'center' }}
          position='relative'
          spacing={2}
        >
          <Title content='about' refItem={HEIGHT_TEXT_REF} textStyle='h1' titlingScale={1.2} vertical={verticalText} />
          <AnimationContainer animationVariants={animationVariants} height={dimension.height} justifyContent='space-between'>
            <Grid gap={12} templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}>
              <GridItemText content='I am a Front End Developer who primarily utilizes ReactJS. I prioritize designing and coding UX/UI features that provide the best possible user experience.' />
              <GridItemText
                content={"I'm currently working to enhance my skills in order to develop a mern Full Stack profile. My ultimate goal is to create practical solutions for the future."}
              />
            </Grid>
            <Container centerContent display={{ base: 'none', lg: 'inherit' }} maxW='100%'>
              <Stack
                alignItems='center'
                animate={{ opacity: 1, transition: { duration: 3, delay: 1.7 } }}
                animation={animation}
                as={motion.div}
                direction='row'
                initial={{ opacity: 0 }}
                justifyContent='space-between'
                width='100%'
              >
                <TextQuote aling='left' content='Passionate Front-End Developer' />
                <TextQuote aling='center' content='User-centered design' />
                <TextQuote aling='center' content='Proficient in ReactJS' />
                <TextQuote aling='right' content='Skilled in UX/UI design' />
              </Stack>
            </Container>
          </AnimationContainer>
        </Stack>
      </AnimatePresence>
    </ParallaxContainer>
  )
}

export default About
