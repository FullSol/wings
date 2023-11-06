import React from "react";
import PropTypes from "prop-types";
import { Paper, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const BossProgressionCard = ({
  name,
  title,
  imgLocation,
  lowest,
  preloadedImages,
}) => {
  console.log(imgLocation);
  return (
    <Grid item xs={8} md={4}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "row" }}>
        <Box component="img" src={imgLocation} alt={`${title}_thumb`} />
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
