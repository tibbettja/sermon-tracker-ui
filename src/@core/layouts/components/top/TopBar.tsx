'use client'

import * as React from 'react'

import { styled, AppBar, Toolbar } from '@mui/material'
import type { ThemeSettings } from '@/app/layout'
import themeConfig from '@/configs/themeConfig'
import TopBarContent from './TopBarContent'

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  transition: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 6),
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  minHeight: theme.mixins.toolbar.minHeight,
  position: 'fixed',
  [theme.breakpoints.down('sm')]: {
    paddingX: theme.spacing(4)
  }
}))

const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  width: '100%',
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  padding: `0px !important`,
  minHeight: `${theme.mixins.toolbar.minHeight}px !important`,
  transition:
    'padding .25s ease-in-out, box-shadow .25s ease-in-out, backdrop-filter .25s ease-in-out, background-color .25s ease-in-out'
}))

export type TopBarProps = {
  hidden: boolean
  toggleNavVisibility: () => void
  themeSettings: ThemeSettings
  saveThemeSettings: React.Dispatch<React.SetStateAction<ThemeSettings>>
}

const TopBar = ({ hidden, toggleNavVisibility, saveThemeSettings, themeSettings }: TopBarProps) => {
  return (
    <StyledAppBar
      elevation={0}
      color='default'
      className='layout-navbar'
      position='static'
      style={
        !hidden
          ? { marginLeft: themeConfig.navigationSize, width: `calc(100vw - ${themeConfig.navigationSize}px)` }
          : undefined
      }>
      <StyledToolBar className='navbar-content-container'>
        <TopBarContent
          hidden={hidden}
          themeSettings={themeSettings}
          saveThemeSettings={saveThemeSettings}
          toggleNavVisibility={toggleNavVisibility}
        />
      </StyledToolBar>
    </StyledAppBar>
  )
}

export default TopBar
