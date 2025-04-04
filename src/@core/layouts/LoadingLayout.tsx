import { styled } from '@mui/system'
import { Box } from '@mui/material'
import { ReactNode } from 'react'

const LoadingLayoutWrapper = styled(Box)(({ theme }) => ({
  height: '100%',
  overflow: 'hidden',
  '& .app-content': {
    overflow: 'hidden',
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    top: 0,
    left: 0
  },
  '& .content-center': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh'
  },
  '& .content-end': {
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'end',
    minHeight: '100vh',
    padding: 0,
    overflowY: 'hidden'
  },
  '& .content-right': {
    display: 'flex',
    minHeight: '100vh',
    position: 'relative',
    overflowX: 'hidden'
  }
}))

export type LoadingLayoutProps = { children: ReactNode }

const LoadingLayout = ({ children }: LoadingLayoutProps) => (
  <LoadingLayoutWrapper>
    <Box className='app-content'>{children}</Box>
  </LoadingLayoutWrapper>
)

export default LoadingLayout
