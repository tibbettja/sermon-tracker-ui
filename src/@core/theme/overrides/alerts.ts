import { lighten, darken } from '@mui/material'
import type { Theme } from '@mui/material'

const Alerts = (theme: Theme) => {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: `${theme.spacing(0)} ${theme.spacing(2)}`,
          fontWeight: 500,
          borderRadius: 5,
          '& .MuiAlertTitle-root': {
            marginBottom: theme.spacing(1.6)
          },
          '& a': {
            color: 'inherit',
            fontWeight: 500
          }
        },
        standardSuccess: {
          color: theme.palette.success.dark,
          backgroundColor: lighten(theme.palette.success.light, 0.12),
          '& .MuiAlertTitle-root': {
            color: theme.palette.success.dark
          },
          '& .MuiAlert-icon': {
            color: theme.palette.success.dark
          }
        },
        standardInfo: {
          color: theme.palette.info.light,
          backgroundColor: darken(theme.palette.info.dark, 0.12),
          '& .MuiAlertTitle-root': {
            color: theme.palette.info.light
          },
          '& .MuiAlert-icon': {
            color: theme.palette.info.light
          }
        },
        standardWarning: {
          color: theme.palette.warning.dark,
          backgroundColor: lighten(theme.palette.warning.light, 0.12),
          '& .MuiAlertTitle-root': {
            color: theme.palette.warning.dark
          },
          '& .MuiAlert-icon': {
            color: theme.palette.warning.dark
          }
        },
        standardError: {
          color: theme.palette.error.dark,
          backgroundColor: lighten(theme.palette.error.light, 0.12),
          '& .MuiAlertTitle-root': {
            color: theme.palette.error.dark
          },
          '& .MuiAlert-icon': {
            color: theme.palette.error.dark
          }
        },
        outlinedSuccess: {
          color: theme.palette.success.dark,
          borderColor: lighten(theme.palette.success.light, 0.12),
          '& .MuiAlertTitle-root': {
            color: theme.palette.success.dark
          },
          '& .MuiAlert-icon': {
            color: theme.palette.success.dark
          }
        },
        outlinedInfo: {
          color: theme.palette.info.light,
          borderColor: darken(theme.palette.info.dark, 0.12),
          '& .MuiAlertTitle-root': {
            color: theme.palette.info.light
          },
          '& .MuiAlert-icon': {
            color: theme.palette.info.light
          }
        },
        outlinedWarning: {
          color: theme.palette.warning.dark,
          borderColor: lighten(theme.palette.warning.light, 0.12),
          '& .MuiAlertTitle-root': {
            color: theme.palette.warning.dark
          },
          '& .MuiAlert-icon': {
            color: theme.palette.warning.dark
          }
        },
        outlinedError: {
          color: theme.palette.error.dark,
          borderColor: lighten(theme.palette.error.light, 0.12),
          '& .MuiAlertTitle-root': {
            color: theme.palette.error.dark
          },
          '& .MuiAlert-icon': {
            color: theme.palette.error.dark
          }
        }
      }
    }
  }
}

export default Alerts
