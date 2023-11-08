import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import RaidProgressionSummaryCard from "./RaidProgressionSummaryCard";

const PastRaidSummary = ({ raids }) => {
  return (
    <Grid xs={12}>
      <Grid
        container
        direction="row"
        spacing={{ xs: 2, lg: 2 }} // card spacing
        xs={12} // progression section width
      >
        {raids?.map((raid) => {
          return (
            <RaidProgressionSummaryCard name={raid.name} bosses={raid.bosses} />
          );
        })}
      </Grid>
    </Grid>
  );
};

export default PastRaidSummary;

PastRaidSummary.propTypes = {};
