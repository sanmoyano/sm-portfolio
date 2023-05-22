import React, { useRef, useEffect } from 'react'
import { Text, Link, Stack, useColorModeValue, useMediaQuery } from '@chakra-ui/react'
import { Variants, motion, AnimatePresence } from 'framer-motion'

import useColorBrand from '@/hooks/useColorBrand'
import { ProjectsData } from '@/app/projects/page'

import AnchorContainer from '../anchorContainer'
interface ItemProps {
  name: ProjectsData['name']
  page: ProjectsData['page']
  repo: ProjectsData['repo']
  index: number
  activeIndex: number
  animationVariant: Variants
}

const ProjectItem = ({ name, page, repo, index, activeIndex, animationVariant }: ItemProps) => {
  const active = activeIndex === index
  const colorTitle = useColorModeValue('black', 'white')
  const color = useColorBrand()
  const itemRef = useRef<HTMLAnchorElement>(null)
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)', {
    ssr: true,
    fallback: false // return false on the server, and re-evaluate on the client side
  })
  const textAnimationVariants = {
    visible: { opacity: 1, transition: { duration: 2, delay: 0.5 } },
    hidden: { opacity: 0 }
  }

  useEffect(() => {
    if (active) {
      itemRef.current?.focus()
    }
  }, [active])

  return (
    <AnimatePresence>
      <Stack alignItems='center' as={motion.div} direction='row' justifyContent='space-between' paddingInline={{ base: 6, md: 12 }} variants={animationVariant} width='100%'>
        {isLargerThan900
          ? (
            <>
              <Link
                ref={itemRef}
                autoFocus
                _focusVisible={{
                  outline: 'none !important',
                  border: 'none !important',
                  boxShadow: 'none !important'
                }}
                _hover={{ textDecoration: 'none' }}
                borderColor='none'
                color={active ? `${colorTitle}` : 'transparent'}
                display='inline-block' fontFamily='apotek-extrawide'
                fontSize='9rem'
                href={page}
                lineHeight={0.7}
                sx={{ WebkitTextStroke: active ? 'none' : `1px ${colorTitle}` }}
                tabIndex={active ? 0 : -1}
                target='_blank'
                textAlign='center'
                textTransform='uppercase'
                transitionDelay='0s, 0s'
                transitionDuration='.5s, .5s'
                transitionProperty='color, opacity'
                transitionTimingFunction='ease, ease'
              >
                {name}
              </Link>
              <Stack
                animate={active ? 'visible' : 'hidden'} as={motion.div} direction='row' initial='hidden' justifyContent='space-around'
                variants={textAnimationVariants}
              >
                <Text color={color} textStyle='quotes'>{'press enter to navigate to the project/ '}<AnchorContainer content='link to repo' route={repo} textStyle='quotes' underlineColor={color} /></Text>
              </Stack>
            </>
            )
          : (
            <Link
              display='inline-block'
              fontFamily='apotek-extrawide' fontSize={{ base: '4rem', md: '6rem' }} href={page} lineHeight={0.7}
              marginTop={1} target='_blank' textAlign='left' textTransform='uppercase'
            >{name}
            </Link>
            )}

      </Stack>
    </AnimatePresence>
  )
}

export default ProjectItem
