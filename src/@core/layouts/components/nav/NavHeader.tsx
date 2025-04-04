'use client'

import NextLink from 'next/link'
import Image from 'next/image'

import { styled, useTheme, Typography, Box } from '@mui/material'

import themeConfig from '@/configs/themeConfig'

const MenuHeaderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: theme.spacing(4.5),
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight,
  zIndex: 3000
}))

const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  lineHeight: 'normal',
  color: theme.palette.text.primary,
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out'
}))

const StyledLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
})

const NavHeader = () => {
  const theme = useTheme()

  return (
    <MenuHeaderWrapper
      className='nav-header'
      sx={{ paddingLeft: 6 }}>
      <NextLink
        legacyBehavior
        href='/'
        passHref
        style={{ textDecoration: 'none' }}>
        <StyledLink>
          <Image
            src={`/logo_${theme.palette.mode}.png`}
            alt='Logo'
            height={45}
            width={45}
          />
          <HeaderTitle
            variant='h6'
            sx={{ marginLeft: 3 }}>
            {themeConfig.appName}
          </HeaderTitle>
        </StyledLink>
      </NextLink>
    </MenuHeaderWrapper>
  )
}

export default NavHeader
