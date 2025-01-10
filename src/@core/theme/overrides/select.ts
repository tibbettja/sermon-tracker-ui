import type { Theme } from '@mui/material'

const Select = (theme: Theme) => ({
  MuiSelect: {
    styleOverrides: {
      select: {
        minWidth: '6rem !important',
        '& .MuiTablePagination-select': {
          minWidth: '1rem !important'
        }
      }
    }
  }
})

export default Select
