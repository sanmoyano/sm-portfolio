import React from 'react'
import { Text, Link, Stack } from '@chakra-ui/react'

import useColorBrand from '@/hooks/useColorBrand'
import { ProjectsData } from '@/app/projects/page'
interface ItemProps {
  name: ProjectsData['name']
  page: ProjectsData['page']
  repo: ProjectsData['repo']
}

const ProjectItem = ({ name, page, repo }: ItemProps) => {
  const color = useColorBrand()

  return (
    <Stack alignItems='center' direction='row' justifyContent='space-between' width='100%'>
      <Text fontFamily='apotek-extrawide' fontSize='9rem' lineHeight={0.7} textTransform='uppercase'>{name}</Text>
      <Stack direction='row' justifyContent='space-around'>
        <Text color={color} textStyle='quotes'>press enter to go to the project</Text>
        {/* <Link href={page}>page</Link> */}
        <Link href={repo}>repo</Link>
      </Stack>
    </Stack>
  )
}

export default ProjectItem
