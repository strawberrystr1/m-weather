export default (color: string, alpha = '1') => {
  const colorArray = color.slice(1).split('')
  let rgbColor = ''
  for (let i = 0; i < colorArray.length; i += 2) {
    rgbColor += `${Number.parseInt(`${colorArray[i]}${colorArray[i + 1]}`, 16)}, `
  }
  return `rgba(${rgbColor}${alpha})`
}
