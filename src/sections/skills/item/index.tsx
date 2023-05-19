import React from 'react'
import { Variants, AnimatePresence, motion } from 'framer-motion'
import { Stack, Text } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

import useColorBrand from '@/hooks/useColorBrand'

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
      <motion.div initial='hidden' variants={{ visible: { opacity: 1, transition: { duration: 3, delay: 2.5 } }, hidden: { opacity: 0 } }} viewport={{ once: true }} whileInView='visible'>
        {active && (
          <DynamicTextCloud activeIndex={activeIndex} height={height} skills={skills} />
        )}
      </motion.div>
    </AnimatePresence>
  )
}

export default ItemSkill
