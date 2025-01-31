'use client'

import { BarChart, Bar, XAxis, YAxis } from 'recharts'
import { useTheme, Card, CardContent, CardHeader } from '@mui/material'
import data from './data.json'

const ExampleBarChart = () => {
  const theme = useTheme()
  return (
    <Card>
      <CardHeader title='Bar Chart' />
      <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
        <BarChart
          width={400}
          height={400}
          data={data}>
          <Bar
            type='monotone'
            dataKey='value'
            fill={theme.palette.primary.light}
          />
          <XAxis dataKey='name' />
          <YAxis />
        </BarChart>
      </CardContent>
    </Card>
  )
}

export default ExampleBarChart
