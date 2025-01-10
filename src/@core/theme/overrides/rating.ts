import type { Theme } from '@mui/material'

const Rating = (theme: Theme) => ({
  MuiRating: {
    styleOverrides: {
      root: {
        color: theme.palette.attention.main
      }
    }
  }
})

export default Rating
