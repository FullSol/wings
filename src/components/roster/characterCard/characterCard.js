import React from "react";
import PropTypes from "prop-types";
import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const CharacterCard = () => {
  return (
    <Grid item xs={8} md={4}>
      <Paper sx={{ p: 2 }}>
        <Typography>Blackwaifu, Tuaren Holy Paladin</Typography>
        <Typography>Rank: Raider</Typography>
        <Typography>Ilvl: 446</Typography>
        <Typography>Mythic Plus: 3320</Typography>
      </Paper>
    </Grid>
  );
};

export default CharacterCard;

CharacterCard.protoType = {};
