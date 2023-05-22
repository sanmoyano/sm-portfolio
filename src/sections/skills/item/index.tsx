import React from 'react'
import { Variants, AnimatePresence, motion } from 'framer-motion'
import { Stack, Text } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

import useColorBrand from '@/hooks/useColorBrand'
import OutlineText from '@/components/outlineText'

const DynamicTextCloud = dynamic(() => import('../../../components/textCloud'))

interface SkillProps {
  activeIndex: number,
  animationVariant: Variants
  height: number
  index: number
  skillType:string
  skills:string[]
}

const ItemSkill = ({ ...props }: SkillProps) => {
  const { activeIndex, animationVariant, height, index, skillType, skills } = props
  const active = activeIndex === index
  const color = useColorBrand()

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
        <OutlineText active={active} color={color} content={skillType} />
      </Stack>
      <motion.div initial='hidden' variants={{ visible: { opacity: 1, transition: { duration: 3, delay: 2.5 } }, hidden: { opacity: 0 } }} viewport={{ once: true }} whileInView='visible'>
        {active && (
          <DynamicTextCloud activeIndex={activeIndex} height={height} skills={skills} />
        )}
      </motion.div>
    </AnimatePresence>
  )
}

export default ItemSkill
