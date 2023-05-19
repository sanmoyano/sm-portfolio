import React, { useRef, useState, useEffect } from 'react'
import { Stack, Text } from '@chakra-ui/react'
import { AnimatePresence, useInView } from 'framer-motion'
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons'

import ParallaxContainer from '@/components/parallax'
import Title from '@/components/titles'
import useDimensions from '@/hooks/useDimensions'
import AnimationContainer from '@/components/animationContainer'
import { verticalText } from '@/theme/styles/verticalText'
import useFloatAnimation from '@/hooks/useFloatAnimation'
import SKILLS from '@/data/skills.json'
import useColorBrand from '@/hooks/useColorBrand'

import ItemSkill from './item'

const Skills: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<number>(0)
  const HEIGHT_TEXT_REF = useRef<HTMLDivElement>(null)
  const { height } = useDimensions(HEIGHT_TEXT_REF)
  const ITEM_REF = useRef<null>(null)
  const isInView = useInView(ITEM_REF)
  const float = useFloatAnimation()
  const color = useColorBrand()

  const handlerKeyPress = (e: KeyboardEvent) => {
    if (e.code === 'ArrowUp') {
      e.preventDefault()
      setActiveSkill((prevSkill) => prevSkill === 0 ? SKILLS.length - 1 : prevSkill - 1)
    } else if (e.code === 'ArrowDown') {
      e.preventDefault()
      setActiveSkill((prevSkill) => prevSkill === SKILLS.length - 1 ? 0 : prevSkill + 1)
    }
  }

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

  useEffect(() => {
    isInView && document.addEventListener('keydown', handlerKeyPress)

    return () => {
      isInView && document.removeEventListener('keydown', handlerKeyPress)
    }
  }, [isInView])

  return (
    <ParallaxContainer speed={15}>
      <AnimatePresence>
        <Stack ref={ITEM_REF} alignItems='center' direction={{ base: 'column', md: 'row' }} height='100vh' overflow='hidden'>
          <Title content='skills' refItem={HEIGHT_TEXT_REF} textStyle='h1' titlingScale={1.2} vertical={verticalText} />
          <AnimationContainer animationVariants={containerAnimationVariants} height={height}>
            {SKILLS?.map((skill, index) => (
              <ItemSkill key={skill.type} activeIndex={activeSkill} animationVariant={itemAnimationVariants} height={height} index={index} skillType={skill.type} skills={skill.list} />
            ))}
            <Text
              animation={float}
              bottom={0}
              color={color}
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
