import type { Theme } from '@mui/material'

const Chip = (theme: Theme) => ({
  MuiChip: {
    styleOverrides: {
      outlined: {
        '& .MuiChip-colorDefault': {
          borderColor: `rgba(${theme.palette.customColors.main}, 0.22)`
        }
      },
      deleteIcon: {
        width: 18,
        height: 18
      }
    }
  }
})

export default Chip
