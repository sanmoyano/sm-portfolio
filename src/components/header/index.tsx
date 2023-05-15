'use client'
import React, { useState, useEffect } from 'react'
import { Stack } from '@chakra-ui/react'

import Logo from '../logo'

import Desktop from './navbar/desktop'
import Mobile from './navbar/mobile'
import SpringScroll from './spring'

const Header : React.FC = () => {
  const headerHeigth: number = 90

  // Blur animation
  const [isBlured, setIsBlured] = useState(false)
  const activeBackgroundBlur = () => {
    if (window.scrollY > headerHeigth) {
      setIsBlured(true)
    } else {
      setIsBlured(false)
    }
  }

  useEffect(() => {
    activeBackgroundBlur()
    window.addEventListener('scroll', activeBackgroundBlur)
  }, [])

  return (
    <Stack
      alignItems='center'
      backdropFilter={isBlured ? 'blur(10px)' : ''}
      direction='row'
      height={`${headerHeigth}px`}
      justifyContent='space-between'
      paddingInline={{ base: 3, md: 6, lg: 12 }}
      position='fixed'
      width='100%'
      zIndex={9}
    >
      <Logo />
      <SpringScroll headerHeigth={headerHeigth} />
      <Desktop />
      <Mobile topPosition={headerHeigth} />
    </Stack>
  )
}

export default Header
