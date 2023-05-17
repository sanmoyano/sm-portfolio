import React from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
import { motion, useSpring, useScroll } from 'framer-motion'

import { HeaderProps } from '..'

const SpringScroll: React.FC = () => {
  const topPosition: HeaderProps = {
    headerHeigth: 90
  }
  const colorLine : string = useColorModeValue('black', 'white')
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <Box
      as={motion.div}
      style={{ scaleX }}
      sx={{
        position: 'fixed',
        top: topPosition.headerHeigth,
        left: 0,
        right: 0,
        height: '2px',
        transformOrigin: '0%',
        background: colorLine,
        zIndex: 9
      }}
    />
  )
}

export default SpringScroll
