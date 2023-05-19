'use client'
import React from 'react'
import { Link, Stack, Text, Grid, useColorModeValue, useTheme } from '@chakra-ui/react'

import Logo from '../logo'

const Footer: React.FC = () => {
  const heart = useColorModeValue('🖤', '🤍')
  const { textStyles } = useTheme()
  const footerSize = textStyles?.footer?.fontSize
  const underlineColor = useColorModeValue('black', 'white')
  const getYear = new Date().getFullYear()
  // const anchorStyle: SystemStyleObject = {
  //   _after: {
  //     content: '""',
  //     display: 'block',
  //     background: 'none repeat scroll 0 0 transparent',
  //     bottom: 0,
  //     height: 0.5,
  //     left: '50%',
  //     position: 'absolute',
  //     backgroundColor: underlineColor,
  //     transition: 'width 0.3s ease 0s, left 0.3s ease 0s',
  //     width: 0
  //   },
  //   _hover: {
  //     _after: { width: '100%', left: 0 }
  //   },
  //   position: 'relative',
  //   fontWeight: 700,
  //   target: '_blank',
  //   textStyle: 'footer',
  //   display: 'block'
  // }

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
          <Link href='https://www.linkedin.com/in/santiago-moyano/' textStyle='footer' width={125}>
            Santiago Moyano
          </Link>

          <Text textStyle='footer'>Front End Developer</Text>
          <Text textStyle='footer'>Córdoba, Argentina</Text>
          <Link href='mailto:smoyano.di@gamil.com' textStyle='footer'>
            smoyano.di@gmail.com
          </Link>
        </Grid>
      </Stack>
      <Text fontSize={`calc(${footerSize} / 1.618)`} textAlign='center' textStyle='footer'>
        {`${getYear} - Designed and developed with ${heart}.`}
      </Text>
    </Stack>
  )
}

export default Footer
