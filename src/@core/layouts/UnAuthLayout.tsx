'use client'

import React from 'react'

type UnAuthLayoutProps = {
  children: React.ReactNode
  themeSettings: { defaultMode: 'light' | 'dark' }
  setThemeSettings: React.Dispatch<React.SetStateAction<{ defaultMode: 'light' | 'dark' }>>
}

const UnAuthLayout = ({ children, themeSettings, setThemeSettings }: UnAuthLayoutProps) => {
  return <>un authed {children}</>
}

export default UnAuthLayout
