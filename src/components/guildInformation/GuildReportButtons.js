import React from "react";
import { ButtonGroup } from "@mui/material";
import GuildReportButton from "./GuildReportButton";

const GuildReportButtons = ({ sites }) => {
  return (
    <ButtonGroup sx={{ backgroundColor: "#1E1E1E" }} color="error">
      {sites.map((site) => {
        return <GuildReportButton site={site} />;
      })}
    </ButtonGroup>
  );
};

export default GuildReportButtons;
