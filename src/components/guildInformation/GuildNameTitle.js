import React from "react";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const GuildNameTitle = ({ text }) => {
  const theme = useTheme();

  return (
    <Typography
      variant="h1"
      component="h1"
      sx={{
        fontSize: {
          xs: "5rem",
          md: "6rem",
          color: theme.palette.text.primary,
        },
      }}
    >
      {text}
    </Typography>
  );
};

export default GuildNameTitle;

GuildNameTitle.propTypes = {};
