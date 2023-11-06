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
      spacing={2}
      xs={12}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {current.bosses?.map((boss) => {
        console.log(boss);
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
