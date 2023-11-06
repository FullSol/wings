import React from "react";
import PropTypes from "prop-types";
import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const CharacterCard = ({
  name,
  rank,
  playableRace,
  currentSpec,
  playableClass,
  ilvl,
  mythicPlusScore,
}) => {
  return (
    <Grid item xs={8} md={4}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h5">{`${name}, ${playableRace} ${currentSpec} ${playableClass}`}</Typography>
        <Typography>{`Rank: ${rank}`}</Typography>
        <Typography>{`Ilvl: ${ilvl}`}</Typography>
        <Typography>{`Mythic Plus: ${mythicPlusScore}`}</Typography>
      </Paper>
    </Grid>
  );
};

export default CharacterCard;

CharacterCard.protoType = {
  name: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  playableRace: PropTypes.string.isRequired,
  currentSpec: PropTypes.string.isRequired,
  playableClass: PropTypes.string.isRequired,
  ilvl: PropTypes.number.isRequired,
  mythicPlusScore: PropTypes.number.isRequired,
};
