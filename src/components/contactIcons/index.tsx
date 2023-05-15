import { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Stack, Link } from '@chakra-ui/react'

import Tilting from '../tilting'

interface IconProps {
  icons: {icon: IconDefinition; url:string}[]
}

const ContactIcons: React.FC<IconProps> = ({ icons }) => {
  return (
    <Stack alignItems='center' direction='row' justifyContent='space-between' width='200px'>
      {icons?.map((icon, i) => (
        <Link key={i} href={icon.url} target='_blank'>
          <Tilting scale={1.2}>
            <FontAwesomeIcon fontSize='2.5rem' icon={icon.icon} />
          </Tilting>
        </Link>
      ))}
    </Stack>
  )
}

export default ContactIcons
