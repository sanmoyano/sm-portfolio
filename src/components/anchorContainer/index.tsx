import React from 'react'
import { Box, Link } from '@chakra-ui/react'

interface LinkProp {
  route:string
  textStyle: 'footer'|'paragraph'|'quotes'
  underlineColor:string
  content:string
}

const AnchorContainer = ({ route, textStyle, underlineColor, content }: LinkProp) => {
  const anchorStyle = {
    _after: {
      content: '""',
      display: 'block',
      background: 'none repeat scroll 0 0 transparent',
      bottom: 0,
      height: 0.5,
      left: '50%',
      position: 'absolute',
      backgroundColor: underlineColor,
      transition: 'width 0.3s ease 0s, left 0.3s ease 0s',
      width: 0
    },
    _hover: {
      _after: { width: '100%', left: 0 }
    },
    position: 'relative',
    fontWeight: 700,
    target: '_blank',
    display: 'inline-block'
  } as React.CSSProperties

  return (
    <Box display='inline-block'>
      <Link href={route} sx={anchorStyle} target='_blank' textStyle={textStyle}>{content}</Link>
    </Box>
  )
}

export default AnchorContainer
