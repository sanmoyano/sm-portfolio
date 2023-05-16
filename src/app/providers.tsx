'use client'
import React from 'react'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { ParallaxProvider } from 'react-scroll-parallax'

import theme from '@/theme/theme'
interface ProvidersProps {
  children : React.ReactNode
}
const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <ParallaxProvider>
          {children}
        </ParallaxProvider>
      </ChakraProvider>
    </>
  )
}

export default Providers
