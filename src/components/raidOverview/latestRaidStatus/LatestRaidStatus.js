import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import RaidBossProgressionCard from "./RaidBossProgressionCard";

const LatestRaidStatus = ({ latestRaid, difficulty }) => {
  return (
    <Grid xs={12}>
      <Grid
        container
        direction="row"
        spacing={{ xs: 2 }} // card spacing
        xs={12} // progression section width
      >
        {latestRaid.bosses?.map((boss) => {
          return (
            <RaidBossProgressionCard
              key={boss.id}
              name={boss.name}
              imgLocation={boss.imgLocation}
              progress={boss.difficulties[difficulty].lowest}
              pulls={boss.difficulties[difficulty].pulls}
            />
          );
        })}
      </Grid>
    </Grid>
  );
};

export default LatestRaidStatus;

LatestRaidStatus.propTypes = {};
