import type { Theme } from '@mui/material'

const List = (theme: Theme) => ({
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: 0,
        marginRight: theme.spacing(2.25),
        color: theme.palette.text.secondary
      }
    }
  },
  MuiListItemAvatar: {
    styleOverrides: {
      root: {
        minWidth: 0,
        marginRight: theme.spacing(4)
      }
    }
  },
  MuiListItemText: {
    styleOverrides: {
      dense: {
        '& .MuiListItemText-primary': {
          color: theme.palette.text.primary
        }
      }
    }
  },
  MuiListSubheader: {
    styleOverrides: {
      root: {
        fontWeight: 600,
        textTransform: 'uppercase',
        color: theme.palette.text.primary
      }
    }
  }
})

export default List
