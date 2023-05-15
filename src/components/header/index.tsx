'use client'
import React, { useState, useEffect, Suspense, lazy } from 'react'
import { Stack } from '@chakra-ui/react'

import Logo from '../logo'

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
    <Stack backdropFilter={isBlured ? 'blur(10px)' : ''} height={headerHeigth} position='fixed' width='100%'>
      <Logo />
      <SpringScroll headerHeigth={headerHeigth} />
    </Stack>
  )
}

export default Header
