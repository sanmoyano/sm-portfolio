'use client'
import React from 'react'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { ParallaxProvider } from 'react-scroll-parallax'
import { CacheProvider } from '@chakra-ui/next-js'

import theme from '@/theme/theme'
type ProvidersProps = {
  children : React.ReactNode
}
const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <CacheProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ChakraProvider theme={theme}>
          <ParallaxProvider>
            {children}
          </ParallaxProvider>
        </ChakraProvider>
      </CacheProvider>
    </>
  )
}

export default Providers
