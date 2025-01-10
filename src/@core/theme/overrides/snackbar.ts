import type { Theme } from '@mui/material'

const Snackbar = (theme: Theme) => ({
  MuiSnackbarContent: {
    styleOverrides: {
      root: {
        backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[900] : theme.palette.grey[100]
      }
    }
  }
})

export default Snackbar
