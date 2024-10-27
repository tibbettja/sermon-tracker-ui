import React from 'react'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { getCookie, hasCookie } from 'cookies-next'
import { getServerSession } from 'next-auth'
import { Platypi, Fraunces } from 'next/font/google'

import { authOptions } from './api/auth/[...nextauth]/route'
import appConfig from '@/@core/configs/appConfig'

import '@/styles/globals.css'

import RootLayout from '@/@core/layouts/RootLayout'

const themeCookie = 'sermon-tracker-ui_theme-mode'

const fraunces = Fraunces({
  weight: 'variable',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap'
})

export const metadata: Metadata = {
  title: appConfig.appName,
  description: appConfig.appName
}

export const viewport = {
  'initial-scale': 1,
  width: 'device-width'
}

const App = async ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  const session = await getServerSession(
    authOptions(process.env.DISCORD_CLIENT_ID || '', process.env.DISCORD_CLIENT_SECRET || '')
  )

  const defaultMode =
    hasCookie(themeCookie, { cookies }) ?
      Buffer.from(getCookie(themeCookie, { cookies }) || '', 'base64').toString()
    : 'light'

  return (
    <html lang='en'>
      <body className={`${fraunces.variable} antialiased`}>
        <RootLayout
          session={session}
          defaultMode={defaultMode === 'dark' ? 'dark' : 'light'}>
          {children}
        </RootLayout>
      </body>
    </html>
  )
}

export default App

