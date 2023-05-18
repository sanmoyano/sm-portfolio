'use client'
import React, { useState, useEffect } from 'react'
import { Stack } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import Logo from '../logo'

import Desktop from './navbar/desktop'
import Mobile from './navbar/mobile'
import SpringScroll from './spring'
export interface HeaderProps {
    headerHeigth: number;
  }

const Header : React.FC = () => {
  const height: HeaderProps = { headerHeigth: 90 }

  // Blur animation
  const [isBlured, setIsBlured] = useState<boolean>(false)
  const activeBackgroundBlur = () => {
    if (window.scrollY > height.headerHeigth) {
      setIsBlured(true)
    } else {
      setIsBlured(false)
    }
  }

  useEffect(() => {
    activeBackgroundBlur()
    window.addEventListener('scroll', activeBackgroundBlur)
  })

  return (
    <Stack
      alignItems='center'
      as={motion.div}
      backdropFilter={isBlured ? 'blur(10px)' : ''}
      direction='row'
      height={height.headerHeigth}
      initial={{ opacity: 0 }}
      justifyContent='space-between'
      paddingInline={{ base: 3, md: 6, lg: 12 }}
      position='fixed'
      viewport={{ once: true }}
      whileInView={{ opacity: 1, transition: { duration: 3 } }}
      width='100%'
      zIndex={9}
    >
      <Logo />
      <SpringScroll />
      <Desktop />
      <Mobile />
    </Stack>
  )
}

export default Header
