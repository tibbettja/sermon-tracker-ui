import { styled } from '@mui/system'
import { Box } from '@mui/material'
import { ReactNode } from 'react'

const LoadingLayoutWrapper = styled(Box)(({ theme }) => ({
  height: '100%',
  overflow: 'hidden',
  '& .content-center': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: theme.spacing(5)
  },
  '& .content-end': {
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'end',
    minHeight: '105vh',
    padding: 0,
    overflowY: 'hidden'
  },
  '& .content-right': {
    display: 'flex',
    minHeight: '100&',
    position: 'relative',
    overflowX: 'hidden'
  }
}))

export type LoadingLayoutProps = { children: ReactNode }

const LoadingLayout = ({ children }: LoadingLayoutProps) => (
  <LoadingLayoutWrapper>
    <Box
      className='app-content'
      sx={{
        overflow: 'hidden',
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      {children}
    </Box>
  </LoadingLayoutWrapper>
)

export default LoadingLayout
