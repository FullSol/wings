import React from "react";
import { Tooltip, Button, Box } from "@mui/material";

const GuildReportButton = ({ site }) => {
  return (
    <Tooltip title={site.name}>
      <Button href={site.link} target="_blank" rel="noreferrer">
        <Box component="img" src={site.image} alt={site.name} />
      </Button>
    </Tooltip>
  );
};

export default GuildReportButton;

GuildReportButton.propTypes = {};
