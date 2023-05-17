import React from 'react'
import { motion } from 'framer-motion'
import { Box, Text, useMediaQuery, useTheme, useColorModeValue } from '@chakra-ui/react'

import { calcFontSize } from '@/utils/calcFontSize'

type LineItemProps = {
  content: string,
  style: string
}
const LineItem: React.FC<LineItemProps> = ({ content, style }) => {
  return (
    <div>LineItem</div>
  )
}

export default LineItem
