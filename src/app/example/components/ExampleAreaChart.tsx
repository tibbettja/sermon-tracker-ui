'use client'

import { AreaChart, Area, XAxis, YAxis } from 'recharts'
import { useTheme, Card, CardContent, CardHeader } from '@mui/material'
import type { Theme } from '@mui/material'
import data from './data.json'

const Gradient = ({ theme }: { theme: Theme }) => (
  <>
    <linearGradient
      id='gradientPrimary'
      x1='0'
      y1='0'
      x2='0'
      y2='1'>
      <stop
        offset='5%'
        stopColor={theme.palette.primary.light}
        stopOpacity={0.8}
      />
      <stop
        offset='95%'
        stopColor={theme.palette.primary.light}
        stopOpacity={0}
      />
    </linearGradient>
    <linearGradient
      id='gradientSecondary'
      x1='0'
      y1='0'
      x2='0'
      y2='1'>
      <stop
        offset='5%'
        stopColor={theme.palette.secondary.light}
        stopOpacity={0.8}
      />
      <stop
        offset='95%'
        stopColor={theme.palette.secondary.light}
        stopOpacity={0}
      />
    </linearGradient>
    <linearGradient
      id='gradientInfo'
      x1='0'
      y1='0'
      x2='0'
      y2='1'>
      <stop
        offset='5%'
        stopColor={theme.palette.info.light}
        stopOpacity={0.8}
      />
      <stop
        offset='95%'
        stopColor={theme.palette.info.light}
        stopOpacity={0}
      />
    </linearGradient>
    <linearGradient
      id='gradientSuccess'
      x1='0'
      y1='0'
      x2='0'
      y2='1'>
      <stop
        offset='5%'
        stopColor={theme.palette.success.light}
        stopOpacity={0.8}
      />
      <stop
        offset='95%'
        stopColor={theme.palette.success.light}
        stopOpacity={0}
      />
    </linearGradient>
    <linearGradient
      id='gradientAttention'
      x1='0'
      y1='0'
      x2='0'
      y2='1'>
      <stop
        offset='5%'
        stopColor={theme.palette.attention.light}
        stopOpacity={0.8}
      />
      <stop
        offset='95%'
        stopColor={theme.palette.attention.light}
        stopOpacity={0}
      />
    </linearGradient>
    <linearGradient
      id='gradientWarning'
      x1='0'
      y1='0'
      x2='0'
      y2='1'>
      <stop
        offset='5%'
        stopColor={theme.palette.warning.light}
        stopOpacity={0.8}
      />
      <stop
        offset='95%'
        stopColor={theme.palette.warning.light}
        stopOpacity={0}
      />
    </linearGradient>
    <linearGradient
      id='gradientError'
      x1='0'
      y1='0'
      x2='0'
      y2='1'>
      <stop
        offset='5%'
        stopColor={theme.palette.error.light}
        stopOpacity={0.8}
      />
      <stop
        offset='95%'
        stopColor={theme.palette.error.light}
        stopOpacity={0}
      />
    </linearGradient>
  </>
)

const ExampleAreaChart = () => {
  const theme = useTheme()
  return (
    <Card>
      <CardHeader title='Area Chart' />
      <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
        <AreaChart
          width={400}
          height={400}
          data={data}>
          <defs>
            <Gradient theme={theme} />
          </defs>
          <Area
            type='monotone'
            dataKey='value'
            stroke={theme.palette.success.main}
            fillOpacity={1}
            fill='url(#gradientSuccess)'
          />
          <XAxis dataKey='name' />
          <YAxis />
        </AreaChart>
      </CardContent>
    </Card>
  )
}

export default ExampleAreaChart
