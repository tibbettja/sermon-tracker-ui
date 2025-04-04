'use client'

import { styled, useTheme, SwipeableDrawer } from '@mui/material'
import { Dispatch, ReactNode, SetStateAction } from 'react'

const DrawerWrapper = styled(SwipeableDrawer)({
  overflowX: 'hidden',
  transition: 'width .25s ease-in-out',
  '& ul': {
    listStyle: 'none'
  },
  '& .MuiListItem-gutters': {
    paddingX: 4
  },
  '& .MuiDrawer-paper': {
    left: 'unset',
    right: 'unset',
    overflowX: 'hidden',
    transition: 'width .25s ease-in-out, box-shadow .25s ease-in-out'
  }
})

export type NavigationDrawerProps = {
  children: ReactNode
  hidden: boolean
  navWidth: number
  isNavVisible: boolean
  setNavVisible: Dispatch<SetStateAction<boolean>>
}

const NavigationDrawer = ({ hidden, children, navWidth, isNavVisible, setNavVisible }: NavigationDrawerProps) => {
  const theme = useTheme()

  const MobileDrawerProps = {
    open: isNavVisible,
    onOpen: () => setNavVisible(true),
    onClose: () => setNavVisible(false),
    ModalProps: {
      keepMounted: true
    }
  }

  const DesktopDrawerProps = {
    open: true,
    onOpen: () => null,
    onClose: () => null
  }

  return (
    <DrawerWrapper
      className='base-layout-nav'
      variant={hidden ? 'temporary' : 'permanent'}
      {...(hidden ? MobileDrawerProps : DesktopDrawerProps)}
      PaperProps={{ sx: { width: navWidth, height: !hidden && isNavVisible ? 64 : undefined } }}
      sx={{
        width: navWidth,
        '& .MuiDrawer-paper': {
          borderRight: 0,
          backgroundColor: theme.palette.background.default
        },
        position: 'fixed'
      }}>
      {children}
    </DrawerWrapper>
  )
}

export default NavigationDrawer
