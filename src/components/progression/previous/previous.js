import React, { useState, useEffect } from "react";

import Grid from "@mui/material/Unstable_Grid2";
import RaidProgressionCard from "./raidProgressionCard";

const PreviousProgression = () => {
  const [state, setState] = useState({
    previous: [],
  });

  const { previous } = state;

  useEffect(() => {
    import("../../../data/progressionInfo")
      .then(({ ProgressionInfo: data }) => {
        setState((prevState) => ({
          ...prevState,
          previous: data,
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
      {previous?.map((raid) => {
        return <RaidProgressionCard name={raid.name} bosses={raid.bosses} />;
      })}
    </Grid>
  );
};

export default PreviousProgression;
