import React from 'react'
import { IconButton, useColorMode } from '@chakra-ui/react'
import { VscColorMode } from 'react-icons/vsc'
import { motion } from 'framer-motion'

import NavItem from '../navItem'

interface BarProps {
  toggle?: () => void
}

const Bar = ({ toggle }: BarProps) => {
  const navItems = [
    {
      name: 'home',
      route: '/'
    },
    {
      name: 'projects',
      route: '#projects'
    }
    // {
    //   name: 'about',
    //   route: '#about'
    // },
    // {
    //   name: 'skills',
    //   route: '#skills'
    // },

    // {
    //   name: 'contact',
    //   route: '#contact'
    // }
  ]
  const { toggleColorMode } = useColorMode()

  return (
    <>
      {navItems?.map((item, i) => (
        <motion.li key={i} style={{ listStyleType: 'none' }} whileTap={{ scale: 0.95 }}>
          <NavItem close={toggle} route={item.route} sectionName={item.name} />
        </motion.li>
      ))}
      <IconButton
        _hover={{ bgColor: 'none' }}
        aria-label=''
        fontSize='20px'
        icon={<VscColorMode />}
        size='lg'
        variant='ghost'
        onClick={toggleColorMode}
      />
    </>
  )
}

export default Bar
