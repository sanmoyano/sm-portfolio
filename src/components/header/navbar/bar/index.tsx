import React from 'react'
import { IconButton, useColorMode } from '@chakra-ui/react'
import { VscColorMode } from 'react-icons/vsc'
import { motion } from 'framer-motion'

import NavItem from '../navItem'

const Bar: React.FC = () => {
  const navItems = [
    {
      name: 'home',
      route: '/'
    },
    {
      name: 'about',
      route: '#about'
    },
    {
      name: 'projects',
      route: '/projects'
    },
    {
      name: 'skills',
      route: '#skills'
    },

    {
      name: 'contact',
      route: '#contact'
    }
  ]
  const { toggleColorMode } = useColorMode()

  return (
    <>
      <IconButton
        _hover={{ bgColor: 'none' }}
        aria-label=''
        fontSize='20px'
        icon={<VscColorMode />}
        size='lg'
        variant='ghost'
        onClick={toggleColorMode}
      />
      {navItems?.map((item, i) => (
        <motion.li key={i} style={{ listStyleType: 'none' }} whileTap={{ scale: 0.95 }}>
          <NavItem item={item.name} route={item.route} />
        </motion.li>
      ))}
    </>
  )
}

export default Bar
