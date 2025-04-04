'use client'

import themeConfig from '@/configs/themeConfig'
import { Box, useTheme, useMediaQuery } from '@mui/material'

const Footer = () => {
  const theme = useTheme()
  const isMedium = useMediaQuery((theme) => theme.breakpoints.down('lg'), { defaultMatches: true })

  return (
    <Box
      component='footer'
      className='layout-footer'
      sx={{
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
        backgroundColor: theme.palette.background.default,
        position: 'fixed',
        bottom: 0,
        left: isMedium ? 0 : themeConfig.navigationSize,
        width: '100%',
        paddingLeft: theme.spacing(6)
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
