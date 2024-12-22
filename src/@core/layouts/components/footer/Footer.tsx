'use client'

import { Box, useTheme } from '@mui/material'

const Footer = () => {
  const theme = useTheme()

  return (
    <Box
      component='footer'
      className='layout-footer'
      sx={{
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.background.default
      }}>
      <Box
        className='footer-content-container'
        sx={{
          width: '100%',
          borderTopLeftRadius: 14,
          borderTopRightRadius: 14,
          padding: theme.spacing(4, 6),
          maxWidth: 1440
        }}>
        By Joey @ 2025
      </Box>
    </Box>
  )
}

export default Footer
