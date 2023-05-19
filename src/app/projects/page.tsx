'use client'
import React, { useState, useRef, useEffect } from 'react'
import { NextPage } from 'next'
import { Text, Stack } from '@chakra-ui/react'
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons'
import { useInView } from 'framer-motion'

import useFloatAnimation from '@/hooks/useFloatAnimation'
import useColorBrand from '@/hooks/useColorBrand'
import ProjectItem from '@/components/projectItem'

import PROJECTS from '../../data/projects.json'

export interface ProjectsData {
  name:string
  page:string
  repo:string
}

const Projects : NextPage = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const ITEM_REF = useRef<HTMLDivElement>(null)
  const isInView = useInView(ITEM_REF)
  const projects: ProjectsData[] = PROJECTS as ProjectsData[]
  const float = useFloatAnimation()
  const color = useColorBrand()

  const handlerKeyPress = (e: KeyboardEvent) => {
    if (e.code === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((prevIndex) => prevIndex === 0 ? projects.length - 1 : prevIndex - 1)
    } else if (e.code === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((prevIndex) => prevIndex === projects.length - 1 ? 0 : prevIndex + 1)
    }
  }

  useEffect(() => {
    isInView && document.addEventListener('keydown', handlerKeyPress)

    return () => {
      isInView && document.removeEventListener('keydown', handlerKeyPress)
    }
  }, [isInView])

  return (
    <Stack height='100%' justifyContent='center' paddingInline={{ base: 6, lg: 12 }} paddingTop={90} spacing={10}>
      <Text
        animation={float}
        bottom={0}
        color={color}
        textStyle='quotes'
      >
        use the <ArrowUpIcon /> <ArrowDownIcon /> arrow keys to change project
      </Text>
      <Stack ref={ITEM_REF} bgColor='blue'>
        {projects?.map((project, index) => (
          <ProjectItem key={project.page} activeIndex={activeIndex} index={index} name={project.name} page={project.page} repo={project.repo} />
        ))}
      </Stack>
    </Stack>
  )
}

export default Projects
