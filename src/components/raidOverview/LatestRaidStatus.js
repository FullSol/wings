import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import RaidBossProgressionCard from "./RaidBossProgressionCard";

const LatestRaidStatus = ({ latestRaid, difficulty }) => {
  return (
    <Grid
      container
      direction="row"
      spacing={{ xs: 2 }} // card spacing
      sx={{ pt: { xs: 2, md: 6, lg: 16 }, pb: { xs: 2, md: 6, lg: 16 } }} // progression section
      xs={12} // progression section width
    >
      {latestRaid.bosses?.map((boss) => {
        return (
          <RaidBossProgressionCard
            name={boss.name}
            imgLocation={boss.imgLocation}
            progress={boss.difficulties[difficulty].lowest}
          />
        );
      })}
    </Grid>
  );
};

export default LatestRaidStatus;

LatestRaidStatus.propTypes = {};
