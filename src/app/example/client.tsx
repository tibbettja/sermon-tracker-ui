'use client'

import {
  AddCircleOutline,
  Check,
  Close,
  Dangerous,
  DeleteOutline,
  InfoOutlined,
  Preview,
  Restore,
  SaveAlt,
  Warning
} from '@mui/icons-material'
import { Grid2 as Grid, Card, CardHeader, CardContent, Stack, Button, Alert } from '@mui/material'
import ExampleLineChart from './components/ExampleLineChart'

const Client = () => {
  return (
    <Grid
      container
      spacing={4}>
      <Grid size={12}>
        <Card>
          <CardHeader title='Example Page' />
        </Card>
      </Grid>
      <Grid
        size={6}
        container
        gap={4}>
        <Grid size={12}>
          <Card>
            <CardHeader
              title='Buttons'
              subheader='Contained & Outlined & Sized'
            />
            <CardContent>
              <Stack
                direction='row'
                spacing={2}
                sx={{ justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', rowGap: 2 }}>
                <Button
                  variant='contained'
                  color='primary'
                  startIcon={<Preview />}>
                  View
                </Button>
                <Button
                  variant='contained'
                  color='info'
                  startIcon={<InfoOutlined />}>
                  Info
                </Button>
                <Button
                  variant='contained'
                  color='secondary'
                  startIcon={<AddCircleOutline />}>
                  Add
                </Button>
                <Button
                  variant='contained'
                  color='success'
                  startIcon={<SaveAlt />}>
                  Save
                </Button>
                <Button
                  variant='contained'
                  color='attention'
                  startIcon={<Restore />}>
                  Reset
                </Button>
                <Button
                  variant='contained'
                  color='warning'
                  startIcon={<Close />}>
                  Cancel
                </Button>
                <Button
                  variant='contained'
                  color='error'
                  startIcon={<DeleteOutline />}>
                  Delete
                </Button>
              </Stack>
              <br />
              <Stack
                direction='row'
                spacing={2}
                sx={{ justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', rowGap: 2 }}>
                <Button
                  variant='outlined'
                  color='primary'
                  startIcon={<Preview />}>
                  View
                </Button>
                <Button
                  variant='outlined'
                  color='info'
                  startIcon={<InfoOutlined />}>
                  Info
                </Button>
                <Button
                  variant='outlined'
                  color='secondary'
                  startIcon={<AddCircleOutline />}>
                  Add
                </Button>
                <Button
                  variant='outlined'
                  color='success'
                  startIcon={<SaveAlt />}>
                  Save
                </Button>
                <Button
                  variant='outlined'
                  color='attention'
                  startIcon={<Restore />}>
                  Reset
                </Button>
                <Button
                  variant='outlined'
                  color='warning'
                  startIcon={<Close />}>
                  Cancel
                </Button>
                <Button
                  variant='outlined'
                  color='error'
                  startIcon={<DeleteOutline />}>
                  Delete
                </Button>
              </Stack>
              <br />
              <Stack
                direction='row'
                spacing={2}
                sx={{ justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', rowGap: 2 }}>
                <Button
                  color='primary'
                  variant='contained'
                  size='small'
                  startIcon={<Preview />}>
                  Small
                </Button>
                <Button
                  color='primary'
                  variant='contained'
                  size='medium'
                  startIcon={<Preview />}>
                  Medium
                </Button>
                <Button
                  color='primary'
                  variant='contained'
                  size='large'
                  startIcon={<Preview />}>
                  Large
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={12}>
          <Card>
            <CardHeader
              title='Alerts'
              subheader='Contained & Outlined'
            />
            <CardContent>
              <Stack
                direction='row'
                spacing={2}
                sx={{ justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', rowGap: 2 }}>
                <Alert
                  icon={<Check />}
                  severity='success'>
                  Success Alert
                </Alert>
                <Alert
                  icon={<InfoOutlined />}
                  severity='info'>
                  Info Alert
                </Alert>
                <Alert
                  icon={<Warning />}
                  severity='warning'>
                  Warning Alert
                </Alert>
                <Alert
                  icon={<Dangerous />}
                  severity='error'>
                  Error Alert
                </Alert>
              </Stack>
              <br />
              <Stack
                direction='row'
                spacing={2}
                sx={{ justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', rowGap: 2 }}>
                <Alert
                  variant='outlined'
                  icon={<Check />}
                  severity='success'>
                  Success Alert
                </Alert>
                <Alert
                  variant='outlined'
                  icon={<InfoOutlined />}
                  severity='info'>
                  Info Alert
                </Alert>
                <Alert
                  variant='outlined'
                  icon={<Warning />}
                  severity='warning'>
                  Warning Alert
                </Alert>
                <Alert
                  variant='outlined'
                  icon={<Dangerous />}
                  severity='error'>
                  Error Alert
                </Alert>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid size={6}>
        <ExampleLineChart />
      </Grid>
    </Grid>
  )
}

export default Client
