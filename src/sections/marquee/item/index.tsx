import React from 'react'
import { motion, Variants } from 'framer-motion'
import { Box, Text, useMediaQuery, useTheme, useColorModeValue } from '@chakra-ui/react'

import { calcFontSize } from '@/utils/calcFontSize'

type LineItemProps = {
  content: string,
  style?: string
}
const LineItem: React.FC<LineItemProps> = ({ content, style }) => {
  const { textStyles } = useTheme()
  const isLargerThanMd = useMediaQuery('(min-width: 992px)')
  const color = useColorModeValue('brand.100', 'brand.200')
  const h1Size = textStyles.h1.fontSize.md

  // Animation settings
  const marqueeVariants: Variants = {
    horizontal: {
      x: [null, 1450, 450],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 8,
          ease: 'linear'
        }
      }
    },
    vertical: {
      y: [null, 1450, 450],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 8,
          ease: 'linear'
        }
      }
    }
  }

  return (
    <Box
      sx={{
        display: 'grid',
        placeContent: 'center',
        position: 'relative',
        width: { base: '100%' },
        maxW: { base: '100%' },
        overflow: 'hidden'
      }}
    >
      <Box
        animate={isLargerThanMd[0] ? 'vertical' : 'horizontal'}
        as={motion.div}
        sx={{ display: 'grid', placeContent: 'center', whiteSpace: 'nowrap' }}
        variants={marqueeVariants}
        w='100%'
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
          textStyle='h1'
          w='100%'
        >
          {content.repeat(20)}
        </Text>
      </Box>
    </Box>
  )
}

export default LineItem
