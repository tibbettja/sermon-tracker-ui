import type { Theme } from '@mui/material'

const Paper = (theme: Theme) => ({
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: 'none'
      }
    }
  }
})

export default Paper
