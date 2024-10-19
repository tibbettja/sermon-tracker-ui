import React from 'react'
// import { usePathname } from 'next/navigation'

type RootLayoutProps = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element)
}

const RootLayout = ({ children }: RootLayoutProps) => {
  // const pathname = usePathname()

  return <>{children}</>
}

export default RootLayout
