'use client'
import * as React from 'react'

import { ComposedChart, Line, XAxis, YAxis, Area, Legend } from 'recharts'
import { useTheme, Card, CardContent, CardHeader } from '@mui/material'

import { useContainerDimensions } from '@/@core/theme/hooks'

import data from './data.json'

const LineChart = () => {
  const theme = useTheme()
  const cardRef = React.useRef<HTMLDivElement>(null)
  const { width: cardWidth } = useContainerDimensions(cardRef)

  return (
    <Card ref={cardRef}>
      <CardHeader title='Availability vs Latency vs Burn Rate' />
      <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
        <ComposedChart
          width={cardWidth}
          height={300}
          data={data}>
          <defs>
            <linearGradient
              id='rem_grad'
              x1='0'
              y1='0'
              x2='0'
              y2='1'>
              <stop
                offset='5%'
                stopColor={theme.palette.primary.main}
                stopOpacity={0.8}
              />
              <stop
                offset='95%'
                stopColor={theme.palette.primary.main}
                stopOpacity={0}
              />
            </linearGradient>
            <linearGradient
              id='burn_grad'
              x1='0'
              y1='0'
              x2='0'
              y2='1'>
              <stop
                offset='5%'
                stopColor={theme.palette.error.main}
                stopOpacity={0.8}
              />
              <stop
                offset='95%'
                stopColor={theme.palette.error.main}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <Area
            type='monotone'
            dataKey='remaining'
            stroke={theme.palette.primary.light}
            strokeWidth={theme.palette.mode === 'light' ? 2 : undefined}
            fillOpacity={1}
            fill='url(#rem_grad)'
            name='Budget Remaining'
            yAxisId='left'
          />
          <Area
            type='monotone'
            dataKey='burnRate'
            stroke={theme.palette.error.light}
            strokeWidth={theme.palette.mode === 'light' ? 2 : undefined}
            fillOpacity={1}
            fill='url(#burn_grad)'
            name='Burn Rate'
            yAxisId='right'
          />
          <Line
            type='monotone'
            dataKey='availability'
            stroke={theme.palette.success.light}
            strokeWidth={theme.palette.mode === 'light' ? 2 : undefined}
            name='Availability'
            yAxisId='left'
          />
          <Line
            type='monotone'
            dataKey='latency'
            stroke={theme.palette.warning.light}
            strokeWidth={theme.palette.mode === 'light' ? 2 : undefined}
            name='Latency'
            yAxisId='left'
          />
          <Legend />
          <XAxis
            dataKey='name'
            tick={{ fill: theme.palette.text.primary }}
            angle={45}
            padding={{ left: 30, right: 30 }}
            tickMargin={10}
          />
          <YAxis
            yAxisId='left'
            unit='%'
            tick={{ fill: theme.palette.text.primary }}
            tickMargin={10}
          />
          <YAxis
            yAxisId='right'
            orientation='right'
            unit='ppm'
            tick={{ fill: theme.palette.text.primary }}
            tickMargin={10}
          />
        </ComposedChart>
      </CardContent>
    </Card>
  )
}

export default LineChart
