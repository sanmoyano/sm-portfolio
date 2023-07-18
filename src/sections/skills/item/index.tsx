import React from 'react'
import { Variants, AnimatePresence, motion } from 'framer-motion'
import { Stack, Text } from '@chakra-ui/react'
// import dynamic from 'next/dynamic'

import useColorBrand from '@/hooks/useColorBrand'
import OutlineText from '@/components/outlineText'

// const DynamicTextCloud = dynamic(() => import('../../../components/textCloud'))

interface SkillProps {
  activeIndex: number,
  animationVariant: Variants
  height: number
  index: number
  skillType:string
  skills:string[]
}

const ItemSkill = ({ ...props }: SkillProps) => {
  const { activeIndex, animationVariant, index, skillType, skills } = props
  const active = activeIndex === index
  const color = useColorBrand()

  const isVisible = activeIndex >= 0 && activeIndex <= 2

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
        <motion.div initial='hidden' variants={{ visible: { opacity: 1, transition: { duration: 3, delay: 2.5 } }, hidden: { opacity: 0 } }} viewport={{ once: true }} whileInView='visible'>
          {active && (
            <Stack
              animate={isVisible ? 'visible' : 'hidden'}
              as={motion.div}
              exit='hidden'
              initial='hidden'
              variants={{
                visible: {
                  opacity: 1,
                  transition: { duration: 1, delay: 0.2 }
                },
                hidden: {
                  opacity: 0,
                  transition: { duration: 0.2 }
                }
              }}
              zIndex={99}
            >
              <Text textStyle='quotes'>
                {skills}
              </Text>
            </Stack>

          )}
        </motion.div>
      </Stack>
    </AnimatePresence>
  )
}

export default ItemSkill
