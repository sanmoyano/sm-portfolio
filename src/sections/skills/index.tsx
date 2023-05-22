'use client'
import React, { useRef, useState } from 'react'
import { Stack, Text, useMediaQuery } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons'

import ParallaxContainer from '@/components/parallax'
import Title from '@/components/titles'
import useDimensions from '@/hooks/useDimensions'
import AnimationContainer from '@/components/animationContainer'
import { verticalText } from '@/theme/styles/verticalText'
import useFloatAnimation from '@/hooks/useFloatAnimation'
import SKILLS from '@/data/skills.json'
import useColorBrand from '@/hooks/useColorBrand'
import useArrowKeys from '@/hooks/useArrowKeys'
import TabSkills from '@/components/tabSkill'

import ItemSkill from './item'

interface SkillProps {
  type:string,
  list:string[]
}

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(0)
  const HEIGHT_TEXT_REF = useRef<HTMLParagraphElement>(null)
  const { height } = useDimensions(HEIGHT_TEXT_REF)
  const ITEM_REF = useRef<HTMLDivElement>(null)
  const float = useFloatAnimation()
  const color = useColorBrand()
  const skills: SkillProps[] = SKILLS
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)', {
    ssr: true,
    fallback: false
  })

  const [activeIndex] = useArrowKeys({
    arr: SKILLS,
    activeIndex: activeSkill,
    ref: ITEM_REF,
    setActiveIndex: setActiveSkill
  })

  // Animation settings
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

  return (
    <ParallaxContainer speed={15}>
      <AnimatePresence>
        <Stack ref={ITEM_REF} alignItems='center' direction={{ base: 'column', lg: 'row' }} height='100vh' overflow='hidden'>
          <Title content='skills' refItem={HEIGHT_TEXT_REF} textStyle='h1' titlingScale={1.2} vertical={verticalText} />
          <AnimationContainer animationVariants={containerAnimationVariants} height={height}>
            {isLargerThan900
              ? (
                  skills?.map((skill, index) => (
                    <ItemSkill key={skill.type} activeIndex={activeIndex} animationVariant={itemAnimationVariants} height={height} index={index} skillType={skill.type} skills={skill.list} />
                  )))
              : (
                <TabSkills arr={skills} color={color} />
                )}
            <Text
              animation={float}
              bottom={0}
              color={color}
              display={isLargerThan900 ? 'inline-block' : 'none'}
              position='absolute'
              textStyle='quotes'
            >
              use the <ArrowUpIcon /> <ArrowDownIcon /> arrow keys to change skills
            </Text>
          </AnimationContainer>
        </Stack>
      </AnimatePresence>
    </ParallaxContainer>
  )
}

export default Skills
