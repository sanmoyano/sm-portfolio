import React from 'react'
import { motion, Variants } from 'framer-motion'
import { Box, Stack, Text, useMediaQuery, useTheme, useColorModeValue } from '@chakra-ui/react'

import { calcFontSize } from '@/utils/calcFontSize'

type LineItemProps = {
  content: string,
  style?: string
  direction: number
}
const LineItem: React.FC<LineItemProps> = ({ content, style, direction }) => {
  const { textStyles } = useTheme()
  const isLargerThanMd = useMediaQuery('(min-width: 992px)')
  const color = useColorModeValue('brand.100', 'brand.200')
  const h1Size = textStyles.h1.fontSize.md

  // Animation settings
  const marqueeVariants: Variants = {
    horizontal: {
      x: [null, direction, 450],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 8,
          ease: 'linear'
        }
      }
    },
    vertical: {
      y: [null, direction, 450],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 8,
          ease: 'linear'
        }
      }
    }
  }

  return (
    <Stack
      sx={{
        display: 'grid',
        placeContent: 'center',
        bgColor: 'blue',
        // position: 'relative',
        // width: { base: '100%' },
        // maxW: { base: '100%' },
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
          fontSize={calcFontSize(h1Size)}
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
