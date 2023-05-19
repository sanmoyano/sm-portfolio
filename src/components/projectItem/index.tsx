import React from 'react'
import { Text, Link, Stack, useColorModeValue } from '@chakra-ui/react'
import { Variants, motion, AnimatePresence } from 'framer-motion'

import useColorBrand from '@/hooks/useColorBrand'
import { ProjectsData } from '@/app/projects/page'
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

  return (
    <AnimatePresence>
      <Stack alignItems='center' as={motion.div} direction='row' justifyContent='space-between' variants={animationVariant} width='100%'>
        <Text
          color={active ? `${colorTitle}` : 'transparent'}
          fontFamily='apotek-extrawide'
          fontSize='9rem'
          lineHeight={0.7}
          sx={{ WebkitTextStroke: active ? 'none' : `1px ${colorTitle}` }}
          textAlign='center'
          textTransform='uppercase'
          transitionDelay='0s, 0s'
          transitionDuration='.5s, .5s'
          transitionProperty='color, opacity'
          transitionTimingFunction='ease, ease'
        >{name}
        </Text>
        <Stack animate={active ? 'visible' : 'hidden'} as={motion.div} direction='row' justifyContent='space-around' variants={{ initial: { opacity: 1, transition: { duration: 5 } }, hidden: { opacity: 0, transition: { duration: 0.5 } } }}>
          <Text color={color} textStyle='quotes'>press enter to navigate to the project</Text>
          <Link href={page}>page</Link>
          <Link href={repo}>repo</Link>
        </Stack>
      </Stack>
    </AnimatePresence>
  )
}

export default ProjectItem
