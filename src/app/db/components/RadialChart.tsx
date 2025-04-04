'use client'
import * as React from 'react'

import { Legend, RadialBarChart, RadialBar } from 'recharts'
import { useTheme, Card, CardContent, CardHeader } from '@mui/material'

import { useContainerDimensions } from '@/@core/theme/hooks'

import radialData from './radial_data.json'

const RadialChart = () => {
  const theme = useTheme()
  const cardRef = React.useRef<HTMLDivElement>(null)
  const { width: cardWidth } = useContainerDimensions(cardRef)

  return (
    <Card ref={cardRef}>
      <CardHeader title='Error Budget Remaining' />
      <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
        <RadialBarChart
          width={cardWidth}
          height={300}
          innerRadius='30%'
          outerRadius='100%'
          startAngle={90}
          endAngle={-270}
          data={radialData}
          barSize={15}>
          <RadialBar
            label={{
              fill: theme.palette.text.primary,
              position: 'insideStart',
              formatter: (t: number) => `${t * 100}%`
            }}
            dataKey='remaining'
            forceCornerRadius
            cornerRadius='50%'
          />
          <Legend
            iconSize={14}
            layout='horizontal'
            verticalAlign='bottom'
            payload={radialData?.map((d) => ({ id: d.name, value: d.name, color: d.fill, type: 'circle' }))}
          />
        </RadialBarChart>
      </CardContent>
    </Card>
  )
}

export default RadialChart
