import React from "react";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const GuildAbout = ({ text }) => {
  const theme = useTheme();

  return (
    <Typography
      variant="p"
      component="p"
      sx={{
        pr: 2,
        display: { xs: "none", md: "block" },
        maxWidth: "60%",
        color: theme.palette.text.primary,
      }}
    >
      {text}
    </Typography>
  );
};

export default GuildAbout;

GuildAbout.propTypes = {};
