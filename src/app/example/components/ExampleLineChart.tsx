'use client'

import { LineChart, Line, XAxis, YAxis } from 'recharts'
import { useTheme, Card, CardContent, CardHeader } from '@mui/material'
import data from './data.json'

const ExampleLineChart = () => {
  const theme = useTheme()
  return (
    <Card>
      <CardHeader title='Example Line Chart' />
      <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
        <LineChart
          width={400}
          height={400}
          data={data}>
          <Line
            type='monotone'
            dataKey='value'
            stroke={theme.palette.success.light}
          />
          <XAxis dataKey='name' />
          <YAxis />
        </LineChart>
      </CardContent>
    </Card>
  )
}

export default ExampleLineChart
