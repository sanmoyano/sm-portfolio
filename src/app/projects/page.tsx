'use client'
import React from 'react'
import { NextPage } from 'next'
import { Text, Stack } from '@chakra-ui/react'
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons'

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
  const projects: ProjectsData[] = PROJECTS as ProjectsData[]
  const float = useFloatAnimation()
  const color = useColorBrand()

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
      <Stack>
        {projects?.map((project) => (
          <ProjectItem key={project.page} name={project.name} page={project.page} repo={project.repo} />
        ))}
      </Stack>
    </Stack>
  )
}

export default Projects
