'use client'
import React from 'react'
import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

interface IconProps {
  fill: string,
  // display: string,
  isRotate: boolean
}

const StarIcon: React.FC<IconProps> = ({ fill, isRotate }) => {
  const variants = {
    hover: {
      rotate: 360
    },
    initial: {
      rotate: 0
    }
  }

  return (
    <Box
      animate={isRotate ? 'hover' : 'inital'}
      as={motion.div}
      boxSize='20px'
      // display={display}
      sx={{ display: 'flex', alignItems: 'center' }}
      variants={variants}
      whileHover='hover'
    >
      <svg fill='none' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'>
        <g clipPath='url(#clip0_41_56)'>
          <path
            d='M12.3144 10.2312L14 0L15.6856 10.2312C15.862 11.3008 16.6992 12.138 17.7688 12.3144L28 14L17.7688 15.6856C16.6992 15.862 15.862 16.6992 15.6856 17.7688L14 28L12.3144 17.7688C12.138 16.6992 11.3008 15.862 10.2312 15.6856L0 14L10.2312 12.3144C11.3008 12.138 12.138 11.3008 12.3144 10.2312Z'
            fill={fill}
          />
        </g>
        <defs>
          <clipPath id='clip0_41_56'>
            <rect fill='white' height='30' width='30' />
          </clipPath>
        </defs>
      </svg>
    </Box>
  )
}

export default StarIcon
