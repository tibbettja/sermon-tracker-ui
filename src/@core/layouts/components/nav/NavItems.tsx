'use client'

import NavLink from './NavLink'
import NavSectionTitle from './NavSectionTitle'

export type NavItem = {
  title?: string
  path?: string
  icon?: React.ReactNode
  parent?: boolean
  isDisabled?: boolean
  openInNewTab?: boolean
  badgeContent?: string
  badgeColor?: 'primary' | 'secondary' | 'info' | 'warning' | 'error'
  sectionTitle?: string
}

const resolveNavItem = (item: NavItem) => {
  if (item.sectionTitle) {
    return NavSectionTitle
  } else {
    return NavLink
  }
}

export type NavItemsProps = {
  items: NavItem[]
  isNavVisible: boolean
  toggleNavVisibility: () => void
}

const NavItems = ({ items, isNavVisible, toggleNavVisibility }: NavItemsProps) => {
  const MenuItems = items.map((item, index) => {
    const Item = resolveNavItem(item)
    return (
      <Item
        isNavVisible={isNavVisible}
        toggleNavVisibility={toggleNavVisibility}
        item={item}
        key={index}
      />
    )
  })

  return <>{MenuItems}</>
}

export default NavItems
