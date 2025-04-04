import type { Theme } from '@mui/material'

const Typography = (theme: Theme) => ({
  MuiTypography: {
    styleOverrides: {
      gutterBottom: {
        marginBottom: theme.spacing(2)
      }
    }
  }
})

export default Typography
