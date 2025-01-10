import type { Theme } from '@mui/material'

const Dialog = (theme: Theme) => ({
  MuiDialog: {
    styleOverrides: {
      paper: {
        boxShadow: theme.shadows[6],
        '& :not(.MuiDialog-paperFullScreen)': {
          '@media (max-width: 599px)': {
            margin: theme.spacing(4),
            width: `calc(100% - ${theme.spacing(8)})`,
            maxWidth: `calc(100% - ${theme.spacing(8)}) !important`
          }
        },
        '& > .MuiList-root': {
          paddingLeft: theme.spacing(1),
          paddingRight: theme.spacing(1)
        }
      }
    }
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        padding: theme.spacing(5)
      }
    }
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        padding: theme.spacing(5),
        '& + .MuiDialogContent-root': {
          paddingTop: 0
        },
        '& + .MuiDialogActions-root': {
          paddingTop: 0
        }
      }
    }
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        padding: {
          padding: theme.spacing(5),
          '& .dialog-actions-dense': {
            padding: theme.spacing(2.5),
            paddingTop: 0
          }
        }
      }
    }
  }
})

export default Dialog
