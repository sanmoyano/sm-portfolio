export const calcFontSize = (actualSize: string) => {
  const newSize:number = parseInt(actualSize) / 1.618

  return `${newSize}rem`
}
