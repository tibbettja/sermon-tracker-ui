import type { NavItem } from './layouts/components/nav/NavItems'

import { Home } from '@mui/icons-material'

const navigation = (path: string) => {
  const staticOptions: NavItem[] = [
    {
      sectionTitle: 'Navigation'
    },
    {
      title: 'Home',
      path: '/',
      icon: <Home />,
      parent: false
    }
  ]
  return staticOptions
}

export default navigation
