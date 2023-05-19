'use client'
import React, { useState } from 'react'
import { Container, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import IMG_ROJA from '../../../../public/logo_red.svg'
import IMG_VERDE from '../../../../public/logo_green.svg'

const HeroImage = () => {
  const [isImageLoading, setImageLoading] = useState(false)
  const logo:'IMG_ROJA' | 'IMG_VERDE' = useColorModeValue(IMG_ROJA, IMG_VERDE)

  const handleLoadingComplete = () => {
    setImageLoading(true)
  }

  return (
    <Container centerContent as='div' height='100%' maxW='xl'>
      <motion.div
        animate={{
          opacity: isImageLoading ? 1 : 0
        }}
        initial={{ opacity: 0 }}
        transition={{ opacity: { delay: 1, duration: 2 } }}
      >
        <Image
          priority
          alt='hero-section-sm'
          sizes='(max-width: 768px) 200px'
          src={logo}
          width={300}
          onLoad={handleLoadingComplete}
        />
      </motion.div>
    </Container>
  )
}

export default HeroImage
