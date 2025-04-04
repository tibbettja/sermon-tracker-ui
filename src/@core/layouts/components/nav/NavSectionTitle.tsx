'use client'

import { Divider, styled, useTheme, Typography, ListSubheader } from '@mui/material'
import type { NavItem } from './NavItems'

const Subheader = styled(ListSubheader)(({ theme }) => ({
  lineHeight: 1,
  display: 'flex',
  position: 'relative',
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(1),
  backgroundColor: 'transparent',
  transition: 'padding-left .25s ease-in-out'
}))

const HeaderText = styled(Typography)(({ theme }) => ({
  fontSize: '0.75rem',
  lineHeight: 'normal',
  letterSpacing: '0.21px',
  textTransform: 'uppercase',
  color: theme.palette.text.disabled,
  fontWeight: theme.typography.fontWeightMedium
}))

export type NavSectionTitleProps = {
  item: NavItem
}

const NavSectionTitle = ({ item }: NavSectionTitleProps) => {
  const theme = useTheme()

  return (
    <Subheader
      className='nav-section-title'
      sx={{
        paddingX: 0,
        paddingY: 1.75,
        color: theme.palette.text.disabled,
        '& .MuiDivider-root:before, & .MuiDivider-root:after, & hr': {
          borderColor: theme.palette.text.disabled
        }
      }}>
      <Divider
        textAlign='left'
        sx={{
          margin: 0,
          width: '100%',
          lineHeight: 'normal',
          textTransform: 'uppercase',
          '& :before, & :after': { top: 7, transform: 'none' },
          '& .MuiDivider-wrapper': { paddingX: 2.5, fontSize: '0.75rem', letterSpacing: '0.21px' }
        }}>
        <HeaderText noWrap>{item.sectionTitle}</HeaderText>
      </Divider>
    </Subheader>
  )
}

export default NavSectionTitle
