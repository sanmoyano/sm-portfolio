'use client'
import React, { useState, useEffect } from 'react'
import { Stack, Spinner } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

import Logo from '../logo'

import SpringScroll from './spring'

// const Desktop = lazy(() => import('./navbar/desktop/index'))
const Desktop = dynamic(() => import('./navbar/desktop/index'), {
  loading: () => (
    <Stack alignItems='center' as='div' height='30px' justifyContent='center' width='50px'>
      <Spinner as='div' size='lg' />
    </Stack>
  )
})

const Mobile = dynamic(() => import('./navbar/mobile/index'), {
  loading: () => (
    <Stack alignItems='center' as='div' height='30px' justifyContent='center' width='50px'>
      <Spinner as='div' size='lg' />
    </Stack>
  )
})

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
