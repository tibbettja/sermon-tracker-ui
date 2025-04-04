import { deepmerge } from '@mui/utils'

import DefaultPalette from './palette'
import Spacing from './spacing'
import Breakpoints from './breakpoints'

export type ThemeConfigBuilderProps = { mode: 'light' | 'dark' }

const themeConfigBuilder = (settings: ThemeConfigBuilderProps) => {
  const themeConfig = {
    palette: DefaultPalette(settings.mode),
    typography: {
      fontFamily: 'var(--font-museo-moderno)'
    },
    ...Spacing,
    breakpoints: Breakpoints(),
    shape: {
      borderRadius: 6
    },
    mixins: {
      toolbar: {
        minHeight: 64
      }
    }
  }

  return deepmerge(themeConfig, {
    palette: {
      primary: {
        ...themeConfig.palette['primary']
      }
    }
  })
}

export default themeConfigBuilder
