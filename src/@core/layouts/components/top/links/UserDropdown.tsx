'use client'

import * as React from 'react'

import { signOut, useSession } from 'next-auth/react'

import { useTheme, Avatar, Alert, Badge, Box, Divider, Menu, MenuItem, styled, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import { LogoutSharp } from '@mui/icons-material'

const BadgeContentHealthy = styled('span')(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.success.main,
  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
}))

const BadgeContentWarning = styled('span')(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.warning.main,
  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
}))

const BadgeContentDanger = styled('span')(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.error.main,
  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
}))

const InnerMenuItem = styled(Box)(({ theme }) => ({
  paddingY: 2,
  paddingX: 4,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.text.primary,
  textDecoration: 'none',
  '& svg': {
    fontSize: '1.375rem',
    color: theme.palette.text.primary
  }
}))

export type UserDropdownProps = { adminError?: boolean }

const UserDropdown = ({ adminError }: UserDropdownProps) => {
  const router = useRouter()
  const theme = useTheme()

  const { data: session } = useSession()

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleSignout = async () => {
    const data = await signOut({ redirect: false, callbackUrl: '/auth/signin' })
    router.push(data.url)
  }

  const handleDropdownOpen = (event) => setAnchorEl(event.currentTarget)

  const handleDropdownClose = (url?: string, name?: string, blank: boolean = false) => {
    if (url) {
      if (blank) {
        window.open(`/${url}`, '_blank')
      } else {
        router.push(`/${url}`)
      }
    }
    setAnchorEl(null)
  }

  return (
    <>
      <Badge
        overlap='circular'
        onClick={handleDropdownOpen}
        sx={{ marginLeft: 2, cursor: 'pointer' }}
        badgeContent={<BadgeContentHealthy />}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <Avatar
          alt={session?.user?.name || 'User Name'}
          onClick={handleDropdownOpen}
          sx={{ width: 40, height: 40 }}
          src={session?.user?.image || undefined}
        />
      </Badge>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleDropdownClose()}
        sx={{ '& .MuiMenu-paper': { width: 230, marginTop: 4 } }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Box sx={{ paddingTop: 2, paddingBottom: 3, paddingX: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Badge
              overlap='circular'
              badgeContent={<BadgeContentHealthy />}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
              <Avatar
                alt={session?.user?.name || 'User Name'}
                src={session?.user?.image || undefined}
                sx={{ width: '2.5rem', height: '2.5rem' }}
              />
            </Badge>
            <Box sx={{ display: 'flex', marginLeft: 3, alignItems: 'flex-start', flexDirection: 'column' }}>
              <Typography sx={{ fontWeight: 600 }}>{session?.user?.name}</Typography>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ marginTop: 0, marginBottom: 1 }} />
        <MenuItem
          sx={{ paddingY: 2 }}
          onClick={() => handleSignout()}>
          <LogoutSharp sx={{ marginRight: 2, fontSize: '1.375rem', color: theme.palette.text.secondary }} />
          Logout
        </MenuItem>
      </Menu>
    </>
  )
}

export default UserDropdown
