import React from 'react';
import { Typography, LinearProgress } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/';

const RaidProgressionSummaryBar = ({ killed, difficulty, total }) => {
  return (
    <Grid xs={12} sx={{ position: 'relative' }}>
      <Typography
        sx={{
          position: 'absolute',
          zIndex: 999,
          bottom: 8,
          left: 15,
        }}
      >
        {`${difficulty}: ${killed}/${total}`}
      </Typography>
      <LinearProgress
        variant="determinate"
        color="success"
        value={100}
        sx={{ height: '25px' }}
      />
    </Grid>
  );
};

export default RaidProgressionSummaryBar;
