'use client'

import * as React from 'react'
import type { ReactNode } from 'react'

import { SessionProvider, signIn, useSession } from 'next-auth/react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { usePathname, useSearchParams } from 'next/navigation'

import Loading from './loading'
import ThemeComponent from '@/@core/theme/ThemeComponent'
import BaseLayout from '@/@core/layouts/BaseLayout'
import type { ThemeSettings } from './layout'
import type { Session } from 'next-auth'

export const RuntimeVariablesContext = React.createContext({
  baseURL: 'baseURL',
  proxyURL: 'proxyURL',
  setRuntimeVariables: (_) => {}
})

export type ClientAppProps = {
  children: ReactNode
  baseURL: string
  proxyURL: string
  initialThemeSettings: ThemeSettings
  authEnabled: boolean
  session: Session | null
}

const ClientApp = ({ children, baseURL, proxyURL, initialThemeSettings, authEnabled, session }: ClientAppProps) => {
  const [runtimeVariables, setRuntimeVariables] = React.useState({
    baseURL,
    proxyURL
  })

  const [themeSettings, setThemeSettings] = React.useState(initialThemeSettings)

  return (
    <RuntimeVariablesContext.Provider value={{ ...runtimeVariables, setRuntimeVariables }}>
      <SessionProvider
        session={session}
        basePath='/api/auth'
        refetchOnWindowFocus={false}
        refetchInterval={3600}>
        <AppRouterCacheProvider options={{ key: 'css' }}>
          <Auth authEnabled={authEnabled}>
            <ThemeComponent settings={themeSettings}>
              <BaseLayout
                themeSettings={themeSettings}
                saveThemeSettings={setThemeSettings}
                session={session}>
                {children}
              </BaseLayout>
            </ThemeComponent>
          </Auth>
        </AppRouterCacheProvider>
      </SessionProvider>
    </RuntimeVariablesContext.Provider>
  )
}

type AuthProps = {
  children: ReactNode
  authEnabled: boolean
}

const Auth = ({ children, authEnabled }: AuthProps) => {
  const pathName = usePathname()
  const searchParams = useSearchParams().toString()

  const { status } = useSession({
    required: !pathName.includes('auth/signin') && !pathName.includes('auth/error'),
    onUnauthenticated: authEnabled
      ? () => signIn('discord', { callbackUrl: `${pathName}${searchParams ? '?' + searchParams : ''}` })
      : () =>
          signIn('local', {
            username: '',
            password: '',
            callbackUrl: `${pathName}${searchParams ? '?' + searchParams : ''}`
          })
  })

  if (status === 'loading') {
    return <Loading />
  } else {
    return children
  }
}

export default ClientApp
