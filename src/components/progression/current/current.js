import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import BossProgressionCard from "./bossProgressionCard";

const CurrentProgression = () => {
  const [state, setState] = useState({
    current: [],
    difficulty: "normal",
  });

  const { current, difficulty } = state;

  useEffect(() => {
    const getDifficulty = () => {
      let difficulty = "normal";
      current.bosses?.forEach((boss) => {
        if (boss.difficulties.mythic.status === "killed") difficulty = "mythic";
        else if (boss.difficulties.heroic.status === "killed")
          difficulty = "heroic";
      });
      return difficulty;
    };

    import("../../../data/progressionInfo")
      .then(({ ProgressionInfo: data }) => {
        setState((prevState) => ({
          ...prevState,
          current: data[data.length - 1],
        }));
      })
      .catch((error) => {
        console.log(error);
      });

    const difficulty = getDifficulty();

    setState((prevState) => ({
      ...prevState,
      difficulty: difficulty,
    }));
  }, [current.bosses]);

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
            progress={boss.difficulties[difficulty].lowest}
          />
        );
      })}
    </Grid>
  );
};

export default CurrentProgression;
