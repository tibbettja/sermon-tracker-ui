'use client'

import * as React from 'react'

import { useMediaQuery, styled, Box } from '@mui/material'
import Navigation from './components/nav/Navigation'
import type { Session } from 'next-auth'
import type { ThemeSettings } from '@/app/layout'
import Footer from './components/footer/Footer'
import TopBar from './components/top/TopBar'
import themeConfig from '@/configs/themeConfig'

const BaseLayoutWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  backgroundColor: theme.palette.background.default,
  paddingBottom: theme.spacing(14)
}))

const MainContentWrapper = styled(Box)({
  flexGrow: 1,
  minWidth: 0,
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column'
})

const ContentWrapper = styled('main')(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(6),
  transition: 'padding .25s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    paddingX: theme.spacing(4)
  },
  [theme.breakpoints.up('lg')]: {
    marginLeft: themeConfig.navigationSize,
    width: `calc(100vw - ${themeConfig.navigationSize}px)`
  },
  marginTop: theme.spacing(12)
}))

export type BaseLayoutProps = {
  children: React.ReactNode
  themeSettings: ThemeSettings
  saveThemeSettings: React.Dispatch<React.SetStateAction<ThemeSettings>>
  session: Session
}

const BaseLayout = ({ children, themeSettings, saveThemeSettings, session }: BaseLayoutProps) => {
  const hidden = useMediaQuery((theme) => theme.breakpoints.down('lg'), { defaultMatches: true })

  const [isNavVisible, setNavVisible] = React.useState(false)
  const toggleNavVisibility = () => setNavVisible((isVisible) => !isVisible)

  return (
    <>
      <BaseLayoutWrapper className='layout-wrapper'>
        <Navigation
          hidden={hidden}
          isNavVisible={isNavVisible}
          setNavVisible={setNavVisible}
          beforeNavMenuContent={null}
          afterNavMenuContent={null}
          toggleNavVisibility={toggleNavVisibility}
        />
        <MainContentWrapper className='layout-content-wrapper'>
          <TopBar
            hidden={hidden}
            saveThemeSettings={saveThemeSettings}
            themeSettings={themeSettings}
            toggleNavVisibility={toggleNavVisibility}
          />
          <ContentWrapper className='layout-page-content'>{children}</ContentWrapper>
          <Footer />
        </MainContentWrapper>
      </BaseLayoutWrapper>
    </>
  )
}

export default BaseLayout
