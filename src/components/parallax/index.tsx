import React from 'react'
import { Parallax } from 'react-scroll-parallax'

interface ParallaxProps {
  children:React.ReactElement
  speed: number
}
const ParallaxContainer: React.FC<ParallaxProps> = ({ children, speed }) => {
  return (
    <Parallax speed={speed}>{children}</Parallax>
  )
}

export default ParallaxContainer
