'use client'

import { IconButton, Tooltip } from '@mui/material'

import { WbSunny, Bedtime } from '@mui/icons-material'
import type { ThemeSettings } from '@/app/layout'

export type ModeTogglerProps = {
  themeSettings: ThemeSettings
  saveThemeSettings: React.Dispatch<React.SetStateAction<ThemeSettings>>
}

const ModeToggler = ({ themeSettings, saveThemeSettings }: ModeTogglerProps) => {
  const handleModeChange = (mode: 'light' | 'dark') => {
    saveThemeSettings((oldThemeSettings) => ({ ...oldThemeSettings, mode }))
  }

  const handleModeToggle = () => {
    if (themeSettings.mode === 'light') {
      handleModeChange('dark')
    } else {
      handleModeChange('light')
    }
  }

  return (
    <Tooltip title='Change Theme'>
      <IconButton
        color='inherit'
        aria-haspopup='true'
        onClick={handleModeToggle}>
        {themeSettings.mode === 'dark' ? <Bedtime /> : <WbSunny />}
      </IconButton>
    </Tooltip>
  )
}

export default ModeToggler
