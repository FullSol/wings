import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import CharacterCard from "./characterCard/characterCard.js";

const RosterLayout = ({ rosterData }) => {
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
      {rosterData.characters.map((character) => (
        <CharacterCard
          key={character.id}
          name={character.name}
          rank={character.rank}
          playableRace={character.playableRace}
          currentSpec={character.currentSpec}
          playableClass={character.playableClass}
          ilvl={character.ilvl}
          mythicPlusScore={character.mythicPlusScore}
        />
      ))}
    </Grid>
  );
};

export default RosterLayout;
