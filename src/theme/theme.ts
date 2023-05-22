import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { StyleFunctionProps } from '@chakra-ui/styled-system'

import '@fontsource/roboto'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  disableTransitionOnChange: false
}

const theme = extendTheme({
  config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      'html,body': {
        height: '100%',
        width: '100%',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        fontSize: '62.5%',
        background: mode('white', 'black')(props),
        color: mode('black', 'white')(props),
        transitionProperty: 'background-color',
        transitionDuration: '.5s',
        scrollBehavior: 'smooth'
      }
    })
  },
  colors: {
    black: '#0d0d0d',
    white: '#f5f5f5',
    brand: {
      100: '#EE3442',
      200: '#CAF825'
    }
  },
  fonts: {
    heading: '"apotek-extrawide", sans-serif',
    body: '"Roboto", sans-serif'
  },
  textStyles: {
    h1: {
      fontFamily: '"apotek-extrawide", sans-serif',
      fontSize: { base: '8rem', md: '12rem' },
      textTransform: 'uppercase',
      lineHeight: 1
    },
    title: {
      fontFamily: '"apotek-extrawide", sans-serif',
      fontSize: { base: '5.5rem', md: '9rem', lg: '18rem' },
      textTransform: 'uppercase',
      lineHeight: 1
    },
    h2: {
      fontSize: { base: '2rem', lg: '12rem' },
      fontWeight: 700,
      lineHeight: 0.8,
      textTransform: 'uppercase'
    },
    caption: {
      fontSize: { base: '5rem', md: '8rem', lg: '10rem' }
    },
    paragraph: {
      fontSize: { base: '2rem', md: 'calc(2.6rem * 1.618)' },
      textTransform: 'uppercase',
      lineHeight: 1
    },
    navigation: {
      fontFamily: '"apotek-extrawide", sans-serif',
      fontSize: '2rem',
      textTransform: 'uppercase',
      lineHeight: 1
    },
    quotes: {
      fontWeight: 500,
      fontSize: '1.6rem',
      textTransform: 'uppercase',
      letterSpacing: 1
    },
    cloud: {
      fontFamily: '"apotek-extrawide", sans-serif',
      fontSize: { base: '2rem', md: 'calc(4rem / 1.618)' }
    },
    logo: {
      fontFamily: '"apotek-extrawide", sans-serif',
      fontSize: '4rem'
    },
    footer: {
      fontWeight: 400,
      fontSize: '1.4rem',
      letterSpacing: 1
    }
  },

  components: {
    Divider: {
      variants: {
        solid: (props: StyleFunctionProps) => ({
          borderWidth: 2,
          borderColor: mode('brand.100', 'brand.200')(props),
          opacity: 1
        })
      }
    }
  }
})

export default theme
