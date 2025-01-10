import type { Theme } from '@mui/material'

const ToggleButton = (theme: Theme) => ({
  MuiToggleButtonGroup: {
    styleOverrides: {
      root: {
        borderRadius: 4
      }
    }
  },
  MuiToggleButton: {
    styleOverrides: {
      root: {
        borderRadius: 4
      }
    }
  }
})

export default ToggleButton
