import React from 'react'
import { Stack } from '@chakra-ui/react'

import Bar from '../bar'

const Desktop: React.FC = () => {
  return (
    <Stack alignItems='center' direction='row' display={{ base: 'none', lg: 'flex' }} gap={10}>
      <Bar />
    </Stack>
  )
}

export default Desktop
