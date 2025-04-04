'use client'

import * as React from 'react'

import NextLink from 'next/link'
import { Box, Link, Typography } from '@mui/material'
import { styled } from '@mui/system'

import FooterIllustrations from '@/@core/layouts/components/footer/FooterIllustrations'

const BoxWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '90vw'
  }
}))

const Img = styled('img')(({ theme }) => ({
  marginBottom: theme.spacing(10),
  [theme.breakpoints.down('lg')]: {
    height: 450,
    marginTop: theme.spacing(10)
  },
  [theme.breakpoints.down('md')]: {
    height: 400
  },
  [theme.breakpoints.down('md')]: {
    marginTop: theme.spacing(13)
  }
}))

const TreeIllustration = styled('img')(({ theme }) => ({
  left: 0,
  bottom: '5rem',
  position: 'absolute',
  [theme.breakpoints.down('lg')]: {
    bottom: 0
  }
}))

const NotFound = () => {
  React.useEffect(() => {
    //track error to external system here
  }, [])

  return (
    <Box sx={{ display: 'flex', alignItems: 'end', justifyContent: 'center', height: '80vh' }}>
      <Box
        sx={{
          padding: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'space-between'
        }}>
        <BoxWrapper>
          <Typography variant='h1'>404</Typography>
          <Typography
            variant='h5'
            sx={{ marginBottom: 1, fontSize: '1.5rem !important' }}>
            We couldn&prime;t find the page you are looking for.
          </Typography>
        </BoxWrapper>
        <Img
          height='487'
          alt='error-illustration'
          src='/images/404.png'
        />
        <NextLink
          href='/'
          passHref
          legacyBehavior>
          <Link>Return Home</Link>
        </NextLink>
      </Box>
    </Box>
  )
}

export default NotFound
