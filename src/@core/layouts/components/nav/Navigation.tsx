'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'

import { styled, useTheme, List, Box, hexToRgb } from '@mui/material'
import PerfectScrollBar from 'react-perfect-scrollbar'
import NavigationDrawer from './NavigationDrawer'
import NavHeader from './NavHeader'
import NavItems from './NavItems'
import navigation from '@/@core/navigation'
import themeConfig from '@/configs/themeConfig'

// import NavItems from
// import NavHeader from

const ShadowBox = styled(Box)({
  top: 50,
  left: -8,
  zIndex: 2,
  display: 'none',
  position: 'absolute',
  pointerEvents: 'none',
  width: 'calc(100% + 15px)',
  '& .d-block': {
    display: 'block'
  }
})

export type NavigationProps = {
  hidden: boolean
  beforeNavMenuContent: React.ReactNode
  afterNavMenuContent: React.ReactNode
  isNavVisible: boolean
  setNavVisible: React.Dispatch<React.SetStateAction<boolean>>
  toggleNavVisibility: () => void
}

const Navigation = ({
  hidden,
  beforeNavMenuContent,
  afterNavMenuContent,
  isNavVisible,
  setNavVisible,
  toggleNavVisibility
}: NavigationProps) => {
  const theme = useTheme()
  const pathName = usePathname()

  const shadowRef = React.useRef(null)

  // const handleInfiniteScroll = (ref: HTMLElement) => {
  //   if (ref) {
  //     // const _getBoundingClientRect = ref.getBoundingClientRect
  //     ref.getBoundingClientRect = () => {
  //       const original = ref.getBoundingClientRect()
  //       return { ...original, height: Math.floor(original.height) }
  //     }
  //   }
  // }

  const scrollMenu = (container) => {
    container = hidden ? container.target : container
    if (shadowRef.current) {
      if (container.scrollTop > 0) {
        if (!shadowRef.current.classList.contains('d-block')) {
          shadowRef.current.classList.add('d-block')
        }
      } else {
        shadowRef.current.classList.remove('d-block')
      }
    }
  }

  const ScrollWrapper = hidden ? Box : PerfectScrollBar

  return (
    <NavigationDrawer
      hidden={hidden}
      navWidth={themeConfig.navigationSize}
      isNavVisible={isNavVisible}
      setNavVisible={setNavVisible}>
      <NavHeader />
      <ShadowBox
        ref={shadowRef}
        sx={{
          background: `linear-gradient(${theme.palette.background.default} 40%, ${hexToRgb(
            theme.palette.background.default
          ).replace(')', ', 0.1)')} 95%, ${hexToRgb(theme.palette.background.default).replace(')', ', 0.05)')}`
        }}
      />
      <Box sx={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
        <ScrollWrapper
          // containerRef={(ref) => handleInfiniteScroll(ref)}
          {...(hidden
            ? {
                onScroll: (container) => scrollMenu(container),
                sx: { height: '100%', overflowY: 'auto', overflowX: 'hidden' }
              }
            : {
                options: { wheelPropagation: false },
                onScrollY: (container) => scrollMenu(container)
              })}>
          {beforeNavMenuContent}
          <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <List
              className='nav-items'
              sx={{ transition: 'padding .25s ease', paddingRight: 4.5 }}>
              <NavItems
                items={navigation(pathName)}
                isNavVisible={isNavVisible}
                toggleNavVisibility={toggleNavVisibility}
              />
            </List>
          </Box>
          {afterNavMenuContent}
        </ScrollWrapper>
      </Box>
    </NavigationDrawer>
  )
}

export default Navigation
