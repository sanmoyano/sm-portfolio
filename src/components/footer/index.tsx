'use client'
import React from 'react'
import { Stack, Text, Grid, useColorModeValue, useTheme } from '@chakra-ui/react'

import AnchorContainer from '../anchorContainer'
import Logo from '../logo'

const Footer = () => {
  const heart = useColorModeValue('🖤', '🤍')
  const { textStyles } = useTheme()
  const footerSize = textStyles?.footer?.fontSize
  const underlineColor = useColorModeValue('black', 'white')
  const getYear = new Date().getFullYear()

  return (
    <Stack
      justifyContent='space-between'
      paddingBlock={12}
      paddingInline={{ base: 6, md: 12 }}
      spacing={6}
      width='100%'
    >
      <Logo />
      <Stack
        direction='row'
        display={{ base: 'none', lg: 'flex' }}
        justifyContent='space-between'
        width='100%'
      >
        <Grid gap={2} templateColumns='repeat(2, 1fr)'>
          <AnchorContainer content='Santiago Moyano' route='https://www.linkedin.com/in/santiago-moyano/' textStyle='footer' underlineColor={underlineColor} />
          <Text textStyle='footer'>Front End Developer</Text>
          <Text textStyle='footer'>Córdoba, Argentina</Text>
          <AnchorContainer content='smoyano.di@gmail.com' route='mailto:smoyano.di@gmail.com' textStyle='footer' underlineColor={underlineColor} />
        </Grid>
      </Stack>
      <Text fontSize={`calc(${footerSize} / 1.618)`} textAlign='center' textStyle='footer'>
        {`${getYear} - Designed and developed with ${heart}.`}
      </Text>
    </Stack>
  )
}

export default Footer
