import { FC, memo } from 'react'
import { LogImageBox } from '../components/Dnd/LogImageBox'
import { Box } from '../components/Dnd/LogBox'
import { Container, Grid } from '@mui/material';

export const LogGroupDetailContainer: FC = memo(() => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <LogImageBox />
        </Grid>
        <Grid item md={8}>
          <Box name="Glass" />
          <Box name="Banana" />
          <Box name="Paper" />
        </Grid>
      </Grid>
    </Container>
  )
})
