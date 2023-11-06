import React from "react";
import PropTypes from "prop-types";
import { Paper, Box, Typography, LinearProgress } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const BossProgressionCard = ({
  name,
  title,
  imgLocation,
  progress,
  preloadedImages,
}) => {
  return (
    <Grid item xs={8} md={4}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "row" }}>
        <Box
          component="img"
          src={imgLocation}
          alt={`${title}_thumb`}
          sx={{ width: "20%" }}
        />
        <Grid container sx={{ ml: 2 }}>
          <Grid item>
            <Typography>{name}</Typography>
            <Typography>Status: Alive</Typography>
            <Typography>Pulls: 0</Typography>
            <LinearProgress
              variant="determinate"
              color="success"
              value={100 - progress}
              sx={{ width: "200px", height: "10px" }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default BossProgressionCard;

BossProgressionCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  imgLocation: PropTypes.string.isRequired,
  lowest: PropTypes.number.isRequired,
};
