import React from "react";
import { Box } from "@mui/material";

const GuildLogo = ({ logo }) => {
  return (
    <Box
      component="img"
      alt="wings"
      src={logo}
      sx={{
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        border: "1px solid #1E1E1E",
        backgroundColor: "#0D0906",
      }}
    />
  );
};

export default GuildLogo;
