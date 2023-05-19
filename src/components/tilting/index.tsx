import React from 'react'
import Tilt from 'react-parallax-tilt'

interface TiltingProps {
  enable? : boolean,
  scale? : number
  children?: React.ReactElement
}

const Tilting = ({ enable, scale, children }: TiltingProps) => {
  return (
    <Tilt scale={scale} tiltEnable={enable} transitionSpeed={2500}>
      {children}
    </Tilt>
  )
}

export default Tilting
