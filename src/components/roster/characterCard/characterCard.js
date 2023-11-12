import React from "react";
import PropTypes from "prop-types";
import { Card, Box, CardContent, CardMedia, Typography } from "@mui/material";
import NightElf from "../../../media/character-avatar.jpg";
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
    <Grid xs={8} md={4}>
      {/* <Paper sx={{ p: 2 }}>
        <Typography variant="h5">{`${name}, ${playableRace} ${currentSpec} ${playableClass}`}</Typography>
        <Typography>{`Rank: ${rank}`}</Typography>
        <Typography>{`Ilvl: ${ilvl}`}</Typography>
        <Typography>{`Mythic Plus: ${mythicPlusScore}`}</Typography>
      </Paper> */}
      <Card sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{ height: "177px", width: "177px" }}
          image={NightElf}
          alt={`${name}_character_avatar`}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography variant="h5">{`${name}, ${playableRace} ${currentSpec} ${playableClass}`}</Typography>
            <Typography>{`Rank: ${rank}`}</Typography>
            <Typography>{`Ilvl: ${ilvl}`}</Typography>
            <Typography>{`Mythic Plus: ${mythicPlusScore}`}</Typography>
          </CardContent>
        </Box>
      </Card>
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
