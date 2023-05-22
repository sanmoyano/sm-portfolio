import React from 'react'
import { Text } from '@chakra-ui/react'

interface TextProps {
  active: boolean
  color: string
  content: string
}

const OutlineText = ({ active, color, content }: TextProps) => {
  return (
    <Text
      color={active ? `${color}` : 'transparent'}
      display={{ base: 'none', lg: 'inline-block' }}
      height='100%'
      sx={{ WebkitTextStroke: active ? 'none' : `1px ${color}` }}
      textAlign='center'
      textStyle='h2'
      transitionDelay='0s, 0s'
      transitionDuration='.5s, .5s'
      transitionProperty='color, opacity'
      transitionTimingFunction='ease, ease'
    >
      {content}
    </Text>
  )
}

export default OutlineText
