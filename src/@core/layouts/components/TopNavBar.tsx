'use client'

import React from 'react'

import clsx from 'clsx'
import Paper from '@/@core/components/Paper'
import { Button } from '@headlessui/react'

const TopNavBar = () => {
  return (
    <Paper
      elevation={0}
      cS='p-3'>
      Elevation 0{' '}
      <Button as={React.Fragment}>
        {({ hover, active }) => (
          <button
            className={clsx(
              'text-white text rounded px-4 py-2 text-sm',
              !hover && !active && 'bg-primary',
              hover && !active && 'bg-primary-light',
              active && 'bg-primary-dark'
            )}>
            Primary
          </button>
        )}
      </Button>
      <Paper
        elevation={1}
        cS='p-3'>
        Elevation 1
        <Paper
          elevation={2}
          cS='p-3'>
          Elevation 2
          <Paper
            elevation={3}
            cS='p-3'>
            Elevation 3
            <Paper
              elevation={4}
              cS='p-3'>
              Elevation 4
              <Paper
                elevation={5}
                cS='p-3'>
                Elevation 5
                <Paper
                  elevation={6}
                  cS='p-3'>
                  Elevation 6
                  <Paper
                    elevation={7}
                    cS='p-3'>
                    Elevation 7
                    <Paper
                      elevation={8}
                      cS='p-3'>
                      Elevation 8
                    </Paper>
                  </Paper>
                </Paper>
              </Paper>
            </Paper>
          </Paper>
        </Paper>
      </Paper>
    </Paper>
  )
}

export default TopNavBar
