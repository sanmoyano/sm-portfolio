'use client'
import React, { useState, useRef } from 'react'
import { Box, Stack, useMediaQuery, Text } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
// import Link from 'next/link'
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons'

// import ParallaxContainer from '@/components/parallax'
import AnimationContainer from '@/components/animationContainer'
import useFloatAnimation from '@/hooks/useFloatAnimation'
import useColorBrand from '@/hooks/useColorBrand'
import useArrowKeys from '@/hooks/useArrowKeys'
import ProjectItem from '@/components/projectItem'
import Title from '@/components/titles'

import PROJECTS from '../../data/projects.json'
export interface ProjectsData {
  name:string
  page:string
  repo:string
}

const Projects = () => {
  const animation = useFloatAnimation()
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
      {/* <ParallaxContainer speed={-5}> */}
      <Box
        // height={{ base: '300px', lg: '100vh' }}
        id='id'
        sx={{ display: 'grid', placeContent: 'center' }}
        width='100%'
      >
        {/* <Link href='/projects'> */}
        <Title
          content='projects'
          float={animation}
          textStyle='title'
          titlingScale={1.2}
        />
        {/* </Link> */}
      </Box>
      <Stack height='100%' id='projects' justifyContent='center' paddingTop={100} spacing={10}>
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
      {/* </ParallaxContainer> */}
    </AnimatePresence>
  )
}

export default Projects
