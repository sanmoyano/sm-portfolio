'use client'
import React, { useState } from 'react'
import { Stack, Text, useTheme, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'

import StarIcon from '@/components/starIcon'

interface NavItemProps {
  item: string,
  route: string
}

const NavItem: React.FC<NavItemProps> = ({ route, item }) => {
  const [isHovered, setHovered] = useState(false)
  const { colors } = useTheme()
  const fill = useColorModeValue(`${colors.black}`, `${colors.white}`)

  return (
    <Link href={route} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <Stack
        alignItems='center'
        direction='row'
        display={{ base: item === 'contact' ? 'none' : 'flex', lg: 'flex' }}
      >
        <StarIcon fill={fill} isRotate={isHovered} />
        <Text textStyle='navigation'>{item}</Text>
      </Stack>
    </Link>
  )
}

export default NavItem
