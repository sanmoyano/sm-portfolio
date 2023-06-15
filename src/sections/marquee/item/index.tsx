import React from 'react'
import { motion, Variants } from 'framer-motion'
import { Box, Stack, Text, useMediaQuery, useTheme } from '@chakra-ui/react'

import { calcFontSize } from '@/utils/calcFontSize'
import useColorBrand from '@/hooks/useColorBrand'

import { FontSizes } from '..'

type LineItemProps = {
  content: string,
  style?: string
  direction: number
}

const LineItem = ({ content, style, direction }: LineItemProps) => {
  const { textStyles } = useTheme()
  const isLargerThanMd = useMediaQuery('(min-width: 992px)')
  const color = useColorBrand()
  const h1Size: FontSizes = textStyles?.h1?.fontSize

  // Animation settings
  const marqueeVariants: Variants = {
    horizontal: {
      x: [null, direction, 450],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 30,
          ease: 'easeInOut'

        }
      }
    },
    vertical: {
      y: [null, direction, 450],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 30,
          ease: 'easeInOut'
        }
      }
    }
  }

  return (
    <Stack
      sx={{
        display: 'grid',
        placeContent: 'center',
        overflow: 'hidden'
      }}
    >
      <Box
        animate={isLargerThanMd[0] ? 'vertical' : 'horizontal'}
        as={motion.div}
        sx={{ display: 'grid', placeContent: 'center', whiteSpace: 'nowrap' }}
        variants={marqueeVariants}
      >
        <Text
          color={style ? 'transparent' : color}
          display='inline-block'
          fontSize={calcFontSize(h1Size.md)}
          sx={{
            writingMode: { base: 'horizontal-tb', lg: 'vertical-lr' },
            textOrientation: 'mixed',
            WebkitTextStroke: style
          }}
          textAlign='center'
          textOverflow='clip'
          textStyle='h1'
          width='100%'
        >
          {content.repeat(10)}
        </Text>
      </Box>
    </Stack>
  )
}

export default LineItem
