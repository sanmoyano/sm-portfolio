// import React, { useEffect } from 'react'
// import { useInView } from 'framer-motion'

// interface Props {
//   setActiveIndex: React.Dispatch<React.SetStateAction<number>>
//   activeIndex: number
//   array: []
//   ref:React.RefObject<HTMLDivElement>
// }

// const useArrowKeys = ({ array, activeIndex, setActiveIndex, ref }: Props) => {
//   const [isInView, targetRef] = useInView(ref)

//   const handlerKeyPress = (e: KeyboardEvent) => {
//     if (e.code === 'ArrowUp') {
//       e.preventDefault()
//       setActiveIndex((prevIndex) => prevIndex === 0 ? array.length - 1 : prevIndex - 1)
//     } else if (e.code === 'ArrowDown') {
//       e.preventDefault()
//       setActiveIndex((prevIndex) => prevIndex === array.length - 1 ? 0 : prevIndex + 1)
//     }
//   }

//   useEffect(() => {
//     isInView && document.addEventListener('keydown', handlerKeyPress)

//     return () => {
//       isInView && document.removeEventListener('keydown', handlerKeyPress)
//     }
//   }, [isInView, setActiveIndex])

//   return [isInView, targetRef]
// }

// export default useArrowKeys
