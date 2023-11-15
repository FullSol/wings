import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import RaidBossProgressionCardBossBG from "./RaidBossProgressionCardBossBG";

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
            <RaidBossProgressionCardBossBG
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
