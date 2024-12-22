'use client'

import type { ReactNode } from 'react'

import { CssBaseline, GlobalStyles, ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material'

import Overrides from './overrides'
import Typography from './typography'
import GlobalStyling from './globalStyles'
import themeConfigBuilder from './themeConfigBuilder'

export type ThemeComponentProps = {
  children: ReactNode
  settings: { mode: 'light' | 'dark'; themeColor: string; contentWidth: number }
}

const ThemeComponent = ({ children, settings }: ThemeComponentProps) => {
  const builtThemeConfig = themeConfigBuilder(settings)
  const baseTheme = createTheme(builtThemeConfig)
  const theme = responsiveFontSizes(
    createTheme(baseTheme, {
      components: { ...Overrides(baseTheme) },
      typography: { ...Typography(baseTheme) }
    })
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={() => GlobalStyling(theme)} />
      {children}
    </ThemeProvider>
  )
}

export default ThemeComponent
