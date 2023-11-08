import React from "react";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const GuildSubTitle = ({ faction, realm, region }) => {
  const theme = useTheme();

  return (
    <Typography
      variant="h2"
      component={"h2"}
      sx={{
        fontSize: {
          xs: "2.75rem",
          md: "3.75rem",
          color: theme.palette.text.primary,
        },
      }}
    >
      {faction} - {realm} {region}
    </Typography>
  );
};

export default GuildSubTitle;
