import type { Theme } from '@mui/material'

const Divider = (theme: Theme) => ({
  MuiDivider: {
    styleOverrides: {
      root: {
        margin: `${theme.spacing(2)} 0`
      }
    }
  }
})

export default Divider
