import { useColorModeValue, useTheme } from '@chakra-ui/react'

const useColorBrand = () => {
  const { colors } = useTheme()
  const color: 'brand.100'|'brand.200' = useColorModeValue(colors.brand[100], colors.brand[200])

  return color
}

export default useColorBrand
