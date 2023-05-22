'use client'
import React, { useState, useRef } from 'react'
import { NextPage } from 'next'
import { Text, Stack, useMediaQuery } from '@chakra-ui/react'
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons'
import { AnimatePresence, motion } from 'framer-motion'

import AnimationContainer from '@/components/animationContainer'
import useFloatAnimation from '@/hooks/useFloatAnimation'
import useColorBrand from '@/hooks/useColorBrand'
import useArrowKeys from '@/hooks/useArrowKeys'
import ProjectItem from '@/components/projectItem'

import PROJECTS from '../../data/projects.json'

export interface ProjectsData {
  name:string
  page:string
  repo:string
}

const Projects : NextPage = () => {
  const [activeIndexProject, setActiveIndexProject] = useState(0)
  const ITEM_REF = useRef<HTMLDivElement>(null)
  const float = useFloatAnimation()
  const color = useColorBrand()
  const projects: ProjectsData[] = PROJECTS
  const calcDelayAnimation = projects.length * 0.65
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)', {
    ssr: true,
    fallback: false // return false on the server, and re-evaluate on the client side
  })

  const containerAnimationVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delayChildren: 1,
        staggerChildren: 0.5,
        staggerDirection: 1
      }
    }
  }

  const itemAnimationVariants = {
    hidden: { x: '-200%' },
    visible: { x: '0%' }
  }

  const [activeIndex] = useArrowKeys({
    arr: projects,
    ref: ITEM_REF,
    activeIndex: activeIndexProject,
    setActiveIndex: setActiveIndexProject
  })

  return (
    <AnimatePresence>
      <Stack height='100%' justifyContent='center' paddingTop={100} spacing={10}>
        <Text
          animate='visible'
          animation={float}
          as={motion.div}
          bottom={0}
          color={color}
          display={isLargerThan900 ? 'inline-block' : 'none'}
          initial='hidden'
          paddingLeft={{ base: 6, md: 12 }}
          textStyle='quotes'
          variants={{
            visible: { opacity: 1, transition: { duration: 1, delay: calcDelayAnimation } },
            hidden: { opacity: 0 }
          }}
        >
          use the <ArrowUpIcon /> <ArrowDownIcon /> arrow keys to change project
        </Text>
        <Stack ref={ITEM_REF} overflow='hidden' width='100%'>
          <AnimationContainer animationVariants={containerAnimationVariants}>
            {projects?.map((project, index) => (
              <ProjectItem
                key={project.page}
                activeIndex={activeIndex}
                animationVariant={itemAnimationVariants}
                index={index}
                name={project.name}
                page={project.page}
                repo={project.repo}
              />
            ))}
          </AnimationContainer>
        </Stack>
      </Stack>
    </AnimatePresence>
  )
}

export default Projects
