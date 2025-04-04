import type { Theme } from '@mui/material'
import { hexToRgb } from '@mui/material'

const Tooltip = (theme: Theme) => ({
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor:
          theme.palette.mode === 'light'
            ? hexToRgb(theme.palette.grey[900]).replace(')', ' 0.9)')
            : hexToRgb(theme.palette.grey[700]).replace(')', ' 0.9)')
      },
      arrow: {
        color:
          theme.palette.mode === 'light'
            ? hexToRgb(theme.palette.grey[900]).replace(')', ' 0.9)')
            : hexToRgb(theme.palette.grey[700]).replace(')', ' 0.9)')
      }
    }
  }
})

export default Tooltip
