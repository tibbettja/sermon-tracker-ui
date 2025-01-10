import themeConfig from '@/configs/themeConfig'

import type { Theme } from '@mui/material'

const Button = (theme: Theme) => ({
  MuiButton: {
    styleOverrides: {
      root: {
        fontWeight: 400,
        borderRadius: 5,
        lineHeight: 1.71,
        letterSpacing: '1px',
        padding: `${theme.spacing(1.875, 3)}`
      },
      contained: {
        boxShadow: theme.shadows[3],
        padding: `${theme.spacing(1.875, 5.5)}`
      },
      outlined: {
        padding: `${theme.spacing(1.625, 5.25)}`,
        fontWeight: 500
      },
      sizeSmall: {
        padding: `${theme.spacing(1, 2.25)}`,
        '& .MuiButton-contained': {
          padding: `${theme.spacing(1, 3.5)}`
        },
        '& .MuiButton-outlined': {
          padding: `${theme.spacing(0.75, 3.25)}`
        }
      },
      sizeLarge: {
        padding: `${theme.spacing(2.125, 5.5)}`,
        '& .MuiButton-contained': {
          padding: `${theme.spacing(2.125, 6.5)}`
        },
        '& .MuiButton-outlined': {
          padding: `${theme.spacing(1.875, 6.25)}`
        }
      }
    }
  },
  MuiButtonBase: {
    defaultProps: {
      disableRipple: themeConfig.disableRipple,
      variant: 'contained'
    }
  }
})

export default Button
