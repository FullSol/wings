import React from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import BossBGCard from "./RaidBossProgressionCards/BossBGCard";

const LatestRaidStatus = ({ latestRaid, difficulty }) => {
  const titleDifficulty =
    difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
  return (
    <Grid xs={12}>
      <Typography variant="h2" color="white">
        {titleDifficulty + " " + latestRaid.name}
      </Typography>
      <Grid
        container
        direction="row"
        spacing={{ xs: 2 }} // card spacing
        xs={12} // progression section width
      >
        {latestRaid.bosses?.map((boss) => {
          return (
            <BossBGCard
              key={boss.id}
              name={boss.name}
              imgLocation={boss.imgLocation}
              progress={boss.difficulties[difficulty].lowest}
              pulls={boss.difficulties[difficulty].pulls}
              status={boss.difficulties[difficulty].status}
              date={new Date(boss.difficulties[difficulty].date)}
            />
          );
        })}
      </Grid>
    </Grid>
  );
};

export default LatestRaidStatus;

LatestRaidStatus.propTypes = {};
