import React from 'react'
import { TagCloud, TagCloudOptions } from '@frank-mayer/react-tag-cloud'
import { Stack } from '@chakra-ui/react'
import { motion } from 'framer-motion'

interface TextCloudProps {
  activeIndex: number
  height: number,
  skills:string[]
  clouldSize:number
}
const TextCloud = ({ activeIndex, height, skills, clouldSize }: TextCloudProps) => {
  const isVisible = activeIndex >= 0 && activeIndex <= 2

  return (
    <Stack
      alignItems='center'
      animate={isVisible ? 'visible' : 'hidden'}
      as={motion.div}
      exit='hidden'
      height={height}
      initial='hidden'
      justifyContent='center'
      marginTop='0px !important'
      paddingTop={{ base: '30xp', md: '100px', lg: '0px' }}
      position={{ base: 'relative', lg: 'absolute' }}
      right={0}
      textStyle='cloud'
      top={0}
      variants={{
        visible: {
          opacity: 1,
          transition: { duration: 1, delay: 0.2 }
        },
        hidden: {
          opacity: 0,
          transition: { duration: 0.2 }
        }
      }}
      whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
      width='50%'
      zIndex={99}
    >
      <TagCloud
        options={(w: Window & typeof globalThis): TagCloudOptions => ({
          radius: Math.min(clouldSize, w.innerWidth, w.innerHeight) / 2,
          maxSpeed: 'normal',
          initSpeed: 'normal',
          keep: true
        })}
        onClickOptions={{ passive: true }}
      >
        {skills}
      </TagCloud>
    </Stack>
  )
}

export default TextCloud
