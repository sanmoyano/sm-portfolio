'use client'
import React, { useState } from 'react'
import { Container, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import IMG_ROJA from '../../../../public/logo_red.svg'
import IMG_VERDE from '../../../../public/logo_green.svg'

const HeroImage: React.FC = () => {
  const [isImageLoading, setImageLoading] = useState(false)
  const logo = useColorModeValue(IMG_ROJA, IMG_VERDE)

  const imageLoaded = () => {
    setTimeout(() => setImageLoading(true), 600)
  }

  return (
    <Container centerContent as='div' height='100%' maxW='xl'>
      <motion.div
        animate={{
          opacity: isImageLoading ? 1 : 0
        }}
        initial={{ opacity: 0 }}
        transition={{ opacity: { delay: 0.5, duration: 0.4 } }}
        onLoad={imageLoaded}
      >
        <Image
          alt='hero-section-sm'
          sizes='(max-width: 768px) 200px'
          src={logo}
          width={300}
        />
      </motion.div>
    </Container>
  )
}

export default HeroImage
