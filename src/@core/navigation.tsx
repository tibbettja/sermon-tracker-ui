import type { NavItem } from './layouts/components/nav/NavItems'

import { AutoStories, Biotech, Home } from '@mui/icons-material'

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
    },
    {
      title: 'Style Examples',
      path: '/example',
      icon: <Biotech />,
      parent: false
    },
    {
      title: 'Bible Reading Plan',
      path: '/brp',
      icon: <AutoStories />,
      parent: false
    }
  ]
  return staticOptions
}

export default navigation
