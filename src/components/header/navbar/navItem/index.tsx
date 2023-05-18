'use client'
import React, { useState } from 'react'
import { Stack, Text, useTheme, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'

import StarIcon from '@/components/starIcon'

type NavItemProps = {
  sectionName: string,
  route: string
}

const NavItem: React.FC<NavItemProps> = ({ route, sectionName }) => {
  const [isHovered, setHovered] = useState<boolean>(false)
  const { colors } = useTheme()
  const fill: string = useColorModeValue(`${colors.black}`, `${colors.white}`)

  return (
    <Link href={route} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <Stack
        alignItems='center'
        direction='row'
        display={{ base: sectionName === 'contact' ? 'none' : 'flex', lg: 'flex' }}
      >
        <StarIcon fill={fill} isRotate={isHovered} />
        <Text textStyle='navigation'>{sectionName}</Text>
      </Stack>
    </Link>
  )
}

export default NavItem
