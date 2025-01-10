import type { Theme } from '@mui/material'

const Link = (theme: Theme) => ({
  MuiLink: {
    styleOverrides: {
      root: {
        textDecoration: 'none !important',
        color: theme.palette.mode === 'light' ? theme.palette.info.main : theme.palette.attention.main
      }
    }
  }
})

export default Link
