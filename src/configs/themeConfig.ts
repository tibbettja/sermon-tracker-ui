export type ThemeConfig = {
  appName: string
  mode: 'light' | 'dark'
  contentWidth: 'full' | 'boxed'
  routingLoader: boolean
  menuTextTruncate: boolean
  navigationSize: number
  disableRipple: boolean
  verticalNavToggleType: 'collapse' | undefined
}

const themeConfig: ThemeConfig = {
  appName: 'Tibbett JA',
  mode: 'dark',
  contentWidth: 'full',
  routingLoader: true,
  menuTextTruncate: true,
  navigationSize: 250,
  disableRipple: false,
  verticalNavToggleType: 'collapse'
}

export default themeConfig
