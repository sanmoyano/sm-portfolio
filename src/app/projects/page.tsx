'use client'
import React from 'react'
import { NextPage } from 'next'
import { VStack, Text } from '@chakra-ui/react'

import PROJECTS from '../../data/projects.json'

interface ProjectsData {
  name:string
  page:string
  repo:string
}

const Projects : NextPage = () => {
  const projects: ProjectsData[] = PROJECTS as ProjectsData[]

  return (
    <VStack alignItems='center' height={window.screen.height} justifyContent='center'>
      {projects?.map((project) => (
        <Text key={project.page} fontFamily='apotek-extrawide' fontSize='9rem' lineHeight={0.7} textTransform='uppercase'>{project.name}</Text>
      ))}
    </VStack>
  )
}

export default Projects
