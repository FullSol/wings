import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Unstable_Grid2";
import RaidProgressionSummaryCard from "./RaidProgressionSummaryCard";
import { Typography } from "@mui/material";

const PastRaidSummary = ({ raids }) => {
  return (
    <Grid xs={12}>
      <Typography variant="h3" component="h3" color="white">
        Wing's Raid History
      </Typography>
      <Grid
        container
        direction="row"
        spacing={{ xs: 2, lg: 2 }} // card spacing
        xs={12} // progression section width
      >
        {raids &&
          [...raids].reverse().map((raid) => {
            return (
              <RaidProgressionSummaryCard
                key={raid.id}
                name={raid.name}
                bosses={raid.bosses}
              />
            );
          })}
      </Grid>
    </Grid>
  );
};

export default PastRaidSummary;

PastRaidSummary.propTypes = {
  raids: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
