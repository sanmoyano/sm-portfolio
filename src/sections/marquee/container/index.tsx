import React from 'react'
import { Stack, useColorModeValue, useTheme } from '@chakra-ui/react'

import LineItem from '../item'

type ContainerProps = {
  height:number
  width:number
}

const MarqueeContainer: React.FC<ContainerProps> = ({ height, width }) => {
  const { colors } = useTheme()
  const color = useColorModeValue(colors.brand[100], colors.brand[200])
  const textStyle: string = `0.5px ${color}`

  return (
    <Stack bgColor='red' direction={{ base: 'column', lg: 'row' }} height={{ base: '100%', lg: height }} justifyContent='center' maxW='100%' width={{ base: width, lg: 'auto' }}>
      <LineItem content='developer ' direction={1450} />
      <LineItem content='designer ' direction={-1450} style={textStyle} />
      <LineItem content='developer ' direction={1450} />
      <LineItem content='designer ' direction={-1450} style={textStyle} />
    </Stack>
  )
}

export default MarqueeContainer
