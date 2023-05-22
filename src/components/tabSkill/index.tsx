'use client'
import React, { useState } from 'react'
import { Tabs, TabList, TabIndicator, TabPanels, TabPanel, Tab, Text, useMediaQuery } from '@chakra-ui/react'

import TextCloud from '../textCloud'

interface TabProps {
  arr: any[]
  color: string
}
const TabSkills = ({ arr, color }: TabProps) => {
  const [tabIndex, setTabIndex] = useState(0)
  const [isLargerThan760] = useMediaQuery('(min-width: 760px)', {
    ssr: true,
    fallback: false
  })

  return (
    <Tabs isFitted align='center' defaultIndex={0} variant='unstyled' onChange={(index) => setTabIndex(index)}>
      <TabList>
        {arr.map((skill) => (
          <Tab key={skill.type} _selected={{ color }}><Text textStyle='h2'>{skill.type}</Text></Tab>
        ))}
      </TabList>
      <TabIndicator
        alignItems='center'
        bg={color}
        borderRadius='1px'
        height='2px'
        mt='-1.5px'
      />
      <TabPanels>
        {arr.map((skill, index) => (
          <TabPanel key={skill.type}>
            <TextCloud key={index} activeIndex={tabIndex} clouldSize={isLargerThan760 ? 450 : 300} height={400} skills={skill.list} />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  )
}

export default TabSkills
