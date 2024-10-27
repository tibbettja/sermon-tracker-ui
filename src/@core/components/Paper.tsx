import React from 'react'

type PaperProps = {
  children: React.ReactNode
  elevation: number
  cS: string
}

const validElevation = (elevation: number) =>
  elevation < 9 ?
    elevation > -1 ?
      elevation
    : 0
  : 8

const buildClasses = (elevation: number) => {
  switch (elevation) {
    case 0:
      return `bg-blank dark:bg-blank-dark text-blank-text dark:text-blank-text-dark`
    case 1:
      return `bg-paper-1 dark:bg-paper-1-dark text-paper-1-text dark:text-paper-1-text-dark rounded-md outline outline-offset-1 outline-1 outline-paper-2 dark:outline-paper-2-dark`
    case 2:
      return `bg-paper-2 dark:bg-paper-2-dark text-paper-2-text dark:text-paper-2-text-dark rounded-md outline outline-offset-1 outline-1 outline-paper-3 dark:outline-paper-3-dark`
    case 3:
      return `bg-paper-3 dark:bg-paper-3-dark text-paper-3-text dark:text-paper-3-text-dark rounded-md outline outline-offset-1 outline-1 outline-paper-4 dark:outline-paper-4-dark`
    case 4:
      return `bg-paper-4 dark:bg-paper-4-dark text-paper-4-text dark:text-paper-4-text-dark rounded-md outline outline-offset-1 outline-1 outline-paper-5 dark:outline-paper-5-dark`
    case 5:
      return `bg-paper-5 dark:bg-paper-5-dark text-paper-5-text dark:text-paper-5-text-dark rounded-md outline outline-offset-1 outline-1 outline-paper-6 dark:outline-paper-6-dark`
    case 6:
      return `bg-paper-6 dark:bg-paper-6-dark text-paper-6-text dark:text-paper-6-text-dark rounded-md outline outline-offset-1 outline-1 outline-paper-7 dark:outline-paper-7-dark`
    case 7:
      return `bg-paper-7 dark:bg-paper-7-dark text-paper-7-text dark:text-paper-7-text-dark rounded-md outline outline-offset-1 outline-1 outline-paper-8 dark:outline-paper-8-dark`
    case 8:
      return `bg-paper-8 dark:bg-paper-8-dark text-paper-8-text dark:text-paper-8-text-dark rounded-md outline outline-offset-1 outline-1 outline-blank-dark dark:outline-blank`
    default:
      return `bg-blank dark:bg-blank-dark text-blank-text dark:text-blank-text-dark rounded-md`
  }
}

const Paper = ({ children, elevation, cS }: PaperProps) => {
  const classes = buildClasses(validElevation(elevation))

  return <div className={`${classes} ${cS} font-light`}>{children}</div>
}

export default Paper
