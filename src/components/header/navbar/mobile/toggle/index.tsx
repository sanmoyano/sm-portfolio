import React from 'react'
import { Button, useTheme, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

interface ToggleProps {
  toggle: () => void
}

interface PathProps {
  openPath:string,
  closedPath:string,
}

const Toggle: React.FC<ToggleProps> = ({ toggle }) => {
  const { colors } = useTheme()
  const fill: string = useColorModeValue(`${colors.black}`, `${colors.white}`)

  const Path: React.FC <PathProps> = ({ openPath, closedPath }) => {
    return (
      <motion.path
        fill='transparent'
        stroke={fill}
        strokeWidth='2'
        variants={{
          open: { d: openPath, transition: { duration: 0.3 } },
          closed: { d: closedPath, transition: { duration: 0.3 } }
        }}
      />
    )
  }

  return (
    <Button _hover={{ background: 'none' }} p={8} variant='ghost' onClick={toggle}>
      <svg height='30' width='50'>
        <Path closedPath='M 0 10 L 50 10' openPath='M 0 0 L 50 30' />
        <Path closedPath='M 0 15 L 50 15' openPath='' />
        <Path closedPath='M 0 20 L 50 20' openPath='M 0 30 L 50 0' />
      </svg>
    </Button>
  )
}

export default Toggle
