import type { Theme } from '@mui/material'

const Avatar = (theme: Theme) => ({
  MuiAvatar: {
    styleOverrides: {
      colorDefault: {
        color: theme.palette.text.secondary,
        backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[700]
      },
      rounded: {
        borderRadius: 5
      }
    }
  },
  MuiAvatarGroup: {
    styleOverrides: {
      root: {
        justifyContent: 'flex-end',
        '.MuiCard-root & .MuiAvatar-root': {
          borderColor: theme.palette.background.paper
        }
      }
    }
  }
})

export default Avatar
