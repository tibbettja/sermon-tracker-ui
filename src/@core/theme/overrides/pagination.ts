import type { Theme } from '@mui/material'
import { hexToRgb } from '@mui/material'

const Pagination = (theme: Theme) => ({
  MuiPaginationItem: {
    styleOverrides: {
      root: {
        '& .Mui-selected:not(.Mui-disabled):not(.MuiPaginationItem-textPrimary):not(.MuiPaginationItem-textSecondary):hover':
          {
            backgroundColor: `rgba(${theme.palette.customColors.main}, 0.12)`
          },
        outlined: {
          borderColor: `rgba(${theme.palette.customColors.main}, 0.22)`
        },
        outlinedPrimary: {
          '& .Mui-selected': {
            backgroundColor: hexToRgb(theme.palette.primary.main).replace(')', ', 0.12)'),
            '& :hover': {
              backgroundColor: hexToRgb(theme.palette.primary.main).replace(')', ', 0.2) !important')
            }
          }
        },
        outlinedSecondary: {
          '& .Mui-selected': {
            backgroundColor: hexToRgb(theme.palette.secondary.main).replace(')', ', 0.12)'),
            '& :hover': {
              backgroundColor: hexToRgb(theme.palette.secondary.main).replace(')', ', 0.2) !important')
            }
          }
        }
      }
    }
  }
})

export default Pagination
