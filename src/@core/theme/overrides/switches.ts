import type { Theme } from '@mui/material'

const Switch = (theme: Theme) => ({
  MuiSwitch: {
    styleOverrides: {
      root: {
        '& .MuiSwitch-track': {
          backgroundColor: `rgb(${theme.palette.customColors.main})`
        }
      }
    }
  }
})

export default Switch
