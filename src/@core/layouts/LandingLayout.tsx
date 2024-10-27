'use client'

import React from 'react'
import TopNavBar from './components/TopNavBar'

type LandingLayoutProps = {
  children: React.ReactNode
  themeSettings: { defaultMode: 'light' | 'dark' }
  setThemeSettings: React.Dispatch<React.SetStateAction<{ defaultMode: 'light' | 'dark' }>>
}

const LandingLayout = ({ children, themeSettings, setThemeSettings }: LandingLayoutProps) => {
  return (
    <>
      <TopNavBar />
      {children}
      <div className='dark'>
        <TopNavBar />
      </div>
    </>
  )
}

export default LandingLayout
