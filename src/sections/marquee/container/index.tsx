import React from 'react'
import { Stack } from '@chakra-ui/react'

import useColorBrand from '@/hooks/useColorBrand'

import LineItem from '../item'

type ContainerProps = {
  height:number
  width:number
}

const MarqueeContainer = ({ height, width }: ContainerProps) => {
  const color = useColorBrand()
  const textStyle = `1px ${color}`

  return (
    <Stack direction={{ base: 'column', lg: 'row' }} height={{ base: '100%', lg: height }} justifyContent='center' maxW='100%' width={{ base: width, lg: 'auto' }}>
      <LineItem content='developer ' direction={1450} />
      <LineItem content='designer ' direction={-1450} style={textStyle} />
      <LineItem content='developer ' direction={1450} />
      <LineItem content='designer ' direction={-1450} style={textStyle} />
    </Stack>
  )
}

export default MarqueeContainer
