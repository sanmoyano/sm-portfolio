'use client'
import { useState, useEffect, RefObject } from 'react'

interface Dimensions {
  height: number;
  width: number;
}

const useDimensions = (ref: RefObject<HTMLElement>): Dimensions => {
  const [dimensions, setDimensions] = useState<Dimensions>({ height: 0, width: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      if (ref.current) {
        setDimensions({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight
        })
      }
    }

    updateDimensions()

    window.addEventListener('resize', updateDimensions)

    return () => window.removeEventListener('resize', updateDimensions)
  }, [ref])

  return dimensions
}

export default useDimensions
