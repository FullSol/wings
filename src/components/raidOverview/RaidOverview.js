import React from "react";
import RaidProgressionContainer from "./RaidProgressionContainer";
import Grid from "@mui/material/Unstable_Grid2";

const RaidOverview = () => {
  return (
    <>
      <Grid container spacing={4} xs={12} sx={{ mt: 8, mb: 8 }}>
        <RaidProgressionContainer />
      </Grid>
    </>
  );
};

export default RaidOverview;
