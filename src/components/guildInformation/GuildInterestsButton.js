import React from "react";
import { Button } from "@mui/material";

const GuildMindsetButton = ({ text }) => {
  const noLinkButton = {
    textDecoration: "none",
    cursor: "default",
    "&:hover": {
      textDecoration: "none",
      backgroundColor: "inherit",
      border: ".5px solid inherit",
    },
  };

  return (
    <Button sx={noLinkButton} color="error">
      {text}
    </Button>
  );
};

export default GuildMindsetButton;

GuildMindsetButton.propTypes = {};
