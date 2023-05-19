import React from 'react'
import { Stack } from '@chakra-ui/react'
import { AnimatePresence, motion, Variants } from 'framer-motion'

interface AnimationProps {
  children:React.ReactNode
  animationVariants: Variants
  justifyContent?:string
  height?:number
}

const AnimationContainer = ({ ...props }: AnimationProps) => {
  const { children, animationVariants, justifyContent, height } = props

  return (
    <AnimatePresence>
      <Stack
        as={motion.div}
        height={height}
        initial='hidden'
        justifyContent={justifyContent}
        position='relative'
        variants={animationVariants}
        viewport={{
          once: true
        }}
        whileInView='visible'
        width='100%'
      >
        {children}
      </Stack>
    </AnimatePresence>
  )
}

export default AnimationContainer
