import { keyframes } from '@chakra-ui/react'

export const floatAnimation = () => {
  const floating = keyframes`
  0% { transform: translate(0,  0px); }
  50%  { transform: translate(0, 15px); }
  100%   { transform: translate(0, -0px); } 
`

  return `${floating} 3s ease-in-out infinite`
}
