import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import CharacterCard from "./characterCard/characterCard";

const Roster = () => {
  const [state, setState] = useState({
    characters: [],
  });

  const { characters } = state;

  useEffect(() => {
    import("../../data/rosterInfo")
      .then(({ RosterInfo: data }) => {
        setState((prevState) => ({
          ...prevState,
          characters: data.characters,
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
      {characters.map((character) => (
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

export default Roster;
