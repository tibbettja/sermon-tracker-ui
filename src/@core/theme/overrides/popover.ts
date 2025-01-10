import type { Theme } from '@mui/material'

const Popover = (theme: Theme) => ({
  MuiPopover: {
    styleOverrides: {
      root: {
        '& .MuiPopover-paper': {
          boxShadow: theme.shadows[6]
        }
      }
    }
  }
})

export default Popover
