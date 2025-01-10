import type { Theme } from '@mui/material'

import Button from './button'
import Card from './card'
import Alerts from './alerts'
import Avatar from './avatars'
import Backdrop from './backdrop'
import Chip from './chip'
import DateTimePicker from './dateTimePicker'
import Dialog from './dialog'
import Divider from './divider'
import Input from './input'
import Link from './link'
import List from './list'
import Menu from './menu'
import Paper from './paper'
import Popover from './popover'
import Rating from './rating'
import Select from './select'
import Snackbar from './snackbar'
import Table from './table'
import Tabs from './tabs'
import Timeline from './timeline'
import ToggleButton from './toggleButton'
import Tooltip from './tooltip'
import Typography from './typography'

const Overrides = (theme: Theme) => {
  const button = Button(theme)
  const cards = Card(theme)
  const alerts = Alerts(theme)
  const avatars = Avatar(theme)
  const backdrop = Backdrop(theme)
  const chip = Chip(theme)
  const dateTimePicker = DateTimePicker(theme)
  const dialog = Dialog(theme)
  const divider = Divider(theme)
  const input = Input(theme)
  const link = Link(theme)
  const list = List(theme)
  const menu = Menu(theme)
  const paper = Paper(theme)
  const popover = Popover(theme)
  const rating = Rating(theme)
  const select = Select(theme)
  const snackbar = Snackbar(theme)
  const table = Table(theme)
  const tabs = Tabs(theme)
  const timeline = Timeline(theme)
  const toggleButton = ToggleButton(theme)
  const tooltip = Tooltip(theme)
  const typography = Typography(theme)

  return Object.assign(
    button,
    cards,
    alerts,
    avatars,
    backdrop,
    chip,
    dateTimePicker,
    dialog,
    divider,
    input,
    link,
    list,
    menu,
    paper,
    popover,
    rating,
    select,
    snackbar,
    table,
    tabs,
    timeline,
    toggleButton,
    tooltip,
    typography
  )
  // return {}
}

export default Overrides
