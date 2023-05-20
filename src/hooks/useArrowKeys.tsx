import React, { useEffect } from 'react'
import { useInView } from 'framer-motion'

interface Props {
  arr: any[]
  ref:React.RefObject<HTMLDivElement>
  activeIndex:number
  setActiveIndex:React.Dispatch<React.SetStateAction<number>>
}

const useArrowKeys = ({ arr, ref, activeIndex, setActiveIndex }: Props) => {
  const isInView = useInView(ref)

  const handlerKeyPress = (e: KeyboardEvent) => {
    if (e.code === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((prevIndex) => prevIndex === 0 ? arr.length - 1 : prevIndex - 1)
    } else if (e.code === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((prevIndex) => prevIndex === arr.length - 1 ? 0 : prevIndex + 1)
    }
  }

  useEffect(() => {
    isInView && document.addEventListener('keydown', handlerKeyPress)

    return () => {
      isInView && document.removeEventListener('keydown', handlerKeyPress)
    }
  })

  return [activeIndex]
}

export default useArrowKeys
