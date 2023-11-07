import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import BossProgressionCard from "./bossProgressionCard";

const CurrentProgression = () => {
  const [state, setState] = useState({
    current: [],
  });

  const { current } = state;

  useEffect(() => {
    import("../../../data/progressionInfo")
      .then(({ ProgressionInfo: data }) => {
        setState((prevState) => ({
          ...prevState,
          current: data.current,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Grid
      container
      direction="row"
      spacing={{ xs: 2 }} // card spacing
      sx={{ pt: { xs: 2, md: 6, lg: 16 }, pb: { xs: 2, md: 6, lg: 16 } }} // progression section
      xs={12} // progression section width
    >
      {current.bosses?.map((boss) => {
        return (
          <BossProgressionCard
            name={boss.name}
            imgLocation={boss.imgLocation}
            progress={boss.lowest}
          />
        );
      })}
    </Grid>
  );
};

export default CurrentProgression;
