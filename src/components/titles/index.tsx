import React, { LegacyRef } from 'react'
import { Box, Text, useColorModeValue, useMediaQuery } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import Tilting from '../tilting'

interface TitleProps {
  content: string,
  refItem?: LegacyRef<HTMLParagraphElement>
  textStyle: string,
  vertical?: object,
  float?: string,
  titlingScale?: number,
  titlingEnable?: boolean

}
const Title = ({ content, refItem, textStyle, vertical, float, titlingScale, titlingEnable }: TitleProps) => {
  const color = useColorModeValue('black', 'white')
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)', {
    ssr: true,
    fallback: false
  })

  return (
    <Box
      animation={float}
      as={motion.div}
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, transition: { duration: 3 } }}
      width='fit-content'
      zIndex={99}
    >
      {isLargerThan900
        ? (

          <Tilting enable={titlingEnable} scale={titlingScale}>
            <Text
              ref={refItem}
              _hover={{
                WebkitTextStroke: content === 'projects' ? `2px ${color}` : `1px ${color}`,
                color: 'transparent'
              }}
              display='inline-block'
              sx={vertical}
              textAlign='center'
              textStyle={textStyle}
              transitionDelay='0s, 0s'
              transitionDuration='.5s, .5s' transitionProperty='color, opacity'
              transitionTimingFunction='ease, ease'
            >
              {content}
            </Text>
          </Tilting>
          )
        : (
          <Text
            ref={refItem}
            display='inline-block'
            sx={vertical}
            textAlign='center'
            textStyle={textStyle}
            transitionDelay='0s, 0s'
            transitionDuration='.5s, .5s' transitionProperty='color, opacity'
            transitionTimingFunction='ease, ease'
          >
            {content}
          </Text>
          )}
    </Box>
  )
}

export default Title
