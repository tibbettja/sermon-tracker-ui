'use client'

import * as React from 'react'
import { Grid, Card, CardHeader, CardContent, Stack, Button, Alert } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

import year1 from './data/year_1.json'
import year2 from './data/year_2.json'

const data = year1
  .map((w) => ({ ...w, id: `Y1W${w.Week}`, Year: 1 }))
  .concat(year2.map((w) => ({ ...w, id: `Y2W${w.Week}`, Year: 2 })))

export type BRPClientProps = { progress: string | undefined }

const BRPClient = ({ progress }: BRPClientProps) => {
  return (
    <Grid
      container
      spacing={4}>
      <Grid size={12}>
        <Card>
          <CardHeader
            title='Bible Reading Plan'
            subheader='2025 & 2026'
          />
          <CardContent>
            <DataGrid
              rows={data}
              columns={[
                { headerName: 'Year', field: 'Year', flex: 0.75, renderCell: ({ row }) => row.Year },
                { headerName: 'Week', field: 'Week', flex: 0.5, renderCell: ({ row }) => row.Week },
                { headerName: 'Sunday', field: 'Sunday', flex: 1, renderCell: ({ row }) => row.Sunday },
                { headerName: 'Monday', field: 'Monday', flex: 1, renderCell: ({ row }) => row.Monday },
                { headerName: 'Tuesday', field: 'Tuesday', flex: 1, renderCell: ({ row }) => row.Tuesday },
                { headerName: 'Wednesday', field: 'Wednesday', flex: 1, renderCell: ({ row }) => row.Wednesday },
                { headerName: 'Thursday', field: 'Thursday', flex: 1, renderCell: ({ row }) => row.Thursday },
                { headerName: 'Friday', field: 'Friday', flex: 1, renderCell: ({ row }) => row.Friday },
                { headerName: 'Saturday', field: 'Saturday', flex: 1, renderCell: ({ row }) => row.Saturday }
              ]}
              initialState={{
                pagination: { paginationModel: { pageSize: 52 } },
                sorting: {
                  sortModel: [{ field: 'Year', sort: 'asc' }]
                }
              }}
              pageSizeOptions={[4, 13, 26, 52, 104]}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default BRPClient
