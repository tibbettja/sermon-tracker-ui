'use client'

import * as React from 'react'

import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

import { Chip, ListItem, styled, Typography, Box, ListItemIcon, ListItemButton } from '@mui/material'

import themeConfig from '@/configs/themeConfig'
import type { NavItem } from './NavItems'

const MenuNavLink = styled(ListItemButton)(({ theme }) => ({
  width: '100%',
  borderTopRightRadius: 100,
  borderBottomRightRadius: 100,
  color: theme.palette.text.primary,
  padding: theme.spacing(1, 3.5),
  transition: 'opacity .25s ease-in-out',
  '& .active, & .active:hover': {
    boxShadow: theme.shadows[3],
    backgroundImage: `linear-gradient(98deg, ${theme.palette.primary.light}, ${theme.palette.primary.main} 94%)`
  },
  '& .active .MuiTypography-root, & .active .MuiSvgIcon-root': {
    color: `${theme.palette.common.white} !important`
  },
  '& .ghost, & .ghost:hover': {
    boxShadows: theme.shadows[3],
    borderStyle: 'solid',
    borderWidth: '1px 1px 1px 0px',
    borderColor: theme.palette.secondary.main
  },
  '& .ghost .MuiTypography-root, & .ghost .MuiSvgIcon-root': {
    color: `${theme.palette.secondary.main} !important`
  }
}))

const MenuItemTextMetaWrapper = styled(Box)({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  transition: 'opacity .25s ease-in-out',
  ...(themeConfig.menuTextTruncate && { overflow: 'hidden' })
})

export type NavLinkProps = {
  item: NavItem
  isNavVisible: boolean
  toggleNavVisibility: () => void
}

const NavLink = ({ item, isNavVisible, toggleNavVisibility }: NavLinkProps) => {
  const pathName = usePathname()

  const isNavLinkActive = React.useMemo(() => {
    return item.path.toLocaleLowerCase().includes(pathName.toLocaleLowerCase()) && !item.parent
  }, [pathName, item.path, item.parent])

  const isNavLinkParent = React.useMemo(() => {
    return item.path.toLocaleLowerCase().includes(pathName.toLocaleLowerCase()) && item.parent
  }, [pathName, item.path, item.parent])

  return (
    <ListItem
      disablePadding
      className='nav-link'
      sx={{ marginTop: 1.5, paddingX: '0 !important' }}>
      <NextLink
        legacyBehavior
        passHref
        style={{ textDecoration: 'none', width: 'inherit' }}
        href={item.path}>
        <MenuNavLink
          className={isNavLinkActive ? 'active' : isNavLinkParent ? 'ghost' : ''}
          {...(item.openInNewTab ? { target: '_blank' } : null)}
          onClick={() => {
            if (isNavVisible) {
              toggleNavVisibility()
            }
          }}
          sx={{ paddingLeft: 5.5, ...(item.isDisabled ? { pointerEvents: 'none' } : { cursor: 'pointer' }) }}>
          <ListItemIcon sx={{ marginRight: 2.5, color: 'text.primary', transition: 'margin .25s ease-in-out' }}>
            {item.icon}
          </ListItemIcon>
          <MenuItemTextMetaWrapper>
            <Typography {...(themeConfig.menuTextTruncate && { noWrap: true })}>{item.title}</Typography>
            {item.badgeContent ? (
              <Chip
                label={item.badgeContent}
                color={item.badgeColor || 'primary'}
                sx={{
                  height: 20,
                  fontWeight: 500,
                  marginLeft: 1.25,
                  '& .MuiChip-label': {
                    paddingX: 1.5,
                    textTransform: 'capitalize'
                  }
                }}
              />
            ) : null}
          </MenuItemTextMetaWrapper>
        </MenuNavLink>
      </NextLink>
    </ListItem>
  )
}

export default NavLink
