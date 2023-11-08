import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import RaidProgressionSummaryCard from "./RaidProgressionSummaryCard";

const PastRaidSummary = ({ raids }) => {
  return (
    <Grid
      container
      direction="row"
      spacing={{ xs: 2 }} // card spacing
      sx={{ pt: { xs: 2, md: 6, lg: 16 }, pb: { xs: 2, md: 6, lg: 16 } }} // progression section
      xs={12} // progression section width
    >
      {raids?.map((raid) => {
        return (
          <RaidProgressionSummaryCard name={raid.name} bosses={raid.bosses} />
        );
      })}
    </Grid>
  );
};

export default PastRaidSummary;

PastRaidSummary.propTypes = {};
