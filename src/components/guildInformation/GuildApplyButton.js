import React from "react";
import { ButtonGroup, Button } from "@mui/material";

const GuildApplyButton = ({ application }) => {
  return (
    <ButtonGroup color="error">
      <Button href={application.link} target="_blank" rel="noreferrer">
        {application.label}
      </Button>
    </ButtonGroup>
  );
};

export default GuildApplyButton;

GuildApplyButton.propTypes = {};
