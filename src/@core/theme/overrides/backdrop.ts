import type { Theme } from '@mui/material'
import { hexToRgb } from '@mui/material'

const Backdrop = (theme: Theme) => ({
  MuiBackdrop: {
    styleOverrides: {
      root: {
        backgroundColor: hexToRgb(theme.palette.background.default).replace(')', ', 0.1)')
      },
      invisible: {
        backgroundColor: 'transparent'
      }
    }
  }
})

export default Backdrop
