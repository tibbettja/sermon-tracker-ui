import ClientApp from '@/app/client'
import type { Metadata, Viewport } from 'next'
import { ReactNode } from 'react'

import fonts from '@/@core/theme/fonts'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

export const metadata: Metadata = {
  title: 'Tibbett JA',
  description: 'Personal Project'
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#E9D8A6' },
    { media: '(prefers-color-scheme: dark)', color: '#001219' }
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
}

export type ServerAppProps = { children: ReactNode }
export type ThemeSettings = { themeColor: string; mode: 'light' | 'dark'; contentWidth: number }
const initialThemeSettings: ThemeSettings = {
  themeColor: 'primary',
  mode: 'light',
  contentWidth: 800
}

const ServerApp = async ({ children }: ServerAppProps) => {
  const session = await getServerSession(
    authOptions(
      process.env.DISCORD_CLIENT_ID || 'DISCORD_CLIENT_ID',
      process.env.DISCORD_CLIENT_SECRET || 'DISCORD_CLIENT_SECRET',
      process.env.DISCORD_ROLE_SERVER_ID || 'DISCORD_ROLE_SERVER_ID',
      process.env.AUTH_ENABLED === '1'
    )
  )
  return (
    <html lang='en'>
      <body className={fonts.spaceGrotesk.variable}>
        <ClientApp
          initialThemeSettings={initialThemeSettings}
          baseURL={process.env.BASE_URL || 'baseUrl'}
          proxyURL={process.env.PROXY_URL || 'proxyUrl'}
          authEnabled={process.env.AUTH_ENABLED === '1'}
          session={session}>
          {children}
        </ClientApp>
      </body>
    </html>
  )
}

export default ServerApp


