import React from 'react'
import { Stack, Text, Link } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'

import { icons } from '@/data/incons'
import Title from '@/components/titles'
import ParallaxContainer from '@/components/parallax'
import ContactIcons from '@/components/contactIcons'
import Tilting from '@/components/tilting'
import useColorBrand from '@/hooks/useColorBrand'

const Contact = () => {
  const colorText = useColorBrand()

  return (
    <ParallaxContainer speed={-10}>
      <AnimatePresence>
        <Stack
          display='none'
          height='100%'
          id='contact'
          spacing={12}
          width='100%'
        >
          <Title content='get in touch' textStyle='h1' titlingEnable={false} />
          <Stack
            alignItems='center'
            justifyContent='center' spacing={10} width='100%'
          >
            <Link _hover={{ textDecorationColor: 'none' }} href='mailto:smoyano.di@gmail.com'>
              <Tilting scale={1.2}>
                <Text
                  _hover={{
                    WebkitTextStroke: `calc(1px / 1.618) ${colorText}`,
                    color: 'transparent'
                  }}
                  color={`${colorText}`}
                  textStyle='logo'
                  textTransform='uppercase'
                  transitionDelay='0s, 0s'
                  transitionDuration='.5s, .5s'
                  transitionProperty='color, opacity'
                  transitionTimingFunction='ease, ease'
                >
                  smoyano.di@gmail.com
                </Text>
              </Tilting>
            </Link>
            <ContactIcons icons={icons} />
          </Stack>
        </Stack>
      </AnimatePresence>
    </ParallaxContainer>

  )
}

export default Contact
