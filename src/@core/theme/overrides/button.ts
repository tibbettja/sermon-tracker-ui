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
        fontWeight: 500,
        variants: [
          {
            props: { color: 'primary' },
            style: {
              boxShadow: `inset 0 0 0.5em 0 ${theme.palette.primary.dark}, 0 0 0.5em 0 ${theme.palette.primary.main}`,
              borderColor: theme.palette.primary.light,
              // textShadow: `0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em ${theme.palette.primary.dark}`,
              color: theme.palette.primary.light
            }
          },
          {
            props: { color: 'secondary' },
            style: {
              boxShadow: `inset 0 0 0.5em 0 ${theme.palette.secondary.dark}, 0 0 0.5em 0 ${theme.palette.secondary.main}`,
              borderColor: theme.palette.secondary.light,
              // textShadow: `0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em ${theme.palette.secondary.dark}`,
              color: theme.palette.secondary.light
            }
          },
          {
            props: { color: 'info' },
            style: {
              boxShadow: `inset 0 0 0.5em 0 ${theme.palette.info.dark}, 0 0 0.5em 0 ${theme.palette.info.main}`,
              borderColor: theme.palette.info.light,
              // textShadow: `0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em ${theme.palette.info.dark}`,
              color: theme.palette.info.light
            }
          },
          {
            props: { color: 'success' },
            style: {
              boxShadow: `inset 0 0 0.5em 0 ${theme.palette.success.dark}, 0 0 0.5em 0 ${theme.palette.success.main}`,
              borderColor: theme.palette.success.light,
              // textShadow: `0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em ${theme.palette.success.dark}`,
              color: theme.palette.success.light
            }
          },
          {
            props: { color: 'attention' },
            style: {
              boxShadow: `inset 0 0 0.5em 0 ${theme.palette.attention.dark}, 0 0 0.5em 0 ${theme.palette.attention.main}`,
              borderColor: theme.palette.attention.light,
              // textShadow: `0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em ${theme.palette.attention.dark}`,
              color: theme.palette.attention.light
            }
          },
          {
            props: { color: 'warning' },
            style: {
              boxShadow: `inset 0 0 0.5em 0 ${theme.palette.warning.dark}, 0 0 0.5em 0 ${theme.palette.warning.main}`,
              borderColor: theme.palette.warning.light,
              // textShadow: `0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em ${theme.palette.warning.dark}`,
              color: theme.palette.warning.light
            }
          },
          {
            props: { color: 'error' },
            style: {
              boxShadow: `inset 0 0 0.5em 0 ${theme.palette.error.dark}, 0 0 0.5em 0 ${theme.palette.error.main}`,
              borderColor: theme.palette.error.light,
              // textShadow: `0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em ${theme.palette.error.dark}`,
              color: theme.palette.error.light
            }
          }
        ]
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
