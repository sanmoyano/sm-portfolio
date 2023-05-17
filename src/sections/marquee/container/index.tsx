import React from 'react'
import { Stack, useColorModeValue, useTheme } from '@chakra-ui/react'

import LineItem from '../item'
type ContainerProps = {
  height:number
}

const MarqueeContainer: React.FC<ContainerProps> = ({ height }) => {
  const { colors } = useTheme()
  const color = useColorModeValue(colors.brand[100], colors.brand[200])
  const textStyle: string = `1px ${color}`

  return (
    <Stack height={{ base: '100%', lg: height }} justifyContent='center' maxW='100%' width={{ base: '100%', lg: 'auto' }}>
      <Stack direction='row' justifyContent='center' maxH='100%' width='100%'>
        <LineItem content='developer ' />
        <LineItem content='designer ' style={textStyle} />
        <LineItem content='developer ' />
        <LineItem content='designer ' style={textStyle} />
      </Stack>
    </Stack>
  )
}

export default MarqueeContainer
