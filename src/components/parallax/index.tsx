import React from 'react'
import { Parallax } from 'react-scroll-parallax'

interface ParallaxProps {
  children:React.ReactElement<{id?:string}>
}
const ParallaxContainer: React.FC<ParallaxProps> = ({ children }) => {
  const childId:number = Number(children?.props?.id!)
  const speedCalc = (id: number) => (id % 2 === 0 ? id * -1.5 : id * 1.5)

  return (
    <Parallax speed={speedCalc(childId)}>{children}</Parallax>
  )
}

export default ParallaxContainer
