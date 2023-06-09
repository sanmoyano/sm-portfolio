import React from 'react'
import { motion, AnimatePresence, useCycle } from 'framer-motion'
import { Link, Stack, Text, useColorModeValue } from '@chakra-ui/react'

import ContactIcons from '@/components/contactIcons'
import { icons } from '@/data/incons'
import useColorBrand from '@/hooks/useColorBrand'

import { HeaderProps } from '../..'
import Bar from '../bar'

import Toggle from './toggle'

const Mobile = () => {
  const [isOpen, setIsOpen] = useCycle(false, true)
  const topPosition: HeaderProps = {
    headerHeigth: 90
  }
  const bgColor = useColorModeValue('white', 'black')
  const colorText = useColorBrand()

  const handlerMenu = () => {
    setIsOpen()
  }

  const variants = {
    open: { opacity: 1, x: '0' },
    closed: { opacity: 0, x: '-100%' }
  }

  if (typeof document !== 'undefined') {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
  }

  return (
    <Stack display={{ base: 'flex', lg: 'none' }}>
      <Stack animate={isOpen ? 'open' : 'closed'} as={motion.div} initial={false}>
        <Toggle toggle={handlerMenu} />
      </Stack>
      <AnimatePresence>
        {isOpen && (
          <Stack
            animate='open'
            as={motion.div}
            bgColor={bgColor}
            exit='closed'
            height='100vh'
            initial='closed'
            margin='0px !important'
            p={6}
            position='absolute'
            right='0px'
            top={topPosition.headerHeigth}
            variants={variants}
            width='100%'
          >
            <Stack alignItems='left' gap={8} width='100%'>
              <Bar toggle={handlerMenu} />
            </Stack>
            <Stack alignItems='center' height='100%' justifyContent='center' spacing={6}>
              <Text fontFamily='apotek-extrawide' fontSize='3.5rem' textAlign='center' textStyle='sectionTitle' textTransform='uppercase'>
                get in touch
              </Text>
              <Link _hover={{ textDecorationColor: 'none' }} href='mailto:smoyano.di@gmail.com'>
                <Text
                  _hover={{
                    WebkitTextStroke: `1px ${colorText}`,
                    color: 'transparent'
                  }}
                  color={`${colorText}`}
                  fontSize='2rem'
                  textStyle='logo'
                  textTransform='uppercase'
                  transitionDelay='0s, 0s'
                  transitionDuration='.5s, .5s'
                  transitionProperty='color, opacity'
                  transitionTimingFunction='ease, ease'
                >
                  smoyano.di@gmail.com
                </Text>
              </Link>
              <ContactIcons icons={icons} />
            </Stack>
          </Stack>
        )}
      </AnimatePresence>
    </Stack>
  )
}

export default Mobile
