import type { Theme } from '@mui/material'
import { hexToRgb } from '@mui/material'

const Timeline = (theme: Theme) => ({
  MuiTimelineItem: {
    styleOverrides: {
      root: {
        '& :not(:last-of-type)': {
          '& .MuiTimelineContent-root': {
            marginBottom: theme.spacing(4)
          }
        }
      }
    }
  },
  MuiTimelineConnector: {
    styleOverrides: {
      root: {
        backgroundColor: theme.palette.divider
      }
    }
  },
  MuiTimelineContent: {
    styleOverrides: {
      root: {
        marginTop: theme.spacing(0.5)
      }
    }
  },
  MuiTimelineDot: {
    styleOverrides: {
      filledPrimary: {
        boxShadow: `0 0 0 3px ${hexToRgb(theme.palette.primary.main).replace(')', ', 0.12)')}`
      },
      filledSecondary: {
        boxShadow: `0 0 0 3px ${hexToRgb(theme.palette.secondary.main).replace(')', ', 0.12)')}`
      },
      filledSuccess: {
        boxShadow: `0 0 0 3px ${hexToRgb(theme.palette.success.main).replace(')', ', 0.12)')}`
      },
      filledError: {
        boxShadow: `0 0 0 3px ${hexToRgb(theme.palette.error.main).replace(')', ', 0.12)')}`
      },
      filledWarning: {
        boxShadow: `0 0 0 3px ${hexToRgb(theme.palette.warning.main).replace(')', ', 0.12)')}`
      },
      filledInfo: {
        boxShadow: `0 0 0 3px ${hexToRgb(theme.palette.info.main).replace(')', ', 0.12)')}`
      },
      filledGrey: {
        boxShadow: `0 0 0 3px ${hexToRgb(theme.palette.grey[400]).replace(')', ', 0.12)')}`
      },
      outlinedPrimary: {
        '& svg': { color: theme.palette.primary.main }
      },
      outlinedSecondary: {
        '& svg': { color: theme.palette.secondary.main }
      },
      outlinedSuccess: {
        '& svg': { color: theme.palette.success.main }
      },
      outlinedError: {
        '& svg': { color: theme.palette.error.main }
      },
      outlinedWarning: {
        '& svg': { color: theme.palette.warning.main }
      },
      outlinedInfo: {
        '& svg': { color: theme.palette.info.main }
      },
      outlinedGrey: {
        '& svg': { color: theme.palette.grey[400] }
      }
    }
  }
})

export default Timeline
