import React from 'react'
import { Variants, AnimatePresence, motion } from 'framer-motion'
import { Stack, Text, useColorModeValue, useTheme } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

const DynamicTextCloud = dynamic(() => import('../../../components/textCloud'))

interface SkillProps {
  activeIndex: number,
  animationVariant: Variants
  height: number
  index: number
  skillType:string
  skills:string[]
}

const ItemSkill: React.FC<SkillProps> = ({ ...props }) => {
  const { activeIndex, animationVariant, height, index, skillType, skills } = props
  const active: boolean = activeIndex === index
  const { colors } = useTheme()
  const color: string = useColorModeValue(colors.brand[100], colors.brand[200])

  return (
    <AnimatePresence>
      <Stack
        key={index}
        alignItems='center'
        as={motion.div}
        direction='row'
        justifyContent='space-between'
        marginTop='0px !important'
        variants={animationVariant}
        width='100%'
      >
        <Text
          color={active ? `${color}` : 'transparent'}
          display='inline-block'
          height='100%'
          sx={{ WebkitTextStroke: active ? 'none' : `1px ${color}` }}
          textAlign='center'
          textStyle='h2'
          transitionDelay='0s, 0s'
          transitionDuration='.5s, .5s'
          transitionProperty='color, opacity'
          transitionTimingFunction='ease, ease'
        >
          {skillType}
        </Text>
      </Stack>
      {active && (
        <DynamicTextCloud activeIndex={activeIndex} height={height} skills={skills} />
      )}
    </AnimatePresence>
  )
}

export default ItemSkill
