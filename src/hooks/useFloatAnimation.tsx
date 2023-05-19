import { keyframes, usePrefersReducedMotion } from '@chakra-ui/react'

const useFloatAnimation = () => {
  const float = keyframes`
    0% { transform: translate(0, 0px); }
    50% { transform: translate(0, 15px); }
    100% { transform: translate(0, -0px); }
  `

  const prefersReducedMotion = usePrefersReducedMotion()
  const animation: undefined | string = prefersReducedMotion ? undefined : `${float} 3s ease-in-out infinite`

  return animation
}

export default useFloatAnimation
