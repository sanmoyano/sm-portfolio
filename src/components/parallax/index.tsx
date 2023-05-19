import React from 'react'
import { Parallax } from 'react-scroll-parallax'

interface ParallaxProps {
  children:React.ReactElement
  speed: number
}
const ParallaxContainer = ({ children, speed }: ParallaxProps) => {
  return (
    <Parallax speed={speed}>{children}</Parallax>
  )
}

export default ParallaxContainer
