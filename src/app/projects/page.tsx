'use client'
import React, { useState, useRef } from 'react'
import { NextPage } from 'next'
import { Text, Stack } from '@chakra-ui/react'
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons'
import { AnimatePresence } from 'framer-motion'

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
  const projects: ProjectsData[] = PROJECTS as ProjectsData[]

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
      <Stack height='100%' justifyContent='center' paddingInline={{ base: 6, lg: 12 }} paddingTop={100} spacing={10}>
        <Text
          animation={float}
          bottom={0}
          color={color}
          textStyle='quotes'
        >
          use the <ArrowUpIcon /> <ArrowDownIcon /> arrow keys to change project
        </Text>
        <Stack ref={ITEM_REF} overflow='hidden' width='100%'>
          <AnimationContainer animationVariants={containerAnimationVariants}>
            {projects?.map((project, index) => (
              <ProjectItem key={project.page} activeIndex={activeIndex} animationVariant={itemAnimationVariants} index={index} name={project.name} page={project.page} repo={project.repo} />
            ))}
          </AnimationContainer>
        </Stack>
      </Stack>
    </AnimatePresence>
  )
}

export default Projects
