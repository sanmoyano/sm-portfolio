'use client'
import React, { useState } from 'react'
import { Link, Stack, Text, useTheme, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'

import StarIcon from '@/components/starIcon'

type NavItemProps = {
  sectionName: string,
  route: string
}

const NavItem = ({ route, sectionName }: NavItemProps) => {
  const [isHovered, setHovered] = useState<boolean>(false)
  const { colors } = useTheme()
  const fill = useColorModeValue(`${colors.black}`, `${colors.white}`)

  return (
    <Link
      _active={{
        outline: 'none !important',
        border: 'none !important',
        boxShadow: 'none !important'
      }} _focus={{
        outline: 'none !important',
        border: 'none !important',
        boxShadow: 'none !important'
      }}
      _hover={{ textDecoration: 'none' }}
      as={NextLink}
      display='inline-block'
      href={route}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
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
