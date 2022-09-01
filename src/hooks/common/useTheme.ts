import { ITheme } from '@/interface'

// 处理主题样式
export const handleThemeStyle = (theme: ITheme): void => {
  const _style = document.documentElement.style
  _style.setProperty('--el-color-primary', theme.primaryColor)

  for (let i = 1; i <= 9; i++) {
    _style.setProperty(
      `--el-color-primary-light-${i}`,
      `${_getLightColor(theme.primaryColor, i / 10)}`
    )
  }
  for (let i = 1; i <= 9; i++) {
    _style.setProperty(
      `--el-color-primary-dark-${i}`,
      `${_getDarkColor(theme.primaryColor, i / 10)}`
    )
  }
}

// 变浅颜色值
const _getLightColor = (color: string, level: number): string => {
  let rgb = _hexToRgb(color)
  for (let i = 0; i < 3; i++) {
    rgb[i] = Math.floor((255 - rgb[i]) * level + rgb[i])
  }
  return _rgbToHex(rgb[0], rgb[1], rgb[2])
}

// 变深颜色值
const _getDarkColor = (color: string, level: number): string => {
  let rgb = _hexToRgb(color)
  for (let i = 0; i < 3; i++) {
    rgb[i] = Math.floor(rgb[i] * (1 - level))
  }
  return _rgbToHex(rgb[0], rgb[1], rgb[2])
}

// hex颜色转rgb颜色
const _hexToRgb = (str: any): any => {
  str = str.replace('#', '')
  let hex: any = str.match(/../g)
  for (let i = 0; i < 3; i++) {
    hex[i] = parseInt(hex[i], 16)
  }
  return hex
}

// rgb颜色转hex颜色
const _rgbToHex = (r: any, g: any, b: any): string => {
  let hex: any[] = [r.toString(16), g.toString(16), b.toString(16)]
  for (let i = 0; i < 3; i++) {
    if (hex[i].length === 1) {
      hex[i] = `0${hex[i]}`
    }
  }
  return `#${hex.join('')}`
}
