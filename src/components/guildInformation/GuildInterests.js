import React from "react";
import { ButtonGroup } from "@mui/material";
import GuildInterestsButton from "./GuildInterestsButton";

const GuildInterests = ({ interests }) => {
  return (
    <ButtonGroup>
      {typeof interests === "string" && !Array.isArray(interests) ? (
        <GuildInterestsButton text={interests} />
      ) : (
        interests.map((interest) => (
          <GuildInterestsButton key={interest} text={interest} />
        ))
      )}
    </ButtonGroup>
  );
};

export default GuildInterests;

GuildInterests.propTypes = {};
