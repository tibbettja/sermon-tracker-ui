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
import {
  Grid2 as Grid,
  Card,
  CardHeader,
  CardContent,
  Stack,
  Button,
  Alert,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Box
} from '@mui/material'
import LineChart from './components/LineChart'
import RadialChart from './components/RadialChart'

const Client = () => {
  return (
    <Grid
      container
      spacing={4}>
      <Grid size={12}>
        <Card>
          <CardHeader
            title='Example Page'
            subheader={
              <Box sx={{ mt: 3 }}>
                <FormControl size='small'>
                  <InputLabel>Deployment</InputLabel>
                  <Select
                    label='Deployment'
                    size='small'
                    sx={{ width: '30ch' }}>
                    <MenuItem value=''>
                      <em>blank</em>
                    </MenuItem>
                  </Select>
                </FormControl>
                &nbsp;&nbsp;&nbsp;
                <FormControl size='small'>
                  <InputLabel>User Journey</InputLabel>
                  <Select
                    label='User Journey'
                    size='small'
                    sx={{ width: '50ch' }}>
                    <MenuItem value=''>
                      <em>blank</em>
                    </MenuItem>
                  </Select>
                </FormControl>
                &nbsp;&nbsp;&nbsp;
                <Button
                  variant='contained'
                  color='primary'
                  startIcon={<Preview />}>
                  View
                </Button>
              </Box>
            }
          />
        </Card>
      </Grid>
      <Grid
        size={7}
        container
        gap={4}>
        <Grid size={12}>
          <LineChart />
        </Grid>
      </Grid>
      <Grid
        size={5}
        container
        gap={4}>
        <Grid size={12}>
          <RadialChart />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Client
