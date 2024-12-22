'use client'

import * as React from 'react'

import { Box, useMediaQuery, IconButton } from '@mui/material'
import { Menu } from '@mui/icons-material'
import { ThemeSettings } from '@/app/layout'
import ModeToggler from './links/ModeToggler'

export type TopBarContentProps = {
  hidden: boolean
  themeSettings: ThemeSettings
  saveThemeSettings: React.Dispatch<React.SetStateAction<ThemeSettings>>
  toggleNavVisibility: () => void
}

const TopBarContent = ({ hidden, themeSettings, saveThemeSettings, toggleNavVisibility }: TopBarContentProps) => {
  const hiddenSm = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  const hiddenMd = useMediaQuery((theme) => theme.breakpoints.down('md'))

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: hidden ? 'space-between' : 'end'
      }}>
      {hidden ? (
        <Box
          className='actions-left'
          sx={{ marginRight: 2, display: 'flex', alignItems: 'center' }}>
          <IconButton
            color='inherit'
            sx={{ marginLeft: -2.75, ...(hiddenSm ? {} : { marginRight: 3.5 }) }}
            onClick={toggleNavVisibility}>
            <Menu />
          </IconButton>
        </Box>
      ) : null}
      <Box
        className='actions-right'
        sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        {!hiddenSm && <>links here</>}
        <ModeToggler
          themeSettings={themeSettings}
          saveThemeSettings={saveThemeSettings}
        />
      </Box>
    </Box>
  )
}

export default TopBarContent
