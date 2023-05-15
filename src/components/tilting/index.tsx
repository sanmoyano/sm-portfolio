import React from 'react'
import Tilt from 'react-parallax-tilt'

interface TiltinProps {
  enable? : boolean,
  scale? : number
  children?: React.ReactNode
}

const Tilting: React.FC<TiltinProps> = ({ enable, scale, children }) => {
  return (
    <Tilt scale={scale} tiltEnable={enable} transitionSpeed={2500}>
      {children}
    </Tilt>
  )
}

export default Tilting
