'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'

import UnAuthLayout from './UnAuthLayout'
import LandingLayout from './LandingLayout'

type RootLayoutProps = {
  children: React.ReactNode
  session: Session | null
  defaultMode: 'light' | 'dark'
}

export type RuntimeContextType = {}

export const RuntimeContext = React.createContext<RuntimeContextType>({})

const RootLayout = ({ children, session, defaultMode }: RootLayoutProps) => {
  const pathname = usePathname()
  const [themeSettings, setThemeSettings] = React.useState({ defaultMode })
  const [runtimeVariables, setRuntimeVariables] = React.useState<RuntimeContextType>({})

  return (
    <RuntimeContext.Provider value={{ ...runtimeVariables, setRuntimeVariables }}>
      <SessionProvider
        session={session}
        refetchOnWindowFocus={false}
        refetchInterval={3600}>
        {pathname.startsWith('/auth') && (
          <UnAuthLayout
            themeSettings={themeSettings}
            setThemeSettings={setThemeSettings}>
            {children}
          </UnAuthLayout>
        )}
        {pathname === '/' && (
          <LandingLayout
            themeSettings={themeSettings}
            setThemeSettings={setThemeSettings}>
            {children}
          </LandingLayout>
        )}
      </SessionProvider>
    </RuntimeContext.Provider>
  )
}

export default RootLayout
