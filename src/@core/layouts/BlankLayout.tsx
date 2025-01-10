import { ReactNode } from "react"
import { styled } from '@mui/system'
import { Box } from '@mui/material'

const BlankLayoutWrapper = styled(Box)(({ theme }) => ({
  height: '100%',
  '& .content-center': {
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(5)
  },
  '& .content-right': {
    display: 'flex',
    minHeight: '100%',
    overflowX: 'hidden',
    position: 'relative'
  }
}))

export type BlankLayoutProps = { children: ReactNode }

const BlankLayout = ({ children }: BlankLayoutProps) => (
  <BlankLayoutWrapper className='layout-wrapper'>
    <Box
      className='app-content'
      sx={{ minHeight: '100%', overflowX: 'hidden', position: 'relative' }}>
      {children}
    </Box>
  </BlankLayoutWrapper>
)

export default BlankLayout